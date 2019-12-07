---
inject: true
to: package.json
before: "}\n$"
---
  "browserslist": {
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ],
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ]
  },
  "jest": {
    "collectCoverageFrom": [
      "!node_modules",
      "!src/**/*.stories.{ts,tsx}",
      "!src/**/*.test.{ts,tsx}",
      "!src/**/index.{ts,tsx}",
      "!src/*.{ts,tsx}",
      "!**/*.d.ts",
      "!src/serviceWorker.ts",
      "src/**/*.{ts,tsx}"
    ]
  },
  "loki": {
    "configurations": {
      "chrome": {
        "deviceScaleFactor": 1,
        "fitWindow": false,
        "height": 800,
        "mobile": false,
        "target": "chrome.docker",
        "width": 800
      }
    },
    "requireReference": true
  }