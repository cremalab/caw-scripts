/* eslint-disable @typescript-eslint/no-explicit-any */
import { args } from "../utils/args"
import spawn from "cross-spawn"

spawn.sync("react-scripts", ["start", ...args()], {
  stdio: "inherit",
  env: {
    ...process.env,
    EXTEND_ESLINT: "true",
  },
})

process.on("message", m => {
  console.warn("MESSAGE", m)
})
