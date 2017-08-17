'use strict'

const diff = require('variable-diff')
const is = require('check-more-types')
const utils = require('./utils')
const Result = require('folktale/result')

const isMultiLineText = s => is.string(s) && s.includes('\n')
const areStrings = (s, t) => is.string(s) && is.string(t)
const compareAsStrings = (s, t) =>
  areStrings(s, t) && (isMultiLineText(s) || isMultiLineText(t))

const compareObjects = diff

function compare ({ expected, value }) {
  if (compareAsStrings(value, expected)) {
    return utils.compareText(value, expected)
  }
  const diffed = compareObjects(expected, value)
  if (diffed.changed) {
    return Result.Error(diffed.text)
  }
  return Result.Ok()
}

// eslint-disable-next-line immutable/no-mutation
module.exports = compare
