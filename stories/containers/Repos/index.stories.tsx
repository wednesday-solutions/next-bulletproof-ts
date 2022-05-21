import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import ReposContainer from "../../../containers/Repos/index";
import messages from "../../../translations/en.json";
import { store } from "../../../store/index";

export default {
  title: "Containers/Repos",
  component: ReposContainer,
};

export const ReposContainerStory = () => (
  <Provider store={store}>
    <IntlProvider locale="en" messages={messages}>
      <ReposContainer />
    </IntlProvider>
  </Provider>
);
