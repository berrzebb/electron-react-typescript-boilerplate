import { app, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';
export class MainWindow {
  public readonly window: BrowserWindow;

  constructor() {
    this.window = this.createWindow();
  }

  createWindow(): BrowserWindow {
    const window = new BrowserWindow({
      width: 800,
      height: 600,
      show: false, // This will the window hidden in launch time.
      webPreferences: {
        nodeIntegration: true
      }
    })

    // Load our index.html
    window.loadURL(
        isDev
        ? 'http://localhost:9000'
        : `file://${app.getAppPath()}/build/index.html`,)
    return window;
  }
}