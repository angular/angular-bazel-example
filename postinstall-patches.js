const {set, sed} = require('shelljs');
const log = console.log;

// fail on first error
set('-e');
// print commands as being executed
set('-v');

log('\n# patch: @angular/bazel for new entry_point labels');
sed('-i', 'entry_point = \"protractor/bin/protractor\"',
    'entry_point = \"@npm//node_modules/protractor:bin/protractor\"',
    'node_modules/@angular/bazel/src/protractor/protractor_web_test.bzl');
