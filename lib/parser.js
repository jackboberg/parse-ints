var Q = require('q');

/**
 * Parser
 *
 * constructor
 */
function Parser() {
  if ( ! (this instanceof Parser)) {
    return new Parser();
  }
}

/**
 * validateInput
 *
 * require input string and radix integer
 *
 * @param   {string}    string    input string
 * @param   {integer}   radix     radix of input string
 * @returns {boolean}             promise
 *
 */
Parser.prototype.validateInput = function (string, radix) {
  var defered = Q.defer();
  if (typeof string !== 'string') {
    defered.reject(new Error('input must be a string'));
  }
  if ( ! parseInt(radix)) {
    defered.reject(new Error('radix must be a integer'));
  }
  defered.resolve(true);
  return defered.promise;
};

module.exports = Parser;
