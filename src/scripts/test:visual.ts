import { runBinary } from "../utils/runBinary"

runBinary(
  "loki",
  [
    "--port",
    "9009",
    "--chromeDockerImage=yukinying/chrome-headless-browser-xl:74.0.3729.28",
  ],
  true,
  {
    env: {
      ...process.env,
      CI: "true",
    },
  },
)
