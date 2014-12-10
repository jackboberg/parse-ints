var test = require('tape');
var parseInts = require('../');

test('converts simple string to integer', function (t) {
  t.plan(1);
  var ints = parseInts('1');
  t.equal(ints, 1);
});

test('allows passing a radix', function (t) {
  t.plan(5);
  var ints;

  ints = parseInts('1111', 2);
  t.equal(ints, 15);

  ints = parseInts('17', 8);
  t.equal(ints, 15);

  ints = parseInts('015', 10);
  t.equal(ints, 15);

  ints = parseInts('12', 13);
  t.equal(ints, 15);

  ints = parseInts('0xF', 16);
  t.equal(ints, 15);
});

test('radix defaults to 10', function (t) {
  t.plan(1);
  var ints = parseInts('101');
  t.equal(ints, 101);
});
