import { configure, addDecorator } from "@storybook/react"
import "loki/configure-react"

/**
 * Attempt to require storybookSetup file
 * This file will be where the end user does custom setup
 */
const storybookSetup = require("../../../../src/storybookSetup.tsx")

/**
 * Call addDecorator if module baseDecorator is defined
 * This is where any global Providers and styles should be placed
 */
if(storybookSetup.baseDecorator) {
  addDecorator(storybookSetup.baseDecorator)
}

/**
 * Configure storybook
 * "consumerStories" is an alias added to webpack.config.
 * This is necessary to dynamically resolve paths
 */
configure(require.context("consumerStories", true, /\.stories\.tsx$/), module)
