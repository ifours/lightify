export const initialState = {
  resources: {},
  playlists: {},
  albums: {},
  tracks: {},
};

export default function entities(state = initialState, action) {
  const { payload, type } = action;
  const {
    resources: currentResources,
    playlists: currentPlaylists,
    albums: currentAlbums,
    tracks: currentTracks,
  } = state;

  if (type === 'FETCH_TRACKS_SUCCEEDED') {
    const { playlistId, result, entities: { tracks } } = payload;
    const currentPlaylistById = currentPlaylists[playlistId];

    return {
      ...state,
      playlists: {
        ...currentPlaylists,
        [playlistId]: {
          ...currentPlaylistById,
          tracks: {
            ...currentPlaylistById.tracks,
            items: result
          }
        }
      },
      tracks: { ...currentTracks, ...tracks }
    };
  }

  if (payload && payload.entities) {
    const { resources, playlists, albums, tracks } = payload.entities;

    return {
      resources: { ...currentResources, ...resources },
      playlists: { ...currentPlaylists, ...playlists },
      albums: { ...currentAlbums, ...albums },
      tracks: { ...currentTracks, ...tracks },
    };
  }

  return state;
}
