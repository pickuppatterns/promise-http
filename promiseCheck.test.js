const fs = require('fs');

describe.skip('promisecheck'), () => {
  it('returns true if it is a promise', () => {
    expect(promiseCheck(fs.readFile('./http.md'))).toBeTruthy();
  });


};
