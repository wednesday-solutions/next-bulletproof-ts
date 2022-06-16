import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import { ErrorBoundary } from "@common";
import { store } from "@store";
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
        <Provider store={store}>
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </Provider>
      </IntlProvider>
    </>
  );
};

export default MyApp;
