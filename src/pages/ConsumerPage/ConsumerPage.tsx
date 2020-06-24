import React from 'react';
import { ContentUtil } from '../../utils/ContentUtil';

import ErrorMessage from '../../components/ErrorMessage';
import PageTitle from '../../components/PageTitle';

const ConsumerPage: React.FC = () => {
  return (
    <>
      <PageTitle page={ContentUtil('pages.consumer')} />
      <ErrorMessage messageId="common.errorMissing" />
    </>
  );
};

export default ConsumerPage;
