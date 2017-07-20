import { call, take, apply } from 'redux-saga/effects';

import Repository from 'services/Repository';
import history from '../../history';

import watcher, { authorize, session } from '../session';

beforeEach(() => {
  global.sessionStorage = jest.fn();
  global.sessionStorage.setItem = jest.fn();
  global.sessionStorage.getItem = jest.fn();
});

describe('Session saga', () => {
  it('should run authorize', () => {
    let next = {};
    const gen = authorize();

    next = gen.next();
    expect(next.value).toMatchSnapshot();
    expect(next.value).toEqual(take('AUTHORIZE_REQUEST'));

    next = gen.next();
    expect(next.value).toMatchSnapshot();
    expect(next.value).toEqual(call(Repository.authorize));
  });

  it('should run session', () => {
    let next = {};
    const gen = session();

    next = gen.next();
    expect(next.value).toMatchSnapshot();
    expect(next.value).toEqual(take('AUTH_TOKEN_RECEIVE'));

    const payload = { foo: 'bar' };
    const action = { payload };

    next = gen.next(action);
    expect(next.value).toMatchSnapshot();
    expect(next.value).toEqual(apply(sessionStorage, sessionStorage.setItem, ['session', JSON.stringify(payload)]));

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

  it('should run watcher', () => {
    let next = {};
    const gen = watcher();

    next = gen.next();
    expect(next.value).toMatchSnapshot();
  });
});
