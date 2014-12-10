/**
 * parseInts
 *
 * Parse integers from more complicated strings
 *
 * @param   {string}    string    input string
 * @param   {integer}   radix     (optional) radix of input string, default: 10
 * @returns {array}               array of integers
 */
module.exports = function parseInts(string, radix) {
  return parseInt(string, radix);
};
