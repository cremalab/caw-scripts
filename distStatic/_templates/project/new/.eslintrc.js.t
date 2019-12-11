---
to: .eslintrc.js
---
const caws = require.resolve("caws/.eslintrc")

module.exports = {
  extends: [caws],
  rules: {},
}
