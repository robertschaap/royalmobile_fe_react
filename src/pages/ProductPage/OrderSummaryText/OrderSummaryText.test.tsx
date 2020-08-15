import React from 'react';

import { useOrderSummary, OrderSummary } from '../../../hooks';
import { Server, stubsServer } from '../../../stubs';
import { renderWithTheme } from '../../../test/helpers';
import { ProductSelection, ProductVariant } from '../../../types/products';
import { Subscription } from '../../../types/subscriptions';

import OrderSummaryText from '.';

let server: Server;

const variant = {
  variantId: 'variant-id',
  regular_price: '2',
  discounted_price: '1',
} as ProductVariant;

const subscription = {
  subscriptionId: 'subscription-id',
  regular_price: '2',
} as Subscription;

describe('<OrderSummaryText />', () => {
  beforeAll(() => {
    server = stubsServer('test');
  });

  afterAll(() => {
    server.shutdown();
  });

  it('should render without crashing', () => {
    const selection = { variantId: 'variant-id', subscriptionId: 'subscription-id' } as ProductSelection;
    // @ts-expect-error
    const summary: OrderSummary = useOrderSummary([variant], [subscription], selection);

    renderWithTheme(
      <OrderSummaryText
        deviceName="device-name"
        orderSummary={summary} />,
    );
  });
});
