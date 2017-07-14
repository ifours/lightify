import reducer from '../index';

describe('Root reducer', () => {
  it('should return backbone of the application state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });
});
