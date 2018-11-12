import { take, call, apply, put, select } from 'redux-saga/effects';
import qs from 'qs';

import Repository from 'services/Repository';
import { isLoggedIn } from 'selectors';

import history from '../history';

export function* authorize() {
  const loggedIn = yield select(isLoggedIn);

  if (loggedIn) return yield;

  const { location: { hash, search } } = history;
  const { error } = qs.parse(search, { ignoreQueryPrefix: true });
  const { access_token: accessToken, expires_in: expiresIn } = qs.parse(hash.replace('#', ''));

  if (error) return yield;

  if (accessToken && expiresIn) {
    const payload = {
      accessToken,
      date: Date.now(),
      expiresIn: parseInt(expiresIn, 10)
    };

    yield put({
      type: 'AUTH_TOKEN_RECEIVE',
      payload
    });

    yield apply(sessionStorage, sessionStorage.setItem, ['session', JSON.stringify(payload)]);
    yield apply(history, history.replace, ['/']);

    return yield;
  }

  yield call(Repository.authorize);
}

export function* tokenExpire() {
  yield take('AUTH_TOKEN_EXPIRE');
  yield apply(sessionStorage, sessionStorage.setItem, ['session', JSON.stringify({})]);
  yield apply(history, history.push, ['/']);
}

export default function* watchSession() {
  while(true) {
    yield call(authorize);
    yield call(tokenExpire);
  }
}
