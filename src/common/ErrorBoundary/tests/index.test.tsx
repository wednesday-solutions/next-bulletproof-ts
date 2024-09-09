import React from "react";
import "@testing-library/jest-dom";
import { render } from "@utils/testUtils";
import { ErrorBoundary } from "@app/common";
import { screen } from "@testing-library/react";

// Mock translation for `@lingui/macro`
jest.mock("@lingui/macro", () => ({
  Trans: ({ children }: { children: React.ReactNode }) => children,
}));

describe("ErrorBoundary", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders children when there is no error", () => {
    const ChildComponent = () => <div>Child Component</div>;
    render(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText("Child Component")).toBeInTheDocument();
  });

  it("renders fallback UI when an error is thrown", () => {
    class TestErrorComponent extends React.Component {
      componentDidMount() {
        throw new Error("Test error");
      }

      render() {
        return <div>Child Component</div>;
      }
    }

    render(
      <ErrorBoundary>
        <TestErrorComponent />
      </ErrorBoundary>
    );

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText("Something Went Wrong")).toBeInTheDocument();
  });

  it("displays the correct error message when an error is thrown", () => {
    class TestErrorComponent extends React.Component {
      componentDidMount() {
        throw new Error("Test error message");
      }

      render() {
        return <div>Child Component</div>;
      }
    }

    render(
      <ErrorBoundary>
        <TestErrorComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText("Test error message")).toBeInTheDocument();
  });

  it("logs error to console when an error is caught", () => {
    const mockConsoleError = jest.spyOn(console, "error").mockImplementation(() => {});

    class TestErrorComponent extends React.Component {
      componentDidMount() {
        throw new Error("Test error");
      }

      render() {
        return <div>Child Component</div>;
      }
    }

    render(
      <ErrorBoundary>
        <TestErrorComponent />
      </ErrorBoundary>
    );

    expect(mockConsoleError).toHaveBeenCalled();
    mockConsoleError.mockRestore();
  });
});
