import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@store";
import { IntlProvider } from "react-intl";
import messages from "../translations/en.json";
import { ErrorBoundary } from "@common";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <IntlProvider messages={messages} locale="en" defaultLocale="en">
      <Provider store={store}>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </Provider>
    </IntlProvider>
  );
};

export default MyApp;
