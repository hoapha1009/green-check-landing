import "../style/style.scss";

import App, { AppContext,AppProps } from 'next/app';
import { DefaultSeo, NextSeo } from "next-seo";
import Layout from "../layouts/Layout";
import { AlertProvider } from "../lib/providers/alert-provider";
import { ToastProvider } from "../lib/providers/toast-provider";
import { TooltipProvider } from "../lib/providers/tooltip-provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate="%s"
        defaultTitle="Green Check - Giải pháp truy xuất nguồn gốc nông nghiệp"
        openGraph={{
          type: "website",
          locale: "vi_VN",
          site_name: "Green Check",
        }}
      />
      {pageProps.seo && <NextSeo {...pageProps.seo} />}
      <TooltipProvider>
        <ToastProvider>
          <AlertProvider>
            <Layout >
              <Component {...pageProps} />
            </Layout>
          </AlertProvider>
        </ToastProvider>
      </TooltipProvider>
    </>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const ctx = await App.getInitialProps(context);

  return { ...ctx };
};

export default MyApp;

