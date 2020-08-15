import React from 'react';

import { renderWithProviders } from '../../test/helpers';

import CampaignsPageContainer from './CampaignsPageContainer';

describe('<CampaignsPageContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<CampaignsPageContainer />);
  });
});
