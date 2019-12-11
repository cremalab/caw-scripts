import spawn from "cross-spawn"
import { args } from "../utils/args"

const result = spawn.sync("caws", ["test:lint", "--fix", ...args()], {
  stdio: "inherit",
})

if (result.status === 0) {
  console.log("✅ All auto-fixable errors have been fixed")
}
