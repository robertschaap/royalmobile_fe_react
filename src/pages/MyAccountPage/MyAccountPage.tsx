import React from 'react';

import PageTitle from '../../components/PageTitle';
import { ContentUtil } from '../../utils/ContentUtil';

const MyAccountPage: React.FC = () => {
  return (
    <>
      <PageTitle page={ContentUtil('pages.myAccount')} />
      <div>MyAccount</div>
    </>
  );
};

export default MyAccountPage;
