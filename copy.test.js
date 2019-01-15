const copy = require('./copy');
const fs = require('fs');


describe('copy', () => {
  afterEach(() => {
    delete('./.travis-copy.yml');
  });
  it('copies a file', () => {
    return copy('./.travis.yml', './.travis-copy.yml')
      .then(() => {
        expect(fs.readFileSync('./.travis.yml')).toEqual(fs.readFileSync('./.travis-copy.yml'));
      })
      .catch(err => expect(err).toBeFalsy());
  });
});
