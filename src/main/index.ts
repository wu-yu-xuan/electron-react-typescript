import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';
import electronDevtoolsInstaller, {
  REACT_DEVELOPER_TOOLS
} from 'electron-devtools-installer';

let win: BrowserWindow | null;

const installExtensions = async () => {
  return electronDevtoolsInstaller(REACT_DEVELOPER_TOOLS)
    .then(name => console.log(`${name} has installed`))
    .catch(err => console.log('intall extension error: ',err));
};

const createWindow = async () => {
  if (process.env.NODE_ENV !== 'production') {
    await installExtensions();
  }

  win = new BrowserWindow({ width: 800, height: 600 });

  if (process.env.NODE_ENV !== 'production') {
    process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';
    win.loadURL(`http://localhost:2003`);
  } else {
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
      })
    );
  }

  if (process.env.NODE_ENV !== 'production') {
    // Open DevTools, see https://github.com/electron/electron/issues/12438 for why we wait for dom-ready
    win.webContents.once('dom-ready', () => {
      win!.webContents.openDevTools();
    });
  }

  win.on('closed', () => {
    win = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
