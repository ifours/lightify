import { createSelector } from 'reselect';

const getResourceEntities = state => state.entities.resources;
const getResourceList = state => state.resources;

export const getResources = createSelector(
  getResourceEntities,
  getResourceList,
  (resourceEntities, resourceList) => resourceList.map(id => resourceEntities[id])
);

const getPlaylistEntities = state => state.entities.playlists;
const getFeatured = state => state.featured;

export const getFeaturedPlaylists = createSelector(
  getPlaylistEntities,
  getFeatured,
  (playlistsEntities, featured) => ({
    ...featured,
    playlists: {
      ...featured.playlists,
      items: featured.playlists.items.map(id => playlistsEntities[id])
    }
  })
);

const getAlbumEntities = state => state.entities.albums;
const getReleases = state => state.releases;

export const getNewReleases = createSelector(
  getAlbumEntities,
  getReleases,
  (albumsEntities, releases) => releases.items.map(id => albumsEntities[id])
);

export const isLoggedIn = state => !!state.session.token;
export const getToken = state => state.session.token;
