var test      = require('tape');
var parseInts = require('../');

var ints;

test.skip('#1 - require radix is an integer or undefined', function (t) {
  var nonInts = ['1', [1], {}];
  t.plan(nonInts.length);
  nonInts.forEach(function (radix) {
    t.throws(function () {
      parseInts('1', radix);
    });
  });
});

test('#3 supports negative integers', function (t) {
  t.plan(2);

  ints = parseInts('-3, -1');
  t.same(ints, [ -3, -1 ]);

  ints = parseInts('-3--1');
  t.same(ints, [ -3, -2, -1 ]);
});
