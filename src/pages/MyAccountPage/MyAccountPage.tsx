import React from 'react';

import ErrorMessage from '../../components/ErrorMessage';
import PageTitle from '../../components/PageTitle';
import { ContentUtil } from '../../utils/ContentUtil';

const MyAccountPage: React.FC = () => {
  return (
    <>
      <PageTitle page={ContentUtil('pages.myAccount')} />
      <ErrorMessage messageId="common.errorMissing" />
    </>
  );
};

export default MyAccountPage;
