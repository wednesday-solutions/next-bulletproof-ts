import React from "react";
import { GetStaticProps, Metadata, NextPage } from "next";
import { loadCatalog } from "@app/utils/linguiUtils";
import { Meta } from "@common";
import { Repos } from "@features/repos";

const metadata: Metadata = {
  title: "Next.js TypeScript Template | Wednesday Solutions",
  description:
    "An enterprise Next.js template application based on bulletproof architecture showcasing - Testing strategies, Global state management, Custom environments, a network layer, component library integration, server response caching, PWA support, localization, Custom App, Custom document, Custom offline fallback, and Continuous integration & deployment.",
};

export const ReposPage: NextPage = () => {
  return (
    <>
      <Meta title={metadata.title!} description={metadata.description!} />
      <Repos />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ctx => {
  const translation = await loadCatalog(ctx.locale!);

  return {
    props: {
      translation,
    },
  };
};

export default ReposPage;
