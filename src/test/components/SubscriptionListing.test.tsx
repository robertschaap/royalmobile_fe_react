import React from 'react';
import SubscriptionListing from '../../components/SubscriptionListing';

import { renderWithProviders } from '../helpers';

describe('<SubscriptionListing />', () => {
  it('should render without crashing', () => {
    renderWithProviders(<SubscriptionListing />);
  });
});
