import { combineReducers } from 'redux';

import albums from './albums';
import playlists from './playlists';
import tracks from './tracks';

export default combineReducers({
  albums,
  playlists,
  tracks,
});
