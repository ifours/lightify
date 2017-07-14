import reducer, { initialState } from '../playlists';

describe('Playlists entites reducer', () => {
  it('should return initialState', () => {
    const state = reducer(initialState, {});

    expect(state).toMatchSnapshot();
    expect(state).toBe(initialState);
  });

  it('should return the same state if payload doesn\'t have albums entites', () => {
    const state = { foo: 'bar' };
    const newState = reducer(state, { type: 'quz', payload: { foo: 'bar' } });

    expect(newState).toMatchSnapshot();
    expect(newState).toBe(state);
  });

  it('should return new state if payload has albums entites', () => {
    const state = { foo: 'bar' };
    const payload = { entities: { playlists: { quz: 'baz' } } };
    const newState = reducer(state, { type: 'quz', payload });

    expect(newState).toMatchSnapshot();
    expect(newState).not.toBe(state);
  });

  it('should return new state', () => {
    const state = { foo: 'bar' };
    const payload = { entities: { playlists: { quz: 'baz', foo: 'new value' } } };
    const newState = reducer(state, { type: 'quz', payload });

    expect(newState).toMatchSnapshot();
    expect(newState).not.toBe(state);
  });

  it('should return new state and update playlist\'s tracks', () => {
    const playlistId = 'fooId';
    const state = { [playlistId]: { tracks: { foo: 'bar' } } };
    const payload = {
      entities: { playlists: { quz: 'baz', foo: 'new value' } },
      result: ['foo', 'bar', 'bas'],
      playlistId
    };
    const newState = reducer(state, { type: 'FETCH_TRACKS_SUCCEEDED', payload });

    expect(newState).toMatchSnapshot();
    expect(newState).not.toBe(state);
  });
});
