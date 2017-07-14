export const initialState = {};

export default (state = initialState, action) => {
  const { type, payload } = action;

  if (type === 'FETCH_TRACKS_SUCCEEDED') {
    const { playlistId, result } = payload;
    const playlist = state[playlistId];
    const { tracks } = playlist;

    return { ...state, [playlistId]: { ...playlist, tracks: { ...tracks, items: result } } };
  }

  if (payload && payload.entities && payload.entities.playlists) {
    return { ...state, ...payload.entities.playlists };
  }

  return state;
};
