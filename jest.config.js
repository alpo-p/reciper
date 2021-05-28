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
    "/node_modules/(?!native-base)/"
  ],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  cacheDirectory: '.jest/cache',
  setupFilesAfterEnv: [
    "./setupTests.js",
  ],
  setupFiles: [
    "./node_modules/react-native-gesture-handler/jestSetup.js",
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  moduleNameMapper: { 
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/assetsTransformer.js", "\\.(css|less)$": "<rootDir>/assetsTransformer.js" 
  },
}