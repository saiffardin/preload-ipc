const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile(path.join(__dirname, 'index.html'));
    win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})


ipcMain.on('msg-from-renderer', (e, arg1) => {
    console.log(arg1);
})

let count = 0;

setInterval(() => {
    win.webContents.send('count-from-main', count);
    count++;
}, 2000)

// win.webContents.send('count-from-main', count);