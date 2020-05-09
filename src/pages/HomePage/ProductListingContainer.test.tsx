import React from 'react';
import ProductListingContainer from './ProductListingContainer';

import { renderWithProviders } from '../../test/helpers';

describe('<ProductListingContainer />', () => {
  it('should render an empty page if there no products', () => {
    const { getByTestId } = renderWithProviders(<ProductListingContainer />, {
      products: {
        pageNumber: 0,
        collection: [],
      },
    });

    expect(getByTestId('product-listing').children.length).toBe(0);
    expect(getByTestId('button-secondary')).toBeDisabled();
  });

  xit('should render a page with products', () => {
    //
  });

  xit('should load more products when the load more button is clicked', () => {
    //
  });

  xit('should show a loading state when loading more products', () => {
    //
  });

  xit('should show an error message when there is an error', () => {
    //
  });
});
