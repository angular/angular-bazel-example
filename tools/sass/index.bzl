"Rules for compiling Sass files to CSS."

_FILETYPES = [".sass", ".scss", ".svg", ".png", ".gif"]

SassInfo = provider("transitive_sources")

def collect_transitive_sources(srcs, deps):
    return depset(
        srcs,
        transitive=[dep[SassInfo].transitive_sources for dep in deps],
        order="postorder")

def _sass_library_impl(ctx):
    transitive_sources = collect_transitive_sources(
        ctx.files.srcs, ctx.attr.deps)
    return [SassInfo(transitive_sources=transitive_sources)]

def _sass_binary_impl(ctx):
    options = ["--style=" + ctx.attr.output_style] + ctx.attr.extra_options
    for prefix in ["./", ctx.var['BINDIR'] + "/", ctx.var['GENDIR'] + "/"]:
      options += ["--load-path=%s" % prefix]
      for include_path in ctx.attr.include_paths:
        options += ["--load-path=%s%s" % (prefix, include_path)]

    ctx.actions.run(
        mnemonic = "SassCompiler",
        executable = ctx.executable._binary,
        inputs = [ctx.executable._binary] +
            list(collect_transitive_sources([ctx.file.src], ctx.attr.deps)),
        arguments = options + [ctx.file.src.path, ctx.outputs.css_file.path],
        outputs = [ctx.outputs.css_file],
    )

    # Make sure the output CSS is available in runfiles if used as a data dep.
    return DefaultInfo(runfiles = ctx.runfiles(files = [ctx.outputs.css_file]))

def _sass_binary_outputs(output_name, output_dir):
  output_name = output_name or "%{name}.css"
  css_file = ("%s/%s" % (output_dir, output_name) if output_dir
              else output_name)
  outputs = {
      "css_file": css_file,
  }

  return outputs

sass_deps_attr = attr.label_list(
    providers = [SassInfo],
    allow_files = False,
)

sass_library = rule(
    implementation = _sass_library_impl,
    attrs = {
        "srcs": attr.label_list(
            allow_files = _FILETYPES,
            non_empty = True,
            mandatory = True,
        ),
        "deps": sass_deps_attr,
    },
)

_sass_binary_attrs = {
    "src": attr.label(
        allow_files = _FILETYPES,
        mandatory = True,
        single_file = True,
    ),
    "extra_options": attr.string_list(default = []),
    "include_paths": attr.string_list(),
    "output_dir": attr.string(default = ""),
    "output_name": attr.string(default = ""),
    "output_style": attr.string(
        default = "compressed",
        values = [
            "expanded",
            "compressed",
        ],
    ),
    "deps": sass_deps_attr,
    "_binary": attr.label(
        default = Label("//tools/sass"),
        executable = True,
        cfg = "host",
    ),
}

sass_binary = rule(
    implementation = _sass_binary_impl,
    attrs = _sass_binary_attrs,
    outputs = _sass_binary_outputs,
)
