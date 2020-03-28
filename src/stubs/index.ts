import { Server, Model, Factory } from 'miragejs';

import { getProduct, getProducts, getSubscriptions } from './apiResponses';
import { products } from './products';
import { SubscriptionFactory, seedSubscriptions } from './subscriptions';
import routes from '../constants/routes';

export default () => new Server({
  environment: 'development',
  routes() {
    this.get(routes.API_GET_PRODUCT, getProduct);
    this.get(routes.API_GET_PRODUCTS, getProducts);
    this.get(routes.API_GET_SUBSCRIPTIONS, getSubscriptions);
  },
  models: {
    subscription: Model,
  },
  factories: {
    subscription: Factory.extend(SubscriptionFactory()),
  },
  seeds(server: any) {
    seedSubscriptions(server);

    server.db.loadData({
      products,
    });
  },
});
