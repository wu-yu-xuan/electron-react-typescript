import { realpathSync } from "fs";
import {resolve} from 'path'

const appDict = realpathSync(process.cwd());

export default{
  appDict,
  yarnLockFile :resolve(appDict,'yarn.lock'),
appHtml:resolve(appDict,'dist/index.html'),
packageJson:resolve(appDict,'package.json'),
output:resolve(appDict,'dist')
}