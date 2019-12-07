#!/usr/bin/env node
import spawn from "cross-spawn"

const script = process.argv[2]
const args = process.argv.slice(3)

switch (script) {
  case "build":
  case "build:visual":
  case "init":
  case "new:component":
  case "new:type":
  case "new:util":
  case "start":
  case "start:ci":
  case "start:visual":
  case "test:ci":
  case "test:e2e":
  case "test:e2e:ci":
  case "test:lint":
  case "test:lint:fix":
  case "test:types":
  case "test:unit":
  case "test:unit:coverage":
  case "test:unit:coverage:ci":
  case "test:visual":
  case "test:visual:ci":
  case "test:visual:approve":
  case "test:visual:update": {
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
