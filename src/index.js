'use strict'

const diff = require('variable-diff')
const disparity = require('disparity')
const is = require('check-more-types')
const Result = require('folktale/result')

const isMultiLineText = s => is.string(s) && s.includes('\n')
const areStrings = (s, t) => is.string(s) && is.string(t)
const compareAsStrings = (s, t) =>
  areStrings(s, t) && (isMultiLineText(s) || isMultiLineText(t))

function cleanupDisparityDiff (text) {
  return text.replace(' No newline at end of file', '')
}

function compareText (expected, value) {
  const textDiff = disparity.unified(expected, value)
  if (!textDiff) {
    return { changed: false }
  }

  return {
    changed: true,
    text: cleanupDisparityDiff(textDiff)
  }
}

const compareObjects = diff

function compare ({ expected, value }) {
  const diffed = compareAsStrings(value, expected)
    ? compareText(expected + '\n', value + '\n')
    : compareObjects(expected, value)
  if (diffed.changed) {
    return Result.Error(diffed.text)
  }
  return Result.Ok()
}

// eslint-disable-next-line immutable/no-mutation
module.exports = compare
