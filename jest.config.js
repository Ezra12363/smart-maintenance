module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text', 'html'],
  collectCoverageFrom: [
    'controllers/**/*.js',
    '!**/node_modules/**'
  ],
  testMatch: ['**/__tests__/**/*.test.js', '**/?(*.)+(spec|test).js']
};
