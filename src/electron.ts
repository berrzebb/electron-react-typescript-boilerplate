import { app, BrowserWindow } from 'electron';
import { TrayMenu } from '@/electron/TrayMenu';
import { appManager } from './electron/AppManager';
import { MainWindow } from './electron/MainWindow';


app.on('ready', ()=> {
    appManager.setTray(new TrayMenu());
    appManager.setWindow("MainWindow", new MainWindow());
})
