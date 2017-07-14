import { combineReducers } from 'redux';

import entities from './entities';
import featured from './featured';
import session from './session';

export default combineReducers({
  entities,
  featured,
  session,
});
