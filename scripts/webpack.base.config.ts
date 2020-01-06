import paths from './paths';
import { Configuration } from 'webpack';
import webpack = require('webpack');

export default {
  mode: process.env.NODE_ENV,
  output: {
    path: paths.output,
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
} as Configuration;


