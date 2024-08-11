module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	setupFiles: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      },
}
