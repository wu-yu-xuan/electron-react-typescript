import paths from './paths';
import { Configuration } from 'webpack';

export default {
  mode: process.env.NODE_ENV,
  output: {
    path: paths.output,
    filename: '[name].js'
  },
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  devtool: 'source-map',
  plugins: []
} as Configuration;


