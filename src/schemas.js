import { schema } from 'normalizr';

export const resourcesSchema = new schema.Entity('resources');
export const resourcesListSchema = [resourcesSchema];
