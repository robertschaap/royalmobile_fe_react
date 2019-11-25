import { call, takeEvery } from 'redux-saga/effects'
import api from '../utils/api';
import routes from '../constants/routes';

import {
  FETCH_SUBSCRIPTIONS,
  fetchSubscriptionsSuccess,
  fetchSubscriptionsError,
} from '../ducks/subscriptions';

function* fetchSubscriptionsSaga() {
  yield call(api.get, {
    url: routes.API_ROOT,
    onSuccess: fetchSubscriptionsSuccess,
    onError: fetchSubscriptionsError,
  });
}

export default [
  takeEvery(FETCH_SUBSCRIPTIONS, fetchSubscriptionsSaga),
];
