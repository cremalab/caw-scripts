import spawn from "cross-spawn"
import { args } from "../utils/args"

spawn.sync("react-scripts", ["test", ...args()], {
  stdio: "inherit",
  env: {
    ...process.env,
    EXTEND_ESLINT: "true",
  },
})
