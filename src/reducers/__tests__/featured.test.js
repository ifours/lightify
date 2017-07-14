import reducer, { initialState } from '../featured';

describe('Featured reducer', () => {
  it('should return initialState', () => {
    const state = reducer(undefined, {});

    expect(state).toMatchSnapshot();
    expect(state).toBe(initialState);
  });

  it('should return new state for FETCH_FEATURED_PLAYLISTS_SUCCEEDED action', () => {
    const result = {
      message: 'foo',
      playlists: {
        'bar': 'baz',
        items: [],
      },
    };
    const state = reducer(undefined, { type: 'FETCH_FEATURED_PLAYLISTS_SUCCEEDED', payload: { result } });

    expect(state).toMatchSnapshot();
  });
});
