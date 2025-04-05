const shared = require('../base/shared');
const importSort = require('../base/import-sort');

/** @type {import('prettier').Config} */
module.exports = {
  ...shared,
  ...importSort
};
