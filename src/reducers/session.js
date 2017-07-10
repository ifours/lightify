const initialState = {
  token: undefined,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'AUTH_TOKEN_RECEIVE':
      return { ...state, token: payload };
    default:
      return state;
  }
};
