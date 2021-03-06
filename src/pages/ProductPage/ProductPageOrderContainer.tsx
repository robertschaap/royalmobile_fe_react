import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import routes from '../../constants/routes';
import { useSelector, selectProductSelection } from '../../store';
import StorageUtil from '../../utils/StorageUtil';

import ProductPageOrder from './ProductPageOrder';

const ProductPageOrderContainer: React.FC = () => {
  const history = useHistory();
  const selection = useSelector(selectProductSelection);

  const hasSelection = Boolean(selection.variantId && selection.subscriptionId);

  const onClick = useCallback(() => {
    if (selection.variantId && selection.subscriptionId) {
      StorageUtil.setProductSelection(selection);
      history.push(routes.ORDER_PAGE);
    }
  }, [history, selection]);

  return (
    <ProductPageOrder
      hasSelection={hasSelection}
      onClickOrder={onClick}
      onClickRenewContract={onClick} />
  );
};

export default ProductPageOrderContainer;
