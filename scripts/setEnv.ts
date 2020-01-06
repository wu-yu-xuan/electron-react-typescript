import { choosePort } from "react-dev-utils/WebpackDevServerUtils";

/**
 * 设置 env 变量
 * @param mode
 */
export default async function setEnv(mode: 'development' | 'production') {
  process.env.NODE_ENV = mode;
  process.env.BABEL_ENV = mode;
  process.env.ELECTRON_BUILDER_BINARIES_MIRROR =
    'https://npm.taobao.org/mirrors/electron-builder-binaries/';
}
