#!/usr/bin/env bash

DIST=$(bazel info bazel-bin)
for js in $(find $DIST -name "*.js")
do (cat $js; echo)
done > bundle.js
