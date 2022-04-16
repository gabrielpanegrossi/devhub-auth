/* eslint-disable @typescript-eslint/no-var-requires */
const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = {
  webpack: override(
    addWebpackAlias({
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
    }),
  ),
}
