var Q = require('q');

var Parser = require('./lib/parser');

/**
 * parseInts
 *
 * Parse integers from more complicated strings
 *
 * @param   {string}    string    input string
 * @param   {integer}   radix     (optional) radix of input string, default: 10
 * @param   {function}  fn        (optional) callback
 * @returns {array}               promise for array of integers
 */
module.exports = function parseInts(string, radix, fn) {
  var defered = Q.defer();

  if (fn === undefined && typeof radix === 'function') {
    fn = radix;
    radix = undefined;
  }
  radix = radix || 10;

  var parser = new Parser();
  return parser.validateInput(string, radix)
    .then(function () {
      defered.resolve([]);
      return defered.promise.nodeify(fn);
    })
    ;
};
