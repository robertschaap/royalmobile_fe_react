import React from 'react';

import OrderDetailsPage from '../components/OrderDetailsPage';
import PageTitle from '../components/PageTitle';

const OrderDetailsPageContainer: React.FC = () => {
  return (
    <>
      <PageTitle page="Order Details" />
      <OrderDetailsPage />
    </>
  );
};

export default OrderDetailsPageContainer;
