[![CircleCI](https://circleci.com/gh/alexeagle/angular-bazel-example.svg?style=svg)](https://circleci.com/gh/alexeagle/angular-bazel-example)

# Example of building an Angular app with Bazel

**This is experimental! There may be breaking changes.**

## Installation

Mac: `brew install bazel`

Other platforms, see Bazel [installation instructions].

[installation instructions]: https://bazel.build/versions/master/docs/install.html

`ibazel` is a watch mode for Bazel. We recommend installing this from
https://github.com/bazelbuild/bazel-watcher.

## Try it

```bash
# Install packages, uses hermetic version of node and yarn
$ bazel run @yarn//:yarn
$ ibazel build src
# Make changes, observe the development round-trip time
```

Look at the dependency graph:

```bash
$ bazel query --output=graph ... | dot -Tpng > graph.png
```

![bazel query](graph.png)


## Still missing

Karma testing rules are in-progress, should be available Q4 2017

Doesn't include devserver. Can use webpack as the development server, see https://github.com/gregmagolan/abc-demo-build-with-aot-universal

Production bundling with https://github.com/bazelbuild/rules_closure/ is
underway, should be available Q4 2017

## Notes

- we use bazel to run yarn simply to be sure we get the same versions of Node and Yarn as CI and co-workers (hermeticity FTW)
- a `postinstall` task in the `package.json` prepares the `node_modules` directory by running the Angular compiler on third_party libraries (such as Angular itself) since these do not ship with generated code (eg. `ngfactory`s)
