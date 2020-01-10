module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,//也就是ES6语法支持的意思
    sourceType: 'module',
    ecmaFeatures: {
        modules: true
    },
  },
  env: {
    browser: true,
    node: true
  },
  extends: '',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'never'
      }
    ],
  },
  globals: {}
}
