const { BrowserWindow, app, ipcMain, Notification } = require('electron');
const path = require('path');
const isDev = !app.isPackaged;

const createWindow = () => {
  const window = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
    title: "Lost Ark Helper",
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  window.loadFile('index.html');
}

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}

ipcMain.on('notify', (_, message) => {
  new Notification({title: 'Notifiation', body: message}).show();
})

app.whenReady().then(createWindow)
