var expect = require('chai').expect;
var Q      = require('q');

var Parser  = require('../../lib/parser');

var validString = '1,2,3';
var validRadix  = 10;

describe('lib/parser', function() {
  var parser;
  var subject;

  beforeEach(function () {
    parser = new Parser(validString, validRadix);
  });

  describe('validateInput', function() {
    beforeEach(function () {
      subject = parser.validateInput;
    });

    it('accepts a string and radix as parameters', function() {
      return subject.call(parser).then(function(){
        expect(true).to.be.ok;
      });
    });

    it('errors if input is not a string', function() {
      var invalid = [
        undefined,
        null,
        [],
        {}
      ];
      return invalid.reduce(function (promise, input) {
        return promise.then(function () {
          parser.input = input;
          return subject.call(parser).then(
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

    it('errors if radix is not an integer', function() {
      var invalid = [
        'string',
        [],
        {},
      ];
      return invalid.reduce(function (promise, radix) {
        return promise.then(function () {
          parser.radix = radix;
          return subject.call(parser).then(
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
  });
});

