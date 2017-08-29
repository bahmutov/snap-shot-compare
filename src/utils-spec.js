'use strict'

const { stripIndent } = require('common-tags')
const { raise, compareText, compareLongText } = require('./utils')
const snapshot = require('snap-shot-it')

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

  it('diffs multiple text', () => {
    compareText(a, b).map(raise).orElse(snapshot)
  })

  it('diffs long text', () => {
    compareLongText(a, b).map(raise).orElse(snapshot)
  })
})
