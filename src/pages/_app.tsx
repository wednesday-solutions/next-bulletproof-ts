import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { I18nProvider } from "@lingui/react";
import { Provider as ReduxProvider } from "react-redux";
import { EmotionCache } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";

import { useLinguiInit } from "@utils/linguiUtils";
import { nextReduxWrapper } from "@app/store";
import theme, { font } from "@themes";
import { ErrorBoundary } from "@common";

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = ({ Component, ...rest }: MyAppProps) => {
  const { store, props } = nextReduxWrapper.useWrappedStore(rest);
  const i18n = useLinguiInit(props.pageProps.translation);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <I18nProvider i18n={i18n}>
        <ErrorBoundary>
          <ReduxProvider store={store}>
            <AppCacheProvider {...props}>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <main className={font.className}>
                  <Component {...props.pageProps} />
                </main>
              </ThemeProvider>
            </AppCacheProvider>
          </ReduxProvider>
        </ErrorBoundary>
      </I18nProvider>
    </>
  );
};

export default MyApp;
