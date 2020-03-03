import React from 'react';
import SubscriptionListing from '../../components/SubscriptionListing';

import { renderWithProviders } from '../helpers';

describe('<SubscriptionListing />', () => {
  it('should render without crashing', () => {
    renderWithProviders(
      <SubscriptionListing
        subscriptions={[]}
        onClickSubscription={jest.fn()}
        selectedSubscriptionId={''}
      />
    );
  });
});

// renders a list of subscriptions
// or not
// has a default selectede
// has an onclick handler
