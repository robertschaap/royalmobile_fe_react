import React from 'react';

import { Server, stubsServer } from '../../../stubs';
import { renderWithProviders } from '../../../test/helpers';

import SubscriptionListing from '.';

let server: Server;

describe('<SubscriptionListing />', () => {
  beforeAll(() => {
    server = stubsServer('test');
    server.createList('subscription', 3);
  });

  afterAll(() => {
    server.shutdown();
  });

  it('should render without crashing', () => {
    const { getByTestId } = renderWithProviders(
      <SubscriptionListing
        onClickSubscription={jest.fn()}
        selectedSubscriptionId=''
        subscriptions={[]} />,
    );

    expect(getByTestId('subscription-listing').children.length).toBe(0);
  });

  it('should render a list of subscriptions', () => {
    const { getByTestId } = renderWithProviders(
      <SubscriptionListing
        onClickSubscription={jest.fn()}
        selectedSubscriptionId=''
        subscriptions={server.db.subscriptions} />,
    );

    expect(getByTestId('subscription-listing').children.length).toBe(3);
  });

  it('should highlight the selected subscription', () => {
    const { getAllByTestId } = renderWithProviders(
      <SubscriptionListing
        onClickSubscription={jest.fn()}
        selectedSubscriptionId={server.db.subscriptions[1].subscriptionId}
        subscriptions={server.db.subscriptions} />,
    );

    const items = getAllByTestId('subscription-listing-item');
    expect(items[0]).toHaveAttribute('data-testprop-is-selected', 'false');
    expect(items[1]).toHaveAttribute('data-testprop-is-selected', 'true');
    expect(items[2]).toHaveAttribute('data-testprop-is-selected', 'false');
  });
});
