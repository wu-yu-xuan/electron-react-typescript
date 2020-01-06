import webpack, { Configuration } from 'webpack';
import formatWebpackMessages from 'react-dev-utils/formatWebpackMessages';

export default function webpackCompile(config: Configuration) {
  const compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }
      const messages = formatWebpackMessages(stats.toJson({}, true));
      if (messages.errors.length) {
        // Only keep the first error. Others are often indicative
        // of the same problem, but confuse the reader with noise.
        return reject(new Error(messages.errors[0]));
      }
      if (messages.warnings.length) {
        console.warn(messages.warnings);
      }
      return resolve(stats);
    });
  });
}
