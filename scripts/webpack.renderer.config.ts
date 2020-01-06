import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import baseConfig from './webpack.base.config';
import paths from './paths';

export default merge(baseConfig, {
  target: 'electron-renderer',
  entry: './src/renderer/index.tsx',
  output: {
    path: paths.output,
    filename: '[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          babelrc: false,
          presets: [
            [
              '@babel/preset-env',
              { targets: { browsers: 'last 2 versions ' } }
            ],
            '@babel/preset-typescript',
            '@babel/preset-react'
          ],
          plugins: [
            [
              'import',
              {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: 'css'
              }
            ]
          ]
        }
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          '@teamsupercell/typings-for-css-modules-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        loader: 'file-loader'
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      reportFiles: ['src/renderer/**/*']
    }),
    new webpack.NamedModulesPlugin(),
    // for generate index.html
    new HtmlWebpackPlugin()
  ]
});
