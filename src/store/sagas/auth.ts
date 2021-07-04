import { SagaIterator } from 'redux-saga';
import { call, takeEvery } from 'redux-saga/effects';

import routes from '../../constants/routes';
import history from '../../history';
import api from '../../utils/api';
import {
  AuthActions,
  fetchAuthTokenError,
  fetchAuthTokenSuccess,
} from '../ducks/auth';

function* fetchAuthTokenSaga(): SagaIterator {
  yield call(api.post, {
    url: routes.API_AUTH,
    body: { username: 'blaat', password: 'blaat' },
    onSuccessAction: fetchAuthTokenSuccess,
    onErrorAction: fetchAuthTokenError,
  });
}

function* fetchAuthTOkenSuccessSaga(): SagaIterator {
  yield call(() => history.push(routes.MY_ACCOUNT_PAGE));
}

export default [
  takeEvery(AuthActions.FETCH_AUTH_TOKEN, fetchAuthTokenSaga),
  takeEvery(AuthActions.FETCH_AUTH_TOKEN_SUCCESS, fetchAuthTOkenSuccessSaga),
];
