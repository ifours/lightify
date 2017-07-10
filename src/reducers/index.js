import { combineReducers } from 'redux';

import entities from './entities';
import resources from './resources';
import featured from './featured';
import releases from './releases';
import session from './session';

const rootReducers = {
  entities,
  resources,
  releases,
  featured,
  session,
};

export default combineReducers(rootReducers);
