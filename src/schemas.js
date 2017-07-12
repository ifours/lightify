import { schema } from 'normalizr';

export const resourcesSchema = new schema.Entity('resources');
export const resourcesListSchema = [resourcesSchema];

export const albumSchema = new schema.Entity('albums');
export const albumListSchema = [albumSchema];

export const trackSchema = new schema.Entity('tracks');
export const trackListFromPlaylistSchema = [{ track: trackSchema }];

export const playlistSchema = new schema.Entity('playlists', {
  tracks: { items: trackListFromPlaylistSchema }
});
export const playlistListSchema = [playlistSchema];
