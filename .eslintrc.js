module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        commonjs: true,
        es2020: true,
        node: true,
    },
    extends: ['@10up/eslint-config', '@10up/eslint-config/wordpress'],
    parserOptions: {
        ecmaVersion: 12,
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {},
    globals: {
        module: true,
        process: true,
        window: true,
        document: true,
        wp: true,
    },
};
