/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["js", "ts"],
  testMatch: ["**/*.test.ts"],
  transform: {
    "^.+\.tsx?$": ["ts-jest",{}],
  },
};