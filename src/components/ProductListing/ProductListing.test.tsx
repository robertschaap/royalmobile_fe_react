import React from 'react';
import ProductListing from '.';

import { renderWithProviders } from '../../test/helpers';
import { products } from '../../stubs/products';

describe('<ProductListing />', () => {
  it('should not render if no products are passed', () => {
    const { getByTestId } = renderWithProviders(
      <ProductListing products={[]} />,
    );

    expect(getByTestId('product-listing').children.length).toEqual(0);
  });

  it('should render products if passed', () => {
    const { getByTestId } = renderWithProviders(
      <ProductListing products={products}/>,
    );

    expect(getByTestId('product-listing').children.length).toBeGreaterThan(0);
  });
});
