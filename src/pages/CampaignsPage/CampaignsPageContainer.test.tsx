import React from 'react';
import CampaignsPageContainer from './CampaignsPageContainer';

import { renderWithProviders } from '../../test/helpers';

describe('<CampaignsPageContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<CampaignsPageContainer />);
  });
});
