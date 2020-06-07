import { Response } from 'miragejs';

export const getProduct = (schema: any, request: any) => {
  return new Response(200, {}, {
    status: 'success',
    data: schema.db.products.findBy({ modelId: request.params.id }),
  });
};

// This purposely ignores pagination
export const getProducts = (schema: any, _request: any) => {
  return new Response(200, {}, {
    status: 'success',
    data: schema.db.products,
  });
};

export const getSubscriptions = (schema: any, _request: any) => {
  return new Response(200, {}, {
    status: 'success',
    data: schema.db.subscriptions,
  });
};

/**
 * We don't care about the full business logic here, just that
 * modifications either return, add, or remove cart items
 */
const cartItem = ['item'];

export const getCart = (schema: any, _request: any) => {
  return new Response(200, {}, {
    status: 'success',
    data: {
      id: 'cart-id',
      items: cartItem,
      totals: {},
    },
  });
};

export const patchCartItem = (schema: any, _request: any) => {
  cartItem.push('item');

  return new Response(200, {}, {
    status: 'success',
    data: {
      id: 'cart-id',
      items: cartItem,
      totals: {},
    },
  });
};

export const deleteCartItem = (schema: any, _request: any) => {
  cartItem.shift();

  return new Response(200, {}, {
    status: 'success',
    data: {
      id: 'cart-id',
      items: cartItem,
      totals: {},
    },
  });
};
