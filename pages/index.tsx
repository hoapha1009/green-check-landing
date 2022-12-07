import { GetServerSideProps, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { NoneLayout } from "../layouts/none-layout/none-layout";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/mrl");
  });

  return null;
}

Page.Layout = NoneLayout;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // ...
  return { props: {} };
};
