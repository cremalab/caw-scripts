import spawn from "cross-spawn"
import { pathPackage, pathConsumer } from "../utils/paths"
import path from "path"

const templateSrc = path.join(pathPackage(), "./templateApp/") + "."
const templateDst = path.join(pathConsumer(), ".")

console.log("templateSrc", templateSrc)
console.log("templateDst", templateDst)

spawn.sync("cp", ["-R", templateSrc, templateDst], { stdio: "inherit" })
