const fs = require('fs');
const path = require('path');

/**
 * husky.
 */
const huskyConfigPath = path.join(process.env.INIT_CWD, 'husky.config.js');

if (!fs.existsSync(huskyConfigPath)) {
    fs.writeFileSync(
        huskyConfigPath,
        "module.exports = require('@conversionxl/lint-staged-config/husky.config.js');\n"
    );
}

/**
 * lint-staged.
 */
const lintStagedConfigPath = path.join(
    process.env.INIT_CWD,
    'lint-staged.config.js'
);

if (!fs.existsSync(lintStagedConfigPath)) {
    fs.writeFileSync(
        lintStagedConfigPath,
        "module.exports = require('@conversionxl/lint-staged-config');\n"
    );
}
