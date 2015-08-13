'use strict'

var assertFn = require('assert-function')

module.exports = function assertObserv (value) {
  assertFn(value)
  assertFn(value.set)
}
