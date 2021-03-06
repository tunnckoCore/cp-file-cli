# cp-file-cli [![NPM version](https://img.shields.io/npm/v/cp-file-cli.svg?style=flat)](https://www.npmjs.com/package/cp-file-cli) [![NPM monthly downloads](https://img.shields.io/npm/dm/cp-file-cli.svg?style=flat)](https://npmjs.org/package/cp-file-cli) [![npm total downloads][downloads-img]][downloads-url]

> Command line tool for copying single file, using [cp-file][] under the hood. Just because cpy-cli is too much and does not fit well in the flow.

[![code climate][codeclimate-img]][codeclimate-url] 
[![standard code style][standard-img]][standard-url] 
[![linux build status][travis-img]][travis-url] 
[![windows build status][appveyor-img]][appveyor-url] 
[![coverage status][coveralls-img]][coveralls-url] 
[![dependency status][david-img]][david-url]

You might also be interested in [always-done](https://github.com/hybridables/always-done#readme).

## Table of Contents
- [Install](#install)
- [Usage](#usage)
- [Related](#related)
- [Contributing](#contributing)
- [Building docs](#building-docs)
- [Running tests](#running-tests)
- [Author](#author)
- [License](#license)

_(TOC generated by [verb](https://github.com/verbose/verb) using [markdown-toc](https://github.com/jonschlinkert/markdown-toc))_

## Install
Install with [npm](https://www.npmjs.com/)

```
$ npm install cp-file-cli --global
```

or install using [yarn](https://yarnpkg.com)

```
$ yarn add --global cp-file-cli
```

## Usage
> For more use-cases see the [tests](test.js)

```
cp-file <src> <dest>

cp-file src/unicorn.png dist/bar/unicorn.png
```

Options passed directly to [cp-file][]

## Related
- [always-done](https://www.npmjs.com/package/always-done): Handle completion and errors with elegance! Support for streams, callbacks, promises, child processes, async/await and sync functions. A drop-in replacement… [more](https://github.com/hybridables/always-done#readme) | [homepage](https://github.com/hybridables/always-done#readme "Handle completion and errors with elegance! Support for streams, callbacks, promises, child processes, async/await and sync functions. A drop-in replacement for [async-done][] - pass 100% of its tests plus more")
- [cp-file](https://www.npmjs.com/package/cp-file): Copy a file | [homepage](https://github.com/sindresorhus/cp-file#readme "Copy a file")
- [cpy-cli](https://www.npmjs.com/package/cpy-cli): Copy files | [homepage](https://github.com/sindresorhus/cpy-cli#readme "Copy files")
- [cpy](https://www.npmjs.com/package/cpy): Copy files | [homepage](https://github.com/sindresorhus/cpy#readme "Copy files")
- [minibase](https://www.npmjs.com/package/minibase): Minimalist alternative for Base. Build complex APIs with small units called plugins. Works well with most of the already existing… [more](https://github.com/node-minibase/minibase#readme) | [homepage](https://github.com/node-minibase/minibase#readme "Minimalist alternative for Base. Build complex APIs with small units called plugins. Works well with most of the already existing [base][] plugins.")
- [try-catch-core](https://www.npmjs.com/package/try-catch-core): Low-level package to handle completion and errors of sync or asynchronous functions, using [once][] and [dezalgo][] libs. Useful for and… [more](https://github.com/hybridables/try-catch-core#readme) | [homepage](https://github.com/hybridables/try-catch-core#readme "Low-level package to handle completion and errors of sync or asynchronous functions, using [once][] and [dezalgo][] libs. Useful for and used in higher-level libs such as [always-done][] to handle completion of anything.")

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/cp-file-cli/issues/new).  
Please read the [contributing guidelines](CONTRIBUTING.md) for advice on opening issues, pull requests, and coding standards.  
If you need some help and can spent some cash, feel free to [contact me at CodeMentor.io](https://www.codementor.io/tunnckocore?utm_source=github&utm_medium=button&utm_term=tunnckocore&utm_campaign=github) too.

**In short:** If you want to contribute to that project, please follow these things

1. Please DO NOT edit [README.md](README.md), [CHANGELOG.md](CHANGELOG.md) and [.verb.md](.verb.md) files. See ["Building docs"](#building-docs) section.
2. Ensure anything is okey by installing the dependencies and run the tests. See ["Running tests"](#running-tests) section.
3. Always use `npm run commit` to commit changes instead of `git commit`, because it is interactive and user-friendly. It uses [commitizen][] behind the scenes, which follows Conventional Changelog idealogy.
4. Do NOT bump the version in package.json. For that we use `npm run release`, which is [standard-version][] and follows Conventional Changelog idealogy.

Thanks a lot! :)

## Building docs
Documentation and that readme is generated using [verb-generate-readme][], which is a [verb][] generator, so you need to install both of them and then run `verb` command like that

```
$ npm install verbose/verb#dev verb-generate-readme --global && verb
```

_Please don't edit the README directly. Any changes to the readme must be made in [.verb.md](.verb.md)._

## Running tests
Clone repository and run the following in that cloned directory

```
$ npm install && npm test
```

## Author
**Charlike Mike Reagent**

+ [github/tunnckoCore](https://github.com/tunnckoCore)
+ [twitter/tunnckoCore](https://twitter.com/tunnckoCore)
+ [codementor/tunnckoCore](https://codementor.io/tunnckoCore)

## License
Copyright © 2016-2017, [Charlike Mike Reagent](http://i.am.charlike.online). Released under the [MIT license](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.4.1, on February 06, 2017._  
_Project scaffolded using [charlike][] cli._

[always-done]: https://github.com/hybridables/always-done
[async-done]: https://github.com/gulpjs/async-done
[base]: https://github.com/node-base/base
[charlike]: https://github.com/tunnckocore/charlike
[commitizen]: https://github.com/commitizen/cz-cli
[cp-file]: https://github.com/sindresorhus/cp-file
[dezalgo]: https://github.com/npm/dezalgo
[once]: https://github.com/isaacs/once
[standard-version]: https://github.com/conventional-changelog/standard-version
[verb-generate-readme]: https://github.com/verbose/verb-generate-readme
[verb]: https://github.com/verbose/verb

[downloads-url]: https://www.npmjs.com/package/cp-file-cli
[downloads-img]: https://img.shields.io/npm/dt/cp-file-cli.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/cp-file-cli
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/cp-file-cli.svg

[travis-url]: https://travis-ci.org/tunnckoCore/cp-file-cli
[travis-img]: https://img.shields.io/travis/tunnckoCore/cp-file-cli/master.svg?label=linux

[appveyor-url]: https://ci.appveyor.com/project/tunnckoCore/cp-file-cli
[appveyor-img]: https://img.shields.io/appveyor/ci/tunnckoCore/cp-file-cli/master.svg?label=windows

[coveralls-url]: https://coveralls.io/r/tunnckoCore/cp-file-cli
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/cp-file-cli.svg

[david-url]: https://david-dm.org/tunnckoCore/cp-file-cli
[david-img]: https://img.shields.io/david/tunnckoCore/cp-file-cli.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

