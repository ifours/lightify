import { all } from 'redux-saga/effects';

import watchFetchResources from './resources';
import watchFetchFeaturedPlaylists from './featured-playlists';
import watchFetchNewReleases from './new-releases';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchFetchResources(),
    watchFetchNewReleases(),
    watchFetchFeaturedPlaylists()
  ])
}
