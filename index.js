var Q = require('q');

/**
 * parseInts
 *
 * Parse integers from more complicated strings
 *
 * @param   {string}    string    input string
 * @param   {integer}   radix     radix of input string
 * @param   {function}  fn        (optional) callback
 * @returns {array}               promise for array of integers
 */
module.exports = function parseInts(string, radix, fn) {
  var defered = Q.defer();

  if (typeof string !== 'string') {
    defered.reject(new Error('input must be a string'));
  }
  if ( ! parseInt(radix)) {
    defered.reject(new Error('radix must be a integer'));
  }

  defered.resolve([]);
  return defered.promise.nodeify(fn);
};
