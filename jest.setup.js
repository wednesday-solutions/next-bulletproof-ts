import "@testing-library/jest-dom";

jest.mock("next/image", () => ({ __esModule: true, default: () => <></> }));

jest.mock("next/router", () => jest.requireActual("next-router-mock"));

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
