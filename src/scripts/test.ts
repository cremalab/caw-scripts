import { runBinary } from "../utils/runBinary"

runBinary("react-scripts", ["test"], true, {
  env: {
    ...process.env,
    EXTEND_ESLINT: "true",
  },
})
