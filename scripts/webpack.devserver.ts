import { Configuration } from 'webpack-dev-server';

export default function createDevServerConfig(port: number): Configuration {
  return {
    port,
    compress: true,
    noInfo: true,
    stats: 'errors-only',
    inline: true,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: {
      verbose: true
    }
  };
}
