
const solution = require('../index.js');

const request = require('supertest');
const matchers = require('jest-supertest-matchers');

describe('requests', () => {
  it('GET /', async () => {
    const res = await request(solution())
      .get('/');
    expect(res.status).toEqual(200);
  });
});
