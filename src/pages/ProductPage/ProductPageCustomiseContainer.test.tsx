import React from 'react';
import ProductPageCustomiseContainer from './ProductPageCustomiseContainer';

import { renderWithProviders } from '../../test/helpers';
import { Server, stubsServer } from '../../stubs';
import { Product } from '../../types/products';

// TODO: add selection tests

let server: Server;

describe('<ProductPageCustomiseContainer />', () => {
  beforeEach(() => {
    server = stubsServer('test');
    server.create('product');
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should show the customise section', () => {
    const product: Product = server.db.products[0];
    const { getByTestId } = renderWithProviders(
      <ProductPageCustomiseContainer
        product={product} />,
      {
        product: {
          selection: {
            variantId: product.variants[0].variantId,
          },
        },
      },
    );

    expect(getByTestId('product-page-customise')).toBeInTheDocument();
  });

  it('should not show the customise section if there is no selection', () => {
    const product: Product = server.db.products[0];
    const { queryByTestId } = renderWithProviders(
      <ProductPageCustomiseContainer
        product={product} />,
    );

    expect(queryByTestId('product-page-customise')).not.toBeInTheDocument();
  });
});
