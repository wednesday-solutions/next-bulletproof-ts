import { Meta } from "@common";
import { Repos } from "@features/repos";
import { Metadata, NextPage } from "next";
import React from "react";

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

export default ReposPage;
