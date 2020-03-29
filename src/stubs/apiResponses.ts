import { Response } from 'miragejs';

export const getProduct = (schema: any, request: any) => {
  return new Response(200, {}, {
    status: 'success',
    data: schema.db.products.findBy({ modelId: request.params.id }),
  });
};

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
