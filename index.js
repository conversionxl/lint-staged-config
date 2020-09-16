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

        const phpConfigs = {
            'phpcs.xml': [
                `./vendor/bin/phpcbf ${relativeFilenames}; if [ $? -eq 1 ]; then exit 0; fi`,
                `./vendor/bin/phpcs -s ${relativeFilenames}`,
            ],
            'psalm.xml': [`./vendor/bin/psalm ${relativeFilenames}`],
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
