/*!
 * cp-file-cli <https://github.com/tunnckoCore/cp-file-cli>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://i.am.charlike.online)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

const execa = require('execa')
const test = require('mukla')

test('should fail if not enough arguments', (done) => {
  return execa('node', ['./cli.js']).catch((err) => {
    test.ok(/CpFileError: `src` and `dest` required/.test(err.message))
    done()
  })
})

test('should copy single file', (done) => {
  return execa('node', ['./cli.js', 'LICENSE', 'node_modules/FOO']).then((res) => {
    test.strictEqual(res.code, 0)
    test.strictEqual(res.killed, false)
    test.strictEqual(res.failed, false)
    done()
  })
})
