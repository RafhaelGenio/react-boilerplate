module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  extends: [
    'react-app',
    'airbnb'
  ],
  rules: {
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': 'off'
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": [process.env.NODE_PATH]
      }
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    }
  }
}