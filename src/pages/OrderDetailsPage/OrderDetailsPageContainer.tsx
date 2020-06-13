import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, selectCartCollection, placeOrder, useDispatch } from '../../store';
import routes from '../../constants/routes';

import ErrorMessage from '../../components/ErrorMessage';
import OrderDetailsPage from './OrderDetailsPage';
import PageSection from '../../components/PageSection';
import PageTitle from '../../components/PageTitle';

const OrderDetailsPageContainer: React.FC = () => {
  const cart = useSelector(selectCartCollection);
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmitOrder = useCallback(() => {
    if (cart?.id) {
      dispatch(placeOrder(cart.id));
    }
  }, [dispatch, cart]);

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
