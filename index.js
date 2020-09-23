const fs = require('fs');
const path = require('path');

module.exports = {
    '*.js': ['eslint --fix', 'prettier --write'],
    '*.php': (filenames) => {
        // @see https://github.com/okonet/lint-staged#example-use-relative-paths-for-commands
        const cwd = process.cwd();
        const relativeFilenames = filenames
            .map((file) => path.relative(cwd, file))
            .join(' ');

        const phpComposerExec = 'composer exec -v';
        const phpConfigs = {
            'phpcs.xml': [
                /**
                 * Until PHPCS v4.
                 * Requires updated https://github.com/conversionxl/phpcs-ruleset
                 *
                 * @see https://github.com/squizlabs/PHP_CodeSniffer/issues/2898
                 * @see https://github.com/composer/composer/issues/9244
                 */
                // `${phpComposerExec} phpcbf ${relativeFilenames}; if [ $? -eq 1 ]; then exit 0; fi`,
                `${phpComposerExec} phpcbf-fix-exit-0 -- ${relativeFilenames}`,
                `${phpComposerExec} phpcs -- -s ${relativeFilenames}`,
            ],
            'psalm.xml': [`${phpComposerExec} psalm -- ${relativeFilenames}`],
        };

        // @see https://reedbarger.com/how-to-transform-javascript-objects-the-power-of-objectkeys-values-entries/#replacing-map--filter-with-a-single-reduce
        return Object.entries(phpConfigs).reduce((acc, [config, commands]) => {
            if (fs.existsSync(config)) {
                acc.push(...commands);
            }

            return acc;
        }, []);
    },
};
