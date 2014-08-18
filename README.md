parse-ints
==========

Parse integers from comma separated string, including ranges.

## Example

```javascript
var parseInts = require('parse-ints');

// returns a promise for an array of integers
parseInts('1,3-5,7-9')
  .then(function(result) {
    console.log(result === [1,3,4,5,7,8,9]);
  });

// supports setting radix, and/or using a callback
parseInts('10,100-110', 2, function(err, result) {
  console.log(result === [2,4,5,6]);
});
```
