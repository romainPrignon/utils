module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/test/**/*.test.ts',
    '**/type/**/*.test.ts',
  ],
  coverageThreshold: {
    global: {
      functions: 100,
      lines: 100,
      branches: 100,
      statements: 100,
    }
  },
  collectCoverageFrom: [
    'src/**/*.{js,ts}',
    '!src/script/*.{js,ts}',
  ]
}
