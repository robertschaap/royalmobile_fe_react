const pageRoutes = {
  HOME_PAGE: '/',
  PRODUCT_PAGE: '/product/:id',
  ORDER_PAGE: '/order',
  CAMPAIGNS_PAGE: '/campaigns/:id',
  CONTACT_PAGE: '/contact',
  HELP_PAGE: '/help',
  MY_ACCOUNT_PAGE: '/myroyalmobile',
  CONSUMER_PAGE: '/consumer',
  BUSINESS_PAGE: '/business',
};

const API = '/api';

const apiRoutes = {
  API_ROOT: `${API}/`,
  API_GET_PRODUCTS: `${API}/products`,
};

export default {
  ...pageRoutes,
  ...apiRoutes,
};
