import path from "path"

export const pathConsumerGet = () => process.cwd()
export const pathPackageGet = () =>
  path.relative(pathConsumerGet(), path.join(__dirname, "../..")) || "./"

export const pathConsumer = pathConsumerGet()
export const pathPackage = pathPackageGet()
