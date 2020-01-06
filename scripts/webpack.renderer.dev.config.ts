import merge from 'webpack-merge';

import baseConfig from './webpack.renderer.config';

export default merge(baseConfig, {
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  }
});
