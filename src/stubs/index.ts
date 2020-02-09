import { getProducts, getSubscriptions } from './apiResponses';
import { Server } from 'miragejs';
import routes from '../constants/routes';

export const makeStubsServer = () => new Server({
  environment: 'development',
  routes() {
    this.get(routes.API_GET_PRODUCTS, getProducts);
    this.get(routes.API_GET_SUBSCRIPTIONS, getSubscriptions);
  },
});

