package(default_visibility = ["//visibility:public"])

load("@build_bazel_rules_angular//:defs.bzl", "ng_module")
load("@io_bazel_rules_sass//sass:sass.bzl", "sass_binary")

sass_binary(
    name = "hello-world-styles",
    src = "hello-world.component.scss",
    deps = [
         "//src/shared:colors",
         "//src/shared:fonts",
    ],
)

ng_module(
  name = "hello-world",
  srcs = glob(["*.ts"]),
  # assets = [":hello-world-styles.css"],
  tsconfig = "//src:tsconfig.json",
)
