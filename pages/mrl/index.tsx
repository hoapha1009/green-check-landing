import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import { MRLPage } from "../../components/index/mrl/mrl-page";
import { DefaultLayout } from "../../layouts/default-layout/default-layout";

export default function Page() {
  return (
    <>
      <NextSeo title="Tra cứu MRL" description="Tra cứu MRL" />
      <MRLPage />
    </>
  );
}

Page.Layout = DefaultLayout;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // ...
  return { props: {} };
};
