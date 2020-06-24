import React from 'react';
import { ContentUtil } from '../../utils/ContentUtil';

import ErrorMessage from '../../components/ErrorMessage';
import PageTitle from '../../components/PageTitle';

const MyAccountPage: React.FC = () => {
  return (
    <>
      <PageTitle page={ContentUtil('pages.myAccount')} />
      <ErrorMessage messageId="common.errorMissing" />
    </>
  );
};

export default MyAccountPage;
