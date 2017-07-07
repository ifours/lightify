import { combineReducers } from 'redux';

import entities from './entities';
import resources from './resources';
import featured from './featured';
import releases from './releases';

const rootReducers = {
  entities,
  resources,
  releases,
  featured,
};

export default combineReducers(rootReducers);
