module.exports = {
  '{**/*,*}.{ts,js,cjs,mjs}': ['yarn lint', 'yarn format'],
  '{**/*,*}.{test.ts,test.js}': 'yarn test --findRelatedTests',
}
