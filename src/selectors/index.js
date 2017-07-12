import { createSelector } from 'reselect';

const getPlaylistEntities = state => state.entities.playlists;
export const getFeatured = state => state.featured;

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

export const getPlaylist = (state, id) => state.entities.playlists[id];
export const getTracksHrefFromPlaylist = (state, id) => getPlaylist(state, id).tracks.href;

export const getTracksEntities = state => state.entities.tracks;

export const getPlaylistTracks = createSelector(
  getTracksEntities,
  getPlaylist,
  (tracksEntities, playlist) => {
    if (!playlist) return [];

    const { tracks: { items = [] } } = playlist;

    return items.map(({ track: id }) => tracksEntities[id]);
  }
);
