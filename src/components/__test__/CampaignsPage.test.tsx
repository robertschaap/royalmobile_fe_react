import React from 'react';
import CampaignsPage from '../CampaignsPage';

import { renderWithProviders } from '../../test/helpers';

describe('<CampaignsPage />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<CampaignsPage />);
  });
});
