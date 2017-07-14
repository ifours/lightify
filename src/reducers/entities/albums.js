export const initialState = {};

export default (state = initialState, action) => {
  const { payload } = action;

  if (payload && payload.entities && payload.entities.albums) {
    return { ...state, ...payload.entities.albums };
  }

  return state;
};
