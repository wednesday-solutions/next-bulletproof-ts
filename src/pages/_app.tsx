import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ErrorBoundary } from "@common";
import Head from "next/head";
import { StyleSheetManager } from "styled-components";
import { shouldForwardProp } from "@utils";
import { I18nProvider } from "@lingui/react";
import { useLinguiInit } from "@utils/linguiUtils";
import { nextReduxWrapper } from "@app/store";
import { Provider as ReduxProvider } from "react-redux";

const MyApp = ({ Component, ...rest }: AppProps) => {
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
      <ErrorBoundary>
        <I18nProvider i18n={i18n}>
          <ReduxProvider store={store}>
            <StyleSheetManager shouldForwardProp={shouldForwardProp}>
              <Component {...props.pageProps} />
            </StyleSheetManager>
          </ReduxProvider>
        </I18nProvider>
      </ErrorBoundary>
    </>
  );
};

export default MyApp;
