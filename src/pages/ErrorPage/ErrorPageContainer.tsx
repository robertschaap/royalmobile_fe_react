import React from 'react';

import ErrorPage from '../../components/ErrorPage';
import PageTitle from '../../components/PageTitle';
import { ContentUtil } from '../../utils/ContentUtil';

const ErrorPageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page={ContentUtil('pages.error')} />
      <ErrorPage />
    </>
  );
};

export default ErrorPageContainer;
