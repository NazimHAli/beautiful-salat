const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");
const sharedConfig = require("../../jest.base-config.js");

module.exports = {
    ...sharedConfig,
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: "<rootDir>/",
    }),
    moduleDirectories: ["node_modules", "src"],
};

// "jest": {
//   "collectCoverage": true,
//   "collectCoverageFrom": [
//       "<rootDir>/src/utils/*.ts",
//       "!<rootDir>/src/*.d.ts"
//   ],
//   "coverageReporters": [
//       "text",
//       "text-summary"
//   ],
//   "coverageThreshold": {
//       "global": {
//           "branches": 10,
//           "functions": 10,
//           "lines": 10,
//           "statements": 10
//       }
//   },
//   "moduleDirectories": [
//       "node_modules",
//       "src"
//   ],
//   "modulePaths": [
//       "<rootDir>/src"
//   ],
//   "moduleNameMapper": {
//       "^@/(.*)$": "<rootDir>/src/$1"
//   },
//   "transform": {
//       "^.+\\.(ts|js)$": "ts-jest"
//   },
//   "restoreMocks": true,
//   "resetMocks": true,
//   "resetModules": true
// },
