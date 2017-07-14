import { put, takeEvery, call, select } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import Repository from 'services/Repository';
import { trackListFromPlaylistSchema, playlistSchema } from 'schemas';

import { getTracksHrefFromPlaylist, getToken, getPlaylist } from 'selectors';

function* fetchPlaylist(userId, playlistId) {
  const token = yield select(getToken);

  const playlist = yield call(Repository.fetchPlaylist, userId, playlistId, token);
  const payload = yield call(normalize, playlist, playlistSchema);

  yield put({ type: 'PERSIST_ENTITY', payload });
}

function* fetchTracks(playlistId) {
  const token = yield select(getToken);
  const href = yield select(getTracksHrefFromPlaylist, playlistId);

  const { items } = yield call(Repository.fetchPlaylistTracks, href, token);
  const payload = yield call(normalize, items, trackListFromPlaylistSchema);

  yield put({ type: 'FETCH_TRACKS_SUCCEEDED', payload: { ...payload, playlistId } });
}

export default function* watchFetchPlaylist() {
  yield takeEvery('FETCH_PLAYLIST_REQUEST', function* ({ payload: { userId, playlistId } }) {
    const playlist = yield select(getPlaylist, playlistId);

    if (!playlist) {
      yield call(fetchPlaylist, userId, playlistId);
    } else {
      yield call(fetchTracks, playlistId);
    }
  });
}
