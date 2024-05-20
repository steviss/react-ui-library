module.exports = {
  '{**/*,*}.{ts,js,cjs,mjs}': ['yarn lint', 'yarn format'],
  '{**/*,*}.{test.tsx,test.jsx,test.ts,test.js}': 'yarn test --findRelatedTests',
}
