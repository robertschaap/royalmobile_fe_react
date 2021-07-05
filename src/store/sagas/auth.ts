import { SagaIterator } from 'redux-saga';
import { call, takeEvery } from 'redux-saga/effects';

import routes from '../../constants/routes';
import history from '../../history';
import api from '../../utils/api';
import {
  AuthActions,
  FetchAuthTokenAction,
  fetchAuthTokenError,
  fetchAuthTokenSuccess,
} from '../ducks/auth';

function* fetchAuthTokenSaga({ payload: loginDetails }: FetchAuthTokenAction): SagaIterator {
  yield call(api.post, {
    url: routes.API_AUTH,
    body: loginDetails,
    onSuccessAction: fetchAuthTokenSuccess,
    onErrorAction: fetchAuthTokenError,
  });
}

function* fetchAuthTokenSuccessSaga(): SagaIterator {
  yield call(() => history.push(routes.MY_ACCOUNT_PAGE));
}

export default [
  takeEvery(AuthActions.FETCH_AUTH_TOKEN, fetchAuthTokenSaga),
  takeEvery(AuthActions.FETCH_AUTH_TOKEN_SUCCESS, fetchAuthTokenSuccessSaga),
];
