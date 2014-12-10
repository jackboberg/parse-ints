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
  var output = [];
  var subStrings = [];

  // split input string on commas and strip whitespace
  subStrings = string.split(',')
    .map(function stripSpaces(string) {
      return string.replace(/\s/g,'');
    });

  // parse sub-string
  subStrings.forEach(function parseSubString(str) {
    output.push(parseInt(str, radix));
  });

  return output;
};
