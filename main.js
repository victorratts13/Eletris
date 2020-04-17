
//const electron = require('electron')

const app = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow; 

function createWindow () {
  // Cria uma janela de navegação.
  let win = new BrowserWindow({
    width: 360,
    height: 640,
    webPreferences: {
      nodeIntegration: false
    }
  })

  // e carregar o index.html do aplicativo.
  win.loadFile('index.html')
}

//app.whenReady().then(createWindow)
app.whenReady().then(createWindow);