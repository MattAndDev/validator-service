module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier'
  ],
  env: {
    es6: true,
    node: true,
    browser: false
  },
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',
        ignoreRestSiblings: false,
        varsIgnorePattern: '^_.*$',
        argsIgnorePattern: '^_.*?$'
      }
    ]
  },
  overrides: [
    {
      files: ['**/*.test.ts'],
      env: {
        jest: true
      }
    }
  ]
}
