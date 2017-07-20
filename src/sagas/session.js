import { take, call, all, apply } from 'redux-saga/effects';

import Repository from 'services/Repository';
import history from '../history';

export function* authorize() {
  yield take('AUTHORIZE_REQUEST');
  yield call(Repository.authorize);
}

export function* session() {
  const { payload } = yield take('AUTH_TOKEN_RECEIVE');
  yield apply(sessionStorage, sessionStorage.setItem, ['session', JSON.stringify(payload)]);

  yield take('AUTH_TOKEN_EXPIRE');
  yield apply(sessionStorage, sessionStorage.setItem, ['session', JSON.stringify({})]);
  yield apply(history, history.push, ['/']);
}

export default function* watchSession() {
  yield all([
    session(),
    authorize(),
  ])
}