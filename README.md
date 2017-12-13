[![CircleCI](https://circleci.com/gh/alexeagle/angular-bazel-example.svg?style=svg)](https://circleci.com/gh/alexeagle/angular-bazel-example)

# Example of building an Angular app with Bazel

**This is experimental! There may be breaking changes.**

This is part of the ABC project. The overall goal is to make it possible to
develop Angular applications the same way we do at Google.
See http://g.co/ng/abc for an overview.

You can read the documentation in the wiki of this repository to understand how
this works.

Follow https://github.com/angular/angular/issues/19058 for updates.

## Try it

First, we install packages as usual. However, to get the same version of node
and yarn as co-workers and our continuous integration, let's have Bazel run the
package manager using a pinned version it manages.

```bash
$ bazel run @yarn//:yarn
```

Next we'll run the development server. The `ibazel` command is a "watch mode"
for Bazel, which means it will watch any files that are inputs to the devserver,
and when they change it will ask Bazel to re-build them. The devserver stays
running, and when the re-build is finished, it will trigger the Livereload in
the browser.

```bash
$ ./node_modules/.bin/ibazel run src:devserver
```

This command prints a URL on the terminal. Open that page to see the demo app
running. Now you can edit one of the source files (`src/lib/file.ts` is an easy
one to understand and see the effect). As soon as you save a change, the app
should refresh in the browser with the new content. Our intent is that this time
is less than two seconds, even for a large application.

## Coming soon

Karma testing rules are in-progress, should be available Q4 2017

Production bundling with https://github.com/bazelbuild/rules_closure/ is
underway, should be available Q4 2017
