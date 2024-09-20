/**
 *
 * ErrorBoundary
 *
 */

import { Trans } from "@lingui/macro";
import React, { ReactElement } from "react";
import PropTypes from "prop-types";


class ErrorBoundary extends React.Component<
  { children: ReactElement },
  { hasError: boolean; error: Error | null }
> {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

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
      return (
        <h1>
          <Trans>Something Went Wrong</Trans>
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
