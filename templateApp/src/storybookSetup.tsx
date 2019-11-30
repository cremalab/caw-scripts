import { DecoratorFn } from "@storybook/react"
import "./index.css" // global styles

/**
 * baseDecorator
 * ----------------------------------------------------
 * This module is read by caw-scripts storybook config.
 * Wrap this decorators return in any JSX structure you
 * want to apply to all your stories.
 */
export const baseDecorator: DecoratorFn = story => {
  return story()
}
