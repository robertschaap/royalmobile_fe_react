import React from 'react';
import { ContentUtil } from '../../utils/ContentUtil';

import CampaignsPage from './CampaignsPage';
import PageTitle from '../../components/PageTitle';

const CampaignsPageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page={ContentUtil('pages.campaign')} />
      <CampaignsPage />
    </>
  );
};

export default CampaignsPageContainer;
