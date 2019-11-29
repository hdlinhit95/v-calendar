// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

module.exports = {
  transpileDependencies: ['ansi-regex'],
  css: {
    extract: false,
  },
  outputDir: 'lib',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('src'),
      },
    },
  },
  lintOnSave: undefined,
};
