module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.spec.jsx'],
      env: {
        jest: true,
      },
    },
  ],
  rules: {
    'linebreak-style': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-nested-ternary': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'import/no-unresolved': 'off',
    'max-len': ['error', { code: 160, tabWidth: 2 }],
    'react/prop-types': 'off',
    'no-plusplus': 'off',
    'default-param-last': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-undef': 'off', // off for testing
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'func-names': 'off',
    'react/function-component-definition': 'off',
  },
};
