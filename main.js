const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    backgroundColor: '#212121',
    width: 800,
    height: 600,
    show: true
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  setTimeout(() => {
    createWindow()
  }, 5000)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
