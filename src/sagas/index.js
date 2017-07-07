import { all } from 'redux-saga/effects';

import helloSaga from './test';
import watchFetchResources from './resources';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchFetchResources()
  ])
}
