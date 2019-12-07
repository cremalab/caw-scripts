import { pathPackageStorybook } from "../utils/paths"
import spawn from "cross-spawn"
import { args } from "../utils/args"

spawn.sync("start-storybook", ["-p", "9009", "-s", "public", ...args()], {
  stdio: "inherit",
  env: {
    ...process.env,
    NODE_ENV: "test",
    SBCONFIG_CONFIG_DIR: pathPackageStorybook,
    BABEL_ENV: "development",
  },
})
