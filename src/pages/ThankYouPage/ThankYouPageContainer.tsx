import React from 'react';

import ErrorPage from '../../components/ErrorPage';
import PageTitle from '../../components/PageTitle';

const ThankYouPageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page="Products For You" />
      <ErrorPage />
    </>
  );
};

export default ThankYouPageContainer;
