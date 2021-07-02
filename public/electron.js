/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/electron-is-dev/index.js":
/*!***********************************************!*\
  !*** ./node_modules/electron-is-dev/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst electron = __webpack_require__(/*! electron */ \"electron\");\n\nif (typeof electron === 'string') {\n\tthrow new TypeError('Not running in an Electron environment!');\n}\n\nconst isEnvSet = 'ELECTRON_IS_DEV' in process.env;\nconst getFromEnv = Number.parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;\n\nmodule.exports = isEnvSet ? getFromEnv : !electron.app.isPackaged;\n\n\n//# sourceURL=webpack://react-electron/./node_modules/electron-is-dev/index.js?");

/***/ }),

/***/ "./src/electron.ts":
/*!*************************!*\
  !*** ./src/electron.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar electron_1 = __webpack_require__(/*! electron */ \"electron\");\r\nvar TrayMenu_1 = __webpack_require__(/*! @/electron/TrayMenu */ \"./src/electron/TrayMenu.ts\");\r\nvar AppManager_1 = __webpack_require__(/*! ./electron/AppManager */ \"./src/electron/AppManager.ts\");\r\nvar MainWindow_1 = __webpack_require__(/*! ./electron/MainWindow */ \"./src/electron/MainWindow.ts\");\r\nelectron_1.app.on('ready', function () {\r\n    AppManager_1.appManager.setTray(new TrayMenu_1.TrayMenu());\r\n    AppManager_1.appManager.setWindow(\"MainWindow\", new MainWindow_1.MainWindow());\r\n});\r\n\n\n//# sourceURL=webpack://react-electron/./src/electron.ts?");

/***/ }),

/***/ "./src/electron/AppManager.ts":
/*!************************************!*\
  !*** ./src/electron/AppManager.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.appManager = void 0;\r\nvar AppManager = /** @class */ (function () {\r\n    function AppManager() {\r\n        this.windowManager = new Map();\r\n    }\r\n    AppManager.prototype.setTray = function (tray) {\r\n        this.trayMenu = tray;\r\n    };\r\n    AppManager.prototype.getTray = function (tray) {\r\n        return this.trayMenu;\r\n    };\r\n    AppManager.prototype.setWindow = function (name, element) {\r\n        this.windowManager.set(name, element);\r\n    };\r\n    AppManager.prototype.getWindow = function (name) {\r\n        var element = this.windowManager.get(name);\r\n        if (element) {\r\n            return element;\r\n        }\r\n        throw new Error(\"[AppManager] - Element with name \" + name + \" doesn't exist!\");\r\n    };\r\n    AppManager.prototype.deleteWindow = function (name) {\r\n        this.windowManager.delete(name);\r\n    };\r\n    return AppManager;\r\n}());\r\nexports.appManager = new AppManager();\r\n\n\n//# sourceURL=webpack://react-electron/./src/electron/AppManager.ts?");

/***/ }),

/***/ "./src/electron/MainWindow.ts":
/*!************************************!*\
  !*** ./src/electron/MainWindow.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.MainWindow = void 0;\r\nvar electron_1 = __webpack_require__(/*! electron */ \"electron\");\r\nvar electron_is_dev_1 = __importDefault(__webpack_require__(/*! electron-is-dev */ \"./node_modules/electron-is-dev/index.js\"));\r\nvar MainWindow = /** @class */ (function () {\r\n    function MainWindow() {\r\n        this.window = this.createWindow();\r\n    }\r\n    MainWindow.prototype.createWindow = function () {\r\n        var window = new electron_1.BrowserWindow({\r\n            width: 800,\r\n            height: 600,\r\n            show: false,\r\n            webPreferences: {\r\n                nodeIntegration: true\r\n            }\r\n        });\r\n        // Load our index.html\r\n        window.loadURL(electron_is_dev_1.default\r\n            ? 'http://localhost:9000'\r\n            : \"file://\" + electron_1.app.getAppPath() + \"/index.html\");\r\n        return window;\r\n    };\r\n    return MainWindow;\r\n}());\r\nexports.MainWindow = MainWindow;\r\n\n\n//# sourceURL=webpack://react-electron/./src/electron/MainWindow.ts?");

/***/ }),

/***/ "./src/electron/TrayMenu.ts":
/*!**********************************!*\
  !*** ./src/electron/TrayMenu.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.TrayMenu = void 0;\r\nvar electron_1 = __webpack_require__(/*! electron */ \"electron\");\r\nvar AppManager_1 = __webpack_require__(/*! ./AppManager */ \"./src/electron/AppManager.ts\");\r\nvar TrayMenu = /** @class */ (function () {\r\n    function TrayMenu() {\r\n        // Path where should we fetch our icon;\r\n        this.iconPath = '/assets/clock-icon.png';\r\n        this.tray = new electron_1.Tray(this.createNativeImage());\r\n        this.tray.setContextMenu(this.createMenu());\r\n    }\r\n    TrayMenu.prototype.createNativeImage = function () {\r\n        // Since we never know where the app is installed,\r\n        // we need to add the app base path to it.\r\n        var path = \"\" + electron_1.app.getAppPath() + this.iconPath;\r\n        var image = electron_1.nativeImage.createFromPath(path);\r\n        // Marks the image as a template image.\r\n        image.setTemplateImage(true);\r\n        return image;\r\n    };\r\n    TrayMenu.prototype.createMenu = function () {\r\n        // This method will create the Menu for the tray\r\n        var contextMenu = electron_1.Menu.buildFromTemplate([\r\n            {\r\n                label: 'Open',\r\n                type: 'normal',\r\n                click: function () {\r\n                    /* Later this will open the Main Window */\r\n                    AppManager_1.appManager.getWindow('MainWindow').window.show();\r\n                }\r\n            },\r\n            {\r\n                label: 'Quit',\r\n                type: 'normal',\r\n                click: function () { return electron_1.app.quit(); }\r\n            }\r\n        ]);\r\n        return contextMenu;\r\n    };\r\n    return TrayMenu;\r\n}());\r\nexports.TrayMenu = TrayMenu;\r\n\n\n//# sourceURL=webpack://react-electron/./src/electron/TrayMenu.ts?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/electron.ts");
/******/ 	
/******/ })()
;