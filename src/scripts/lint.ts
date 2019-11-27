import { runBinary } from "../utils/runBinary"

const result = runBinary("eslint", [
  "-c",
  "./.eslintrc.js",
  "src/**/*.{ts,tsx}",
])

if (result.status === 0) {
  console.log("✅ No lint errors detected")
}
