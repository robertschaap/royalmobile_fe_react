import React from 'react';

import OrderPage from '../../components/OrderPage';
import PageTitle from '../../components/PageTitle';

const OrderPageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page="Order" />
      <OrderPage />
    </>
  );
};

export default OrderPageContainer;
