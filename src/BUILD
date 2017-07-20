package(default_visibility = ["//visibility:public"])

load("@build_bazel_rules_angular//:defs.bzl", "ng_module")

ng_module(
  name = "src",
  srcs = glob(["*.ts"]),
  deps = ["//src/hello-world"],
  tsconfig = ":tsconfig.json",
)
