module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends": [
    "plugin:react/recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  "overrides": [
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "plugins": [
    "react",
    '@typescript-eslint',
    'react-hooks',
    'react-native',
  ],
  'rules': {
    "arrow-body-style": ["error", "as-needed"],
    'consistent-return': 'error',
    'no-console': 1,
    'no-trailing-spaces': 'error',
    'eol-last': 1,
    'max-len': ['error', {
      'code': 100,
    }],
    'semi': ['error', 'always'],
    'jsx-quotes': ['error', 'prefer-double'],
    'default-param-last': 'off',
    'no-use-before-define': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'padded-blocks': 'off',
    'indent': ['error', 2, {SwitchCase: 1}],
    "object-curly-newline": ["error", {
      "ImportDeclaration": {
        "multiline": true, "minProperties": 3,
      },
    }],
    'react-hooks/exhaustive-deps': 'warn',
    'linebreak-style': process.platform === 'win32' ? [0, 'windows'] : [2, 'unix'],
    'react/jsx-props-no-spreading': [0],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react-native/no-color-literals': 2,
    '@typescript-eslint/no-var-requires': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
