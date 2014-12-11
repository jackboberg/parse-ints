var test      = require('tape');
var parseInts = require('parse-ints');

var ints;

test('requires input is a string', function (t) {
  t.plan(1);
  t.throws(parseInts);
});

test('radix defaults to 10', function (t) {
  t.plan(1);
  ints = parseInts('101');
  t.same(ints, [ 101 ]);
});

test('ignores extraneous spaces in input', function (t) {
  t.plan(3);

  ints = parseInts('1, 2, 3');
  t.same(ints, [ 1, 2, 3 ]);

  ints = parseInts(' 4, 7,9  ');
  t.same(ints, [ 4, 7, 9 ]);

  ints = parseInts('10 1 ,10 10, 1 1 1 1', 2);
  t.same(ints, [ 5, 10, 15 ]);
});

test('supports any integer radix', function (t) {
  t.plan(5);

  ints = parseInts('1111', 2);
  t.same(ints, [ 15 ]);

  ints = parseInts('17', 8);
  t.same(ints, [ 15 ]);

  ints = parseInts('015', 10);
  t.same(ints, [ 15 ]);

  ints = parseInts('12', 13);
  t.same(ints, [ 15 ]);

  ints = parseInts('0xF', 16);
  t.same(ints, [ 15 ]);
});
