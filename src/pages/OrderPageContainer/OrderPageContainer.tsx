import { useHistory } from 'react-router-dom';

import OrderPage from './OrderPage';
import PageTitle from '../../components/PageTitle';

import noop from '../../utils/noop';
import routes from '../../constants/routes';

const OrderPageContainer: React.FC = () => {
  const history = useHistory();
  const selection = useSelector(selectProductSelection);
  const onClickReturn = () => {
    history.push(routes.HOME_PAGE);
  };

  return (
    <>
      <PageTitle page="Order" />
      <OrderPage
        onClickRemove={noop}
        onClickReturn={onClickReturn} />
      <pre>{JSON.stringify(selection, null, 2)}</pre>
    </>
  );
};

export default OrderPageContainer;
