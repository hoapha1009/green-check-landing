import { setContext } from "apollo-link-context";
import getConfig from "next/config";
import { rot13 } from "../helpers/encoder";
const { publicRuntimeConfig } = getConfig();

export type Token =
  | "user"
  | "member"
  | "customer"
  | "global-customer"
  | "anonymous"
  | "staff"
  | string;
export type AppName = "ADMIN" | "SHOP" | "WRITER" | "EXPERT" | "USER";

export const APPS: {
  name: AppName;
  path: string;
  role: string;
}[] = [
  {
    name: "ADMIN",
    path: "admin",
    role: "admin",
  },
  {
    name: "SHOP",
    path: "shop",
    role: "shop",
  },
  {
    name: "WRITER",
    path: "writer",
    role: "writer",
  },
  {
    name: "EXPERT",
    path: "expert",
    role: "expert",
  },
  {
    name: "USER",
    path: "",
    role: "endUser",
  },
];
export const APP_KEYS = APPS.map((app) => app.name).reduce(
  (keys, name) => ({ ...keys, [name]: rot13(name) }),
  {}
);

export function GetApp() {
  const pathname = typeof window !== "undefined" ? location.pathname : "";
  for (const app of APPS) {
    if (app.path) {
      if (pathname == `/${app.path}` || pathname.startsWith(`/${app.path}/`)) {
        return app;
      } else {
        continue;
      }
    } else {
      return app;
    }
  }
}

export function GetAppKey() {
  return APP_KEYS[GetApp().name];
}

export function SetUserToken(token: string) {
  localStorage.setItem("user-token", token);
}

export function ClearUserToken() {
  localStorage.removeItem("user-token");
}

export function GetUserToken() {
  return localStorage.getItem("user-token") || "";
}

export function GetIP() {
  return localStorage.getItem("user-ip") || "";
}

export function SetIP(ip: string) {
  return localStorage.setItem("user-ip", ip);
}

export function getCurrentToken() {
  let token;
  const pathname = location.pathname;

  if (pathname == "/dashboard" || pathname.startsWith("/dashboard/")) {
    token = GetUserToken();
  } else {
    token = GetUserToken();
  }
  return token;
}

export const AuthLink = setContext((_, { headers, ...ctx }) => {
  // get the authentication token from local storage if it exists
  return new Promise((resolve) => {
    // let token = getCurrentToken();
    let token;
    switch (ctx?.token) {
      case "user": {
        token = GetUserToken();
        break;
      }
      default:
        token = ctx?.token || getCurrentToken();
        break;
    }
    const ip = GetIP();
    const context = {
      headers: {
        ...headers,
        authorization: `ApiKey ${publicRuntimeConfig?.apiKey}`,
        // ...(token && token !== "undefined"
        //   ? {
        //       "x-token": token,
        //       authorization: `ApiKey ${publicRuntimeConfig?.apiKey}`,
        //     }
        //   : {}),
        // ...(ip && ip !== "undefined"
        //   ? {
        //       "x-forwarded-for": ip,
        //     }
        //   : {}),
      },
    };
    // return the headers to the context so httpLink can read them
    resolve(context);
  });
});
