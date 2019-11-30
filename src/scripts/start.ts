import { runBinary } from "../utils/runBinary"

runBinary("react-scripts", ["start"], true, {
  env: {
    ...process.env,
    EXTEND_ESLINT: "true",
  },
})
