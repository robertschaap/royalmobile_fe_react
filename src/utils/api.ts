import { put } from 'redux-saga/effects';

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
    const apiRes = yield fetch(url, options);
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
  yield apiCall(props);
}

function withBody(method: string) {
  return function* methodFunction(props: ApiCallWithOptionalBodyProps) {
    const options = {
      method,
      body: JSON.stringify(props.body),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
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
