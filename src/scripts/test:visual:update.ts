import spawn from "cross-spawn"

spawn.sync("caws", ["test:visual", "update"], {
  stdio: "inherit",
  env: {
    CI: "true",
    ...process.env,
  },
})
