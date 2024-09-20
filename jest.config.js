// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  coverageProvider: "v8",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
};

module.exports = createJestConfig(customJestConfig);
