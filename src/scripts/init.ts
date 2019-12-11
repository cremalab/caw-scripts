import spawn from "cross-spawn"
import { pathPackage, pathConsumer } from "../utils/paths"
import path from "path"
import { runHygen } from "../utils/runHygen"

// Define "to" path
const templateTo = pathConsumer

// Define "from" for copying template app files
const templateAppPath = path.join(pathPackage, "distStatic", "app")
const templateAppFrom = templateAppPath + "/."

// Copy template app to destination
spawn.sync("cp", ["-R", templateAppFrom, templateTo], { stdio: "inherit" })

runHygen("project")

console.log("✅ Initialization complete!")
