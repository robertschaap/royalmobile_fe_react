import React from 'react';
import CampaignsPageContainer from '../../containers/CampaignsPageContainer';

import { renderWithProviders } from '../helpers';

describe('<CampaignsPageContainer />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<CampaignsPageContainer />);
  });
});
