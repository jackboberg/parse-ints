var test      = require('tape');
var parseInts = require('../');

test('requires a string as the 1st parameter', function (t) {
  t.plan(2);
  var output;

  output = parseInts('1', 10);
  t.same(output, [ 1 ]);

  t.throws(parseInts);
});

test('allows passing a radix as 2nd parameter', function (t) {
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

test('parses a comma separated string', function (t) {
  t.plan(3);
  var output;

  output = parseInts('1,2,3');
  t.same(output, [ 1, 2, 3 ]);

  output = parseInts(' 4, 7,9  ');
  t.same(output, [ 4, 7, 9 ]);

  output = parseInts('101,1010,1111', 2);
  t.same(output, [ 5, 10, 15 ]);
});

test('parses a range', function (t) {
  t.plan(2);
  var output;

  output = parseInts('1-3');
  t.same(output, [ 1, 2, 3 ]);

  output = parseInts('101-111', 2);
  t.same(output, [ 5, 6, 7 ]);
});
