import { messages } from "@app/translations/en";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { act, render, RenderOptions } from "@testing-library/react";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { SerializedStyles } from "@emotion/react";
import { store } from "../store";

/**
 * Renders the passed in components or tree with all the providers.
 * To configure just add more providers and use the function in tests to render with providers
 * @param children, all the components in the composition
 * @returns React.FC, renders the DOM with all the providers
 */
export const WithAllProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <I18nProvider i18n={i18n}>{children}</I18nProvider>
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
) => {
  if (!i18n.locale) {
    // first client render
    i18n.load({ en: messages });
  }
  act(() => i18n.activate("en"));
  return render(ui, { wrapper: WithAllProviders, ...options });
};

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

export const normalizeStyledCss = (styledCss: SerializedStyles) => {
  return styledCss.toString().trim().replace(/\s+/g, " ");
};

export * from "@testing-library/react";
export { renderForTesting as render };
