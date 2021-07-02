import { app, Tray, Menu, nativeImage } from 'electron';
import { appManager } from './AppManager';

export class TrayMenu {
  // Create a variable to store our tray
  // Public: Make it accessible outside of the class;
  // Readonly: Value can't be changed
  public readonly tray: Tray;

  // Path where should we fetch our icon;
  private iconPath: string = '/assets/clock-icon.png';

  constructor() {
    this.tray = new Tray(this.createNativeImage());
    this.tray.setContextMenu(this.createMenu());
  }

  createNativeImage() {
    // Since we never know where the app is installed,
    // we need to add the app base path to it.
    const path = `${app.getAppPath()}${this.iconPath}`;
    const image = nativeImage.createFromPath(path);
    // Marks the image as a template image.
    image.setTemplateImage(true);
    return image;
  }
  createMenu(): Menu {
    // This method will create the Menu for the tray
    const contextMenu = Menu.buildFromTemplate([
      {
        label: 'Open',
        type: 'normal',
        click: () => { 
          /* Later this will open the Main Window */ 
          appManager.getWindow('MainWindow').window.show();
        }
      },
      {
        label: 'Quit',
        type: 'normal',
        click: () => app.quit()
      }
    ]);
    return contextMenu;
  }
}