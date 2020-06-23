import React from 'react';
import { fireEvent } from '@testing-library/react';
import ProductPageOrderContainer from './ProductPageOrderContainer';

import { renderWithProviders } from '../../test/helpers';

describe('<ProductPageOrderContainer />', () => {
  it('should not allow placing an order when there is no selection', () => {
    const { getByTestId } = renderWithProviders(<ProductPageOrderContainer />);

    expect(getByTestId('place-order-button')).toBeDisabled();
  });

  it('should allow placing an order when there is a selection', () => {
    const { getByTestId } = renderWithProviders(
      <ProductPageOrderContainer />,
      {
        product: {
          selection: {
            subscriptionId: 'subscription-id',
            variantId: 'variant-id',
          },
        },
      },
    );

    expect(getByTestId('place-order-button')).toBeEnabled();
  });

  it('should place an order', () => {
    const { getByTestId } = renderWithProviders(
      <ProductPageOrderContainer />,
      {
        product: {
          selection: {
            subscriptionId: 'subscription-id',
            variantId: 'variant-id',
          },
        },
      },
    );

    fireEvent.click(getByTestId('place-order-button'));

    // @ts-expect-error
    expect(JSON.parse(sessionStorage.getItem('royalmobile::productSelection'))).toEqual({
      subscriptionId: 'subscription-id',
      variantId: 'variant-id',
    });
    expect(window.location.pathname).toContain('/order');
  });
});
