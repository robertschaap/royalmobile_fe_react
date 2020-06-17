import React from 'react';
import ProductListing from '.';

import { renderWithProviders } from '../../../test/helpers';
import { stubsServer, Server } from '../../../stubs';
import { Product } from '../../../types/products';

let server: Server;

describe('<ProductListing />', () => {
  beforeEach(() => {
    server = stubsServer('test');
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
