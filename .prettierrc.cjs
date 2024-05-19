const config = {
  printWidth: 140,
  trailingComma: 'all',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  importOrder: [
    '^src/types|src/utilities(.*)$',
    '^src/components/store(.*)$',
    '^src/pages(.*)$',
    '^src/components/organisms(.*)$',
    '^src/components/molecules(.*)$',
    '^src/components/atoms(.*)$',
    '^src/store(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
}

module.exports = config
