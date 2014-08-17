var expect = require('chai').expect;

var subject = require('../');

var validString = '';
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
});
