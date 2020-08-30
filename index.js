const path = require('path');

module.exports = {
    '*': [
        'eclint fix'
    ],
    '*.js': [
        'eslint --fix'
    ],
    '*.php': (filenames) => {
        // @see https://github.com/okonet/lint-staged#example-use-relative-paths-for-commands
        const cwd = process.cwd();
        const relativeFilenames = filenames.map((file) => path.relative(cwd, file)).join(' ');

        return [
            `./vendor/bin/phpcbf ${relativeFilenames}; if [ $? -eq 1 ]; then exit 0; fi`,
            `./vendor/bin/phpcs -s ${relativeFilenames}`,
        ]
    }
}
