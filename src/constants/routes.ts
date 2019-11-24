const pageRoutes = {
  HOME_PAGE: '/',
  PRODUCT_PAGE: '/product/:id',
  ORDER_PAGE: '/order',
  CAMPAIGNS: '/campaigns/:id',
  CONTACT: '/contact',
};

const API = "/api";

const apiRoutes = {
  API_ROOT: `${API}/`,
  API_GET_PRODUCTS: `${API}/`,
};

export default {
  ...pageRoutes,
  ...apiRoutes,
};

