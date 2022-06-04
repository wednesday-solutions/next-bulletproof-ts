import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../store/index";
import { IntlProvider } from "react-intl";
import messages from "../translations/en.json";
import { ErrorBoundary } from "@common";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <IntlProvider messages={messages} locale="en" defaultLocale="en">
      <ReduxProvider store={store}>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </ReduxProvider>
    </IntlProvider>
  );
};

export default MyApp;
