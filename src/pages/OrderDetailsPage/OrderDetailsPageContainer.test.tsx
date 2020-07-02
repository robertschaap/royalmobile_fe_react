import React from 'react';
import { fireEvent } from '@testing-library/react';
import OrderDetailsPageContainer from '.';
import * as cartDuck from '../../store/ducks/cart';

import { renderWithProviders } from '../../test/helpers';
import { Server, stubsServer } from '../../stubs';

let server: Server;

describe('<OrderDetailsPageContainer />', () => {
  beforeEach(() => {
    server = stubsServer('test');
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should submit an order', () => {
    const placeOrderSpy = jest.spyOn(cartDuck, 'placeOrder');

    const { getByTestId } = renderWithProviders(<OrderDetailsPageContainer />, {
      cart: {
        collection: {
          id: 'cart-id',
        },
      },
    });

    expect(getByTestId('order-details-page')).toBeInTheDocument();
    expect(getByTestId('finalise-order-button')).toBeEnabled();

    fireEvent.click(getByTestId('finalise-order-button'));

    expect(placeOrderSpy).toHaveBeenCalledWith('cart-id');
  });

  it('should show an error message when there is no cart', () => {
    // const { getByTestId } = renderWithProviders(<OrderDetailsPageContainer />);

    // expect(getByTestId('error-message')).toBeInTheDocument();
  });
  it('should show an error message when there is no cart', () => {
    // const { getByTestId } = renderWithProviders(<OrderDetailsPageContainer />);

    // expect(getByTestId('error-message')).toBeInTheDocument();
  });

  it('should show an error message when there is no cart', () => {
    // const { getByTestId } = renderWithProviders(<OrderDetailsPageContainer />);

    // expect(getByTestId('error-message')).toBeInTheDocument();
  });
});
