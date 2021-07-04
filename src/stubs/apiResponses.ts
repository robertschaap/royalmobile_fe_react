import { Response } from 'miragejs';

import { CartItem } from '../types/cart';

import { Schema, Request } from '.';

export const getProduct = (schema: Schema, request: Request) => {
  return new Response(200, {}, {
    status: 'success',
    data: schema.db.products.findBy({ modelId: request.params.id }),
  });
};

// This purposely ignores pagination
export const getProducts = (schema: Schema) => {
  return new Response(200, {}, {
    status: 'success',
    data: schema.db.products,
  });
};

export const getSubscriptions = (schema: Schema) => {
  return new Response(200, {}, {
    status: 'success',
    data: schema.db.subscriptions,
  });
};

// We don't care about the full business logic here, just that
// modifications either return, add, or remove cart items. On
// initial fetch we add a default item for dev experience.
const cartItems: CartItem[] = [];
let cartItemId = 0;

export const getCart = (schema: Schema) => {
  if (cartItems.length === 0) {
    const item: CartItem = {
      id: cartItemId.toString(),
      product: schema.db.products[0],
      subscription: schema.db.subscriptions[0],
      totals: {
        monthly_price: '33,33',
        onetime_price: '44,44',
      },
    };

    cartItems.push(item);
    cartItemId += 1;
  }

  return new Response(200, {}, {
    status: 'success',
    data: {
      id: 'cart-id',
      items: cartItems,
      totals: {
        monthly_price: '88,88',
        onetime_price: '99,99',
      },
    },
  });
};

export const patchCartItem = (schema: Schema) => {
  const item: CartItem = {
    id: cartItemId.toString(),
    product: schema.db.products[0],
    subscription: schema.db.subscriptions[0],
    totals: {
      monthly_price: '33,33',
      onetime_price: '44,44',
    },
  };

  cartItems.push(item);
  cartItemId += 1;

  return new Response(200, {}, {
    status: 'success',
    data: {
      id: 'cart-id',
      items: cartItems,
      totals: {
        monthly_price: '88,88',
        onetime_price: '99,99',
      },
    },
  });
};

export const deleteCartItem = () => {
  cartItems.shift();

  const totals = {
    monthly_price: '33,33',
    onetime_price: '44,44',
  };

  return new Response(200, {}, {
    status: 'success',
    data: {
      id: 'cart-id',
      items: cartItems,
      totals: cartItems.length ? totals : {
        monthly_price: '0,00',
        onetime_price: '0,00',
      },
    },
  });
};

export const postOrder = () => {
  return new Response(200, {}, {
    status: 'success',
    data: null,
  });
};

export const getAuthToken = () => {
  return new Response(200, {}, {
    status: 'success',
    data: {
      token: 'a_valid_auth_token',
    },
  });
};
