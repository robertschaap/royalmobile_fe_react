import { Response } from 'miragejs';
import { product } from './product';
import { products } from './products';
import { subscriptions } from './subscriptions';

export const getProduct = (_schema: any, _request: any) => {
  return new Response(200, {}, { status: 'success', data: product });
};

export const getProducts = (_schema: any, _request: any) => {
  return new Response(200, {}, { status: 'success', data: products });
};

export const getSubscriptions = (_schema: any, _request: any) => {
  return new Response(200, {}, { status: 'success', data: subscriptions });
};
