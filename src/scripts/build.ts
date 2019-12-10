import { args } from "../utils/args"
import { removeReactAppEnv } from "../utils/removeReactAppEnv"
import spawn = require("cross-spawn")

removeReactAppEnv()

spawn("react-scripts", ["build", ...args()], {
  stdio: "inherit",
  env: {
    ...process.env,
    EXTEND_ESLINT: "true",
  },
})
