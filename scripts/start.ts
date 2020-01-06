import setEnv from './setEnv';
setEnv('development');
import {
  choosePort,
  createCompiler,
  prepareUrls
} from 'react-dev-utils/WebpackDevServerUtils';
import webpack from 'webpack';
import { existsSync } from 'fs';
import paths from './paths';
import webpackRenderDevConfig from './webpack.renderer.dev.config';
import WebpackDevServer from 'webpack-dev-server';
import createDevServerConfig from './webpack.devserver';
import webpackCompile from './webpackCompile';
import { exec } from 'child_process';

async function start() {
  try {
    const host = '127.0.0.1';
    const port = await choosePort(host, 8080);
    if (!port) {
      throw new Error('could not find availale port');
    }
    process.env.PORT = port.toString();
    const webpackMainConfig = (await import('./webpack.main.dev.config')).default;
    const urls = prepareUrls('http', host, port);
    const useYarn = existsSync(paths.yarnLockFile);
    const appName = require(paths.packageJson).name;
    const compiler = createCompiler({
      webpack,
      urls,
      useYarn,
      appName,
      config: webpackRenderDevConfig
    });
    const devServer = new WebpackDevServer(
      compiler,
      createDevServerConfig(port)
    );
    devServer.listen(port, host, err => {
      if (err) console.log(err.message);
    });
    await webpackCompile(webpackMainConfig);
    exec('yarn electron .', { cwd: paths.appDict, env: process.env })
      .on('error', err => {
        if (err) console.log(err.message);
      })
      .on('exit', code =>
        console.log(
          `electron has exited with code ${code}.\nyou can run \`yarn electron .\` to restart it`
        )
      );
  } catch (e) {
    console.log(e?.message);
  }
}

start();
