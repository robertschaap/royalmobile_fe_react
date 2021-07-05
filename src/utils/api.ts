import { put, select } from 'redux-saga/effects';

import { selectAuthToken } from '../store';

interface ApiCallBaseProps {
  onErrorAction: Function;
  onSuccessAction: Function;
  options?: Record<string, unknown>;
  url: string;
}

interface ApiCallWithOptionalBodyProps extends ApiCallBaseProps {
  body?: Record<string, unknown>;
}

interface ApiResponse {
  status: 'success' | 'error';
  data: unknown;
  message?: string;
}

function* apiCall(props: ApiCallBaseProps) {
  const {
    onSuccessAction,
    onErrorAction,
    options,
    url,
  } = props;

  try {
    const apiRes: Response = yield fetch(url, options);
    const res: ApiResponse = yield apiRes.json();

    if (res.status === 'success') {
      yield put(onSuccessAction(res.data));
    } else {
      throw new Error(res.message);
    }
  } catch (error) {
    yield put(onErrorAction(''));
  }
}

function* get(props: ApiCallBaseProps) {
  const authToken: ReturnType<typeof selectAuthToken> = yield select(selectAuthToken);

  if (authToken) {
    yield apiCall({
      ...props,
      options: {
        method: 'GET',
        headers: {
          authorization: authToken,
        },
      },
    });
  } else {
    yield apiCall(props);
  }
}

function withBody(method: 'DELETE' | 'PATCH' | 'POST') {
  return function* methodFunction(props: ApiCallWithOptionalBodyProps) {
    const authToken: ReturnType<typeof selectAuthToken> = yield select(selectAuthToken);

    const options = {
      method,
      body: JSON.stringify(props.body),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        ...(authToken ? { Authorisation: authToken } : {}),
      },
    };

    yield apiCall({ ...props, options });
  };
}

export default {
  get,
  delete: withBody('DELETE'),
  patch: withBody('PATCH'),
  post: withBody('POST'),
};
