load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")

git_repository(
    name = "build_bazel_rules_typescript",
    remote = "https://github.com/bazelbuild/rules_typescript.git",
    commit = "75f416d",
)
# local_repository(
#   name = "build_bazel_rules_typescript",
#   path = "../rules_typescript",
# )

load("@build_bazel_rules_typescript//:defs.bzl", "node_repositories")

node_repositories(package_json = "//:package.json")

git_repository(
    name = "build_bazel_rules_angular",
    remote = "https://github.com/alexeagle/rules_angular",
    commit = "ce85fe6",
)
# local_repository(
#   name = "build_bazel_rules_angular",
#   path = "../rules_angular",
# )

git_repository(
    name = "io_bazel_rules_sass",
    remote = "https://github.com/bazelbuild/rules_sass.git",
    tag = "0.0.2",
)

load("@io_bazel_rules_sass//sass:sass.bzl", "sass_repositories")

sass_repositories()