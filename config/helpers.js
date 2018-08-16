const path = require('path');

var ROOT = path.resolve(__dirname, '..');

var root = path.join.bind(path, ROOT);

/**
 * Helper functions.
 */
exports.root = root;
