import spawn from "cross-spawn"

spawn.sync("caws", ["build"], {
  stdio: "inherit",
  env: {
    ...process.env,
    EXTEND_ESLINT: "true",
  },
})

spawn.sync("serve", ["-s", "build"], {
  stdio: "inherit",
  env: {
    ...process.env,
    EXTEND_ESLINT: "true",
  },
})
