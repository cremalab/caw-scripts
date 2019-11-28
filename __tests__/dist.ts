import spawn = require("cross-spawn")

const removeFirstLine = (a: string) =>
  a
    .split("\n")
    .slice(2)
    .join("\n")

describe("dist", () => {
  it("works", () => {
    spawn.sync("npm", ["run", "build"])
    process.chdir("./dist")
    const tree = spawn.sync("treee", ["-a", "-l 6"]).output.toString()
    expect(removeFirstLine(tree)).toMatchSnapshot()
  })
})
