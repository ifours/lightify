import { put, takeEvery, call } from 'redux-saga/effects';

import Repository from 'services/Repository';

function* authorize() {
  yield put({ type: 'AUTHORIZE_REQUEST' });
  yield call(Repository.authorize);
}

export default function* watchAuthorize() {
  yield takeEvery('AUTHORIZE', authorize);
}
