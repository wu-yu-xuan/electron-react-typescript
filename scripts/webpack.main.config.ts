import webpack from 'webpack';
import merge from 'webpack-merge';
import webpackBaseConfig from './webpack.base.config';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import paths from './paths';

export default merge(webpackBaseConfig, {
  target: 'electron-main',
  entry: './src/main/index.ts',
  output: {
    path: paths.output,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          babelrc: false,
          presets: [
            ['@babel/preset-env', { targets: 'maintained node versions' }],
            '@babel/preset-typescript'
          ]
        }
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      reportFiles: ['src/main/**/*']
    }),
    new webpack.DefinePlugin(getConstant())
  ]
});

function getConstant() {
  return Object.entries(process.env).reduce(
    (prev, [key, value]) => ({
      ...prev,
      [`process.env.${key}`]: JSON.stringify(value)
    }),
    {}
  );
}
