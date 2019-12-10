import spawn = require("cross-spawn")

const trimEnds = (a: string) => a.slice(1, -1)

describe("dist", () => {
  it("works", () => {
    spawn.sync("npm", ["run", "build"])
    process.chdir("./dist")
    const tree = spawn.sync("treee", ["-a", "-l 6"]).output.toString()
    expect(
      trimEnds(tree).replace(/(\/.*\/dist)/, "/<PROJECT_DIR>/dist"),
    ).toMatchSnapshot()
  })
})
