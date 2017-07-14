const initialState = {
  accessToken: undefined,
  expiresIn: 0,
  date: 0,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'AUTH_TOKEN_RECEIVE':
      return payload;
    case 'AUTH_TOKEN_EXPIRE':
      return initialState;
    default:
      return state;
  }
};
