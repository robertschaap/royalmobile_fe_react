/* eslint-disable prefer-destructuring */
import React from 'react';
import { ProductSelection, Product } from '../../../types/products';
import { Subscription } from '../../../types/subscriptions';
import { useOrderSummary, OrderSummary } from '../../../hooks';
import ProductPageSummary from '.';

import { renderWithTheme } from '../../../test/helpers';
import { Server, stubsServer } from '../../../stubs';

let server: Server;

describe('<ProductPageSummary />', () => {
  beforeAll(() => {
    server = stubsServer('test');
    server.create('product');
    server.create('subscription');
  });

  afterAll(() => {
    server.shutdown();
  });

  it('should render without crashing', () => {
    const product: Product = server.db.products[0];
    const subscriptions: Subscription[] = server.db.subscriptions;
    const selection = {
      variantId: product.variants[0].variantId,
      subscriptionId: subscriptions[0].subscriptionId,
    };
    // @ts-expect-error
    const summary: OrderSummary = useOrderSummary(product.variants, Array.from(subscriptions), selection);

    renderWithTheme(
      <ProductPageSummary
        deviceModel="device-model"
        orderSummary={summary} />,
    );
  });
});
