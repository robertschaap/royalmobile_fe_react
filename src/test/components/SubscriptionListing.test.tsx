import React from 'react';
import SubscriptionListing from '../../components/SubscriptionListing';

import { renderWithProviders } from '../helpers';

describe('<SubscriptionListing />', () => {
  it('should render without crashing', () => {
    const { getByTestId } = renderWithProviders(
      <SubscriptionListing
        onClickSubscription={jest.fn()}
        selectedSubscriptionId={''}
        subscriptions={[]} />
    );

    expect(getByTestId('subscription-listing').children.length).toBe(0);
  });
});

// renders a list of subscriptions
// or not
// has a default selectede
// has an onclick handler
