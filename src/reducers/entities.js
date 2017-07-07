export const initialState = {
  resources: {},
  playlists: {},
  albums: {},
};

export default function entities(state = initialState, action) {
  const { payload } = action;

  if (payload && payload.entities) {
    const {
      resources: currentResources,
      playlists: currentPlaylists,
      albums: currentAlbums,
    } = state;
    const { resources, playlists, albums } = payload.entities;

    return {
      resources: { ...currentResources, ...resources },
      playlists: { ...currentPlaylists, ...playlists },
      albums: { ...currentAlbums, ...albums },
    };
  }

  return state;
}
