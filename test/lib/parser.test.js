var expect = require('chai').expect;
var Q      = require('q');

var Parser  = require('../../lib/parser');

var validString = '';
var validRadix  = 10;

describe('lib/parser', function() {
  var parser;
  var subject;

  beforeEach(function () {
    parser = new Parser();
  });

  describe('validateInput', function() {
    beforeEach(function () {
      subject = parser.validateInput;
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

    it('errors if not passed a non-integer radix', function() {
      var invalid = [
        'string',
        [],
        {},
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
  });
});

