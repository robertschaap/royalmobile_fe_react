import React, { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {
  addCartItem,
  fetchCart,
  selectCart,
  selectProductSelection,
  useDispatch,
  useSelector,
} from '../../store';

import ErrorMessage from '../../components/ErrorMessage';
import Loader from '../../components/Loader';
import PageSection from '../../components/PageSection';
import PageTitle from '../../components/PageTitle';
import OrderPage from './OrderPage';

import noop from '../../utils/noop';
import StorageUtil from '../../utils/StorageUtil';
import routes from '../../constants/routes';

const OrderPageContainer: React.FC = () => {
  const history = useHistory();
  const selection = useSelector(selectProductSelection);
  const cartState = useSelector(selectCart);
  const dispatch = useDispatch();

  useEffect(() => {
    const cartId = StorageUtil.getCartId();
    const { subscriptionId, variantId } = selection;

    if (cartId && !subscriptionId && !variantId) {
      dispatch(fetchCart(cartId));
    }

    if (variantId && subscriptionId) {
      dispatch(addCartItem({ variantId, subscriptionId }, cartId ?? undefined));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (cartState.collection?.id) {
      StorageUtil.setCartId(cartState.collection.id);
    }
  }, [cartState.collection]);

  const onClickReturn = useCallback(() => {
    history.push(routes.HOME_PAGE);
  }, [history]);

  const onClickOrder = useCallback(() => {
    history.push(routes.ORDER_DETAILS_PAGE);
  }, [history]);

  if (cartState.hasError) {
    return (
      <>
        <PageTitle page="Order" />
        <PageSection>
          <ErrorMessage messageId="common.errorMissing" />
        </PageSection>
      </>
    );
  }

  if (cartState.isFetching) {
    return (
      <>
        <PageTitle page="Order" />
        <PageSection>
          <Loader show />
        </PageSection>
      </>
    );
  }

  if (!cartState.collection) {
    return (
      <>
        <PageTitle page="Order" />
        <PageSection>
          <ErrorMessage messageId="order.emptyCart" />
        </PageSection>
      </>
    );
  }

  return (
    <>
      <PageTitle page="Order" />
      <OrderPage
        cartItems={cartState.collection.items}
        onClickRemove={noop}
        onClickReturn={onClickReturn}
        onClickOrder={onClickOrder} />
    </>
  );
};

export default OrderPageContainer;
