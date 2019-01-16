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
      .post('/note')
      .send({ text: 'Im a note' })
      .then(res => {
        expect(res.status).toEqual(204);
      });
  });
});
