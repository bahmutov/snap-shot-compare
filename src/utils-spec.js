'use strict'

const { stripIndent } = require('common-tags')
const { raise, compareText } = require('./utils')
const snapshot = require('snap-shot-it')

/* eslint-env mocha */
describe('disparity', () => {
  it('diffs multiple text', () => {
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
    compareText(a, b).map(raise).orElse(snapshot)
  })
})
