const config = async () => {
  return {
    testEnvironment: 'jsdom',
    verbose: true,
    modulePathIgnorePatterns: ['dist'],
  }
}

export default config
