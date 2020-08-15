/* eslint-disable prefer-destructuring */
import React from 'react';

import { stubsServer, Server } from '../../stubs';
import { renderWithProviders } from '../../test/helpers';
import { Product } from '../../types/products';
import { Subscription } from '../../types/subscriptions';

import ProductPageSummaryContainer from './ProductPageSummaryContainer';

let server: Server;

describe('<ProductPageSummaryContainer />', () => {
  beforeEach(() => {
    server = stubsServer('test');
    server.create('product');
    server.create('subscription');
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should show a product summary', () => {
    const product: Product = server.db.products[0];
    const subscriptions: Subscription[] = server.db.subscriptions.filter(Boolean);

    const { getByTestId } = renderWithProviders(
      <ProductPageSummaryContainer
        product={product}
        subscriptions={subscriptions} />,
      {
        product: {
          selection: {
            variantId: product.variants[0].variantId,
            subscriptionId: subscriptions[0].subscriptionId,
          },
        },
      },
    );

    expect(getByTestId('product-page-summary')).toBeInTheDocument();
  });

  it('should not show a product summary if there is no selection', () => {
    const product: Product = server.db.products[0];
    const subscriptions: Subscription[] = server.db.subscriptions.filter(Boolean);

    const { queryByTestId } = renderWithProviders(
      <ProductPageSummaryContainer
        product={product}
        subscriptions={subscriptions} />,
    );

    expect(queryByTestId('product-page-summary')).not.toBeInTheDocument();
  });
});
