const fs = require('fs');
const path = require('path');

const cwd = process.env.INIT_CWD || process.cwd();

/**
 * commitlint.
 *
 * @since 2021.03.18
 */
const commitlintConfigPath = path.join(cwd, 'commitlint.config.js');

if (!fs.existsSync(commitlintConfigPath)) {
    fs.writeFileSync(
        commitlintConfigPath,
        "module.exports = { extends: ['@commitlint/config-conventional'] };\n"
    );
}

/**
 * husky.
 */
const dotHuskyPath = path.join(cwd, '.husky');

if (!fs.existsSync(dotHuskyPath)) {
    fs.mkdirSync(dotHuskyPath);
    fs.cpSync(
        path.join(cwd, 'node_modules/@conversionxl/lint-staged-config/.husky'),
        dotHuskyPath,
        { recursive: true }
    );
}

/**
 * lint-staged.
 */
const lintStagedConfigPath = path.join(cwd, 'lint-staged.config.js');

if (!fs.existsSync(lintStagedConfigPath)) {
    fs.writeFileSync(
        lintStagedConfigPath,
        "module.exports = require('@conversionxl/lint-staged-config');\n"
    );
}

/**
 * prettier.
 */
const prettierConfigPath = path.join(cwd, '.prettierrc.js');

if (!fs.existsSync(prettierConfigPath)) {
    fs.writeFileSync(
        prettierConfigPath,
        "module.exports = require('@conversionxl/lint-staged-config/.prettierrc.js');\n"
    );
}
