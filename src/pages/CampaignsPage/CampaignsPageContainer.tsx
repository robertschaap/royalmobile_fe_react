import React from 'react';

import CampaignsPage from '../../components/CampaignsPage';
import PageTitle from '../../components/PageTitle';

const CampaignsPageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page="Campaign" />
      <CampaignsPage />
    </>
  );
};

export default CampaignsPageContainer;
