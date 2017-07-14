import reducer, { initialState } from '../albums';

describe('Albums entites reducer', () => {
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
    const payload = { entities: { albums: { quz: 'baz' } } };
    const newState = reducer(state, { type: 'quz', payload });

    expect(newState).toMatchSnapshot();
    expect(newState).not.toBe(state);
  });

  it('should return new state', () => {
    const state = { foo: 'bar' };
    const payload = { entities: { albums: { quz: 'baz', foo: 'new value' } } };
    const newState = reducer(state, { type: 'quz', payload });

    expect(newState).toMatchSnapshot();
    expect(newState).not.toBe(state);
  });
});
