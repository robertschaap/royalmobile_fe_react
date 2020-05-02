import React from 'react';
import routes from '../../constants/routes';

import Link from '../Link';

// TODO: handle through env
const DEBUG = true;

const DebugMenu: React.FC = () => {
  if (DEBUG) {
    return (
      <div style={{ backgroundColor: '#ddd' }}>
        Debug:&nbsp;
        <Link to={routes.HOME_PAGE}>Home</Link> |&nbsp;
        <Link to={routes.PRODUCT_PAGE}>Product</Link> |&nbsp;
        <Link to={routes.ORDER_PAGE}>Order</Link> |&nbsp;
        <Link to={routes.ORDER_DETAILS_PAGE}>Order Details</Link>
      </div>
    );
  }

  return null;
};

export default DebugMenu;
