import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ErrorBoundary } from "@common";
import Head from "next/head";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@store";
import { StyleSheetManager } from "styled-components";
import { shouldForwardProp } from "@utils";
import { I18nProvider } from "@lingui/react";
import { useLinguiInit } from "@utils/linguiUtils";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const i18n = useLinguiInit(pageProps.translation);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <I18nProvider i18n={i18n}>
        <ReduxProvider store={store}>
          <ErrorBoundary>
            <StyleSheetManager shouldForwardProp={shouldForwardProp}>
              <Component {...pageProps} />
            </StyleSheetManager>
          </ErrorBoundary>
        </ReduxProvider>
      </I18nProvider>
    </>
  );
};

export default MyApp;
