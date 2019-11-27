import spawn from "cross-spawn"
import { pathPackageGet } from "./paths"
import { args as extraArgs } from "./args"
import { SpawnOptions } from "child_process"

export const runBinary = (
  bin: string,
  args?: string[],
  withExtraArgs = true,
  config?: SpawnOptions,
) => {
  const pathPackage = pathPackageGet()
  const installed = pathPackage.includes("node_modules")
  if (installed) {
    return spawn.sync(
      bin,
      [...(args ? args : []), ...(withExtraArgs ? extraArgs() : [])],
      {
        stdio: "inherit",
        ...config,
      },
    )
  } else {
    return spawn.sync(
      "node " + pathPackage + "/node_modules/.bin/" + bin,
      [...(args ? args : []), ...(withExtraArgs ? extraArgs() : [])],
      {
        stdio: "inherit",
        ...config,
      },
    )
  }
}
