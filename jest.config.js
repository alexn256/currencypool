module.exports = {
    preset: 'ts-jest/presets/js-with-babel',
    testMatch: [
        '<rootDir>/test/**/*.test.js',
        '<rootDir>/test/**/*.test.jsx',
    ],
    testPathIgnorePatterns: ["<rootDir>/node_modules/"],
};