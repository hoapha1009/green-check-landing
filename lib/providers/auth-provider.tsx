import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { User, UserService } from "../repo/user.repo";
import { firebase } from "../../lib/helpers/firebase";
import jwt_decode from "jwt-decode";
import { ClearUserToken, SetUserToken } from "../graphql/auth.link";

export const AuthContext = createContext<
  Partial<{
    user: User;
    loginUser: (email: string, password: string) => Promise<any>;
    logoutUser: () => Promise<any>;
    redirectToAdminLogin: Function;
    redirectToAdmin: Function;
    redirectToPageLoginSuccess: (pathname: string) => void;
    redirectToPrevPathname: Function;
    redirectToPrevPathnameRegion: Function;
    setConfirmIsVerifiedPhone: (value: boolean) => void;
    confirmIsVerifiedPhone: boolean;
  }>
>({});
export const PRE_LOGIN_PATHNAME = "pre-login-pathname";
export const PRE_LOGIN_PATHNAME_SUCCESS = "pre-login-pathname-success";
export const PRE_PATHNAME_PAGE = "pre-pathname-page";
export const PRE_PATHNAME_REGION_PAGE = "pre-pathname-region-page";

export function AuthProvider(props) {
  // undefined = chưa authenticated, null = chưa đăng nhập
  const router = useRouter();
  const [user, setUser] = useState<User>(undefined);
  const [confirmIsVerifiedPhone, setConfirmIsVerifiedPhone] = useState<boolean>(undefined);

  const mode: "user" | "merchant" = useMemo(() => {
    const pathname = router.pathname;
    if (pathname == "/admin" || pathname.startsWith("/admin/")) {
      return "user";
    }
  }, [router.pathname]);

  const loadUser = () => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        UserService.login(await user.getIdToken())
          .then((res) => {
            const { user, token } = res;
            let decodedToken = jwt_decode(token) as {
              exp: number;
              role: string;
            };
            if (Date.now() >= decodedToken.exp * 1000) {
              ClearUserToken();
              setUser(null);
              return;
            } else {
              SetUserToken(token);
              setUser(user);
            }
          })
          .catch((err) => {
            ClearUserToken();
            setUser(null);
          });
      } else {
        ClearUserToken();
        setUser(null);
      }
    });
  };
  useEffect(() => {
    switch (mode) {
      case "user":
        loadUser();
        break;
    }
  }, [mode]);
  const loginUser = async (email: string, password: string) => {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      const { user, token } = await UserService.login(await userCredential.user.getIdToken());
      SetUserToken(token);
      setUser(user);
    } catch (err) {
      console.error(err);
      ClearUserToken();
      setUser(null);
      let message = "";
      switch (err.code) {
        case "auth/user-not-found": {
          message = "Không tìm thấy người dùng";
          break;
        }
        case "auth/invalid-email": {
          message = "Email không hợp lệ";
          break;
        }
        case "auth/wrong-password": {
          message = "Sai mật khẩu";
          break;
        }
        default: {
          message = "Có lỗi xảy ra";
          break;
        }
      }
      throw new Error(message);
    }
  };

  const logoutUser = async () => {
    await firebase.auth().signOut();
    await UserService.clearStore();
  };

  const redirectToAdminLogin = () => {
    sessionStorage.setItem(PRE_LOGIN_PATHNAME, location.pathname);
    router.replace("/dashboard/login");
  };

  const redirectToPrevPathname = (href?: string) => {
    if (href) {
      sessionStorage.setItem(PRE_PATHNAME_PAGE, href);
    } else {
      sessionStorage.setItem(PRE_PATHNAME_PAGE, location.pathname);
    }
  };

  const redirectToPageLoginSuccess = (pathname: string) => {
    sessionStorage.setItem(PRE_LOGIN_PATHNAME_SUCCESS, pathname);
  };

  const redirectToPrevPathnameRegion = (pathname: string) => {
    sessionStorage.setItem(PRE_PATHNAME_REGION_PAGE, pathname);
  };

  const redirectToAdmin = () => {
    let pathname = sessionStorage.getItem(PRE_LOGIN_PATHNAME);
    if (user) {
      if (pathname?.includes("/dashboard")) router.replace(pathname || "/dashboard");
      else router.replace("/dashboard");
    } else {
      router.replace("/");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loginUser,
        logoutUser,
        redirectToAdminLogin,
        redirectToAdmin,
        redirectToPageLoginSuccess,
        redirectToPrevPathname,
        redirectToPrevPathnameRegion,
        confirmIsVerifiedPhone,
        setConfirmIsVerifiedPhone,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
