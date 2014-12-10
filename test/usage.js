var test      = require('tape');
var parseInts = require('../');

test('parses a comma separated strings', function (t) {
  t.plan(2);
  var output;

  output = parseInts('1,2,3');
  t.same(output, [ 1, 2, 3 ]);

  output = parseInts('101,1010,1111', 2);
  t.same(output, [ 5, 10, 15 ]);
});

test('parses hyphenated strings into a range', function (t) {
  t.plan(2);
  var output;

  output = parseInts('1-3');
  t.same(output, [ 1, 2, 3 ]);

  output = parseInts('101-111', 2);
  t.same(output, [ 5, 6, 7 ]);
});

test('parses mixed strings', function (t) {
  t.plan(2);
  var output;

  output = parseInts('1-3, 7, 9-10');
  t.same(output, [ 1, 2, 3, 7, 9, 10 ]);

  output = parseInts('101-111, 1010', 2);
  t.same(output, [ 5, 6, 7, 10 ]);
});
