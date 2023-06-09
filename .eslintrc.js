module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'linebreak-style': 0,
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    camelcase: 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
