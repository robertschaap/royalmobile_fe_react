import { Response } from 'miragejs';
import { products } from './products';
import { subscriptions } from './subscriptions';

export const getProducts = (schema: any, request: any) => {
  return new Response(200, {}, { status: 'success', data: products });
};

export const getSubscriptions = (schema: any, request: any) => {
  return new Response(200, {}, { status: 'success', data: subscriptions });
};
