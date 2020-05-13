import React from 'react';

import ErrorPage from '../../components/ErrorPage';
import PageTitle from '../../components/PageTitle';

const ConsumerPageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page="Products For You" />
      <ErrorPage />
    </>
  );
};

export default ConsumerPageContainer;
