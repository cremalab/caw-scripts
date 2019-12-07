import spawn from "cross-spawn"
import { args } from "../utils/args"

const result = spawn.sync(
  "eslint",
  ["-c", "./.eslintrc.js", "src/**/*.{ts,tsx}", ...args()],
  {
    stdio: "inherit",
  },
)

if (result.status === 0) {
  console.log("✅ No lint errors detected")
}
