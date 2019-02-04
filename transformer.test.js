const {
  transformer,
  removeCapitals,
  toUpperCase,
} = require('./transformer');


describe('transformer', () => {
  it('transforms txt a file', () => {
    return transformer('./transform.txt')
      .then(transTxt => {
        expect(transTxt).toEqual('EREH I');
      });
  });
  it('removes capital letters', () => {
    expect(removeCapitals('Hi There')).toEqual('i here');
  });
  it('makes all capital letters', () => {
    expect(toUpperCase('i here')).toEqual('I HERE');
  });
});
