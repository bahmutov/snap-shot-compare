'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')
const snapshot = require('snap-shot-it')
const stripAnsi = require('strip-ansi')

/* eslint-env mocha */
const snapShotCompare = require('.')

describe('snap-shot-compare', () => {
  it('is a function', () => {
    la(is.fn(snapShotCompare))
  })

  it('works for equal numbers', () => {
    const result = snapShotCompare({
      expected: 42,
      value: 42
    })
    snapshot(result)
  })

  it('works for different objects', () => {
    const result = snapShotCompare({
      expected: { foo: 'foo' },
      value: { bar: 'bar' }
    })
    const message = stripAnsi(result.message)
    snapshot(message)
  })
})
