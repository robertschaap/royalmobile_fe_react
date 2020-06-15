import React from 'react';
import { ContentUtil } from '../../utils/ContentUtil';

import ErrorPage from '../../components/ErrorPage';
import PageTitle from '../../components/PageTitle';

const ConsumerPageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page={ContentUtil('pages.consumer')} />
      <ErrorPage />
    </>
  );
};

export default ConsumerPageContainer;
