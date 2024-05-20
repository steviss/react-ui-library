const config = async () => {
  return {
    testEnvironment: 'jest-environment-jsdom',
    verbose: true,
    modulePathIgnorePatterns: ['dist'],
    moduleNameMapper: {
      '.(css|less|scss)$': 'identity-obj-proxy',
    },
  }
}

export default config
