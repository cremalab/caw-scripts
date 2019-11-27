import spawn from "cross-spawn"
import { pathPackage as pathPackageGet } from "./paths"
import { args as extraArgs } from "./args"

export const runBinary = (
  bin: string,
  args?: string[],
  withExtraArgs = true,
) => {
  const pathPackage = pathPackageGet()
  const installed = pathPackage.includes("node_modules")
  console.log("installed", installed, pathPackage)
  if (installed) {
    return spawn.sync(
      bin,
      [...(args ? args : []), ...(withExtraArgs ? extraArgs() : [])],
      {
        stdio: "inherit",
      },
    )
  } else {
    return spawn.sync(
      "node",
      [
        pathPackage + "/node_modules/.bin/" + bin,
        ...(args ? args : []),
        ...(withExtraArgs ? extraArgs() : []),
      ],
      {
        stdio: "inherit",
      },
    )
  }
}
