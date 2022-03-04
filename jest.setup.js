import React from "react";
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

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
