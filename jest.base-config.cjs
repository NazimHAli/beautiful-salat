module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/test/**/*.spec.ts"],
  collectCoverageFrom: ["<rootDir>/src/**/*.ts", "!<rootDir>/src/types/**/*.ts"],
  transform: {
    "^.+\\.(ts|js)$": "ts-jest"
  },
  restoreMocks: true,
  resetMocks: true,
  resetModules: true,
};
