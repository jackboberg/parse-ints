parse-ints
==========

Parse integers from more complicated strings

## Example

```javascript
var parseInts = require('parse-ints');

parseInts('1,3-5,7-9')
  .then(function(result) {
    console.log(result === [1,3,4,5,7,8,9]);
  });

var radix = 2;
parseInts('10,100-110', radix, function(err, result) {
  console.log(result === [2,4,5,6]);
});
```

