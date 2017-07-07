const initialState = {
  items: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FETCH_NEW_RELEASES_SUCCEEDED':
      return payload.result;
    default:
      return state;
  }
};
