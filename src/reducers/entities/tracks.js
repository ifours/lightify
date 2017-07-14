export const initialState = {};

export default (state = initialState, action) => {
  const { payload } = action;

  if (payload && payload.entities && payload.entities.tracks) {
    return { ...state, ...payload.entities.tracks };
  }

  return state;
};
