import { take, apply } from 'redux-saga/effects';

import history from '../../history';

import { tokenExpire } from '../session';

beforeEach(() => {
  global.sessionStorage = jest.fn();
  global.sessionStorage.setItem = jest.fn();
  global.sessionStorage.getItem = jest.fn();
});

describe('Session saga', () => {
  it('should run tokenExpire', () => {
    let next = {};
    const gen = tokenExpire();

    next = gen.next();
    expect(next.value).toMatchSnapshot();
    expect(next.value).toEqual(take('AUTH_TOKEN_EXPIRE'));

    next = gen.next();
    expect(next.value).toMatchSnapshot();
    expect(next.value).toEqual(apply(sessionStorage, sessionStorage.setItem, ['session', JSON.stringify({})]));

    next = gen.next();
    expect(next.value).toMatchSnapshot();
    expect(next.value).toEqual(apply(history, history.push, ['/']));
  });
});
