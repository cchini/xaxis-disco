const { merge } = require('webpack-merge');
const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-source-map',
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../public'),
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '../public'),
    },
    port: 3000,
    open: true,
    allowedHosts: ['.localhost'],
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
  plugins: [new NodePolyfillPlugin()],
});
