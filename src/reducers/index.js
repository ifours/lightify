import { combineReducers } from 'redux';

import entities from './entities';
import featured from './featured';
import session from './session';

const rootReducers = {
  entities,
  featured,
  session,
};

export default combineReducers(rootReducers);
