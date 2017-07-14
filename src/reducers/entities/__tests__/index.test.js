import reducer from '../index';

describe('Entities root reducer', () => {
  it('should return backbone of stities state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });
});
