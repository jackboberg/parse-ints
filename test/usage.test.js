var test = require('tape');
var parseInts = require('../');

test('converts simple string to integer', function (t) {
  t.plan(1);
  var ints = parseInts('1');
  t.equal(ints, 1);
});
