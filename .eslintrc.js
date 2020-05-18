module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:vue/essential', 'airbnb-base', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  settings: {
    // 别名
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          ['@components', './src/components'],
          ['@scss', './src/styles/'],
        ],
        extensions: ['.js', '.vue'],
      },
    },

    // 扩展文件
    'import/extensions': ['.js', '.vue'],
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 10,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-v-html': 'off',
    // import 导入规则
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        vue: 'never',
      },
    ],
    'no-param-reassign': 0,
    'func-names': 0,
  },
};
