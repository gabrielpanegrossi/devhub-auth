/* eslint-disable @typescript-eslint/no-var-requires */
const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = {
  webpack: override(
    addWebpackAlias({
      '~components': path.resolve(__dirname, './src/components'),
      '~hooks': path.resolve(__dirname, './src/hooks'),
      '~containers': path.resolve(__dirname, './src/containers'),
      '~services': path.resolve(__dirname, './src/services'),
      '~utils': path.resolve(__dirname, './src/utils'),
      '~mocks': path.resolve(__dirname, './src/mocks'),
    })
  ),
};
