import React, { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import ErrorMessage from '../../components/ErrorMessage';
import Loader from '../../components/Loader';
import PageSection from '../../components/PageSection';
import PageTitle from '../../components/PageTitle';
import routes from '../../constants/routes';
import {
  addCartItem,
  deleteCartItem,
  fetchCart,
  selectCart,
  useDispatch,
  useSelector,
} from '../../store';
import { ContentUtil } from '../../utils/ContentUtil';
import StorageUtil from '../../utils/StorageUtil';

import OrderPage from './OrderPage';

const OrderPageContainer: React.FC = () => {
  const history = useHistory();
  const cartState = useSelector(selectCart);
  const dispatch = useDispatch();

  useEffect(() => {
    const cartId = StorageUtil.getCartId();
    const { subscriptionId, variantId } = StorageUtil.getProductSelection();

    if (cartId && !subscriptionId && !variantId) {
      dispatch(fetchCart(cartId));
    }

    if (subscriptionId && variantId) {
      dispatch(addCartItem({ subscriptionId, variantId }, cartId ?? undefined));
      StorageUtil.clearProductSelection();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (cartState.collection?.id) {
      StorageUtil.setCartId(cartState.collection.id);
    }
  }, [cartState.collection]);

  const onClickRemove = useCallback((cartItemId: string) => {
    if (cartState.collection?.id) {
      dispatch(deleteCartItem(cartState.collection.id, cartItemId));
    }
  }, [dispatch, cartState.collection]);

  const onClickReturn = useCallback(() => {
    history.push(routes.HOME_PAGE);
  }, [history]);

  const onClickOrder = useCallback(() => {
    history.push(routes.ORDER_DETAILS_PAGE);
  }, [history]);

  if (cartState.hasError) {
    return (
      <>
        <PageTitle page={ContentUtil('pages.order')} />
        <PageSection>
          <ErrorMessage messageId="common.errorMissing" />
        </PageSection>
      </>
    );
  }

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

  if (!cartState.collection?.items.length) {
    return (
      <>
        <PageTitle page={ContentUtil('pages.order')} />
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
        cart={cartState.collection}
        onClickRemove={onClickRemove}
        onClickReturn={onClickReturn}
        onClickOrder={onClickOrder} />
    </>
  );
};

export default OrderPageContainer;
