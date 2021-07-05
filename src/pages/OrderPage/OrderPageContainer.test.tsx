import { waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';

import * as cartDuck from '../../store/ducks/cart';
import { Server, testStubsServer } from '../../stubs';
import { renderWithProviders } from '../../test/helpers';
import { Cart } from '../../types/cart';
import StorageUtil from '../../utils/StorageUtil';

import OrderPageContainer from './OrderPageContainer';

let server: Server;
let cart: Cart;

jest.mock('../../utils/StorageUtil', () => ({
  clearCartId: jest.fn(),
  clearProductSelection: jest.fn(),
  getCartId: jest.fn(),
  getProductSelection: jest.fn(() => ({})),
  setCartId: jest.fn(),
}));

describe('<OrderPageContainer />', () => {
  beforeAll(() => {
    server = testStubsServer();
    server.create('product');
    server.create('subscription');

    cart = {
      id: 'cart-id',
      items: [{
        id: 'item-id',
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
    };
  });

  afterAll(() => {
    server.shutdown();
  });

  describe('states', () => {
    it('should show an error message if there is an error', () => {
      const { getByTestId } = renderWithProviders(<OrderPageContainer />, {
        cart: {
          isFetching: false,
          hasError: true,
        },
      });

      expect(getByTestId('error-message')).toBeInTheDocument();
    });

    it('should show an error message if there is an empty cart', () => {
      const { getByTestId, getByText } = renderWithProviders(<OrderPageContainer />, {
        cart: {
          isFetching: false,
          hasError: false,
          collection: {
            id: 'cart_id',
            items: [],
            totals: {
              monthly_price: '',
              onetime_price: '',
            },
          },
        },
      });

      expect(getByTestId('error-message')).toBeInTheDocument();
      expect(getByText(/shopping cart is empty/i)).toBeInTheDocument();
    });

    it('should show an error message if there is no cart', () => {
      const { getByTestId, getByText } = renderWithProviders(<OrderPageContainer />, {
        cart: {
          isFetching: false,
          hasError: false,
          collection: undefined,
        },
      });

      expect(getByTestId('error-message')).toBeInTheDocument();
      expect(getByText(/shopping cart is empty/i)).toBeInTheDocument();
    });
  });

  describe('fetch and add to cart', () => {
    it('should fetch a cart if there is no product selection', async () => {
      (StorageUtil.getCartId as jest.Mock).mockReturnValueOnce('cart-id');
      (StorageUtil.getProductSelection as jest.Mock).mockReturnValueOnce({ subscriptionId: null, variantId: null });
      const fetchCartSpy = jest.spyOn(cartDuck, 'fetchCart');

      const { getByTestId } = renderWithProviders(<OrderPageContainer />);

      expect(fetchCartSpy).toHaveBeenCalledWith('cart-id');

      await waitForElementToBeRemoved(() => getByTestId('loader'));

      expect(getByTestId('order-page')).toBeInTheDocument();
    });

    it('should add an item to a cart if there is a product selection and a cart', async () => {
      (StorageUtil.getCartId as jest.Mock).mockReturnValueOnce('cart-id');
      (StorageUtil.getProductSelection as jest.Mock).mockReturnValueOnce({ subscriptionId: 'subscription-id', variantId: 'variant-id' });
      const addCartItemSpy = jest.spyOn(cartDuck, 'addCartItem');

      const { getByTestId } = renderWithProviders(<OrderPageContainer />);

      expect(addCartItemSpy).toHaveBeenCalledWith({ subscriptionId: 'subscription-id', variantId: 'variant-id' }, 'cart-id');
      expect(StorageUtil.clearProductSelection).toHaveBeenCalled();

      await waitForElementToBeRemoved(() => getByTestId('loader'));

      expect(getByTestId('order-page')).toBeInTheDocument();
    });

    it('should add an item to a cart if there is a product selection and no cart', async () => {
      (StorageUtil.getCartId as jest.Mock).mockReturnValueOnce(null);
      (StorageUtil.getProductSelection as jest.Mock).mockReturnValueOnce({ subscriptionId: 'subscription-id', variantId: 'variant-id' });
      const addCartItemSpy = jest.spyOn(cartDuck, 'addCartItem');

      const { getByTestId } = renderWithProviders(<OrderPageContainer />);

      expect(addCartItemSpy).toHaveBeenCalledWith({ subscriptionId: 'subscription-id', variantId: 'variant-id' }, undefined);
      expect(StorageUtil.clearProductSelection).toHaveBeenCalled();

      await waitForElementToBeRemoved(() => getByTestId('loader'));

      expect(getByTestId('order-page')).toBeInTheDocument();
    });
  });

  describe('cart', () => {
    it('should show a cart', () => {
      const { getByTestId } = renderWithProviders(<OrderPageContainer />, {
        cart: {
          isFetching: false,
          hasError: false,
          collection: cart,
        },
      });

      expect(getByTestId('order-page')).toBeInTheDocument();
    });

    it('should store the cartId', () => {
      renderWithProviders(<OrderPageContainer />, {
        cart: {
          isFetching: false,
          hasError: false,
          collection: cart,
        },
      });

      expect(StorageUtil.setCartId).toHaveBeenCalled();
    });
  });
});
