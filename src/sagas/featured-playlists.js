import { put, takeEvery, call, select } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { getToken, getFeatured } from 'selectors';
import { playlistListSchema } from 'schemas';
import Repository from 'services/Repository';

export function* fetchFeaturedPlaylists() {
  const { playlists: { items = [] } } = yield select(getFeatured);

  if (items.length) return;

  const token = yield select(getToken);
  const resources = yield call(Repository.getFeaturedPlaylists, token);
  const data = yield call(normalize, resources, {
    playlists: { items: playlistListSchema }
  });

  yield put({ type: 'FETCH_FEATURED_PLAYLISTS_SUCCEEDED', payload: data });
}

export default function* watchFetchFeaturedPlaylists() {
  yield takeEvery('FETCH_FEATURED_PLAYLISTS_REQUEST', fetchFeaturedPlaylists);
}
