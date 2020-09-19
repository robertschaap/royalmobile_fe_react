import React from 'react';

import * as cartDuck from '../../store/ducks/cart';
import { Server, stubsServer } from '../../stubs';
import { renderWithProviders } from '../../test/helpers';
import StorageUtil from '../../utils/StorageUtil';

import OrderPageContainer from './OrderPageContainer';

let server: Server;

jest.mock('../../utils/StorageUtil', () => ({
  clearProductSelection: jest.fn(),
  getCartId: jest.fn(),
  getProductSelection: jest.fn(() => ({})),
  setCartId: jest.fn(),
}));

describe('<OrderPageContainer />', () => {
  beforeAll(() => {
    server = stubsServer('test');
    server.create('product');
    server.create('subscription');
  });

  afterAll(() => {
    server.shutdown();
  });

  it('should show an error message if there is an error', () => {
    const { getByTestId } = renderWithProviders(<OrderPageContainer />, {
      cart: {
        hasError: true,
      },
    });

    expect(getByTestId('error-message')).toBeInTheDocument();
  });

  it('should show an error message if there is an empty cart', () => {
    const { getByTestId, getByText } = renderWithProviders(<OrderPageContainer />, {
      cart: {
        collection: {
          items: [],
        },
      },
    });

    expect(getByTestId('error-message')).toBeInTheDocument();
    expect(getByText(/shopping cart is empty/i)).toBeInTheDocument();
  });

  it('should show an error message if there is no cart', () => {
    const { getByTestId, getByText } = renderWithProviders(<OrderPageContainer />, {
      cart: {
        collection: undefined,
      },
    });

    expect(getByTestId('error-message')).toBeInTheDocument();
    expect(getByText(/shopping cart is empty/i)).toBeInTheDocument();
  });

  it('should fetch a cart if there is no product selection', () => {
    (StorageUtil.getCartId as jest.Mock).mockReturnValueOnce('cart-id');
    (StorageUtil.getProductSelection as jest.Mock).mockReturnValueOnce({ subscriptionId: null, variantId: null });
    const fetchCartSpy = jest.spyOn(cartDuck, 'fetchCart');

    const { getByTestId } = renderWithProviders(<OrderPageContainer />);

    expect(fetchCartSpy).toHaveBeenCalledWith('cart-id');
    expect(getByTestId('loader')).toBeInTheDocument();
  });

  it('should add an item to a cart if there is a product selection and a cart', () => {
    (StorageUtil.getCartId as jest.Mock).mockReturnValueOnce('cart-id');
    (StorageUtil.getProductSelection as jest.Mock).mockReturnValueOnce({ subscriptionId: 'subscription-id', variantId: 'variant-id' });
    const addCartItemSpy = jest.spyOn(cartDuck, 'addCartItem');

    const { getByTestId } = renderWithProviders(<OrderPageContainer />);

    expect(addCartItemSpy).toHaveBeenCalledWith({ subscriptionId: 'subscription-id', variantId: 'variant-id' }, 'cart-id');
    expect(StorageUtil.clearProductSelection).toHaveBeenCalled();
    expect(getByTestId('loader')).toBeInTheDocument();
  });

  it('should add an item to a cart if there is a product selection and no cart', () => {
    (StorageUtil.getCartId as jest.Mock).mockReturnValueOnce(null);
    (StorageUtil.getProductSelection as jest.Mock).mockReturnValueOnce({ subscriptionId: 'subscription-id', variantId: 'variant-id' });
    const addCartItemSpy = jest.spyOn(cartDuck, 'addCartItem');

    const { getByTestId } = renderWithProviders(<OrderPageContainer />);

    expect(addCartItemSpy).toHaveBeenCalledWith({ subscriptionId: 'subscription-id', variantId: 'variant-id' }, undefined);
    expect(StorageUtil.clearProductSelection).toHaveBeenCalled();
    expect(getByTestId('loader')).toBeInTheDocument();
  });

  it('should show a cart', () => {
    const { getByTestId } = renderWithProviders(<OrderPageContainer />, {
      cart: {
        collection: {
          items: [{
            product: server.db.products[0],
            subscription: server.db.subscriptions[0],
            totals: {
              monthly_price: '',
              onetime_price: '',
            },
          }],
          totals: {
            monthly_price: '',
            onetime_price: '',
          },
        },
      },
    });

    expect(getByTestId('order-page')).toBeInTheDocument();
  });
});
