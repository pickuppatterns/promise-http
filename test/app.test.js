const request = require('supertest');
const app = require('../lib/app');
//json app
// describe('app', () => {
//   it('has a testing route', () => {
//     return request(app)
//       .get('/tester')
//       .then(res => {
//         expect(res.body).toEqual({testing:123});
//       });
//   });
// });
//query app
describe('app', () => {
  it('has a testing route', () => {
    return request(app)
      .get(`/you?name=ryan`)
      .query({ name: 'ryan'})
      .then(res => {
        expect(res.body).toEqual({ hi: `there ryan});
      });
  });
});
