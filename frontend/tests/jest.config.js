module.exports = {
  rootDir: '..',
  testTimeout: 30000,
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$':
      '<rootDir>/node_modules/jest-css-modules-transform',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/__mocks__/fileMock.js',
    '\\.module\\.(css|scss)$': '<rootDir>/node_modules/identity-obj-proxy',
    '\\.(css|scss|less)$': '<rootDir>/tests/__mocks__/styleMock.js',
    '@/(.*)': '<rootDir>/src/$1',
    '@utilities/(.*)': '<rootDir>/src/utilities/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@services/(.*)': '<rootDir>/src/services/$1',
    '@adapters/(.*)': '<rootDir>/src/adapters/$1',
  },
  setupFilesAfterEnv: [
    '<rootDir>/tests/jest-setup.js',
    '<rootDir>/node_modules/@testing-library/jest-dom/dist/index.js',
  ],
  coveragePathIgnorePatterns: [
    'src/root.tsx',
    'src/context/root-context.tsx',
    'src/store.ts',
  ],
  coverageDirectory: '<rootDir>/tests/__coverage__/',
  transformIgnorePatterns: ['node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)'],
  testEnvironment: 'node',
};
