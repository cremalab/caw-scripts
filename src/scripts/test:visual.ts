import spawn from "cross-spawn"
import { args } from "../utils/args"

spawn.sync(
  "loki",
  [
    "--port",
    "9009",
    "--chromeDockerImage=yukinying/chrome-headless-browser-xl:78.0.3904.17",
    ...args(),
  ],
  {
    stdio: "inherit",
    env: {
      CI: "true",
      ...process.env,
    },
  },
)
