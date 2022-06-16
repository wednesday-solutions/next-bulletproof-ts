/**
 *
 * ErrorBoundary
 *
 */

import { translate } from "@common";
import React, { ReactElement } from "react";

class ErrorBoundary extends React.Component<
  { children: ReactElement },
  { hasError: boolean; error: Error | null }
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // handle gracefully
      return <h1>{translate("something_went_wrong")}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
