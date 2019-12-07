import { Configuration } from "webpack";
import { pathConsumer } from "../utils/paths";
import path from "path";

export default ({ config }: { config: Configuration }) => {
  if(config.module && config.resolve && config.resolve.extensions && config.resolve.alias) {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
      },
    })
    config.resolve.extensions.push(".ts", ".tsx", ".css")
    config.resolve.alias.consumer = path.resolve(__dirname, pathConsumer, "src")
  }
  return config
}
