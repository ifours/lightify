export const initialState = {
  message: '',
  playlists: {
    items: [],
  },
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FETCH_FEATURED_PLAYLISTS_SUCCEEDED':
      return payload.result;
    default:
      return state;
  }
};
