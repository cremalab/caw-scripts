import { configure } from "@storybook/react"
import "loki/configure-react"


/**
 * Configure storybook
 * "consumerStories" is an alias added to webpack.config.
 * This is necessary to dynamically resolve paths
 */
configure(require.context("consumer", true, /(\.stories|storybookSetup)\.tsx$/), module)
