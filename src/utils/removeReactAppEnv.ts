import chokidar from "chokidar"
import spawn from "cross-spawn"

export const removeReactAppEnv = () => {
  const watcher = chokidar.watch("src")
  watcher.on("add", function(path) {
    if (path === "src/react-app-env.d.ts") {
      spawn("rm", ["-f", "src/react-app-env.d.ts"])
    }
  })
}
