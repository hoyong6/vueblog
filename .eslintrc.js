module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["plugin:vue/essential", "standard"], // 使用 Vue 的基本规则和 Standard 风格
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["vue", "html"],
  rules: {
    // 允许函数括号前没有空格
    "space-before-function-paren": ["off"],

    // 禁止使用分号
    semi: ["off"],

    // 忽略单双引号检查
    quotes: ["off"],

    // 忽略多余分号
    "no-extra-semi": "off",

    // 忽略行尾空格
    "no-trailing-spaces": "off",

    // 缩进使用两个空格
    indent: ["error", 2],

    // 强制使用 LF 换行符
    "linebreak-style": ["error", "unix"]
  }
};
