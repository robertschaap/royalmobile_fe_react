import React from 'react';

import { renderWithProviders } from '../../../test/helpers';

import CampaignsPage from '.';

describe('<CampaignsPage />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<CampaignsPage />);
  });
});
