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

function compareLongText (expected, value) {
  if (expected === value) {
    return Result.Ok()
  }

  const hr = '--------------\n'
  const diff =
    'Expected text\n' +
    hr +
    expected +
    '\n' +
    hr +
    'Actual text\n' +
    hr +
    value +
    '\n' +
    hr

  return Result.Error(diff)
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
  raise,
  isUndefined,
  asResult,
  compareText,
  compareLongText
}
