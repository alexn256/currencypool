const fetch = require("node-fetch");
const request = require('supertest');
const getRate = require('../src/api/Api');

test('real fetch call', async () => {
    const url = 'http://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/uah.json';
    const response = await request(getRate).get(url);

    expect(response.status).toBe(200);  // Success!
});