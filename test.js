'use strict'

var test = require('tape')
var Observ = require('observ')
var assertObserv = require('./')

test(function (t) {
  t.throws(assertObserv.bind(null, Observ))
  t.doesNotThrow(assertObserv.bind(null, Observ()))
  t.end()
})
