import merge from 'webpack-merge';
import webpackBaseConfig from './webpack.main.config';

export default merge(webpackBaseConfig, {
  node: {
    // 否则 electron-devtools-installer 将不会正确工作
    __dirname: true,
    __filename: true
  },
});
