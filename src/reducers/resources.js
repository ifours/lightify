const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FETCH_RESOURCES_SUCCEEDED':
      return payload.result;
    default:
      return state;
  }
};
