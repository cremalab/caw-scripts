import spawn from "cross-spawn"

spawn.sync("caws", ["test:visual", "approve"], {
  stdio: "inherit",
  env: {
    CI: "true",
    ...process.env,
  },
})
