module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['./src'],
  transform: { '\\.ts$': ['ts-jest'], '^.+\\.vue$': '@vue/vue3-jest', '.*\\.(js)$': 'babel-jest' },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**'],
  globals: {
    'ts-jest': {
      tsconfig: {
        // allow js in typescript
        allowJs: true
      }
    }
  }
}
