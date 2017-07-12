import { all, put, takeEvery, call, select } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import Repository from 'services/Repository';
import { trackListFromPlaylistSchema, playlistSchema } from 'schemas';

import { getTracksHrefFromPlaylist, getToken, getPlaylist } from 'selectors';

import watchFetchFeaturedPlaylists from './featured-playlists';

function* authorize() {
  yield put({ type: 'AUTHORIZE_REQUEST', payload: {} });
  yield call(Repository.authorize);
}

function* watchAuthorize() {
  yield takeEvery('AUTHORIZE', authorize);
}

function* fetchPlaylist(userId, playlistId) {
  const token = yield select(getToken);

  const playlist = yield call(Repository.fetchPlaylist, userId, playlistId, token);
  const normalizedData = normalize(playlist, playlistSchema);

  yield put({ type: 'PERSIST_ENTITY', payload: normalizedData });
}

function* fetchPlaylistTracks(action) {
  const { payload: { userId, playlistId } } = action;

  const token = yield select(getToken);
  const playlist = yield select(getPlaylist);

  if (!playlist) {
    yield call(fetchPlaylist, userId, playlistId);
  } else {
    const href = yield select(getTracksHrefFromPlaylist, playlistId);
    const { items } = yield call(Repository.fetchPlaylistTracks, href, token);
    const normalizedData = normalize(items, trackListFromPlaylistSchema);

    yield put({ type: 'FETCH_TRACKS_SUCCEEDED', payload: { ...normalizedData, playlistId } });
  }
}

function* watchFetchPlaylistTracks() {
  yield takeEvery('FETCH_PLAYLIST_REQUEST', fetchPlaylistTracks);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchFetchFeaturedPlaylists(),
    watchAuthorize(),
    watchFetchPlaylistTracks(),
  ])
}
