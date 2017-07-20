package(default_visibility = ["//visibility:public"])
exports_files(["tsconfig.json"])

load("@build_bazel_rules_angular//:defs.bzl", "ng_external_libraries")

# NOTE: this will move to node_modules/BUILD in a later release
filegroup(name = "node_modules", srcs = glob(["node_modules/**/*"]))

ng_external_libraries(name = "ng_libs", srcs = glob([
    "node_modules/@angular/**"
], exclude = [
    "node_modules/@angular/platform-browser/animations*",
    "node_modules/@angular/platform-browser/animations/**",
]))
