import reducer, { initialState } from '../session';

describe('Session reducer', () => {
  it('should return initialState', () => {
    const state = reducer(undefined, {});

    expect(state).toMatchSnapshot();
    expect(state).toBe(initialState);
  });

  it('should return new state for AUTH_TOKEN_RECEIVE action', () => {
    const payload = {
      accessToken: 'foo',
      expiresIn: 'bar',
      date: 'baz',
    };
    const state = reducer(undefined, { type: 'AUTH_TOKEN_RECEIVE', payload });

    expect(state).toMatchSnapshot();
  });

  it('should return initial state for AUTH_TOKEN_EXPIRE action', () => {
    const state = {
      accessToken: 'foo',
      expiresIn: 'bar',
      date: 'baz',
    };
    const newState = reducer(state, { type: 'AUTH_TOKEN_EXPIRE' });
    
    expect(newState).toMatchSnapshot();
    expect(newState).toBe(initialState);
  });
});
