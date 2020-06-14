import React from 'react';
import routes from '../../constants/routes';
import StorageUtil from '../../utils/StorageUtil';

import Link from '../Link';

const DebugMenu: React.FC = () => {
  if (process.env.REACT_APP_DEBUG) {
    return (
      <div style={{ backgroundColor: '#ddd' }}>
        Debug:&nbsp;
        <Link to={routes.HOME_PAGE}>Home</Link> |&nbsp;
        <Link to={routes.PRODUCT_PAGE}>Product</Link> |&nbsp;
        <Link to={routes.ORDER_PAGE}>Order</Link> |&nbsp;
        <Link to={routes.ORDER_DETAILS_PAGE}>Order Details</Link> |&nbsp;
        <Link to={routes.THANK_YOU_PAGE}>Thank You</Link> |&nbsp;
        <button onClick={() => StorageUtil.clearAll()}>Clear Storage</button>
      </div>
    );
  }

  return null;
};

export default DebugMenu;
