import { all, put, apply } from 'redux-saga/effects';

import watchFetchFeaturedPlaylists from './featured-playlists';
import watchFetchPlaylist from './playlist';
import watchAuthorize from './authorize';

import history from '../history';

// entry point to start Sagas for remote data
function* watchRemoteDataRequests() {
  while (true) {
    try {
      yield all([
        watchFetchFeaturedPlaylists(),
        watchFetchPlaylist(),
      ]);
    } catch(error) {
      if (error.status === 401) {
        yield put({ type: 'AUTH_TOKEN_EXPIRE' });
        yield apply(sessionStorage, sessionStorage.setItem, ['session', JSON.stringify({})]);
        yield apply(history, history.push, '/');
      } else {
        console.error(error);
      }
    }
  }
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchAuthorize(),
    watchRemoteDataRequests(),
  ]);
}
