import configureStore from 'store/configureStore';

export const store = configureStore();
export const dispatch = store.dispatch;
export const getState = store.getState;

store.subscribe(() => {
  sessionStorage.setItem('state', JSON.stringify(getState()));
});

export default store;
