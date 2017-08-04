parse-ints
==========

[![Greenkeeper badge](https://badges.greenkeeper.io/jackboberg/parse-ints.svg)](https://greenkeeper.io/)

Parse integers from comma separated string, including ranges.

## Usage

```javascript
var test      = require('tape');
var parseInts = require('parse-ints');

var ints;

test('parses a comma separated strings', function (t) {
  t.plan(2);

  ints = parseInts('1,2,3');
  t.same(ints, [ 1, 2, 3 ]);

  // with radix
  ints = parseInts('101,1010,1111', 2);
  t.same(ints, [ 5, 10, 15 ]);
});

test('parses hyphenated strings into a range', function (t) {
  t.plan(2);

  ints = parseInts('1-3');
  t.same(ints, [ 1, 2, 3 ]);

  // with radix
  ints = parseInts('101-111', 2);
  t.same(ints, [ 5, 6, 7 ]);
});

test('parses mixed strings', function (t) {
  t.plan(2);

  ints = parseInts('1-3, 7, 9-10');
  t.same(ints, [ 1, 2, 3, 7, 9, 10 ]);

  // with radix
  ints = parseInts('101-111, 1010', 2);
  t.same(ints, [ 5, 6, 7, 10 ]);
});
```

## Issues and Feature Requests

For issues, please submit a pull request with a failing test. For new feature
requests, please write a pending test. Tests should be included in
`/test/issues.js`.
