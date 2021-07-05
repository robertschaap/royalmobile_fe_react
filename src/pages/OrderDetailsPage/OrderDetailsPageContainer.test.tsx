import { fireEvent } from '@testing-library/react';
import React from 'react';

import * as cartDuck from '../../store/ducks/cart';
import { Server, testStubsServer } from '../../stubs';
import { renderWithProviders } from '../../test/helpers';
import { Cart } from '../../types/cart';

import OrderDetailsPageContainer from '.';

let server: Server;

describe('<OrderDetailsPageContainer />', () => {
  beforeEach(() => {
    server = testStubsServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should submit an order', () => {
    const placeOrderSpy = jest.spyOn(cartDuck, 'placeOrder');

    const { getByTestId } = renderWithProviders(<OrderDetailsPageContainer />, {
      cart: {
        isFetching: false,
        hasError: false,
        collection: {
          id: 'cart-id',
        } as Cart,
      },
    });

    expect(getByTestId('order-details-page')).toBeInTheDocument();
    expect(getByTestId('finalise-order-button')).toBeEnabled();

    fireEvent.click(getByTestId('finalise-order-button'));

    expect(placeOrderSpy).toHaveBeenCalledWith('cart-id');
  });

  it('should show an error message when there is no cart', () => {
    const { getByTestId } = renderWithProviders(<OrderDetailsPageContainer />);

    expect(getByTestId('error-message')).toBeInTheDocument();
  });

  it('should take the user back to the homepage when the return button is clicked', () => {
    const { getByTestId } = renderWithProviders(<OrderDetailsPageContainer />, {
      cart: {
        isFetching: false,
        hasError: false,
        collection: {
          id: 'cart-id',
        } as Cart,
      },
    });

    fireEvent.click(getByTestId('return-button'));

    expect(window.location.pathname).toBe('/');
  });
});
