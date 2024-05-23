/**
 * Express app test suite
 */
const { expect } = require('chai');
const request = require('request');

const HOST = '127.0.0.1';
const PORT = '7865';

describe('Express app test suite', function() {
  it('should return home page', function(done) {
    request.get(`http://${HOST}:${PORT}/`, (error, res, body) => {
      if (error) expect(res.statusCode).to.not.equal(200);
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
