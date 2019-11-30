import spawn from "cross-spawn"
import { pathPackageGet } from "../utils/paths"
import path from "path"

const pathPackageStorybook = () =>
  path.join(pathPackageGet(), "/dist/projectData/web/.storybook")

console.log("pathPackageStorybook", pathPackageStorybook)

spawn.sync("build-storybook", [], {
  stdio: "inherit",
  env: {
    ...process.env,
    NODE_ENV: "test",
    SBCONFIG_CONFIG_DIR: pathPackageStorybook(),
    BABEL_ENV: "development",
  },
})
