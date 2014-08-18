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
 * getSubStrings
 *
 * split input string on commas and strip whitespace
 *
 * @returns {array}     promise for array of substrings
 *
 */
Parser.prototype.getSubStrings = function() {
  var subStrings = this.input.split(',')
    .map(function stripSpaces(string) {
      return string.replace(/\s/g,'');
    });
  return Q.resolve(subStrings);
};

/**
 * parseRange
 *
 * get all integers in range
 *
 * @param   {string}    subString   string in format "1-3"
 * @returns {undefined}
 *
 */
Parser.prototype.parseRange = function (subString) {
  var subStrings = subString.split('-');
  if (subStrings.length > 2) {
    return Q.reject(new Error('ranges must be only two numbers'));
  }
  var start = parseInt(subStrings[0], this.radix);
  var end = parseInt(subStrings[1], this.radix);
  for (var i = start; i <= end; i++) {
    this.integers.push(i);
  }
  return Q.resolve();
};

/**
 * parseSubString
 *
 * parse subString or delegate to parseRange
 *
 * @param   {string}    subString   string in unknown format, "1" | "1-3"
 * @returns {undefined}
 */
Parser.prototype.parseSubString = function (subString) {
  if (subString.indexOf('-') >= 0) {
    return this.parseRange(subString);
  } else {
    this.integers.push(parseInt(subString, this.radix));
    return Q.resolve();
  }
};

/**
 * parseSubStrings
 *
 * parse each sub-string and push to integers collection
 *
 * @param   {array}     subStrings   array of subStrings in unknown format
 * @returns {undefined}
 */
Parser.prototype.parseSubStrings = function (subStrings) {
  return subStrings.reduce(function (promise, subString) {
    return promise.then(this.parseSubString.bind(this, subString));
  }.bind(this), Q.resolve());
};

/**
 * getIntegers
 *
 * process input string into array of integers
 *
 * @returns {array}     promise for array of integers
 *
 */
Parser.prototype.getIntegers = function() {
  return this.validateInput()
    .then(this.getSubStrings.bind(this))
    .then(this.parseSubStrings.bind(this))
    .then(Q.resolve.bind(Q, this.integers))
    ;
};

module.exports = Parser;
