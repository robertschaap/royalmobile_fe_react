import React from 'react';
import { selectProductSelection, useSelector } from '../../store';

import OrderPage from './OrderPage';
import PageTitle from '../../components/PageTitle';

const OrderPageContainer: React.FC = () => {
  const selection = useSelector(selectProductSelection);

  return (
    <>
      <PageTitle page="Order" />
      <OrderPage />
      <pre>{JSON.stringify(selection, null, 2)}</pre>
    </>
  );
};

export default OrderPageContainer;
