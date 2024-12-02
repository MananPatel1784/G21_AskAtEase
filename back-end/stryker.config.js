/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
const config = {
  mutate: [
    'back-end/server/controllers/**/*.js',
    '!test/**/*.test.js'
  ],
  testRunner: 'mocha',
  mochaOptions: {
    spec: ['test/**.test.js'],
  },
  reporters: ['html', 'clear-text', 'progress'],
  coverageAnalysis: 'perTest'
};

export default config;