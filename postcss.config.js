/* eslint import/no-extraneous-dependencies: 0 */
const postcssImport = require('postcss-import');
const postcssFor = require('postcss-for');
const postcssMath = require('postcss-math');
const postcssCSSNext = require('postcss-cssnext');
const cssNano = require('cssnano');

module.exports = {
  plugins: [
    postcssImport({}),
    postcssFor({}),
    postcssMath({}),
    postcssCSSNext({
      browsers: ['> 0.05%', 'IE 7'],
      cascade: false,
    }),
    cssNano({}),
  ],
};
