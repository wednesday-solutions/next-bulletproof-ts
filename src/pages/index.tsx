import { Meta } from "@common";
import { loadCatalog } from "@utils/linguiUtils";
import { Repos } from "@features/repos";
import { GetStaticProps, Metadata } from "next";
import React, { memo } from "react";

const metadata: Metadata = {
  title: "Next.js TypeScript Template | Wednesday Solutions",
  description:
    "An enterprise Next.js template application based on bulletproof architecture showcasing - Testing strategies, Global state management, Custom environments, a network layer, component library integration, server response caching, PWA support, localization, Custom App, Custom document, Custom offline fallback, and Continuous integration & deployment.",
};

export const ReposPage = ({ recommendations }) => {
  return (
    <>
      <Meta title={metadata.title!} description={metadata.description!} />
      <Repos recommendations={recommendations} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const translation = await loadCatalog(context.locale!);
  return {
    props: {
      translation,
    },
  };
};

export default memo(ReposPage);
