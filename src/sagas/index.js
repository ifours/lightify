import { all, put, apply, fork, call } from 'redux-saga/effects';

import watchFetchFeaturedPlaylist from './featured';
import watchFetchPlaylist from './playlist';
import sessionSaga from './session';

import history from '../history';

function* watchRemoteDataRequests() {
  while (true) {
    try {
      yield all([
        watchFetchFeaturedPlaylist(),
        watchFetchPlaylist(),
      ]);
    } catch(error) {
      const { status } = error;

      if (status === 401) {
        yield put({ type: 'AUTH_TOKEN_EXPIRE' });
      } else if (status === 404) {
        yield apply(history, history.push, ['/404']);
      } else {
        console.error(error);
      }
    }
  }
}

export default function* rootSaga() {
  yield fork(sessionSaga);

  yield call(watchRemoteDataRequests);
}
