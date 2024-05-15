import React from "react";
import { render } from "@utils/testUtils";
import { ErrorBoundary } from "@app/common";

describe("ErrorBoundary", () => {
  it("renders children when there is no error", () => {
    const ChildComponent = () => <div>Child Component</div>;
    const { getByText } = render(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    );
    expect(getByText("Child Component")).toBeDefined();
  });

  it("renders error message when there is an error", () => {
    class TestErrorComponent extends React.Component {
      componentDidMount() {
        throw new Error("Test error");
      }

      render() {
        return <div>Child Component</div>;
      }
    }

    const { getByText } = render(
      <ErrorBoundary>
        <TestErrorComponent />
      </ErrorBoundary>
    );
    expect(getByText("Something Went Wrong")).toBeDefined();
  });

  it("catches error using componentDidCatch", () => {
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

  it("updates state when error is caught using getDerivedStateFromError", () => {
    const error = new Error("Test error");
    // const errorBoundaryInstance = new ErrorBoundary({ children: null });

    const updatedState = ErrorBoundary.getDerivedStateFromError(error);

    expect(updatedState).toEqual({ hasError: true, error });
  });
});
