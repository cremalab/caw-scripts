/* eslint-disable @typescript-eslint/no-explicit-any */
import { args } from "../utils/args"
import spawn from "cross-spawn"
import { removeReactAppEnv } from "../utils/removeReactAppEnv"

removeReactAppEnv()

spawn("react-scripts", ["start", ...args()], {
  stdio: "inherit",
  env: {
    ...process.env,
    EXTEND_ESLINT: "true",
  },
})
