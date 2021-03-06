import React from 'react';

import { Server, testStubsServer } from '../../../stubs';
import { renderWithTheme } from '../../../test/helpers';
import { Cart } from '../../../types/cart';

import OrderPage from '.';

let cart: Cart;
let server: Server;

describe('<OrderPage />', () => {
  beforeAll(() => {
    server = testStubsServer();
    server.create('product');
    server.create('subscription');

    cart = {
      id: 'cart-id',
      items: [{
        id: 'id',
        product: server.db.products[0],
        subscription: server.db.subscriptions[0],
        totals: {
          monthly_price: '0,00',
          onetime_price: '0,00',
        },
      }],
      totals: {
        monthly_price: '',
        onetime_price: '',
      },
    };

    cart.items.push();
  });

  afterAll(() => {
    server.shutdown();
  });

  it('should render without crashing', () => {
    renderWithTheme(
      <OrderPage
        cart={cart}
        onClickOrder={jest.fn}
        onClickRemove={jest.fn}
        onClickReturn={jest.fn}
      />,
    );
  });
});
