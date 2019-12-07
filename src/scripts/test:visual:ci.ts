import spawn from "cross-spawn"

spawn.sync("caws", ["build:visual"], {
  stdio: "inherit",
  env: {
    CI: "true",
    ...process.env,
  },
})

console.log("foo")

spawn.sync(
  "start-server-and-test",
  [
    "caws start:visual:ci",
    "http://localhost:5000",
    "test:visual -- --port 5000",
  ],
  {
    stdio: "inherit",
    env: {
      CI: "true",
      ...process.env,
    },
  },
)

// ! "test:visual:ci": "start-server-and-test test:playground:ci http://localhost:5000 test:visual:ci:start",
// ! "test:visual:ci:start": "CI=true loki --port 5000 --chromeDockerImage=yukinying/chrome-headless-browser-xl:74.0.3729.28",
