import { put, takeEvery, call } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { albumListSchema } from 'schemas';
import Repository from 'services/Repository';

// Our worker Saga: will perform the async increment task
export function* fetchNewReleases() {
  const { albums } = yield call(Repository.getNewReleases);
  const data = normalize(albums, {
    items: albumListSchema
  });

  yield put({ type: 'FETCH_NEW_RELEASES_SUCCEEDED', payload: data });
}

// Our watcher Saga: spawn a new fetchResources task on each INCREMENT_ASYNC
export default function* watchFetchNewReleases() {
  yield takeEvery('FETCH_NEW_RELEASES_REQUEST', fetchNewReleases);
}
