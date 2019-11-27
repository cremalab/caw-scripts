#!/usr/bin/env node
import spawn from "cross-spawn"

const script = process.argv[2]
const args = process.argv.slice(3)

switch (script) {
  case "build":
  case "dev":
  case "init":
  case "lint":
  case "new":
  case "playground":
  case "playgroundBuild":
  case "setup":
  case "start":
  case "test": {
    const result = spawn.sync(
      "node",
      [require.resolve("../dist/scripts/" + script)].concat(args),
      { stdio: "inherit" },
    )
    process.exit(result.status || undefined)
    break
  }
  default:
    console.log(`Unknown script "${script}".`)
    break
}
