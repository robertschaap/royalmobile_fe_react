import React from 'react';

import ErrorMessage from '../ErrorMessage';
import PageTitle from '../PageTitle';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: undefined,
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <PageTitle page="And then there was nothing" />
          <ErrorMessage messageId="common.errorMissing" />
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
