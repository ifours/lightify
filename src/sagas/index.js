import { all, put, apply } from 'redux-saga/effects';

import watchFetchFeaturedPlaylists from './featured-playlists';
import watchFetchPlaylist from './playlist';
import watchSession from './session';

import history from '../history';

function* watchRemoteDataRequests() {
  while (true) {
    try {
      yield all([
        watchFetchFeaturedPlaylists(),
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
  yield all([
    watchSession(),
    watchRemoteDataRequests(),
  ]);
}
