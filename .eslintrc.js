module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: [
    'react-hooks'
  ],
  rules: {
    'func-names': ['error', 'never'],
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          every: ['nesting', 'id']
        },
        allowChildren: false
      }
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        specialLink: ['to']
      }
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'max-len': [
      'error',
      {
        code: 100,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    'react/prefer-stateless-function': [false],
    'import/prefer-default-export': [false],
    'react/destructuring-assignment': [true, { 'ignoreClassFields': true }],
    'react-hooks/rules-of-hooks': 'error'
  },
  globals: {
    window: true,
    document: true,
    navigator: true,
    __dirname: true,
    __DEV__: true,
    CONFIG: true,
    process: true,
    jest: true,
    describe: true,
    test: true,
    it: true,
    expect: true,
    beforeEach: true,
    fetch: true,
    alert: true
  }
};

// module.exports = {
//   parser: 'babel-eslint',
//   parserOptions: {
//     ecmaFeatures: {
//       generators: true,
//       experimentalObjectRestSpread: true
//     },
//     sourceType: 'module',
//     allowImportExportEverywhere: false
//   },
//   plugins: ['flowtype'],
//   extends: ['airbnb', 'plugin:flowtype/recommended'],
//   settings: {
//     flowtype: {
//       onlyFilesWithFlowAnnotation: true
//     },
//     'import/resolver': {
//       node: {
//         extensions: ['.js', '.json', '.css', '.styl']
//       }
//     }
//   },
//   rules: {
//     'import/extensions': [
//       'error',
//       'always',
//       {
//         js: 'never',
//         jsx: 'never',
//         styl: 'never',
//         css: 'never'
//       }
//     ],
//     'no-shadow': 0,
//     'no-use-before-define': 0,
//     'no-param-reassign': 0,
//     'react/prop-types': 0,
//     'react/no-render-return-value': 0,
//     'no-confusing-arrow': 0,
//     'no-underscore-dangle': 0,
//     'no-plusplus': 0,
//     camelcase: 1,
//     'prefer-template': 1,
//     'react/no-array-index-key': 1,
//     'global-require': 1,
//     'react/jsx-indent': 1,
//     'dot-notation': 1,
//     'import/no-named-default': 1,
//     'no-unused-vars': 1,
//     'flowtype/no-weak-types': 1,
//     'consistent-return': 1,
//     'import/prefer-default-export': 1,
//     'no-console': 1,
//     'jsx-a11y/no-static-element-interactions': 1,
//     'no-case-declarations': 1,
//     'jsx-quotes': [2, 'prefer-single'],
//     'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.js'] }],
//     'spaced-comment': [2, 'always', { markers: ['?'] }],
//     'arrow-parens': [2, 'as-needed', { requireForBlockBody: false }],
//     'brace-style': [2, 'stroustrup'],
//     'import/no-unresolved': [2, { commonjs: true, caseSensitive: true }],
//     'no-unused-expressions': [
//       2,
//       {
//         allowShortCircuit: true,
//         allowTernary: true,
//         allowTaggedTemplates: true
//       }
//     ],
//     'import/no-extraneous-dependencies': [
//       'error',
//       {
//         devDependencies: true,
//         optionalDependencies: true,
//         peerDependencies: true
//       }
//     ],
//     'comma-dangle': [
//       2,
//       {
//         arrays: 'never',
//         objects: 'never',
//         imports: 'never',
//         exports: 'never',
//         functions: 'never'
//       }
//     ],
//     'max-len': [
//       'error',
//       {
//         code: 80,
//         tabWidth: 2,
//         ignoreUrls: true,
//         ignoreComments: true,
//         ignoreRegExpLiterals: true,
//         ignoreStrings: true,
//         ignoreTemplateLiterals: true
//       }
//     ],
//     'react/sort-comp': [
//       2,
//       {
//         order: [
//           'propTypes',
//           'props',
//           'state',
//           'defaultProps',
//           'contextTypes',
//           'childContextTypes',
//           'getChildContext',
//           'static-methods',
//           'lifecycle',
//           'everything-else',
//           'render'
//         ]
//       }
//     ],
//     'linebreak-style': 0
//   }
// }
