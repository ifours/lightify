import { all, put, takeEvery, call } from 'redux-saga/effects';

import Repository from 'services/Repository';

import watchFetchResources from './resources';
import watchFetchFeaturedPlaylists from './featured-playlists';
import watchFetchNewReleases from './new-releases';

function* authorize() {
  yield put({ type: 'AUTHORIZE_REQUEST', payload: {} });
  yield call(Repository.authorize);
}

function* watchAuthorize() {
  yield takeEvery('AUTHORIZE', authorize);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchFetchResources(),
    watchFetchNewReleases(),
    watchFetchFeaturedPlaylists(),
    watchAuthorize(),
    yield takeEvery('BOOTSTRAP', authorize),
  ])
}
