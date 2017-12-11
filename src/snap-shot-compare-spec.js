'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')
const snapshot = require('snap-shot-it')
const stripAnsi = require('strip-ansi')
const { stripIndent } = require('common-tags')
const { isUndefined, raise, asResult } = require('./utils')

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
    result.map(isUndefined).orElse(raise)
  })

  it('works for different objects', () => {
    const result = snapShotCompare({
      expected: { foo: 'foo' },
      value: { bar: 'bar' }
    })
    result.map(raise).orElse(x => asResult(stripAnsi(x))).map(snapshot)
  })

  it('works for different objects with json option', () => {
    const result = snapShotCompare({
      expected: { foo: 'foo' },
      value: { bar: 'bar' },
      json: true
    })
    result.map(raise).orElse(x => asResult(stripAnsi(x))).map(snapshot)
  })

  it('works for different objects with noColor option', () => {
    const result = snapShotCompare({
      expected: { foo: 'foo' },
      value: { bar: 'bar' },
      noColor: true
    })
    result.map(raise).orElse(snapshot)
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
    const withoutAnsi = result.map(raise).orElse(x => asResult(stripAnsi(x)))
    withoutAnsi.map(snapshot)
  })
})
