#!/usr/bin/env node
/*!
 * cp-file-cli <https://github.com/tunnckoCore/cp-file-cli>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://i.am.charlike.online)
 * Released under the MIT license.
 */

'use strict'

const cp = require('cp-file')
const argv = require('minimist')(process.argv.slice(2))

cp(argv._[0], argv._[1], argv).catch((err) => {
  console.error('err:', err.toString())
  console.error('')
  console.error('Example:')
  console.error('  cp-file <src> <dest>')
  console.error('  cp-file foo/bar/qux.txt dest/path/quxie.txt')
  console.error('')
  process.exit(1)
})
