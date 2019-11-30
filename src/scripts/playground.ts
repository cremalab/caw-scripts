import { pathPackage } from "../utils/paths"
import path from "path"
import { runBinary } from "../utils/runBinary"

const pathPackageStorybook = path.join(pathPackage, "/dist/.storybook")

runBinary("start-storybook", ["-p", "9009", "-s", "public"], true, {
  stdio: "inherit",
  env: {
    ...process.env,
    NODE_ENV: "test",
    SBCONFIG_CONFIG_DIR: pathPackageStorybook,
    BABEL_ENV: "development",
  },
})
