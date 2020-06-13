import React from 'react';
import { useContentCopy } from '../../hooks';

import ErrorPage from '../../components/ErrorPage';
import PageTitle from '../../components/PageTitle';

const ConsumerPageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page={useContentCopy('pages.consumer')} />
      <ErrorPage />
    </>
  );
};

export default ConsumerPageContainer;
