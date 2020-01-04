'use strict';

const path = require('path');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  node: {
    // 否则 electron-devtools-installer 将不会正确工作
    __dirname: true,
    __filename: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  devtool: 'source-map',
  plugins: []
};
