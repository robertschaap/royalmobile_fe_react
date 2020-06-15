import React from 'react';
import { useContentCopy } from '../../utils/useContentCopy';

import ErrorPage from '../../components/ErrorPage';
import PageTitle from '../../components/PageTitle';

const ConsumerPageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page={useContentCopy('pages.business')} />
      <ErrorPage />
    </>
  );
};

export default ConsumerPageContainer;
