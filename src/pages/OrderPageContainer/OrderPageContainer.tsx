import React from 'react';
import { selectProductSelection, useSelector } from '../../store';

import OrderPage from './OrderPage';
import PageTitle from '../../components/PageTitle';

import noop from '../../utils/noop';

const OrderPageContainer: React.FC = () => {
  const selection = useSelector(selectProductSelection);

  return (
    <>
      <PageTitle page="Order" />
      <OrderPage
        onClickRemove={noop} />
      <pre>{JSON.stringify(selection, null, 2)}</pre>
    </>
  );
};

export default OrderPageContainer;
