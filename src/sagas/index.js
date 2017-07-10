import { all, put, takeEvery, call, select } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import Repository from 'services/Repository';
import { trackListFromPlaylistSchema } from 'schemas';

import { getTracksHrefFromPlaylist, getToken } from 'selectors';

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

function* fetchPlaylistTracks(action) {
  const { payload: { id } } = action;

  const token = yield select(getToken);
  const href = yield select(getTracksHrefFromPlaylist, id);
  const { items } = yield call(Repository.fetchPlaylistTracks, href, token);
  const normalizedData = normalize(items, trackListFromPlaylistSchema);

  yield put({ type: 'FETCH_TRACKS_SUCCEEDED', payload: { ...normalizedData, playlistId: id } });
}

function* watchFetchPlaylistTracks() {
  yield takeEvery('FETCH_PLAYLIST_REQUEST', fetchPlaylistTracks);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchFetchResources(),
    watchFetchNewReleases(),
    watchFetchFeaturedPlaylists(),
    watchAuthorize(),
    watchFetchPlaylistTracks(),
  ])
}
