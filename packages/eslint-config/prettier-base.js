/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  // semi: false,
  quoteProps: 'as-needed',
  // singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'lf',
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  embeddedLanguageFormatting: 'auto',
  // plugins: ['prettier-plugin-import-sort', 'prettier-plugin-tailwindcss'],
  // plugins: ['@trivago/prettier-plugin-sort-imports'],
  parser: 'typescript',

  plugins: [
    '@babel/plugin-syntax-decorators',
    require.resolve('@trivago/prettier-plugin-sort-imports'),
  ],
  importOrderSeparation: true,
  importOrderParserPlugins: ['typescript', 'decorators-legacy'],
  // importSort: {
  //   '.js, .jsx, .ts, .tsx': {
  //     style: 'module',
  //     options: {
  //       sortMethod: 'asc',
  //     },
  //   },
  // },
  importOrder: [
    '^(react/(.*)$)|^(react$)|^(next/(.*)$)|^(next$)',
    // '^(@/repo/(.*)$)',
    // '^(@/lib/(.*)$)|^(@/components/(.*)$)|^(@/styles/(.*)$)',
    '^[./]',
  ],
};
