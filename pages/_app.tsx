import "../style/style.scss";

import { appWithTranslation } from "next-i18next";
import { DefaultSeo, NextSeo } from "next-seo";
import { Fragment, useEffect } from "react";
import { AlertProvider } from "../lib/providers/alert-provider";
import { ToastProvider } from "../lib/providers/toast-provider";
import { TooltipProvider } from "../lib/providers/tooltip-provider";
import nextI18nextConfig from "../next-i18next.config";

function App({ Component, pageProps }: any) {
  const Layout = Component.Layout ? Component.Layout : Fragment;
  const layoutProps = Component.LayoutProps ? Component.LayoutProps : {};

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (pageProps?.analyticConfig) {
        sessionStorage.setItem("analyticConfig", JSON.stringify(pageProps.analyticConfig));
      } else {
        sessionStorage.removeItem("analyticConfig");
      }
    }
  }, [pageProps.analyticConfig]);

  return (
    <>
      <DefaultSeo
        titleTemplate="%s"
        defaultTitle="Green MRL Console"
        openGraph={{
          type: "website",
          locale: "vi_VN",
          site_name: "Green MRL",
        }}
      />
      {pageProps.seo && <NextSeo {...pageProps.seo} />}
      <TooltipProvider>
        <ToastProvider>
          <AlertProvider>
            {/* <AuthProvider> */}
            <Layout {...layoutProps}>
              <Component {...pageProps} />
            </Layout>
            {/* </AuthProvider> */}
          </AlertProvider>
        </ToastProvider>
      </TooltipProvider>
    </>
  );
}

export default appWithTranslation(App, nextI18nextConfig);
