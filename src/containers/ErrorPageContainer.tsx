import React from 'react';

import ErrorPage from '../components/ErrorPage';
import PageTitle from '../components/PageTitle';

const ErrorPageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page="Error" />
      <ErrorPage />
    </>
  );
};

export default ErrorPageContainer;
