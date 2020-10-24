import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import ErrorMessage from '../../components/ErrorMessage';
import Loader from '../../components/Loader';
import PageSection from '../../components/PageSection';
import PageTitle from '../../components/PageTitle';
import routes from '../../constants/routes';
import { useSelector, selectCart, placeOrder, useDispatch, fetchCart } from '../../store';
import { ContentUtil } from '../../utils/ContentUtil';
import StorageUtil from '../../utils/StorageUtil';

import OrderDetailsPage from './OrderDetailsPage';

const OrderDetailsPageContainer: React.FC = () => {
  const cartState = useSelector(selectCart);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const cartId = StorageUtil.getCartId();

    if (!cartState.collection && cartId) {
      dispatch(fetchCart(cartId));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onSubmitOrder = useCallback(() => {
    if (cartState.collection?.id) {
      dispatch(placeOrder(cartState.collection.id));
    }
  }, [dispatch, cartState]);

  const onClickReturn = useCallback(() => {
    history.push(routes.HOME_PAGE);
  }, [history]);

  if (cartState.isFetching) {
    return (
      <>
        <PageTitle page={ContentUtil('pages.order')} />
        <PageSection>
          <Loader show />
        </PageSection>
      </>
    );
  }

  if (!cartState.collection) {
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
