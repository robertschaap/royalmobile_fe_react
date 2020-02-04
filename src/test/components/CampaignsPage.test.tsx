import React from 'react';
import CampaignsPage from '../../components/CampaignsPage';

import { renderWithProviders } from '../helpers';

describe('<CampaignsPage />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<CampaignsPage />);
  });
});
