# snap-shot-compare

> Picks best comparison / diff for snapshot value

[![NPM][npm-icon] ][npm-url]

[![Build status][ci-image] ][ci-url]
[![semantic-release][semantic-image] ][semantic-url]
[![js-standard-style][standard-image]][standard-url]

## Why

Use this comparator function with
[snap-shot-core](https://github.com/bahmutov/snap-shot-core)

## Install

Requires [Node](https://nodejs.org/en/) version 6 or above.

```sh
npm install --save snap-shot-compare
```

## Use

```js
const compare = require('snap-shot-compare')
let result
// if values are equal
result = compare({
  expected: 42,
  value: 100
})
// result is {valid: true}
// if objects are different
result = compare({
  expected: {foo: 'foo'},
  value: {bar: 'bar'}
})
// result has ANSI characters
// use "strip-ansi" to remove if desired
//*
{
  valid: false
  message: 'snapshot difference
{
- foo: "foo"
+ bar: "bar"
}'
}
*/
```

Uses

* [variable-diff](https://github.com/taylorhakes/variable-diff) to show diff
  between two objects
* [disparity](https://github.com/millermedeiros/disparity) to show diff
  between multi line text

### Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2017

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](https://glebbahmutov.com)
* [blog](https://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/snap-shot-compare/issues) on Github

## MIT License

Copyright (c) 2017 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[npm-icon]: https://nodei.co/npm/snap-shot-compare.svg?downloads=true
[npm-url]: https://npmjs.org/package/snap-shot-compare
[ci-image]: https://travis-ci.org/bahmutov/snap-shot-compare.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/snap-shot-compare
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
