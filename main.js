const { app, BrowserWindow } = require('electron');
const windowBundle = require('./bundles/window.json');

const START_URL = 'http://localhost:3000';

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    title: windowBundle.windowTitle,
    webPreferences: {
        nodeIntegration: true
    }
})

  mainWindow.removeMenu();
  mainWindow.loadURL(START_URL);
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    console.log(process.platform);
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});