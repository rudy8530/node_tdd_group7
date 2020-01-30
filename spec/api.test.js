const request = require('supertest')
const app = require('../app')
const db = require('../models');
const cleanDb = require('./helpers/cleanDb')

describe('GET /', () => {
  let response;

  beforeEach(async () => {
    await cleanDb(db)
    response = await request(app).get('/');
  })

  test('It should respond with a 200 status code', async () => {
    expect(response.statusCode).toBe(200);
  });
  
  beforeAll(async () => {
    await cleanDb(db)
  });
  
  afterAll(async () => {
    await cleanDb(db)
    await db.close()
  });
});