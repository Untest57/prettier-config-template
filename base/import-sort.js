module.exports = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],

  // https://github.com/trivago/prettier-plugin-sort-imports?tab=readme-ov-file#apis
  importOrder: [
    '^node:(.*)$',
    '^react(-dom.+)?$',
    '^next(/.*)?$',
    'next-themes',
    '<THIRD_PARTY_MODULES>',
    '^@workspace\/(.+)$',
    '^@\/(.+)$',
    '^\.\.?\/(.+)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
