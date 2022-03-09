const {contextBridge, ipcRenderer} = require('electron');

const apiObj = {
    sendMsg: (msg) => ipcRenderer.send('msg-from-renderer', msg),

    onCount: (callback) => ipcRenderer.on('count-from-main', (e, arg1) => callback(arg1)),

    sendPromise: () => ipcRenderer.invoke('anim-txt')
}

contextBridge.exposeInMainWorld('bridgeAPI', apiObj);


