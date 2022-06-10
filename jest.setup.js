import React from "react";
// Learn more: https://github.com/testing-library/jest-dom
// import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

jest.mock("next/image", () => ({ __esModule: true, default: () => <></> }));

jest.mock("store", () => {
  const actualStore = jest.requireActual("store");

  const initialState = {
    cart: global.CartStateMock,
  };

  const useAppSelectorMock = jest.fn();

  return {
    ...actualStore,
    useAppSelector: useAppSelectorMock.mockImplementation(selector => selector(initialState)),
  };
});

/**
 * Stub for window.matchMedia()
 * @refer https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
 */
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
