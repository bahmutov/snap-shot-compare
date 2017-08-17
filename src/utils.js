'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')
const disparity = require('disparity')
const Result = require('folktale/result')

function removeExplanation (text) {
  return text
    .split('\n')
    .filter(x => !x.includes('--- removed'))
    .filter(x => !x.includes('+++ added'))
    .filter(x => !x.includes('@@ '))
    .filter(x => !x.includes('No newline at end of file'))
    .join('\n')
    .trim()
}

function compareText (expected, value) {
  const textDiff = disparity.unified(expected, value)
  return textDiff ? Result.Error(removeExplanation(textDiff)) : Result.Ok()
}

const raise = () => {
  throw new Error('should not happen')
}

const isUndefined = x => {
  la(is.not.defined(x))
}

const asResult = x => Result.of(x)

// eslint-disable-next-line immutable/no-mutation
module.exports = {
  compareText,
  raise,
  isUndefined,
  asResult
}
