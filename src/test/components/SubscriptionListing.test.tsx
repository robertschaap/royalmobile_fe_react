import React from 'react';
import SubscriptionListing from '../../components/SubscriptionListing';

import { renderWithProviders } from '../helpers';

const subscriptions = [
  { id: 'subscription-id1' },
  { id: 'subscription-id2' },
  { id: 'subscription-id3' },
];

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

  // TODO: add rendered text to this when implemented
  it('should render a list of subscriptions', () => {
    const { getByTestId } = renderWithProviders(
      <SubscriptionListing
        onClickSubscription={jest.fn()}
        selectedSubscriptionId={''}
        subscriptions={subscriptions} />
    );

    expect(getByTestId('subscription-listing').children.length).toBe(3);
  });
});

// has a default selectede
// has an onclick handler
