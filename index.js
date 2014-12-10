/**
 * parseInts
 *
 * Parse integers from more complicated strings
 *
 * @param   {string}    input     input string
 * @param   {integer}   radix     (optional) radix of input string, default: 10
 * @returns {array}               array of integers
 */
module.exports = function parseInts(input, radix) {
  var output = [];

  // split input string on commas and strip whitespace
  var subStrings = input.split(',')
    .map(function stripSpaces(string) {
      return string.replace(/\s/g,'');
    });

  // parse each sub-string
  subStrings.forEach(function parseSubString(subString) {
    // check for range
    if (subString.indexOf('-') < 0) {
      return output.push(parseInt(subString, radix));
    }
    // parse range
    var rangeParts  = subString.split('-');
    var start       = parseInt(rangeParts[0], radix);
    var end         = parseInt(rangeParts[1], radix);
    for (var i = start; i <= end; i++) {
      output.push(i);
    }
  });

  return output;
};
