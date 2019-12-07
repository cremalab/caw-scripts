import spawn from "cross-spawn"
import { args } from "../utils/args"

spawn.sync("caws", ["test:unit", "--coverage", "--watchAll=false", ...args()], {
  stdio: "inherit",
  env: {
    ...process.env,
    EXTEND_ESLINT: "true",
  },
})
