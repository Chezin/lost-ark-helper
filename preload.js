
const { ipcRenderer, contextBridge } = require('electron');


// TODO: Learn what this does
// Got this from boilerplate and I have no clue on what it does
contextBridge.exposeInMainWorld('electron', {
  notificationApi: {
    sendNotification(message) {
      ipcRenderer.send('notify', message);
    }
  },
  batteryApi: {

  },
  filesApi: {

  }
})
