const shared = require('../base/shared');
const importSort = require('../base/import-sort');

/** @type {import('prettier').Config} */
module.exports = {
  ...shared,
  ...importSort,
  plugins: [
    ...(importSort.plugins || []),
    'prettier-plugin-tailwindcss'
  ],
  tailwindFunctions: ['cva', 'cx', 'cn'],

  //https://github.com/tailwindlabs/prettier-plugin-tailwindcss?tab=readme-ov-file#specifying-your-tailwind-javascript-config-path
  // "tailwindConfig": "./styles/tailwind.config.js"

  // OR

  // https://github.com/tailwindlabs/prettier-plugin-tailwindcss?tab=readme-ov-file#specifying-your-tailwind-stylesheet-path
  // tailwindStylesheet: "./src/tailwindcss.css",
};
