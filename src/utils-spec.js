'use strict'

const { stripIndent } = require('common-tags')
const { raise, compareText, compareLongText } = require('./utils')
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

  context('compareText', () => {
    it('is a function', () => {
      la(is.fn(compareText))
    })

    it('diffs multiple text', () => {
      compareText(a, b).map(raise).orElse(snapshot)
    })

    it('returns diff', () => {
      const noColor = true
      snapshot(compareText(a, b, noColor).value)
    })
  })

  context('compareLongText', () => {
    it('is a function', () => {
      la(is.fn(compareLongText))
    })

    it('diffs long text', () => {
      compareLongText(a, b).map(raise).orElse(snapshot)
    })
  })
})
