import React from 'react';
import ProductListing from '../../components/ProductListing';

import { renderWithProviders } from '../helpers';
import { productsStub } from '../stubs/products';

describe('<ProductListing />', () => {
  it('should not render if no products are passed', () => {
    const { getByTestId } = renderWithProviders(
      <ProductListing products={[]} />,
    );

    expect(getByTestId('product-listing').children.length).toEqual(0);
  });

  it('should render products if passed', () => {
    const { getByTestId } = renderWithProviders(
      <ProductListing products={productsStub}/>,
    );

    expect(getByTestId('product-listing').children.length).toBeGreaterThan(0);
  });
});
