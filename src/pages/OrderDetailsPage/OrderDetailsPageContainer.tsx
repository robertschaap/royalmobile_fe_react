import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import ErrorMessage from '../../components/ErrorMessage';
import PageSection from '../../components/PageSection';
import PageTitle from '../../components/PageTitle';
import routes from '../../constants/routes';
import { useSelector, selectCartCollection, placeOrder, useDispatch } from '../../store';
import { ContentUtil } from '../../utils/ContentUtil';

import OrderDetailsPage from './OrderDetailsPage';

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
        <PageTitle page={ContentUtil('pages.orderDetails')} />
        <PageSection>
          <ErrorMessage messageId="common.errorMissing" />
        </PageSection>
      </>
    );
  }

  return (
    <>
      <PageTitle page={ContentUtil('pages.orderDetails')} />
      <OrderDetailsPage
        onClickReturn={onClickReturn}
        onSubmitOrder={onSubmitOrder} />
    </>
  );
};

export default OrderDetailsPageContainer;
