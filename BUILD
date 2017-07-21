package(default_visibility = ["//visibility:public"])
exports_files(["tsconfig.json"])

load("@build_bazel_rules_angular//:defs.bzl", "ng_external_libraries")

# NOTE: this will move to node_modules/BUILD in a later release
filegroup(name = "node_modules", srcs = glob(["node_modules/**/*.js"]))

# Short-term hack to do Angular codegen.
# This will probably move to a repository_rule so users don't see it.
ng_external_libraries(name = "ng_libs", srcs = glob([
    "node_modules/@angular/**"
], exclude = [
    "node_modules/@angular/platform-browser/animations*",
    "node_modules/@angular/platform-browser/animations/**",
]))
