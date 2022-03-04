import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/index";
import { IntlProvider } from "react-intl";
import messages from "../translations/en.json";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <IntlProvider messages={messages} locale="en" defaultLocale="en">
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </IntlProvider>
    </>
  );
};

export default MyApp;
