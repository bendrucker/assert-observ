# assert-observ [![Build Status](https://travis-ci.org/bendrucker/assert-observ.svg?branch=master)](https://travis-ci.org/bendrucker/assert-observ)

> Assert that a value is an observable


## Install

```
$ npm install --save assert-observ
```


## Usage

```js
var assertObserv = require('assert-observ')
var Observ = require('observ')

assertObserv(Observ())
//=> noop

assertObserv('foo')
//=> throws TypeError
```

## API

#### `assertObserv(value)` -> `undefined`

##### value

*Required*  
Type: `function`

An observable value (a function with a `set` method). An error is thrown if the input value is not an observable.


## License

MIT © [Ben Drucker](http://bendrucker.me)
