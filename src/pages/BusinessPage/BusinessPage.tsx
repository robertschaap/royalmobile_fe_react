import React from 'react';

import ErrorMessage from '../../components/ErrorMessage';
import PageTitle from '../../components/PageTitle';
import { ContentUtil } from '../../utils/ContentUtil';

const BusinessPage: React.FC = () => {
  return (
    <>
      <PageTitle page={ContentUtil('pages.business')} />
      <ErrorMessage messageId="common.errorMissing" />
    </>
  );
};

export default BusinessPage;
