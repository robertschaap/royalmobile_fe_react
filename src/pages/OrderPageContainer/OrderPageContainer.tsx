import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchCart, selectProductSelection, useDispatch, useSelector, selectCart } from '../../store';

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
    const cartId = StorageUtil.getCartId() || 'blaat';

    if (cartId) {
      dispatch(fetchCart(cartId));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onClickReturn = () => {
    history.push(routes.HOME_PAGE);
  };

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

  if (!cartState.collection.items) {
    return (
      <>
        <PageTitle page="Order" />
        <PageSection>
          Empty cart
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
        onClickReturn={onClickReturn} />
      <pre>{JSON.stringify(selection, null, 2)}</pre>
    </>
  );
};

export default OrderPageContainer;
