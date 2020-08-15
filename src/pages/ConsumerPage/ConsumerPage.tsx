import React from 'react';

import ErrorMessage from '../../components/ErrorMessage';
import PageTitle from '../../components/PageTitle';
import { ContentUtil } from '../../utils/ContentUtil';

const ConsumerPage: React.FC = () => {
  return (
    <>
      <PageTitle page={ContentUtil('pages.consumer')} />
      <ErrorMessage messageId="common.errorMissing" />
    </>
  );
};

export default ConsumerPage;
