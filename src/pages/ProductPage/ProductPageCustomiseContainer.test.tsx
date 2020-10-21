import { fireEvent } from '@testing-library/react';
import React from 'react';

import * as productDuck from '../../store/ducks/product';
import { Server, testStubsServer } from '../../stubs';
import { renderWithProviders } from '../../test/helpers';
import { Product } from '../../types/products';

import ProductPageCustomiseContainer from './ProductPageCustomiseContainer';

let server: Server;

describe('<ProductPageCustomiseContainer />', () => {
  beforeEach(() => {
    server = testStubsServer();
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

  it('should change the selected color', async () => {
    const setProductSelectedVariantIdSpy = jest.spyOn(productDuck, 'setProductSelectedVariantId');
    const selectProductSelectionSpy = jest.spyOn(productDuck, 'selectProductSelection');
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

    fireEvent.click(getByTestId('device-color-listing').children[1]);

    expect(setProductSelectedVariantIdSpy).toHaveBeenLastCalledWith(product.variants[1].variantId);
    expect(selectProductSelectionSpy).toReturnWith({ variantId: product.variants[1].variantId });
  });

  it('should change the selected capacity', async () => {
    const setProductSelectedVariantIdSpy = jest.spyOn(productDuck, 'setProductSelectedVariantId');
    const selectProductSelectionSpy = jest.spyOn(productDuck, 'selectProductSelection');
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

    fireEvent.click(getByTestId('device-capacity-listing').children[1]);

    expect(setProductSelectedVariantIdSpy).toHaveBeenLastCalledWith(product.variants[2].variantId);
    expect(selectProductSelectionSpy).toReturnWith({ variantId: product.variants[2].variantId });
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
