export const initialState = {
  resources: {},
};

export default function entities(state = initialState, action) {
  const { payload } = action;

  if (payload && payload.entities) {
    const { resources: currentResources } = state;
    const { resources } = payload.entities;

    return { ...state, resources: { ...currentResources, ...resources } };
  }

  return state;
}
