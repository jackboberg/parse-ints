var test = require('tape');
var parseInts = require('../');

test('requires a string as the 1st parameter', function (t) {
  t.plan(2);
  var output;

  output = parseInts('1');
  t.equal(output, 1);

  output = parseInts();
  t.ok(isNaN(output));
});

test('allows passing a radix as 2nd parameter', function (t) {
  t.plan(5);
  var output;

  output = parseInts('1111', 2);
  t.equal(output, 15);

  output = parseInts('17', 8);
  t.equal(output, 15);

  output = parseInts('015', 10);
  t.equal(output, 15);

  output = parseInts('12', 13);
  t.equal(output, 15);

  output = parseInts('0xF', 16);
  t.equal(output, 15);
});

test('radix defaults to 10', function (t) {
  t.plan(1);
  var output = parseInts('101');
  t.equal(output, 101);
});


