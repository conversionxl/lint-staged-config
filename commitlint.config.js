// @see https://github.com/conventional-changelog/commitlint/blob/v12.0.1/@commitlint/config-conventional/index.js
module.exports = {
    extends: ['@commitlint/config-conventional'],

    rules: {
        'body-max-line-length': [1, 'always', 100],
        'header-max-length': [1, 'always', 100],
        'scope-case': [2, 'never', ['kebab-case', 'snake-case']],
        'subject-case': [
            2,
            'never',
            [
                'upper-case',
                'camel-case',
                'kebab-case',
                'pascal-case',
                'snake-case',
            ],
        ],
        'type-enum': [
            2,
            'always',
            ['chore', 'docs', 'feat', 'fix', 'refactor', 'style', 'test'],
        ],
    },
};
