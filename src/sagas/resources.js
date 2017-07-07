import { put, takeEvery, call } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { resourcesListSchema } from 'schemas';
import Repository from 'services/Repository';

// Our worker Saga: will perform the async increment task
export function* fetchResources() {
  const resources = yield call(Repository.getResources);
  const data = normalize(resources, resourcesListSchema);

  yield put({ type: 'FETCH_RESOURCES_SUCCEEDED', payload: data });
}

// Our watcher Saga: spawn a new fetchResources task on each INCREMENT_ASYNC
export default function* watchFetchResources() {
  yield takeEvery('FETCH_RESOURCES_REQUEST', fetchResources);
}
