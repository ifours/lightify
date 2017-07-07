import { combineReducers } from 'redux';

import entities from './entities';
import resources from './resources';

const rootReducers = {
  entities,
  resources,
};

export default combineReducers(rootReducers);
