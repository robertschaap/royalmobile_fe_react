import React from 'react';
import { useSelector, selectCartCollection } from '../../store';

import ErrorMessage from '../../components/ErrorMessage';
import OrderDetailsPage from '../../components/OrderDetailsPage';
import PageSection from '../../components/PageSection';
import PageTitle from '../../components/PageTitle';

const OrderDetailsPageContainer: React.FC = () => {
  const cart = useSelector(selectCartCollection);

  if (!cart) {
    return (
      <>
        <PageTitle page="Order Details" />
        <PageSection>
          <ErrorMessage messageId="common.errorMissing" />
        </PageSection>
      </>
    );
  }

  return (
    <>
      <PageTitle page="Order Details" />
      <OrderDetailsPage />
    </>
  );
};

export default OrderDetailsPageContainer;
