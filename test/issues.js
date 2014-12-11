var test      = require('tape');
var parseInts = require('parse-ints');

test.skip('#1 - require radix is an integer or undefined', function (t) {
  var nonInts = ['1', [1], {}];
  t.plan(nonInts);
  nonInts.forEach(function (radix) {
    t.throws(function () {
      parseInts('1', radix);
    });
  });
});
