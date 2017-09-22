# jest-fuck
Play an audible 'fuck' whenever your tests fail

## Installation:

`npm install --save-dev jest-fuck`

## Getting Started

To use this reporter you will need to have a Jest test environment set up.
In your `package.json` add:

```json
"jest": {
  "reporters": [
    "default"
    "<rootDir>/node_modules/jest-fuck"
  ]
}
```

