import spawn from "cross-spawn"
import { args } from "../utils/args"
import { removeReactAppEnv } from "../utils/removeReactAppEnv"

removeReactAppEnv()

spawn("react-scripts", ["test", ...args()], {
  stdio: "inherit",
  env: {
    ...process.env,
    EXTEND_ESLINT: "true",
  },
})
