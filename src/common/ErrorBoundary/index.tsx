import React from "react";
import { ErrorBoundary as ReactErrorBoundary, FallbackProps } from "react-error-boundary";
import { Trans } from "@lingui/macro";

const ErrorFallback = ({ error }: FallbackProps) => {
  return (
    <div role="alert">
      <h1>
        <Trans>Something Went Wrong</Trans>
      </h1>
      <pre>{error.message}</pre>
    </div>
  );
};
const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ReactErrorBoundary FallbackComponent={ErrorFallback}>{children}</ReactErrorBoundary>;
};

export default ErrorBoundary;
