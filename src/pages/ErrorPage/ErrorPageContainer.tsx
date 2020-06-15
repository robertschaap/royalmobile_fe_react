import React from 'react';
import { useContentCopy } from '../../utils/useContentCopy';

import ErrorPage from '../../components/ErrorPage';
import PageTitle from '../../components/PageTitle';

const ErrorPageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page={useContentCopy('pages.error')} />
      <ErrorPage />
    </>
  );
};

export default ErrorPageContainer;
