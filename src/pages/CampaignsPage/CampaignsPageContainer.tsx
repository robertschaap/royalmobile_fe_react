import React from 'react';
import { useContentCopy } from '../../utils/useContentCopy';

import CampaignsPage from './CampaignsPage';
import PageTitle from '../../components/PageTitle';

const CampaignsPageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page={useContentCopy('pages.campaign')} />
      <CampaignsPage />
    </>
  );
};

export default CampaignsPageContainer;
