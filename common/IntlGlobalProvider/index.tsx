import React from "react";
import { useIntl } from "react-intl";

// 'intl' service singleton reference
let intl;

const IntlGlobalProvider: React.FC = ({ children }) => {
  intl = useIntl(); // Keep the 'intl' service reference
  return <>{children}</>;
};

export default IntlGlobalProvider;

// setter function to set intl value inside tests
export const setIntl = intlValue => {
  intl = intlValue;
};

export const translate = (id, values = {}) => intl.formatMessage({ id }, values);
