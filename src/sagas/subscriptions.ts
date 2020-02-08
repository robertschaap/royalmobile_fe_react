import { call, takeEvery } from 'redux-saga/effects';
import api from '../utils/api';
import routes from '../constants/routes';

import {
  Actions,
  fetchSubscriptionsSuccess,
  fetchSubscriptionsError,
} from '../ducks/subscriptions';

function* fetchSubscriptionsSaga() {
  yield call(api.get, {
    url: routes.API_ROOT,
    onSuccessAction: fetchSubscriptionsSuccess,
    onErrorAction: fetchSubscriptionsError,
  });
}

export default [
  takeEvery(Actions.FETCH_SUBSCRIPTIONS, fetchSubscriptionsSaga),
];
