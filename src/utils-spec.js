'use strict'

const { stripIndent } = require('common-tags')
const {
  raise,
  compareText,
  compareLongText,
  textDifference
} = require('./utils')
const snapshot = require('snap-shot-it')
const la = require('lazy-ass')
const is = require('check-more-types')

/* eslint-env mocha */
describe('disparity', () => {
  const a = stripIndent`
    line 1
    line 2
    line 3
  `
  const b = stripIndent`
    line 1
    line 2b
    line 3
  `

  context('textDifference', () => {
    it('returns - for removed line and + for added line', () => {
      const noColor = true
      const diff = textDifference(a, b, noColor)
      const expectedDiff = [' line 1', '-line 2', '+line 2b', ' line 3\n'].join(
        '\n'
      )

      la(
        diff === expectedDiff,
        'different text diff\nexpected:\n' +
          expectedDiff +
          '\ncomputed:\n' +
          diff +
          '\n---'
      )
    })
  })

  context('compareText', () => {
    it('is a function', () => {
      la(is.fn(compareText))
    })

    it('diffs multiple text', () => {
      compareText(a, b)
        .map(raise)
        .orElse(snapshot)
    })

    it('returns diff', () => {
      const noColor = true
      const diff = compareText(a, b, noColor)
      snapshot(diff.value)
    })

    it('returns JSON diff', () => {
      const noColor = true
      const json = true
      snapshot(compareText(a, b, noColor, json).value)
    })
  })

  context('compareLongText', () => {
    it('is a function', () => {
      la(is.fn(compareLongText))
    })

    it('diffs long text', () => {
      compareLongText(a, b)
        .map(raise)
        .orElse(snapshot)
    })

    it('returns JSON diff', () => {
      const json = true
      snapshot(compareLongText(a, b, json).value)
    })
  })
})
