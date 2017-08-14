'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')

/* eslint-env mocha */
const snapShotCompare = require('.')

describe('snap-shot-compare', () => {
  it('is a function', () => {
    la(is.fn(snapShotCompare))
  })
})
