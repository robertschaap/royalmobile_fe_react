import React from 'react';

import PageTitle from '../../components/PageTitle';
import { ContentUtil } from '../../utils/ContentUtil';

import CampaignsPage from './CampaignsPage';

const CampaignsPageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page={ContentUtil('pages.campaign')} />
      <CampaignsPage />
    </>
  );
};

export default CampaignsPageContainer;
