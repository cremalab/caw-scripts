import spawn from "cross-spawn"
import { pathPackageGet, pathConsumerGet } from "../utils/paths"
import { args } from "../utils/args"
import path from "path"
import { runBinary } from "../utils/runBinary"

const pathPackageTemplates = path.join(pathPackageGet(), "_templates")
const pathConsumerTemplates = path.join(pathConsumerGet(), "_templates")

spawn.sync("ln", ["-sf", pathPackageTemplates, pathConsumerTemplates])
runBinary("hygen", [args()[0], "new"], false)
spawn.sync("rm", [pathConsumerTemplates])
