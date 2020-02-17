import { call, takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import api from '../utils/api';
import routes from '../constants/routes';

import {
  Actions,
  fetchSubscriptionsSuccess,
  fetchSubscriptionsError,
} from '../ducks/subscriptions';

function* fetchSubscriptionsSaga(): SagaIterator {
  yield call(api.get, {
    url: routes.API_GET_SUBSCRIPTIONS,
    onSuccessAction: fetchSubscriptionsSuccess,
    onErrorAction: fetchSubscriptionsError,
  });
}

export default [
  takeEvery(Actions.FETCH_SUBSCRIPTIONS, fetchSubscriptionsSaga),
];
