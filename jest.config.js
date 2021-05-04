const { defaults: tsjPreset } = require('ts-jest/presets')

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  transform: {
    ...tsjPreset.transform,
    "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest",
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|expo-font/build/.*|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*|react-router-native)",
  ],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  cacheDirectory: '.jest/cache',
  setupFilesAfterEnv: [
    "./setupTests.js"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
}