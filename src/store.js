import configureStore from 'store/configureStore';

export const store = configureStore();
export const dispatch = store.dispatch;
export const getState = store.getState;

export default store;
