import { all, put } from 'redux-saga/effects';

import watchFetchFeaturedPlaylists from './featured-playlists';
import watchFetchPlaylist from './playlist';
import watchSession from './session';

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
      } else {
        console.error(error);
      }
    }
  }
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchSession(),
    watchRemoteDataRequests(),
  ]);
}
