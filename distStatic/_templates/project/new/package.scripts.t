---
inject: true
to: package.json
after: scripts
skip_if: '"start": "caws start",'
---
    "start": "caws start",
    "start:ci": "caws start:ci",
    "start:visual": "caws start:visual",
    "build": "caws build",
    "new:component": "caws new:component",
    "new:type": "caws new:type",
    "new:util": "caws new:util",
    "test:lint": "caws test:lint",
    "test:unit": "caws test:unit",
    "test:unit:coverage": "caws test:unit:coverage",
    "test:visual": "caws test:visual",
    "test:visual:approve": "caws test:visual:approve",
    "test:visual:update": "caws test:visual:update"
