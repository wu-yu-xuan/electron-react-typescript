import setEnv from './setEnv';
setEnv('production');
import webpackMainConfig from './webpack.main.config';
import webpackCompile from './webpackCompile';
import webpackRendererConfig from './webpack.renderer.config';
import printBuildError from 'react-dev-utils/printBuildError';
import { emptyDirSync } from 'fs-extra';
import paths from './paths';

emptyDirSync(paths.output);
Promise.all([
  webpackCompile(webpackMainConfig),
  webpackCompile(webpackRendererConfig)
])
  .then(() => console.log('Compiled successfully.'))
  .catch(err => printBuildError(err));
