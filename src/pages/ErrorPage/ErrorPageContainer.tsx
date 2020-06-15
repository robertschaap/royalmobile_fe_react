import React from 'react';
import { ContentUtil } from '../../utils/ContentUtil';

import ErrorPage from '../../components/ErrorPage';
import PageTitle from '../../components/PageTitle';

const ErrorPageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page={ContentUtil('pages.error')} />
      <ErrorPage />
    </>
  );
};

export default ErrorPageContainer;
