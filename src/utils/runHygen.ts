import { pathPackage, pathConsumer } from "./paths"
import path from "path"
import spawn = require("cross-spawn")

type Generator = "component" | "project" | "type" | "util"

const pathPackageTemplates = path.join(pathPackage, "distStatic", "_templates")
const pathConsumerTemplates = path.join(pathConsumer, "_templates")

export const runHygen = (generator: Generator) => {
  // 1. Link package _templates in cwd
  spawn.sync("ln", ["-sf", pathPackageTemplates, pathConsumerTemplates], {
    stdio: "inherit",
  })

  // 2. Run Hygen with npx (allows us to test this locally)
  spawn.sync(
    "node",
    [pathPackage + "/node_modules/.bin/hygen", generator, "new"],
    { stdio: "inherit" },
  )

  // 3. Remove the linked _templates from cwd
  return spawn.sync("rm", [pathConsumerTemplates], { stdio: "inherit" })
}
