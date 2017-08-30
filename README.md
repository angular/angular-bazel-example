[![CircleCI](https://circleci.com/gh/alexeagle/angular-bazel-example.svg?style=svg)](https://circleci.com/gh/alexeagle/angular-bazel-example)

# Example of building an Angular app with Bazel

**This is in Alpha and depends on un-released version of Angular. There may be breaking changes.**

## Installation

Mac: `brew install bazel`

Other platforms, see Bazel [installation instructions].

[installation instructions]: https://bazel.build/versions/master/docs/install.html

## Try it

```bash
$ bazel run @yarn//:yarn
$ bazel build src
```

*Note: there is a "watch mode" for Bazel available at https://github.com/bazelbuild/bazel-watcher*

Notes:

- we use bazel to run yarn simply to be sure we get the same versions of Node and Yarn as CI and co-workers (hermeticity FTW)
- a `postinstall` task in the `package.json` prepares the `node_modules` directory by running the Angular compiler on third_party libraries (such as Angular itself) since these do not ship with generated code (eg. `ngfactory`s)
