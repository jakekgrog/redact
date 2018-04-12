const electron = require("electron");
const url = require("url");
const path = require("path");
const shell = require('electron').shell;

const {app, BrowserWindow, ipcMain, Menu, Tray, webContents} = electron;

let mainWindow;

// Listen for app to be ready
app.on('ready', function(){
    //Create new window
    mainWindow = new BrowserWindow({width: 1200, height: 600});
    // Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "src/mainWindow.html"),
        protocol: 'file:',
        slashes: true
    }));

    //mainWindow.webContents.toggleDevTools();

    var menu = Menu.buildFromTemplate([
        {
            label: 'Menu',
            submenu: [
                {
                    label: 'Exit',
                    click() {
                        app.quit();
                    }
                },
            ]
        },
        {
            label: 'Info',
            submenu: [
                {
                    label: 'View Source',
                    click() {
                        shell.openExternal("https://www.github.com/r-dog/redact");
                        
                    }
                }
            ]
        }
    ]);

    Menu.setApplicationMenu(menu);

});