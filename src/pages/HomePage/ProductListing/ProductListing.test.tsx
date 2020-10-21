import React from 'react';

import { Server, testStubsServer } from '../../../stubs';
import { renderWithProviders } from '../../../test/helpers';
import { Product } from '../../../types/products';

import ProductListing from '.';

let server: Server;

describe('<ProductListing />', () => {
  beforeEach(() => {
    server = testStubsServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should not render if no products are passed', () => {
    const { getByTestId } = renderWithProviders(
      <ProductListing products={[]} />,
    );

    expect(getByTestId('product-listing').children.length).toEqual(0);
  });

  it('should render products if passed', () => {
    const products: Product[] = server.createList('product', 2);

    const { getByTestId } = renderWithProviders(
      <ProductListing products={products} />,
    );

    expect(getByTestId('product-listing').children.length).toBe(2);
  });
});
