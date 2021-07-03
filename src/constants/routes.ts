const pageRoutes = {
  BUSINESS_PAGE: '/business',
  CAMPAIGNS_PAGE: '/campaigns/:id',
  CONSUMER_PAGE: '/consumer',
  CONTACT_PAGE: '/contact',
  HELP_PAGE: '/help',
  HOME_PAGE: '/',
  LOGIN: '/login',
  MY_ACCOUNT_PAGE: '/myroyalmobile',
  ORDER_DETAILS_PAGE: '/order/details',
  ORDER_PAGE: '/order',
  PRODUCT_PAGE: '/product/:id',
  THANK_YOU_PAGE: '/thankyou',
};

const API = '/api';

const apiRoutes = {
  API_ROOT: `${API}/`,
  API_GET_CART: `${API}/cart/:id`,
  API_ADD_CART_ITEM: `${API}/cart/:id/item`,
  API_GET_PRODUCT: `${API}/product/:id`,
  API_GET_PRODUCTS: `${API}/products`,
  API_GET_SUBSCRIPTIONS: `${API}/subscriptions`,
  API_REMOVE_CART_ITEM: `${API}/cart/:id/item/:itemId`,
  API_PLACE_ORDER: `${API}/cart/order`,
};

export default {
  ...pageRoutes,
  ...apiRoutes,
};
