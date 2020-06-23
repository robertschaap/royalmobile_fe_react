import React from 'react';
import OrderPage from '.';

import { renderWithTheme } from '../../../test/helpers';
import { Server, stubsServer } from '../../../stubs';
import { Cart } from '../../../types/cart';

let cart: Cart;
let server: Server;

describe('<OrderPage />', () => {
  beforeAll(() => {
    server = stubsServer('test');
    server.create('product');
    server.create('subscription');

    cart = {
      id: 'cart-id',
      items: [{
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
