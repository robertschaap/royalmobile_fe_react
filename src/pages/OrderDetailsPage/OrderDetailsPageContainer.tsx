import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, selectCartCollection } from '../../store';
import routes from '../../constants/routes';

import ErrorMessage from '../../components/ErrorMessage';
import OrderDetailsPage from './OrderDetailsPage';
import PageSection from '../../components/PageSection';
import PageTitle from '../../components/PageTitle';

const OrderDetailsPageContainer: React.FC = () => {
  const cart = useSelector(selectCartCollection);
  const history = useHistory();

  const onSubmitOrder = useCallback((values) => {
    console.log(values);
  }, []);

  const onClickReturn = useCallback(() => {
    history.push(routes.HOME_PAGE);
  }, [history]);

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
      <OrderDetailsPage
        onClickReturn={onClickReturn}
        onSubmitOrder={onSubmitOrder} />
    </>
  );
};

export default OrderDetailsPageContainer;
