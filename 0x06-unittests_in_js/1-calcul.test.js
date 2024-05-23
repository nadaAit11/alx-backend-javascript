/**
 * 1-calculus.js.calculateNumber test suite
 */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber nodejs assertion test suite', function() {
  describe('#SUM operation', function() {
    it('should return the sum of its rounded arguments', function() {
      assert.equal(calculateNumber('SUM', 1, 3), 4);
      assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    });
  });
  describe('#SUBTRACT operation', function() {
    it('should return the subtraction of its rounded arguments', function() {
      assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
      assert.equal(calculateNumber('SUBTRACT', 3, 2), 1);
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      assert.equal(calculateNumber('SUBTRACT', 3.7, 1.5), 2);
    });
  });
  describe('#DIVIDE operation', function() {
    it('should return the quotient from the division its rounded arguments', function() {
      assert.equal(calculateNumber('DIVIDE', 3, 1), 3);
      assert.equal(calculateNumber('DIVIDE', 3.1, 1.5), 1.5);
      assert.equal(calculateNumber('DIVIDE', 6.5, 1.5), 3.5);
      assert.equal(calculateNumber('DIVIDE', -3.7, -1.5), 4);
      assert.equal(calculateNumber('DIVIDE', 3, 0), 'Error');
    });
  });
  describe('#INVALID operation', function() {
    it('should throw an exception for invalid type', function() {
      assert.throws(calculateNumber.bind('MULTIPLY', 1, 3));
      assert.throws(calculateNumber.bind(false, 1, 2));
    });
  });
});
