var expect = require('chai').expect;

var subject = require('../');

var validString = '1,3-5,7-9';
var validRadix  = 10;

describe('index', function() {
  it('exports a single function', function () {
    expect(subject).to.be.a('function');
  });

  it('returns a promise', function() {
    expect(subject(validString, validRadix).then).to.be.a('function');
  });

  it('supports passing an optional callback', function(done) {
    subject(validString, validRadix, function (error, result) {
      expect(error).to.not.exist;
      expect(result).to.be.ok;
      done();
    });
  });

  it('resolves to an array', function() {
    return subject(validString, validRadix).then(function (result) {
      expect(result).to.be.an('array');
    });
  });

  describe('examples', function() {
    it('defaults to radix=10', function() {
      return subject(validString).then(function (result) {
        expect(result).to.include.members([1,3,4,5,7,8,9]);
      });
    });

    it('supports setting a radix', function() {
      return subject('10,100-110', 2).then(function (result) {
        expect(result).to.include.members([2,4,5,6]);
      });
    });
  });
});
