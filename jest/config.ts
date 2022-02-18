import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  rootDir: process.cwd(),
  moduleFileExtensions: [
    'ts',
    'js',
    'jsx',
    'tsx',
    'json',
    // tell Jest to handle *.vue files
    'vue'
  ],
  transform: {
    // process *.vue files with vue-jest
    '^.+\\.vue$': require.resolve('@vue/vue3-jest'),
    '^.+\\.tsx?$': require.resolve('ts-jest'),
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      require.resolve('jest-transform-stub'),
    '^.+\\.jsx?$': require.resolve('babel-jest')
  },
  transformIgnorePatterns: ['/node_modules/'],
  // support the same @ -> src alias mapping in source code
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/packages/vfox/src/$1',
    '^@fox2/vfox-icons$': '<rootDir>/jest/icons.ts'
  },
  // testEnvironment: 'jest-environment-jsdom-fifteen',
  // serializer for snapshots
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: [
    '**/tests/unit/**/*.spec.[jt]s?(x)',
    '**/__tests__/*.spec.[jt]s?(x)'
  ],
  // testMatch: ['**/BackTop/__tests__/*.[jt]s?(x)'],
  // https://github.com/facebook/jest/issues/6766
  testURL: 'http://localhost/',
  setupFilesAfterEnv: ['<rootDir>/jest/setup.ts'],
  testEnvironment: 'jsdom'
}

export default config
