import { Server } from 'miragejs';

import { getProduct, getProducts, getSubscriptions } from './apiResponses';
import { products } from './products';
import { subscriptions } from './subscriptions';
import routes from '../constants/routes';

export default () => new Server({
  environment: 'development',
  routes() {
    this.get(routes.API_GET_PRODUCT, getProduct);
    this.get(routes.API_GET_PRODUCTS, getProducts);
    this.get(routes.API_GET_SUBSCRIPTIONS, getSubscriptions);
  },
  seeds(server: any) {
    server.db.loadData({
      subscriptions,
      products,
    });
  },
});
