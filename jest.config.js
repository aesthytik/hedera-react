module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@hedera-react/(.*)$": "<rootDir>/packages/$1/src",
  },
};
