import { put } from 'redux-saga/effects';

interface ApiCallProps {
  onErrorAction: Function;
  onSuccessAction: Function;
  options?: Object;
  url: string;
}

interface ApiCallPostProps extends ApiCallProps {
  body: Object;
}

function* apiCall(props: ApiCallProps) {
  const {
    onSuccessAction,
    onErrorAction,
    options,
    url,
  } = props;

  try {
    const apiRes = yield fetch(url, options);
    const res = yield apiRes.json();

    if (res.status === 'success') {
      yield put(onSuccessAction(res.data));
    } else {
      throw new Error(res.message);
    }
  } catch (error) {
    yield put(onErrorAction(''));
  }
}

function* get(props: ApiCallProps) {
  yield apiCall(props);
}

function* post(props: ApiCallPostProps) {
  const options = {
    method: 'post',
    body: JSON.stringify(props.body),
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  };

  yield apiCall({ ...props, options });
}

export default {
  get,
  post,
};
