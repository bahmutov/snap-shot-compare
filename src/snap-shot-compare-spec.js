'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')
const snapshot = require('snap-shot-it')
const stripAnsi = require('strip-ansi')
const { stripIndent } = require('common-tags')

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

  it('works for text', () => {
    const expected = stripIndent`
      line 1
      line 2
      line 3
    `
    const value = stripIndent`
      line 1
      line 2 changed
      third line is new
    `
    const result = snapShotCompare({ expected, value })
    const message = stripAnsi(result.message)
    snapshot(message)
  })
})
