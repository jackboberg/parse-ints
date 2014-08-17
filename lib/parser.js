var Q = require('q');

/**
 * Parser
 *
 * constructor
 *
 * @param   {string}    input   input string
 * @param   {integer}   radix   radix of input string
 */
function Parser(input, radix) {
  if ( ! (this instanceof Parser)) {
    return new Parser(input, radix);
  }
  this.input    = input;
  this.radix    = radix;
  this.integers = [];
}

/**
 * validateInput
 *
 * require input string and radix integer
 *
 * @returns {boolean}   promise
 *
 */
Parser.prototype.validateInput = function () {
  if (typeof this.input !== 'string') {
    return Q.reject(new Error('input must be a string'));
  }
  if ( ! parseInt(this.radix)) {
    return Q.reject(new Error('radix must be a integer'));
  }
  return Q.resolve(true);
};

/**
 * getIntegers
 *
 * process input string into array of integers
 *
 * @returns {array}               promise for array of integers
 *
 */
Parser.prototype.getIntegers = function() {
  return this.validateInput()
    .then(Q.resolve.bind(Q, this.integers))
    ;
};

module.exports = Parser;
