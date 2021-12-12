const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");
const sharedConfig = require("../../jest.base-config.js");

module.exports = {
    ...sharedConfig,
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: "<rootDir>/",
    }),
    moduleDirectories: ["node_modules", "src"],
    collectCoverage: true,
    collectCoverageFrom: ["<rootDir>/src/utils/*.ts", "!<rootDir>/src/*.d.ts"],
    coverageReporters: ["text", "text-summary"],
    coverageThreshold: {
        global: {
            branches: 10,
            functions: 10,
            lines: 10,
            statements: 10,
        },
    },
};
