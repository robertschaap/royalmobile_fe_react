const pageRoutes = {
  HOME_PAGE: '/',
  PRODUCT_PAGE: '/product/:id',
  ORDER_DETAILS_PAGE: '/order/details',
  ORDER_PAGE: '/order',
  CAMPAIGNS_PAGE: '/campaigns/:id',
  CONTACT_PAGE: '/contact',
  HELP_PAGE: '/help',
  MY_ACCOUNT_PAGE: '/myroyalmobile',
  CONSUMER_PAGE: '/consumer',
  BUSINESS_PAGE: '/business',
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
