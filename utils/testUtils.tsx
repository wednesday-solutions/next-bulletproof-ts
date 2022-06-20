import { render, RenderOptions } from "@testing-library/react";
import React from "react";
import { IntlProvider } from "react-intl";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../store";
import messages from "../translations/en.json";

/**
 * Renders the passed in components or tree with all the providers.
 * To configure just add more providers and use the function in tests to render with providers
 * @param children, all the components in the composition
 * @returns React.FC, renders the DOM with all the providers
 */
export const WithAllProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <IntlProvider messages={messages} locale="en" defaultLocale="en">
        {children}
      </IntlProvider>
    </ReduxProvider>
  );
};

/**
 * Generic render function that renders all the listed components with all the providers
 * @param ui The ReactElement (ie. Component) to render
 * @param options extra render options
 * @returns returns the RenderResult with all the things that react-testing library provides
 */
export const renderForTesting = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: WithAllProviders, ...options });

/**
 * Stops execution in tests for a specified milliseconds
 * @param ms time in milliseconds, how long to stop
 * @returns returns a new Promise to hang
 */
export const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Generate an API Response that can be used to mock API Responses
 * @param ok boolean specifing will the response resolve or reject
 * @param data the data that is to be sent back
 * @returns APIResponse consisting ok and data
 */
export function apiResponseGenerator<T>(ok: boolean, data: T) {
  return {
    ok,
    data,
  };
}

export * from "@testing-library/react";
export { renderForTesting as render };
