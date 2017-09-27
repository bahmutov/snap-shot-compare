'use strict'

const diff = require('variable-diff')
const is = require('check-more-types')
const utils = require('./utils')
const Result = require('folktale/result')

const isMultiLineText = s => is.string(s) && s.includes('\n')
const areStrings = (s, t) => is.string(s) && is.string(t)
const compareAsStrings = (s, t) =>
  areStrings(s, t) && (isMultiLineText(s) || isMultiLineText(t))

// looks at number of lines
const isLong = s => s.split('\n').length > 9

const diffAsLongText = (s, t) =>
  compareAsStrings(s, t) && (isLong(s) || isLong(t))

const compareObjects = diff

function compare ({ expected, value }) {
  if (compareAsStrings(value, expected)) {
    if (diffAsLongText(value, expected)) {
      return utils.compareLongText(expected, value)
    } else {
      return utils.compareText(value, expected)
    }
  }
  const diffed = compareObjects(expected, value)
  if (diffed.changed) {
    return Result.Error(diffed.text)
  }
  return Result.Ok()
}

// eslint-disable-next-line immutable/no-mutation
module.exports = compare
