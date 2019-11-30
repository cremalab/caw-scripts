import spawn from "cross-spawn"
import { pathPackage, pathConsumer } from "../utils/paths"
import path from "path"

const templatePath = path.join(pathPackage, "./templateApp")
const templateSrc = templatePath + "/."
const templateDst = path.join(pathConsumer, ".")

spawn.sync("rm", [templatePath + "/.npmignore"], { stdio: "inherit" })
spawn.sync("cp", ["-R", templateSrc, templateDst], { stdio: "inherit" })

console.log("✅ Initialization complete!")
