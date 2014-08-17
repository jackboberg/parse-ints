var expect = require('chai').expect;
var Q      = require('q');

var subject = require('../');

var validString = '';
var validRadix  = 10;

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

it('accepts a string and radix as parameters', function() {
  return subject(validString, validRadix).then(function(){
    expect(true).to.be.ok;
  });
});

it('errors if not passed a string', function() {
  var invalid = [
    undefined,
    null,
    [],
    {}
  ];
  return invalid.reduce(function (promise, input) {
    return promise.then(function () {
      return subject(input, validRadix).then(
        function success() {
          expect(true).to.be.false; // should never get here
        },
        function fail(error) {
          expect(error).to.be.instanceof(Error);
        }
      );
    });
  }, Q.resolve());
});

it('errors if not passed a radix', function() {
  var invalid = [
    undefined,
    null,
    '',
    [],
    {}
  ];
  return invalid.reduce(function (promise, radix) {
    return promise.then(function () {
      return subject(validString, radix).then(
        function success() {
          expect(true).to.be.false; // should never get here
        },
        function fail(error) {
          expect(error).to.be.instanceof(Error);
        }
      );
    });
  }, Q.resolve());
});

