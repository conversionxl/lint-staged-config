module.exports = {
    hooks: {
        'pre-commit': 'npx lint-staged --shell --verbose',
    },
};
