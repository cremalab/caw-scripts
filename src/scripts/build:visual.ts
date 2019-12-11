import { args } from "../utils/args"
import { pathPackageStorybook } from "../utils/paths"
import spawn = require("cross-spawn")

spawn.sync("npx", ["build-storybook", "-s", "public", ...args()], {
  stdio: "inherit",
  env: {
    ...process.env,
    EXTEND_ESLINT: "true",
    NODE_ENV: "test",
    SBCONFIG_CONFIG_DIR: pathPackageStorybook,
    BABEL_ENV: "development",
  },
})
