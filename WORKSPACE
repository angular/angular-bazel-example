# The WORKSPACE file tells Bazel that this directory is a "workspace", which is like a project root.
# The content of this file specifies all the external dependencies Bazel needs to perform a build.

####################################
# ESModule imports (and TypeScript imports) can be absolute starting with the workspace name.
# The name of the workspace should match the npm package where we publish, so that these
# imports also make sense when referencing the published package.
workspace(name = "angular_bazel_example")

http_archive(
    name = "build_bazel_rules_nodejs",
    # pick up fixes for yarn cache and history-server on windows
    url = "https://github.com/alexeagle/rules_nodejs/archive/f2cd136126725a0df8e9ee49f33b45d07302da20.zip",
    strip_prefix = "rules_nodejs-f2cd136126725a0df8e9ee49f33b45d07302da20",
    sha256 = "54261398fb3bc116b0779d28fae1d80956da1fdc5e46b6cc9122d3ec3407ecb9",
)

# The Bazel buildtools repo contains tools like the BUILD file formatter, buildifier
# This commit matches the version of buildifier in angular/ngcontainer
# If you change this, also check if it matches the version in the angular/ngcontainer
# version in /.circleci/config.yml
BAZEL_BUILDTOOLS_VERSION = "49a6c199e3fbf5d94534b2771868677d3f9c6de9"

http_archive(
    name = "com_github_bazelbuild_buildtools",
    url = "https://github.com/bazelbuild/buildtools/archive/%s.zip" % BAZEL_BUILDTOOLS_VERSION,
    strip_prefix = "buildtools-%s" % BAZEL_BUILDTOOLS_VERSION,
    sha256 = "edf39af5fc257521e4af4c40829fffe8fba6d0ebff9f4dd69a6f8f1223ae047b",
)

# The @angular repo contains rule for building Angular applications
http_archive(
    name = "angular",
    url = "https://github.com/angular/angular/archive/2546c663769cdb8ba0b3979bb157fe58770f4325.zip",
    strip_prefix = "angular-2546c663769cdb8ba0b3979bb157fe58770f4325",
    #sha256 = "5ac6694f7c694afe34767aff4a0dd0408e25b0493cea675c2bb075c123adc46a",
)

# The @rxjs repo contains targets for building rxjs with bazel
local_repository(
    name = "rxjs",
    path = "node_modules/rxjs/src",
)

####################################
# Load and install our dependencies downloaded above.

load("@angular//packages/bazel:package.bzl", "rules_angular_dependencies")

rules_angular_dependencies()

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories", "yarn_install")

node_repositories(
    preserve_symlinks = True,
    node_version = "10.9.0",
    yarn_version = "1.9.2",
)

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
    data = ["//:postinstall.tsconfig.json"],
)

load("@io_bazel_rules_go//go:def.bzl", "go_rules_dependencies", "go_register_toolchains")

go_rules_dependencies()
go_register_toolchains()

load("@io_bazel_rules_webtesting//web:repositories.bzl", "browser_repositories", "web_test_repositories")

web_test_repositories()
browser_repositories(
    chromium = True,
    firefox = True,
)

load("@build_bazel_rules_typescript//:defs.bzl", "ts_setup_workspace", "check_rules_typescript_version")

ts_setup_workspace()

load("@io_bazel_rules_sass//sass:sass_repositories.bzl", "sass_repositories")

sass_repositories()

load("@angular//:index.bzl", "ng_setup_workspace")

ng_setup_workspace()

# In Bazel 0.18, we can use .bazelignore to stop seeing things in node_modules
# for now this lets us ignore things in @angular-devkit
local_repository(
    name = "ignore_rxjs1",
    path = "node_modules/@angular-devkit/core/node_modules/rxjs/src",
)
local_repository(
    name = "ignore_rxjs2",
    path = "node_modules/@angular-devkit/architect/node_modules/rxjs/src",
)