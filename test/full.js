var test      = require('tape');
var parseInts = require('../');

test('requires input is a string', function (t) {
  t.plan(1);
  t.throws(parseInts);
});

test('ignores extraneous spaces in input', function (t) {
  t.plan(3);
  var output;

  output = parseInts('1, 2, 3');
  t.same(output, [ 1, 2, 3 ]);

  output = parseInts(' 4, 7,9  ');
  t.same(output, [ 4, 7, 9 ]);

  output = parseInts('10 1 ,10 10, 1 1 1 1', 2);
  t.same(output, [ 5, 10, 15 ]);
});

test('supports any integer radix', function (t) {
  t.plan(5);
  var output;

  output = parseInts('1111', 2);
  t.same(output, [ 15 ]);

  output = parseInts('17', 8);
  t.same(output, [ 15 ]);

  output = parseInts('015', 10);
  t.same(output, [ 15 ]);

  output = parseInts('12', 13);
  t.same(output, [ 15 ]);

  output = parseInts('0xF', 16);
  t.same(output, [ 15 ]);
});

test('radix defaults to 10', function (t) {
  t.plan(1);
  var output = parseInts('101');
  t.same(output, [ 101 ]);
});

test.skip('requires radix is an integer or undefined', function (t) {
  t.plan(0);
});

test.skip('does not parse poorly formed ranges', function (t) {
  t.plan(2);
  t.throws(parseInts('1-2-3'));
  t.throws(parseInts('3-1'));
});
