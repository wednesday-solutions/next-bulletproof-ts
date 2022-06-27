import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ErrorBoundary } from "@common";
import Head from "next/head";
import { IntlProvider } from "react-intl";
import { Provider as ReduxProvider } from "react-redux";
import messages from "../translations/en.json";
import { store } from "@store";

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
