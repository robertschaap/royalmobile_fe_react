/* eslint-disable @typescript-eslint/no-explicit-any */
import { Server, Model, Factory } from 'miragejs';

import {
  deleteCartItem,
  getCart,
  getProduct,
  getProducts,
  getSubscriptions,
  patchCartItem,
  postOrder,
} from './apiResponses';

import { ProductFactory, seedProducts } from './products';
import { SubscriptionFactory, seedSubscriptions } from './subscriptions';
import routes from '../constants/routes';

export type Server = any;
export type Schema = any;
export type Request = any;
export type Row<T> = T & {
  update(args: Record<string, unknown>): void;
}

export const stubsServer = (environment = 'development') => new Server({
  environment,
  routes() {
    this.patch(routes.API_ADD_CART_ITEM, patchCartItem);
    this.get(routes.API_GET_CART, getCart);
    this.get(routes.API_GET_PRODUCT, getProduct);
    this.get(routes.API_GET_PRODUCTS, getProducts);
    this.get(routes.API_GET_SUBSCRIPTIONS, getSubscriptions);
    this.delete(routes.API_REMOVE_CART_ITEM, deleteCartItem);
    this.post(routes.API_PLACE_ORDER, postOrder);
  },
  models: {
    product: Model,
    subscription: Model,
  },
  factories: {
    product: Factory.extend(ProductFactory()),
    subscription: Factory.extend(SubscriptionFactory()),
  },
  seeds(server: Server) {
    seedProducts(server);
    seedSubscriptions(server);
  },
});
