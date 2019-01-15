const transformer = require('./transformer');


describe.skip('transformer', () => {
  it('transforms txt a file', () => {
    return transformer('./transform.txt')
      .then(transTxt => {
        expect().toEqual();
        expect().toEqual();
        expect().toEqual();
        expect(transTxt).toEqual('i here');
      });
  });
});
