# Example of building an Angular app with Bazel

**This is in early development stages, think pre-alpha. It may be broken and is likely to have breaking changes.**

## Installation

Mac: `brew install bazel`

Other platforms, see Bazel [installation instructions].

[installation instructions]: https://bazel.build/versions/master/docs/install.html

## Try it

```bash
$ bazel run @yarn//:yarn
$ bazel build :ng_libs
$ bazel build src
```

Notes:

- we use bazel to run yarn simply to be sure we get the same versions of Node and Yarn as CI and co-workers
- the `:ng_libs` target is a short-term hack to get `.ngsummary.json` and `.ngfactory.js` files written in the `node_modules` directory for Angular and third-party libraries that don't ship with these files
