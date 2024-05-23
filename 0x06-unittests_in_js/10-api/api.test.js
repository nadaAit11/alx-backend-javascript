/**
 * Express app test suite
 */
const { expect } = require('chai');
const request = require('request');

const HOST = '127.0.0.1';
const PORT = '7865';

describe('Express app test suite', function() {
  describe('/', function() {
    it('should return home page', function(done) {
      request.get(`http://${HOST}:${PORT}/`, (error, res, body) => {
        if (error) expect(res.statusCode).to.not.equal(200);
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
  describe('/cart:id', function() {
    it('should return cart page with cart id', function(done) {
      request.get(`http://${HOST}:${PORT}/cart/14`, (error, res, body) => {
        if (error) expect(res.statusCode).to.not.equal(200);
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 14');
        done();
      });
    });
    it('should return an error if :id parameter is not a number', function(done) {
      request.get(`http://${HOST}:${PORT}/cart/ae`, (error, res, body) => {
        if (error) expect(res.statusCode).to.not.equal(200);
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('/available_payment', function() {
    it('should get the the available payment method', function(done) {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      request.get(`http://${HOST}:${PORT}/available_payments`, (error, res, body) => {
        if (error) expect(res.statusCode).to.not.equal(200);
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal(JSON.stringify(expectedResponse));
        done();
      });
    });
  });
  describe('/login', function() {
    it('should get the the available payment method', function(done) {
      const userName = 'Tester';
      request.post({ url: `http://${HOST}:${PORT}/login`, form: { userName } },
        (error, res, body) => {
          if (error) expect(res.statusCode).to.not.equal(200);
          expect(res.statusCode).to.equal(200);
          expect(body).to.equal('Welcome Tester');
          done();
        });
    });
  });
});
