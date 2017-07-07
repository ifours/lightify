import { createSelector } from 'reselect';

const getResourceEntities = state => state.entities.resources;
const getResourceList = state => state.resources;

export const getResources = createSelector(
  getResourceEntities,
  getResourceList,
  (resourceEntities, resourceList) => resourceList.map(id => resourceEntities[id])
);
