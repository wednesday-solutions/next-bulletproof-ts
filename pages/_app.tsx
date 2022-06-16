import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@store";
import Head from "next/head";
import { IntlProvider } from "react-intl";
import { ErrorBoundary } from "@common";
import messages from "../translations/en.json";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <IntlProvider messages={messages} locale="en" defaultLocale="en">
        <ReduxProvider store={store}>
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </ReduxProvider>
      </IntlProvider>
    </>
  );
};

export default MyApp;
