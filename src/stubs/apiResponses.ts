import { Response } from 'miragejs';
import { CartItem } from '../types/cart';

export const getProduct = (schema: any, request: any) => {
  return new Response(200, {}, {
    status: 'success',
    data: schema.db.products.findBy({ modelId: request.params.id }),
  });
};

// This purposely ignores pagination
export const getProducts = (schema: any) => {
  return new Response(200, {}, {
    status: 'success',
    data: schema.db.products,
  });
};

export const getSubscriptions = (schema: any) => {
  return new Response(200, {}, {
    status: 'success',
    data: schema.db.subscriptions,
  });
};

// We don't care about the full business logic here, just that
// modifications either return, add, or remove cart items. On
// initial fetch we add a default item for dev experience.
const cartItems: CartItem[] = [];

export const getCart = (schema: any) => {
  if (cartItems.length === 0) {
    const item: CartItem = {
      product: schema.db.products[0],
      subscription: schema.db.subscriptions[0],
      totals: {
        monthly_price: '33,33',
        onetime_price: '44,44',
      },
    };

    cartItems.push(item);
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

export const patchCartItem = (schema: any) => {
  const item: CartItem = {
    product: schema.db.products[0],
    subscription: schema.db.subscriptions[0],
    totals: {
      monthly_price: '33,33',
      onetime_price: '44,44',
    },
  };

  cartItems.push(item);

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

  return new Response(200, {}, {
    status: 'success',
    data: {
      id: 'cart-id',
      items: cartItems,
      totals: {},
    },
  });
};
