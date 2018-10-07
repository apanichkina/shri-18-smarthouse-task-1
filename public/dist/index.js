/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/a.panichkina/shri-18-smarthouse-task-1/public";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/css/index.css":
/*!******************************!*\
  !*** ./public/css/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// removed by extract-text-webpack-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./public/css/index.css?");

/***/ }),

/***/ "./public/images/icons/ac_white.svg":
/*!******************************************!*\
  !*** ./public/images/icons/ac_white.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCI+PHN0eWxlPi5zaHAxe2ZpbGw6I2ZmZn08L3N0eWxlPjxnIGlkPSJMYXllciI+PHBhdGggaWQ9IkxheWVyIiBkPSJNNTAgMjNDNTAgOC42MiAzOC4zOC0zIDI0LTNTLTIgOC42Mi0yIDIzIDkuNjIgNDkgMjQgNDlzMjYtMTEuNjIgMjYtMjZ6IiBmaWxsPSJub25lIi8+PGcgaWQ9IkxheWVyIj48cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzaHAxIiBkPSJNMzYgMjAuMDZjMCAuNTUtLjQ1IDEtMSAxSDVjLS41NSAwLTEtLjQ1LTEtMXYtNGMwLS41NS40NS0xIDEtMWgzMGMuNTUgMCAxIC40NSAxIDF6bS0yLTNINnYyaDI4em0tMzAtN2MwLS41NS40NS0xIDEtMWgyMmMuNTUgMCAxIC40NSAxIDFzLS40NSAxLTEgMUg1Yy0uNTUgMC0xLS40NS0xLTF6bTMwIDFjLTEuMTEgMC0yLS44OS0yLTIgMC0xLjExLjg5LTIgMi0yIDEuMTEgMCAyIC44OSAyIDIgMCAxLjExLS44OSAyLTIgMnptLTUuMTcgMTkuNDVjLjUyLjc4IDEuMTcgMS43NSAxLjE3IDMuNTUgMCAuNTUtLjQ1IDEtMSAxcy0xLS40NS0xLTFjMC0xLjItLjM3LTEuNzUtLjgzLTIuNDUtLjUyLS43OC0xLjE3LTEuNzUtMS4xNy0zLjU1IDAtLjU1LjQ1LTEgMS0xczEgLjQ1IDEgMWMwIDEuMi4zNyAxLjc1LjgzIDIuNDV6TTExIDI3LjA2Yy41NSAwIDEgLjQ1IDEgMSAwIDEuOC0uNjUgMi43Ny0xLjE3IDMuNTYtLjQ2LjctLjgzIDEuMjUtLjgzIDIuNDUgMCAuNTUtLjQ1IDEtMSAxcy0xLS40NS0xLTFjMC0xLjguNjUtMi43NyAxLjE3LTMuNTUuNDYtLjcuODMtMS4yNS44My0yLjQ1IDAtLjU1LjQ1LTEgMS0xem05IDF2NmMwIC41NS0uNDUgMS0xIDFzLTEtLjQ1LTEtMXYtNmMwLS41NS40NS0xIDEtMXMxIC40NSAxIDF6bTIzIDBjMCAuNTUtLjQ1IDEtMSAxaC0xdjFjMCAuNTUtLjQ1IDEtMSAxcy0xLS40NS0xLTF2LTFoLTFjLS41NSAwLTEtLjQ1LTEtMXMuNDUtMSAxLTFoMXYtMWMwLS41NS40NS0xIDEtMXMxIC40NSAxIDF2MWgxYy41NSAwIDEgLjQ1IDEgMXptMCA4YzAgLjU1LS40NSAxLTEgMWgtNGMtLjU1IDAtMS0uNDUtMS0xcy40NS0xIDEtMWg0Yy41NSAwIDEgLjQ1IDEgMXoiLz48cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzaHAxIiBkPSJNNDggMjUuMDZ2MTBjMCA0LjQxLTMuNTkgOC04IDhzLTgtMy41OS04LTh2LTEwSDRjLTIuMjEgMC00LTEuNzktNC00di0xNGMwLTIuMjEgMS43OS00IDQtNGgzMmMyLjIxIDAgNCAxLjc5IDQgNHYxNGg0YzIuMjEgMCA0IDEuNzkgNCA0em0tMTItNGgydi0xNGMwLTEuMS0uOS0yLTItMkg0Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDI4LjU2Yy42OS0xLjE5IDEuOTctMiAzLjQ0LTJ6bTEwIDRjMC0xLjEtLjktMi0yLTJoLThjLTEuMSAwLTIgLjktMiAydjEwYzAgMy4zMSAyLjY5IDYgNiA2czYtMi42OSA2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=\"\n\n//# sourceURL=webpack:///./public/images/icons/ac_white.svg?");

/***/ }),

/***/ "./public/images/icons/battery.svg":
/*!*****************************************!*\
  !*** ./public/images/icons/battery.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQ4IiB3aWR0aD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUwIDIzQzUwIDguNjIgMzguMzgtMyAyNC0zUy0yIDguNjItMiAyMyA5LjYyIDQ5IDI0IDQ5czI2LTExLjYyIDI2LTI2eiIgZmlsbD0ibm9uZSIvPjxnIGZpbGw9IiMzMzMiPjxwYXRoIGQ9Ik00OCAxNi4yNnYxMy41OGE1LjI2IDUuMjYgMCAwIDEtNS4yNiA1LjI2SDEwLjIxYTUuMjYgNS4yNiAwIDAgMS01LjI2LTUuMjZ2LS44N0gzLjE3Yy0xLjc0IDAtMy4xNi0xLjQyLTMuMTYtMy4xNnYtNS41M2MwLTEuNzQgMS40Mi0zLjE1IDMuMTYtMy4xNmgxLjc4di0uODdhNS4yNiA1LjI2IDAgMCAxIDUuMjYtNS4yNmgzMi41M0E1LjI2IDUuMjYgMCAwIDEgNDggMTYuMjV6TTQuOTQgMjYuODd2LTcuNjNIMy4xNmMtLjU4IDAtMS4wNS40Ny0xLjA1IDEuMDV2NS41M2MwIC41OC40NyAxLjA1IDEuMDUgMS4wNXpNNDUuOSAxNi4yNmEzLjE2IDMuMTYgMCAwIDAtMy4xNi0zLjE2SDEwLjIxYTMuMTYgMy4xNiAwIDAgMC0zLjE2IDMuMTZ2MTMuNThBMy4xNiAzLjE2IDAgMCAwIDEwLjIxIDMzaDMyLjUzYTMuMTYgMy4xNiAwIDAgMCAzLjE2LTMuMTZ6Ii8+PHBhdGggZD0iTTIwLjU1IDIyLjUyYy4yLjMzLjIuNzQgMCAxLjA3cy0uNTYuNTMtLjk0LjUyaC0xLjg0djEuODRjLjAxLjM4LS4xOS43NC0uNTIuOTRzLS43NC4yLTEuMDcgMC0uNTMtLjU2LS41Mi0uOTR2LTEuODRoLTEuODRjLS4zOC4wMS0uNzQtLjE5LS45NC0uNTJzLS4yLS43NCAwLTEuMDcuNTYtLjUzLjk0LS41MmgxLjg0di0xLjg0Yy0uMDEtLjM4LjE5LS43NC41Mi0uOTRzLjc0LS4yIDEuMDcgMCAuNTMuNTYuNTIuOTRWMjJoMS44NGMuMzgtLjAxLjc0LjE5Ljk0LjUyem0xOS4wNi0yLjM2djUuNzljLjAxLjM4LS4xOS43NC0uNTIuOTRzLS43NC4yLTEuMDcgMC0uNTMtLjU2LS41Mi0uOTR2LTUuNzlhMS4wNSAxLjA1IDAgMSAxIDIuMSAweiIvPjwvZz48L3N2Zz4=\"\n\n//# sourceURL=webpack:///./public/images/icons/battery.svg?");

/***/ }),

/***/ "./public/images/icons/cam_white.svg":
/*!*******************************************!*\
  !*** ./public/images/icons/cam_white.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCI+PHN0eWxlPi5zaHAxe2ZpbGw6I2ZmZn08L3N0eWxlPjxnIGlkPSJMYXllciI+PHBhdGggaWQ9IkxheWVyIiBkPSJNNTAgMjRDNTAgOS42MiAzOC4zOC0yIDI0LTJTLTIgOS42Mi0yIDI0IDkuNjIgNTAgMjQgNTBzMjYtMTEuNjIgMjYtMjZ6IiBmaWxsPSJub25lIi8+PGcgaWQ9IkxheWVyIj48cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzaHAxIiBkPSJNMTggMjZjMC0zLjMxIDIuNjktNiA2LTZzNiAyLjY5IDYgNi0yLjY5IDYtNiA2LTYtMi42OS02LTZ6bTIgMGMwIDIuMjEgMS43OSA0IDQgNHM0LTEuNzkgNC00LTEuNzktNC00LTQtNCAxLjc5LTQgNHoiLz48cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzaHAxIiBkPSJNMjMgMjdjLjU1IDAgMS0uNDUgMS0xIC41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xYy0xLjEgMC0yIC45LTIgMiAwIC41NS40NSAxIDEgMXoiLz48cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzaHAxIiBkPSJNNDggN3Y3YzAgMi4yMS0xLjc5IDQtNCA0djRjMCAxMS4wMy04Ljk3IDIwLTIwIDIwUzQgMzMuMDMgNCAyMnYtNGMtMi4yMSAwLTQtMS43OS00LTRWN2MwLS41NS40NS0xIDEtMWg0NmMuNTUgMCAxIC40NSAxIDF6bS02IDExSDI5Ljk0YzIuNDUgMS44MiA0LjA2IDQuNzIgNC4wNiA4IDAgNS41MS00LjQ5IDEwLTEwIDEwcy0xMC00LjQ5LTEwLTEwYzAtMy4yOCAxLjYxLTYuMTggNC4wNi04SDZ2NGMwIDkuOTMgOC4wOCAxOCAxOCAxOHMxOC04LjA3IDE4LTE4em0tMjYgOGMwIDQuNDEgMy41OSA4IDggOHM4LTMuNTkgOC04LTMuNTktOC04LTgtOCAzLjU5LTggOHpNNDYgOEgydjZjMCAxLjEuOSAyIDIgMmg0MGMxLjEgMCAyLS45IDItMnoiLz48cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzaHAxIiBkPSJNMzggMjFjMC0uNTUtLjQ1LTEtMS0xcy0xIC40NS0xIDEgLjQ1IDEgMSAxIDEtLjQ1IDEtMXoiLz48L2c+PC9nPjwvc3ZnPg==\"\n\n//# sourceURL=webpack:///./public/images/icons/cam_white.svg?");

/***/ }),

/***/ "./public/images/icons/fridge.svg":
/*!****************************************!*\
  !*** ./public/images/icons/fridge.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCI+PHN0eWxlPi5zaHAxe2ZpbGw6IzMzM308L3N0eWxlPjxnIGlkPSJMYXllciI+PHBhdGggaWQ9IkxheWVyIiBkPSJNNDkgMjRDNDkgOS42MiAzNy4zOC0yIDIzLTJTLTMgOS42Mi0zIDI0IDguNjIgNTAgMjMgNTBzMjYtMTEuNjIgMjYtMjZ6IiBmaWxsPSJub25lIi8+PGcgaWQ9IkxheWVyIj48cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzaHAxIiBkPSJNMzQuNCA2LjRjMCAuNDQtLjM2LjgtLjguOEgzMmMtLjQ0IDAtLjgtLjM2LS44LS44IDAtLjQ0LjM2LS44LjgtLjhoMS42Yy40NCAwIC44LjM2LjguOHpNMTcuNiAxNy42djExLjJIOFYxNy42ek0xMiAxOS4ydjIuNGgxLjZ2LTIuNHptMy4yIDB2NGgtNC44di00aC0uOHY4SDE2di04em01LjYtMi40djEyLjhjMCAuNDQtLjM2LjgtLjguOC0uNDQgMC0uOC0uMzYtLjgtLjhWMTYuOGMwLS40NC4zNi0uOC44LS44LjQ0IDAgLjguMzYuOC44em02LjQgMHYxMi44YzAgLjQ0LS4zNi44LS44LjgtLjQ0IDAtLjgtLjM2LS44LS44VjE2LjhjMC0uNDQuMzYtLjguOC0uOC40NCAwIC44LjM2LjguOHpNMTYuOCAzNS4yaDEyLjhjLjQ0IDAgLjguMzYuOC44IDAgLjQ0LS4zNi44LS44LjhIMTYuOGMtLjQ0IDAtLjgtLjM2LS44LS44IDAtLjQ0LjM2LS44LjgtLjh6Ii8+PHBhdGggaWQ9IkxheWVyIiBjbGFzcz0ic2hwMSIgZD0iTTQyLjQgMS43NHY0My45MmMwIDEuMjktMS4wNSAyLjM0LTIuMzQgMi4zNEg2LjM1Yy0xLjI5IDAtMi4zNC0xLjA1LTIuMzQtMi4zNFYxLjc0QzQuMDEuNzggNC43OSAwIDUuNzUgMGgzNC45M2MuOTYgMCAxLjc0Ljc4IDEuNzQgMS43NHpNNS42IDMyaDE2LjhWMS42SDUuNzRjLS4wOCAwLS4xNC4wNi0uMTQuMTR6bTM1LjIgMS42SDUuNnYxMi4wNmMwIC40MS4zMy43NC43NC43NGgzMy43MWMuNDEgMCAuNzQtLjMzLjc0LS43NHptMC0xLjZWMS43NGMwLS4wOC0uMDYtLjE0LS4xNC0uMTRIMjRWMzJ6Ii8+PC9nPjwvZz48L3N2Zz4=\"\n\n//# sourceURL=webpack:///./public/images/icons/fridge.svg?");

/***/ }),

/***/ "./public/images/icons/kettle.svg":
/*!****************************************!*\
  !*** ./public/images/icons/kettle.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCI+PHN0eWxlPjwvc3R5bGU+PGcgaWQ9IkxheWVyIj48cGF0aCBpZD0iTGF5ZXIiIGQ9Ik00OSAyNEM0OSA5LjYyIDM3LjM4LTIgMjMtMlMtMyA5LjYyLTMgMjQgOC42MiA1MCAyMyA1MHMyNi0xMS42MiAyNi0yNnoiIGZpbGw9Im5vbmUiLz48cGF0aCBpZD0iTGF5ZXIiIGQ9Ik0xMy45IDUuMDRjLjc5LS45OSAxLjEtMi41Mi43NS0zLjczLS4xNi0uNTQuMTYtMS4xMS43LTEuMjcuNTQtLjE2IDEuMTEuMTYgMS4yNy43LjUzIDEuODQuMDggNC4wOC0xLjEyIDUuNTgtMS4wOSAxLjM3LTEuMzggMy43Ny0uMTIgNC45NGExLjAyNyAxLjAyNyAwIDAgMS0xLjQgMS41Yy0yLjE0LTItMS43Ny01LjYxLS4wOC03Ljcyem02LjczIDEuMTljLS41NyAwLTEuMDItLjQ2LTEuMDItMS4wMiAwLS41Ny40Ni0xLjAyIDEuMDItMS4wMmg2Ljc0Yy41NyAwIDEuMDIuNDYgMS4wMiAxLjAyIDAgLjU3LS40NiAxLjAyLTEuMDIgMS4wMmgtNi43M3ptMjIuODQgOS44djguMmMwIDQuMDktMy4wNyA3LjQ5LTcuMDMgNy45OXY5LjE1aDEuMDJjLjU3IDAgMS4wMi40NiAxLjAyIDEuMDJ2NC41NWMwIC41Ni0uNDYgMS4wMi0xLjAyIDEuMDJINC4wOWMtLjU3IDAtMS4wMi0uNDYtMS4wMi0xLjAydi00LjU1YzAtLjU2LjQ2LTEuMDIgMS4wMi0xLjAyaC44NWMtLjQtOC44My40Ny0xOC43NSAzLjk2LTIyLjA1bC01LjY0LTcuNzNjLS4xMy0uMTgtLjItLjM5LS4yLS42VjkuMDFjMC0uNTcuNDYtMS4wMiAxLjAyLTEuMDJoNC4yNGMuMTktMS4wOC42NC0yLjEyIDEuMy0yLjk0Ljc5LS45OSAxLjEtMi41Mi43NS0zLjczYTEuMDI3IDEuMDI3IDAgMCAxIDEuOTctLjU3Yy41MyAxLjg0LjA4IDQuMDgtMS4xMiA1LjU4LS41Ni42OS0uOSAxLjY1LS45NSAyLjU5LjAxLjA4LjAxLjE1IDAgLjIzLjAxLjgyLjI2IDEuNi44MyAyLjEzYTEuMDI3IDEuMDI3IDAgMCAxLTEuNCAxLjVjLS43NC0uNjktMS4yMi0xLjY0LTEuNC0yLjczSDUuMTF2LjYybDYuMDMgOC4yNmMuMDkuMTIuMTUuMjUuMTguNC4wMy4xNS4wMy4zIDAgLjQ1LS4wNy4yOS0uMjYuNTQtLjUzLjY4LTEuMjUuNjktMi4zNyAzLjE0LTMuMDcgNi43My0uNzQgMy44My0xIDguNzMtLjc0IDE0LjJoMjcuNHYtMTAuMWMwLS41Ny40Ni0xLjAyIDEuMDItMS4wMiAzLjMyIDAgNi0yLjY5IDYuMDEtNi4wMXYtOC4yYzAtMy4zMi0yLjY5LTYtNi4wMS02LjAxaC03LjAydjIyLjE3YTMuMjQgMy4yNCAwIDEgMS02LjQ4IDBWMTMuMDhjMC0uNTcuNDYtMS4wMiAxLjAyLTEuMDIuNTcgMCAxLjAyLjQ2IDEuMDIgMS4wMnYxOS4xNGMuMDMuNjQuNTUgMS4xNSAxLjE5IDEuMTUuNjQgMCAxLjE3LS41MSAxLjE5LTEuMTVWMTAuMDVoLTguODRWOGgxNy45MWM0LjQ0IDAgOC4wNSAzLjYxIDguMDUgOC4wNXptLTcuMDMgMjcuMzhINS4xMnYyLjVoMzEuMzJ6bS0yLjA1LTE4LjFWMTQuOTVjMC0uNTcuNDYtMS4wMiAxLjAyLTEuMDIuNTcgMCAxLjAyLjQ2IDEuMDIgMS4wMnYxMC4zNmMwIC41Ny0uNDYgMS4wMi0xLjAyIDEuMDItLjU3IDAtMS4wMi0uNDYtMS4wMi0xLjAyeiIgZmlsbD0iIzMzMyIvPjwvZz48L3N2Zz4=\"\n\n//# sourceURL=webpack:///./public/images/icons/kettle.svg?");

/***/ }),

/***/ "./public/images/icons/key.svg":
/*!*************************************!*\
  !*** ./public/images/icons/key.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCI+PHN0eWxlPi5zaHAxe2ZpbGw6IzMzM308L3N0eWxlPjxnIGlkPSJMYXllciI+PHBhdGggaWQ9IkxheWVyIiBkPSJNNTAgMjNDNTAgOC42MiAzOC4zOC0zIDI0LTNTLTIgOC42Mi0yIDIzIDkuNjIgNDkgMjQgNDlzMjYtMTEuNjIgMjYtMjZ6IiBmaWxsPSJub25lIi8+PGcgaWQ9IkxheWVyIj48cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzaHAxIiBkPSJNNDcuNjYgMjEuMzVjLjMxLjI4LjQzLjcyLjI4IDEuMTEtLjE1LjM5LS41Mi42NS0uOTQuNjVoLTV2MjEuMTFjMCAuNTUtLjQ1IDEuMDEtMSAxLjAxSDdjLS41NSAwLTEtLjQ1LTEtMS4wMVYyMy4xMUgxYy0uNDIgMC0uNzktLjI2LS45NC0uNjUtLjE0LS4zOS0uMDMtLjgzLjI4LTEuMTFsMjMtMjAuMTFhLjk5Ljk5IDAgMCAxIDEuMzEgMGwyMyAyMC4xMXptLTMuMzMtLjI0TDI0IDMuMzQgMy42NyAyMS4xMUg3Yy41NSAwIDEgLjQ1IDEgMXYyMS4xMWgzMlYyMi4xMWMwLS41NS40NS0xIDEtMXoiLz48cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzaHAxIiBkPSJNMzAuMTIgMjMuNTljMC0xLjA0LS44NC0xLjg4LTEuODgtMS44OHMtMS44OC44NC0xLjg4IDEuODguODQgMS44OCAxLjg4IDEuODggMS44OC0uODQgMS44OC0xLjg4eiIvPjxwYXRoIGlkPSJMYXllciIgY2xhc3M9InNocDEiIGQ9Ik0yMC4zMyAyNC4yNWMwLTQgMy4yNS03LjI1IDcuMjUtNy4yNXM3LjI1IDMuMjUgNy4yNSA3LjI1LTMuMjUgNy4yNS03LjI1IDcuMjVjLS43OCAwLTEuNTYtLjEzLTIuMy0uMzhsLTYuMjkgNi4yOWMtLjE5LjE5LS40Ni4zLS43My4zaC0zLjExYy0uNTcgMC0xLjA0LS40Ni0xLjA0LTEuMDN2LTMuMTFjMC0uMjcuMTEtLjU0LjMtLjczbDYuMjktNi4yOWMtLjI2LS43NS0uMzgtMS41Mi0uMzgtMi4zem0yLjA3IDBjMCAuNzMuMTYgMS40Ni40NyAyLjEyLjE4LjM5LjA5Ljg1LS4yMSAxLjE2TDE2LjE5IDM0djEuNjRoMS42NGw2LjQ3LTYuNDdjLjMtLjMxLjc3LS4zOSAxLjE2LS4yMS42Ny4zMSAxLjM5LjQ2IDIuMTIuNDcgMi44NiAwIDUuMTctMi4zMiA1LjE4LTUuMTggMC0yLjg2LTIuMzItNS4xNy01LjE4LTUuMTgtMi44NiAwLTUuMTcgMi4zMi01LjE4IDUuMTh6Ii8+PC9nPjwvZz48L3N2Zz4=\"\n\n//# sourceURL=webpack:///./public/images/icons/key.svg?");

/***/ }),

/***/ "./public/images/icons/music.svg":
/*!***************************************!*\
  !*** ./public/images/icons/music.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCI+PHN0eWxlPjwvc3R5bGU+PGcgaWQ9IkxheWVyIj48cGF0aCBpZD0iTGF5ZXIiIGQ9Ik01MCAyNEM1MCA5LjYyIDM4LjM4LTIgMjQtMlMtMiA5LjYyLTIgMjQgOS42MiA1MCAyNCA1MHMyNi0xMS42MiAyNi0yNnoiIGZpbGw9Im5vbmUiLz48ZyBpZD0iTGF5ZXIiPjxwYXRoIGlkPSJMYXllciIgZD0iTTEyLjM4IDMxLjNjLS43OS4yNS0xLjU5LjM4LTIuMzkuMzgtMi43MiAwLTQuOTMtMS40My01LjY0LTMuNjQtLjkzLTIuOTIgMS4xNS02LjIgNC42NS03LjMyLjc5LS4yNSAxLjU5LS4zOCAyLjM5LS4zOCAxLjQgMCAyLjY2LjM4IDMuNjYgMS4wNVYxLjI1IDEuMTRsLjAxLS4wNWEuOTIuOTIgMCAwIDEgLjExLS4zM2wuMDEtLjAyYzAtLjAxLjAxLS4wMi4wMS0uMDIuMDctLjEyLjE1LS4yMi4yNi0uMy4wMS0uMDEuMDItLjAyLjAzLS4wMi4wMi0uMDEuMDQtLjAzLjA2LS4wNGguMDFsLjAzLS4wMi4wNi0uMDQuMDQtLjAyLjA2LS4wM2MuMDItLjAxLjAzLS4wMS4wNS0uMDJsLjA1LS4wMi4wNi0uMDEuMDUtLjAxLjA2LS4wMS4wNC0uMDFoLjIyYy4wMiAwIC4wMy4wMS4wNS4wMS4xMi4wMi4yMy4wNS4zMy4xMWwuMDMuMDEuMDMuMDJjLjEuMDYuMTkuMTMuMjcuMjIuMDEuMDEuMDIuMDIuMDMuMDQuMDEuMDEuMDIuMDIuMDIuMDMuMDIuMDIuMDMuMDQuMDQuMDZ2LjAxYy42Mi45NSAyLjYzIDMuNiA0LjQyIDQuNDcgMy42MSAxLjc1IDMuNDggNSAzLjQzIDYuMzlsLS4wMS4yM2ExLjEwMSAxLjEwMSAwIDAgMS0yLjItLjA2bC4wMS0uMjVjLjA3LTEuNjktLjA1LTMuMjktMi4xOC00LjMyLTEuMi0uNTgtMi4zNS0xLjY0LTMuMjctMi42NnYyMC44OGMuMDIgMS4wNS0uMyAyLjExLS45NSAzLjA5LS44OCAxLjMzLTIuMjggMi4zNS0zLjkzIDIuODh6bTIuMDgtNC4xYy41Ni0uODQuNzItMS43NC40Ni0yLjU1LS40MS0xLjI4LTEuOC0yLjExLTMuNTQtMi4xMS0uNTggMC0xLjE2LjA5LTEuNzIuMjctMi4zNC43NS0zLjc4IDIuNzgtMy4yMiA0LjU0LjQxIDEuMjggMS44IDIuMTEgMy41NCAyLjExLjU4IDAgMS4xNi0uMDkgMS43Mi0uMjcgMS4xNy0uMzcgMi4xNS0xLjA4IDIuNzYtMS45OXptMjguMzUgMTAuNjVjLS44OCAxLjMzLTIuMjggMi4zNS0zLjkzIDIuODgtLjc5LjI1LTEuNTkuMzgtMi4zOS4zOC0yLjcyIDAtNC45My0xLjQzLTUuNjQtMy42NC0uOTMtMi45MiAxLjE1LTYuMiA0LjY1LTcuMzIuNzktLjI1IDEuNTktLjM4IDIuMzktLjM4IDEuMzkgMCAyLjY1LjM4IDMuNjUgMS4wNFYxNi42NWwtMTMuNTUgNS45OXYxOC43NWMuMDkgMS4xMy0uMjMgMi4yOS0uOTMgMy4zNS0uODggMS4zMy0yLjI4IDIuMzUtMy45MyAyLjg4LS43OS4yNS0xLjU5LjM4LTIuMzkuMzgtMi43MiAwLTQuOTMtMS40My01LjY0LTMuNjQtLjQ3LTEuNDYtLjIxLTMuMDMuNzItNC40NC44OC0xLjMzIDIuMjgtMi4zNSAzLjkzLTIuODguNzktLjI1IDEuNTktLjM4IDIuMzktLjM4IDEuMzkgMCAyLjY1LjM4IDMuNjQgMS4wNFYxNy42NWwuMDEtLjA1LjAxLS4wNmMwLS4wMi4wMS0uMDQuMDEtLjA2bC4wMS0uMDVjLjAxLS4wMi4wMS0uMDQuMDItLjA2bC4wMS0uMDRjLjAxLS4wMy4wMy0uMDcuMDUtLjEuMDEtLjAyLjAyLS4wMy4wMy0uMDVsLjAzLS4wNC4wNi0uMDkuMDMtLjAzYy4wMS0uMDIuMDMtLjAzLjA0LS4wNWwuMDMtLjAzYy4wMS0uMDEuMDMtLjAzLjA1LS4wNGwuMDQtLjAzYy4wMi0uMDEuMDMtLjAyLjA1LS4wNGwuMDUtLjAzLjA0LS4wMmMuMDItLjAxLjA1LS4wMi4wNy0uMDRsLjAyLS4wMWguMDJMNDIuMiA5Ljc4aC4wMWMuMDItLjAxLjA1LS4wMi4wOC0uMDNsLjAzLS4wMWMuMDItLjAxLjA0LS4wMS4wNi0uMDIuMDIgMCAuMDMtLjAxLjA1LS4wMWwuMDQtLjAxYy4wMiAwIC4wNS0uMDEuMDctLjAxSDQyLjc2bC4wNC4wMWMuMDIgMCAuMDQuMDEuMDYuMDEuMDIgMCAuMDQuMDEuMDUuMDFsLjA1LjAxLjA2LjAyLjA0LjAyLjA2LjAzLjA0LjAyYy4wMi4wMS4wMy4wMi4wNS4wM2wuMDQuMDMuMDQuMDNjLjAzLjAyLjA1LjA0LjA4LjA2LjAyLjAxLjAzLjAzLjA1LjA0bC4wMy4wM2MuMDEuMDIuMDMuMDMuMDQuMDVsLjAzLjA0Yy4wMS4wMi4wMi4wMy4wMy4wNWwuMDMuMDUuMDIuMDRjLjAxLjAyLjAyLjA1LjAzLjA3bC4wMS4wMnYuMDFjLjAxLjAzLjAyLjA1LjAzLjA4IDAgLjAxLjAxLjAyLjAxLjAzbC4wMi4wNy4wMS4wNC4wMS4wNC4wMS4wN3YyMy44M2MuMDkgMS4xMy0uMjMgMi4yOS0uOTQgMy4zNXptLTE3LjYgNS42NWMuMzMtLjUuNTMtMS4wNC41Ny0xLjU1VjQxLjQ5YTIuNTkgMi41OSAwIDAgMC0uMTEtLjU0Yy0uNDEtMS4yOC0xLjgtMi4xMS0zLjU0LTIuMTEtLjU4IDAtMS4xNi4wOS0xLjcyLjI3LTEuMTcuMzctMi4xNSAxLjA4LTIuNzYgMS45OS0uNTYuODQtLjcyIDEuNzQtLjQ2IDIuNTUuNDEgMS4yOCAxLjggMi4xMSAzLjU0IDIuMTEuNTggMCAxLjE2LS4wOSAxLjcyLS4yNyAxLjE3LS4zNyAyLjE1LTEuMDggMi43Ni0xLjk5em0xNi4zMi0yOS4yN3YtMS43NWwtMTMuNTUgNS45OXYxLjc1em0tMy4zMiAyNC4zOWMxLjE3LS4zNyAyLjE1LTEuMDggMi43Ni0xLjk5LjM2LS41NC41NS0xLjEuNTgtMS42NS0uMDEtLjA0LS4wMS0uMDktLjAxLS4xM3YtLjIzYTIuNTkgMi41OSAwIDAgMC0uMTEtLjU0Yy0uNDEtMS4yOC0xLjgtMi4xMS0zLjU0LTIuMTEtLjU4IDAtMS4xNi4wOS0xLjcyLjI3LTIuMzQuNzUtMy43OCAyLjc4LTMuMjIgNC41NC40MSAxLjI4IDEuOCAyLjExIDMuNTQgMi4xMS41OCAwIDEuMTYtLjA5IDEuNzItLjI3eiIgZmlsbD0iIzMzMyIvPjwvZz48L2c+PC9zdmc+\"\n\n//# sourceURL=webpack:///./public/images/icons/music.svg?");

/***/ }),

/***/ "./public/images/icons/robot_cleaner.svg":
/*!***********************************************!*\
  !*** ./public/images/icons/robot_cleaner.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCI+PHN0eWxlPi5zaHAxe2ZpbGw6IzMzM308L3N0eWxlPjxnIGlkPSJMYXllciI+PHBhdGggaWQ9IkxheWVyIiBkPSJNNTAgMjNDNTAgOC42MiAzOC4zOC0zIDI0LTNTLTIgOC42Mi0yIDIzIDkuNjIgNDkgMjQgNDlzMjYtMTEuNjIgMjYtMjZ6IiBmaWxsPSJub25lIi8+PGcgaWQ9IkxheWVyIj48cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzaHAxIiBkPSJNNDggMjAuMDZjMCAxMC43Ny0zLjkzIDE3LTI0IDE3cy0yNC02LjIzLTI0LTE3YzAtNS42NiAxMS42Ni0xMSAyNC0xMXMyNCA1LjM1IDI0IDExem0tNDYgMGMwIDMuMzggOC44NCA3IDIyIDdzMjItMy42MiAyMi03YzAtMy42Mi05LjI0LTktMjItOXMtMjIgNS4zOC0yMiA5em0yMiAxNWMxNS43MiAwIDIwLjYtMy44MiAyMS43MS0xMC45NC00LjA1IDMuMjUtMTIuOTEgNC45NC0yMS43MSA0Ljk0UzYuMzQgMjcuMzcgMi4yOSAyNC4xMkMzLjQgMzEuMjQgOC4yOCAzNS4wNiAyNCAzNS4wNnoiLz48cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzaHAxIiBkPSJNMTkgMTQuMDZjMC0uNTUtLjQ1LTEtMS0xcy0xIC40NS0xIDEgLjQ1IDEgMSAxIDEtLjQ1IDEtMXpNMjMgMTQuMDZjMC0uNTUtLjQ1LTEtMS0xcy0xIC40NS0xIDEgLjQ1IDEgMSAxIDEtLjQ1IDEtMXpNMjcgMTQuMDZjMC0uNTUtLjQ1LTEtMS0xcy0xIC40NS0xIDEgLjQ1IDEgMSAxIDEtLjQ1IDEtMXpNMzEgMTQuMDZjMC0uNTUtLjQ1LTEtMS0xcy0xIC40NS0xIDEgLjQ1IDEgMSAxIDEtLjQ1IDEtMXpNMjIgMzIuMDZjMCAuNTUuNDUgMSAxIDFoMmMuNTUgMCAxLS40NSAxLTFzLS40NS0xLTEtMWgtMmMtLjU1IDAtMSAuNDUtMSAxeiIvPjwvZz48L2c+PC9zdmc+\"\n\n//# sourceURL=webpack:///./public/images/icons/robot_cleaner.svg?");

/***/ }),

/***/ "./public/images/icons/router.svg":
/*!****************************************!*\
  !*** ./public/images/icons/router.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCI+PHN0eWxlPi5zaHAxe2ZpbGw6IzMzM308L3N0eWxlPjxnIGlkPSJMYXllciI+PHBhdGggaWQ9IkxheWVyIiBkPSJNNTAgMjRDNTAgOS42MiAzOC4zOC0yIDI0LTJTLTIgOS42Mi0yIDI0IDkuNjIgNTAgMjQgNTBzMjYtMTEuNjIgMjYtMjZ6IiBmaWxsPSJub25lIi8+PGcgaWQ9IkxheWVyIj48cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzaHAxIiBkPSJNNDIuNTkgMjMuNDJjMi45NSAwIDUuMzQgMi4zOSA1LjM0IDUuMzR2MTAuOTZjMCAuNTktLjQ4IDEuMDctMS4wNyAxLjA3aC0zLjk3djQuNWMwIC41OS0uNDggMS4wNy0xLjA3IDEuMDdINy4wNmMtLjU5IDAtMS4wNy0uNDgtMS4wNy0xLjA3di00LjVIMi41M2MtLjU5IDAtMS4wNy0uNDgtMS4wNy0xLjA3VjI4Ljc2YzAtMi45NSAyLjM5LTUuMzQgNS4zNS01LjM0aDYuNDZWMTEuNjdhMy41ODMgMy41ODMgMCAwIDEtMi42Ni0zLjQ2YzAtMS44MyAxLjM3LTMuMzYgMy4xOS0zLjU3YTMuNiAzLjYgMCAwIDEgMy45MSAyLjc2Yy40MSAxLjc4LS41NyAzLjU4LTIuMjkgNC4xOXYxMS44M3pNMTQuMTkgOS42NWExLjQ1MSAxLjQ1MSAwIDAgMCAwLTIuOSAxLjQ1MSAxLjQ1MSAwIDAgMCAwIDIuOXptMjYuNTcgMzEuMTRIOC4xM3YzLjQzaDMyLjYzem01LjA0LTEyLjAzYzAtMS43Ny0xLjQ0LTMuMjEtMy4yMS0zLjIxSDYuOGMtMS43NyAwLTMuMjEgMS40NC0zLjIxIDMuMjF2OS44OWg0Mi4yeiIvPjxwYXRoIGlkPSJMYXllciIgY2xhc3M9InNocDEiIGQ9Ik0xMC42MiAyOS4wMmMuNTkgMCAxLjA3LjQ4IDEuMDcgMS4wN3Y0LjAzYTEuMDcxIDEuMDcxIDAgMCAxLTIuMTQgMHYtNC4wM2MwLS41OS40OC0xLjA3IDEuMDctMS4wN3ptMjYuNDEtLjY4YTMuNSAzLjUgMCAwIDEgMy40OSAzLjQ5di4wNGMtLjA3IDEuOTMtMS42IDMuNDUtMy40OSAzLjQ1LTEuOTMgMC0zLjQ5LTEuNTYtMy40OS0zLjQ5IDAtMS45MyAxLjU2LTMuNDkgMy40OS0zLjQ5em0wIDQuODRjLjcyIDAgMS4zMS0uNiAxLjM1LTEuMzctLjAxLS43NC0uNjItMS4zNC0xLjM2LTEuMzMtLjc0LjAxLTEuMzQuNjEtMS4zNCAxLjM2IDAgLjc0LjYxIDEuMzQgMS4zNSAxLjM0em0tMjAuMTgtNC4xNmMuNTkgMCAxLjA3LjQ4IDEuMDcgMS4wN3Y0LjAzYy0uMDIuNTctLjUgMS4wMi0xLjA3IDEuMDItLjU3IDAtMS4wNC0uNDUtMS4wNy0xLjAydi00LjAzYzAtLjU5LjQ4LTEuMDcgMS4wNy0xLjA3ek03LjUzIDEyLjQ5Yy0uMjggMC0uNTYtLjExLS43Ni0uMzFhNi4wMDUgNi4wMDUgMCAwIDEgMC04LjQ3Yy40Mi0uNDIgMS4xLS40MiAxLjUxIDAgLjQyLjQyLjQyIDEuMSAwIDEuNTFhMy44NSAzLjg1IDAgMCAwIDAgNS40NGMuMzEuMzEuNC43Ny4yMyAxLjE2LS4xNy40LS41NS42Ni0uOTkuNjZ6Ii8+PHBhdGggaWQ9IkxheWVyIiBjbGFzcz0ic2hwMSIgZD0iTTMuNDUgMTQuNzZjLjQzIDAgLjgyLS4yNi45OS0uNjYuMTctLjQuMDctLjg2LS4yMy0xLjE3LTIuNzYtMi43Ni0yLjc1LTcuMjguMDEtMTAuMDguMjktLjI3LjQxLS42Ny4zMS0xLjA1YTEuMDY2IDEuMDY2IDAgMCAwLTEuODMtLjQ0Qy0uODggNS0uODggMTAuODcgMi43MSAxNC40NWMuMi4yLjQ3LjMxLjc2LjMxeiIvPjwvZz48L2c+PC9zdmc+\"\n\n//# sourceURL=webpack:///./public/images/icons/router.svg?");

/***/ }),

/***/ "./public/images/icons/stats.svg":
/*!***************************************!*\
  !*** ./public/images/icons/stats.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCI+PHN0eWxlPi5zaHAxe2ZpbGw6IzMzM308L3N0eWxlPjxnIGlkPSJMYXllciI+PHBhdGggaWQ9IkxheWVyIiBkPSJNNTAgMjJDNTAgNy42MiAzOC4zOC00IDI0LTRTLTIgNy42Mi0yIDIyIDkuNjIgNDggMjQgNDhzMjYtMTEuNjIgMjYtMjZ6IiBmaWxsPSJub25lIi8+PGcgaWQ9IkxheWVyIj48cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzaHAxIiBkPSJNNDggMTcuMTVjMCAyLjg0LTIuMjkgNS4xNS01LjEgNS4xNWE1LjAzIDUuMDMgMCAwIDEtMi43OC0uODRsLTUuNTEgNS41N2MuNTIuODEuODMgMS43Ny44MyAyLjgxIDAgMi44NC0yLjI5IDUuMTUtNS4xIDUuMTUtMi44MSAwLTUuMS0yLjMxLTUuMS01LjE1IDAtLjk2LjI3LTEuOS43Ny0yLjcybC01LjU5LTUuNjZjLS44LjUzLTEuNzUuODQtMi43OC44NC0xLjAzIDAtMS45OC0uMzEtMi43OC0uODRsLTUuNTEgNS41N2MuNTQuODQuODMgMS44MS44MyAyLjgxIDAgMi44NC0yLjI5IDUuMTUtNS4xIDUuMTUtMi44MSAwLTUuMS0yLjMxLTUuMS01LjE1IDAtMi44NCAyLjI5LTUuMTUgNS4xLTUuMTUuOTkgMCAxLjk1LjI5IDIuNzguODRsNS41MS01LjU3YTUuMTggNS4xOCAwIDAgMS0uODMtMi44MWMwLTIuODQgMi4yOS01LjE1IDUuMS01LjE1IDIuODEgMCA1LjEgMi4zMSA1LjEgNS4xNSAwIDEtLjI5IDEuOTctLjgzIDIuODFsNS41NiA1LjYzYy44Mi0uNTYgMS44LS44OSAyLjg3LS44OS45OSAwIDEuOTYuMjkgMi43OC44NGw1LjUxLTUuNTdhNS4xOCA1LjE4IDAgMCAxLS44My0yLjgxYzAtMi44NCAyLjI5LTUuMTUgNS4xLTUuMTUgMi44MSAwIDUuMSAyLjMxIDUuMSA1LjE1ek04LjA5IDI5Ljg1YzAtMS42Ny0xLjM0LTMuMDItMi45OS0zLjAyLTEuNjUgMC0yLjk5IDEuMzYtMi45OSAzLjAyIDAgMS42NyAxLjM0IDMuMDIgMi45OSAzLjAyIDEuNjUgMCAyLjk5LTEuMzYgMi45OS0zLjAyem0xMi41NS0xMi43YzAtMS42Ny0xLjM0LTMuMDItMi45OS0zLjAyLTEuNjUgMC0yLjk5IDEuMzYtMi45OSAzLjAyIDAgMS42NyAxLjM0IDMuMDIgMi45OSAzLjAyIDEuNjUgMCAyLjk5LTEuMzYgMi45OS0zLjAyem0xMi43IDEyLjdjMC0xLjY3LTEuMzQtMy4wMi0yLjk5LTMuMDItMS42NSAwLTIuOTkgMS4zNi0yLjk5IDMuMDIgMCAxLjY3IDEuMzQgMy4wMiAyLjk5IDMuMDIgMS42NSAwIDIuOTktMS4zNiAyLjk5LTMuMDJ6bTEyLjU1LTEyLjdjMC0xLjY3LTEuMzQtMy4wMi0yLjk5LTMuMDItMS42NSAwLTIuOTkgMS4zNi0yLjk5IDMuMDIgMCAxLjY3IDEuMzQgMy4wMiAyLjk5IDMuMDIgMS42NSAwIDIuOTktMS4zNiAyLjk5LTMuMDJ6Ii8+PHBhdGggaWQ9IkxheWVyIiBjbGFzcz0ic2hwMSIgZD0iTTE2LjcxIDI0LjI5YS45ODQuOTg0IDAgMCAwLS43LS4yOWMtLjI2IDAtLjUyLjEtLjcuMjlsLTIuMDIgMi4wMmEuOTg0Ljk4NCAwIDAgMCAwIDEuNGMuMzkuMzkgMS4wMi4zOSAxLjQgMGwyLjAyLTIuMDJjLjE5LS4xOS4yOS0uNDQuMjktLjcgMC0uMjYtLjEtLjUyLS4yOS0uN3ptMTktNmEuOTg0Ljk4NCAwIDAgMC0uNy0uMjljLS4yNiAwLS41Mi4xLS43LjI5bC0yLjAyIDIuMDJhLjk4NC45ODQgMCAwIDAgMCAxLjRjLjM5LjM5IDEuMDIuMzkgMS40IDBsMi4wMi0yLjAyYy4xOS0uMTkuMjktLjQ0LjI5LS43IDAtLjI2LS4xLS41Mi0uMjktLjd6Ii8+PC9nPjwvZz48L3N2Zz4=\"\n\n//# sourceURL=webpack:///./public/images/icons/stats.svg?");

/***/ }),

/***/ "./public/images/icons/thermal.svg":
/*!*****************************************!*\
  !*** ./public/images/icons/thermal.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQ4IiB3aWR0aD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIyNCIgY3k9IjIyIiByPSIyNiIvPjxnIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTI1LjEwMiAxNy4wMjRjMC0xLjY0NS0xLjM3My0yLjk4My0zLjA2MS0yLjk4M3MtMy4wNjEgMS4zMzgtMy4wNjEgMi45ODN2MTIuMzAxYTMuOTExIDMuOTExIDAgMCAwLTEuMDIgMi42MTZjMCAyLjE5MyAxLjgzIDMuOTc3IDQuMDggMy45NzdzNC4wODItMS43ODQgNC4wODItMy45NzdjMC0uOTYtLjM2Ni0xLjg5MS0xLjAyLTIuNjE2ek0yMi4wNDEgMzMuOTNjLTEuMTI2IDAtMi4wNDEtLjg5My0yLjA0MS0xLjk5IDAtLjU2LjI0My0xLjA4My42ODQtMS40N2EuOTguOTggMCAwIDAgLjMzNi0uNzM5VjE3LjAyNGMwLS41NDkuNDU5LS45OTQgMS4wMi0uOTk0czEuMDIxLjQ0NSAxLjAyMS45OTR2MTIuNzA3YzAgLjI4Mi4xMjIuNTUuMzM3LjczOC40NC4zODguNjg0LjkxLjY4NCAxLjQ3MiAwIDEuMDk2LS45MTUgMS45ODktMi4wNDEgMS45ODl6Ii8+PHBhdGggZD0iTTQ0IDI2aC00di00aDMuMDMxYS45OTguOTk4IDAgMCAwIC45MjgtLjYyOS45OTguOTk4IDAgMCAwLS4yMzgtMS4wOTZsLTIxLjAzMi0yMGExIDEgMCAwIDAtMS4zNzkgMGwtMjEgMjBhLjk5OC45OTggMCAwIDAtLjIzOCAxLjA5NmMuMTUuMzguNTIuNjI5LjkyOC42MjloM3YxOWExIDEgMCAwIDAgMSAxaDI3LjI4NGMuODk0IDMuNDQgMy45OTkgNiA3LjcxNiA2IDQuNDEyIDAgOC0zLjU4OSA4LThWMzBjMC0yLjIwNi0xLjc5NS00LTQtNHptLTEyIDR2MTBINlYyMWExIDEgMCAwIDAtMS0xSDMuNUwyMiAyLjM4IDQwLjUzIDIwSDM5YTEgMSAwIDAgMC0xIDF2NWgtMmMtMi4yMDUgMC00IDEuNzk0LTQgNHptMTQgMTBjMCAzLjMwOS0yLjY5MSA2LTYgNnMtNi0yLjY5MS02LTZWMzBjMC0xLjEwMy44OTctMiAyLTJoOGMxLjEwMyAwIDIgLjg5NyAyIDJ2MTB6Ii8+PHBhdGggZD0iTTQxLjc5NiAzMmgtLjk4di0uOThhLjk3OS45NzkgMCAxIDAtMS45NTkgMFYzMmgtLjk4YS45NzkuOTc5IDAgMSAwIDAgMS45NmguOTh2Ljk3OWEuOTc5Ljk3OSAwIDEgMCAxLjk2IDB2LS45OGguOTc5YS45NzkuOTc5IDAgMSAwIDAtMS45NTl6bTAgNy44MzdoLTMuOTE4YS45NzkuOTc5IDAgMSAwIDAgMS45NTloMy45MThhLjk3OS45NzkgMCAxIDAgMC0xLjk2eiIvPjwvZz48L2c+PC9zdmc+\"\n\n//# sourceURL=webpack:///./public/images/icons/thermal.svg?");

/***/ }),

/***/ "./public/js/cardTemplate.js":
/*!***********************************!*\
  !*** ./public/js/cardTemplate.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fillCard; });\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons */ \"./public/js/icons.js\");\n\n\nconst INDICATOR_NAME_RU = {\n  'temperature': 'Температура',\n  'humidity': 'Влажность'\n};\n\nconst INDICATOR_UNIT_RU = {\n  'temperature': '&#x2103;',\n  'humidity': '%'\n};\n\nfunction fillIndicator(container, data) {\n  const template = document.getElementsByTagName(\"template\")[1];\n  const indicatorTmpl =  template.content.querySelector(\".indicator\");\n  const indicator = document.importNode(indicatorTmpl, true);\n  const keyEl = indicator.querySelector('.indicator__key');\n  const valueEl = indicator.querySelector('.indicator__value');\n\n  keyEl.textContent = INDICATOR_NAME_RU[data.key];\n  valueEl.innerHTML = data.value + INDICATOR_UNIT_RU[data.key];\n\n  container.appendChild(indicator)\n\n}\n\nfunction fillCardDataEl(type, data) {\n  const template = document.getElementsByTagName(\"template\")[1];\n  const result = [];\n\n  if (data.buttons) {\n    const controlsTmpl = template.content.querySelector(\"div.controls\");\n    const buttonTmpl =  template.content.querySelector(\"button.button\");\n    const controls = document.importNode(controlsTmpl, true);\n\n\n    for (let i = 0; i < data.buttons.length; i++) {\n      const button = document.importNode(buttonTmpl, true);\n      button.textContent = data.buttons[i];\n      controls.appendChild(button);\n    }\n\n    result.push(controls)\n  }\n\n  if (data.temperature && data.humidity) {\n    const indicatorsTmpl = template.content.querySelector(\".indicators\");\n    const indicators = document.importNode(indicatorsTmpl, true);\n\n    fillIndicator(indicators, {key: 'temperature', value: data.temperature });\n    fillIndicator(indicators, {key: 'humidity', value: data.humidity});\n\n    result.push(indicators)\n  }\n\n\n  return result\n}\n\nfunction fillCard(card, content) {\n  const header = card.querySelector(\".card__header\");\n  const title = card.querySelector(\".card__title\");\n  const icon = card.querySelector(\".card__icon\");\n  const source = card.querySelector(\".card__source\");\n  const time = card.querySelector(\".card__time\");\n  const body = card.querySelector(\".card__body\");\n  const isCritical = content.type === 'critical';\n\n  if (isCritical) {\n    header.classList.add('card__header_red');\n  }\n\n  icon.src = Object(_icons__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(content.icon, isCritical);\n  title.textContent = content.title;\n  source.textContent = content.source;\n  time.textContent = content.time;\n\n  if (!content.description && !content.data) {\n    // nothing for fill card body\n    body.parentNode.removeChild(body);\n  } else {\n    body.textContent = content.description;\n\n    if (content.data) {\n      const cardDataEl = fillCardDataEl(content.icon, content.data) || [];\n\n      for (let i = 0; i < cardDataEl.length; i++) {\n        body.appendChild(cardDataEl[i])\n      }\n    }\n\n  }\n\n  card.classList.add(`card_${content.size}`);\n}\n\n\n//# sourceURL=webpack:///./public/js/cardTemplate.js?");

/***/ }),

/***/ "./public/js/icons.js":
/*!****************************!*\
  !*** ./public/js/icons.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getIconSrc; });\n/* harmony import */ var _images_icons_ac_white_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/icons/ac_white.svg */ \"./public/images/icons/ac_white.svg\");\n/* harmony import */ var _images_icons_ac_white_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_icons_ac_white_svg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_icons_cam_white_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/icons/cam_white.svg */ \"./public/images/icons/cam_white.svg\");\n/* harmony import */ var _images_icons_cam_white_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_icons_cam_white_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_icons_battery_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/icons/battery.svg */ \"./public/images/icons/battery.svg\");\n/* harmony import */ var _images_icons_battery_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_icons_battery_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_icons_fridge_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/icons/fridge.svg */ \"./public/images/icons/fridge.svg\");\n/* harmony import */ var _images_icons_fridge_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_icons_fridge_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_icons_kettle_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/icons/kettle.svg */ \"./public/images/icons/kettle.svg\");\n/* harmony import */ var _images_icons_kettle_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_icons_kettle_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _images_icons_key_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/icons/key.svg */ \"./public/images/icons/key.svg\");\n/* harmony import */ var _images_icons_key_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_icons_key_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _images_icons_music_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/icons/music.svg */ \"./public/images/icons/music.svg\");\n/* harmony import */ var _images_icons_music_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_icons_music_svg__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _images_icons_robot_cleaner_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/icons/robot_cleaner.svg */ \"./public/images/icons/robot_cleaner.svg\");\n/* harmony import */ var _images_icons_robot_cleaner_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_icons_robot_cleaner_svg__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _images_icons_router_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/icons/router.svg */ \"./public/images/icons/router.svg\");\n/* harmony import */ var _images_icons_router_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_icons_router_svg__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _images_icons_stats_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/icons/stats.svg */ \"./public/images/icons/stats.svg\");\n/* harmony import */ var _images_icons_stats_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_icons_stats_svg__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _images_icons_thermal_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/icons/thermal.svg */ \"./public/images/icons/thermal.svg\");\n/* harmony import */ var _images_icons_thermal_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_icons_thermal_svg__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n\nfunction getIconSrc(type, needWhite) {\n  let src = '';\n\n  if (needWhite) {\n\n    switch (type) {\n      case 'cam':\n        src = _images_icons_cam_white_svg__WEBPACK_IMPORTED_MODULE_1___default.a;\n        break;\n      case 'ac':\n        src = _images_icons_ac_white_svg__WEBPACK_IMPORTED_MODULE_0___default.a;\n        break;\n      default:\n        break\n    }\n\n  } else {\n\n    switch (type) {\n      case 'stats':\n        src = _images_icons_stats_svg__WEBPACK_IMPORTED_MODULE_9___default.a;\n        break;\n      case 'battery':\n        src = _images_icons_battery_svg__WEBPACK_IMPORTED_MODULE_2___default.a;\n        break;\n      case 'fridge':\n        src = _images_icons_fridge_svg__WEBPACK_IMPORTED_MODULE_3___default.a;\n        break;\n      case 'kettle':\n        src = _images_icons_kettle_svg__WEBPACK_IMPORTED_MODULE_4___default.a;\n        break;\n      case 'key':\n        src = _images_icons_key_svg__WEBPACK_IMPORTED_MODULE_5___default.a;\n        break;\n      case 'music':\n        src = _images_icons_music_svg__WEBPACK_IMPORTED_MODULE_6___default.a;\n        break;\n      case 'robot-cleaner':\n        src = _images_icons_robot_cleaner_svg__WEBPACK_IMPORTED_MODULE_7___default.a;\n        break;\n      case 'router':\n        src = _images_icons_router_svg__WEBPACK_IMPORTED_MODULE_8___default.a;\n        break;\n      case 'thermal':\n        src = _images_icons_thermal_svg__WEBPACK_IMPORTED_MODULE_10___default.a;\n        break;\n      default:\n        break\n    }\n\n  }\n\n  return src\n}\n\n\n//# sourceURL=webpack:///./public/js/icons.js?");

/***/ }),

/***/ "./public/js/index.js":
/*!****************************!*\
  !*** ./public/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ \"./public/css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mocks_events_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mocks/events.json */ \"./public/mocks/events.json\");\nvar _mocks_events_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../mocks/events.json */ \"./public/mocks/events.json\", 1);\n/* harmony import */ var _cardTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cardTemplate */ \"./public/js/cardTemplate.js\");\n\n\n\n\nfunction setContent(parentEl) {\n  const template = document.getElementsByTagName(\"template\")[0];\n  const cardTmpl = template.content.querySelector(\"div.card\");\n  const content = _mocks_events_json__WEBPACK_IMPORTED_MODULE_1__.events || [];\n  let card = null;\n\n  for (let i = 0; i < content.length; i++) {\n    card = document.importNode(cardTmpl, true);\n    Object(_cardTemplate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(card, content[i]);\n    parentEl.appendChild(card);\n  }\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const root = document.getElementById('content__layout');\n  setContent(root);\n});\n\n\n\n\n//# sourceURL=webpack:///./public/js/index.js?");

/***/ }),

/***/ "./public/mocks/events.json":
/*!**********************************!*\
  !*** ./public/mocks/events.json ***!
  \**********************************/
/*! exports provided: events, default */
/***/ (function(module) {

eval("module.exports = {\"events\":[{\"type\":\"info\",\"title\":\"Еженедельный отчет по расходам ресурсов\",\"source\":\"Сенсоры потребления\",\"time\":\"19:00, Сегодня\",\"description\":\"Так держать! За последнюю неделю вы потратили на 10% меньше ресурсов, чем неделей ранее.\",\"icon\":\"stats\",\"data\":{\"type\":\"graph\",\"values\":[{\"electricity\":[[\"1536883200\",115],[\"1536969600\",117],[\"1537056000\",117.2],[\"1537142400\",118],[\"1537228800\",120],[\"1537315200\",123],[\"1537401600\",129]]},{\"water\":[[\"1536883200\",40],[\"1536969600\",40.2],[\"1537056000\",40.5],[\"1537142400\",41],[\"1537228800\",41.4],[\"1537315200\",41.9],[\"1537401600\",42.6]]},{\"gas\":[[\"1536883200\",13],[\"1536969600\",13.2],[\"1537056000\",13.5],[\"1537142400\",13.7],[\"1537228800\",14],[\"1537315200\",14.2],[\"1537401600\",14.5]]}]},\"size\":\"l\"},{\"type\":\"info\",\"title\":\"Дверь открыта\",\"source\":\"Сенсор входной двери\",\"time\":\"18:50, Сегодня\",\"description\":null,\"icon\":\"key\",\"size\":\"s\"},{\"type\":\"info\",\"title\":\"Уборка закончена\",\"source\":\"Пылесос\",\"time\":\"18:45, Сегодня\",\"description\":null,\"icon\":\"robot-cleaner\",\"size\":\"s\"},{\"type\":\"info\",\"title\":\"Новый пользователь\",\"source\":\"Роутер\",\"time\":\"18:45, Сегодня\",\"description\":null,\"icon\":\"router\",\"size\":\"s\"},{\"type\":\"info\",\"title\":\"Изменен климатический режим\",\"source\":\"Сенсор микроклимата\",\"time\":\"18:30, Сегодня\",\"description\":\"Установлен климатический режим «Фиджи»\",\"icon\":\"thermal\",\"size\":\"m\",\"data\":{\"temperature\":24,\"humidity\":80}},{\"type\":\"critical\",\"title\":\"Невозможно включить кондиционер\",\"source\":\"Кондиционер\",\"time\":\"18:21, Сегодня\",\"description\":\"В комнате открыто окно, закройте его и повторите попытку\",\"icon\":\"ac\",\"size\":\"m\"},{\"type\":\"info\",\"title\":\"Музыка включена\",\"source\":\"Яндекс.Станция\",\"time\":\"18:16, Сегодня\",\"description\":\"Сейчас проигрывается:\",\"icon\":\"music\",\"size\":\"m\",\"data\":{\"albumcover\":\"https://avatars.yandex.net/get-music-content/193823/1820a43e.a.5517056-1/m1000x1000\",\"artist\":\"Florence & The Machine\",\"track\":{\"name\":\"Big God\",\"length\":\"4:31\"},\"volume\":80}},{\"type\":\"info\",\"title\":\"Заканчивается молоко\",\"source\":\"Холодильник\",\"time\":\"17:23, Сегодня\",\"description\":\"Кажется, в холодильнике заканчивается молоко. Вы хотите добавить его в список покупок?\",\"icon\":\"fridge\",\"size\":\"m\",\"data\":{\"buttons\":[\"Да\",\"Нет\"]}},{\"type\":\"info\",\"title\":\"Зарядка завершена\",\"source\":\"Оконный сенсор\",\"time\":\"16:22, Сегодня\",\"description\":\"Ура! Устройство «Оконный сенсор» снова в строю!\",\"icon\":\"battery\",\"size\":\"s\"},{\"type\":\"critical\",\"title\":\"Пылесос застрял\",\"source\":\"Сенсор движения\",\"time\":\"16:17, Сегодня\",\"description\":\"Робопылесос не смог сменить свое местоположение в течение последних 3 минут. Похоже, ему нужна помощь.\",\"icon\":\"cam\",\"data\":{\"image\":\"get_it_from_mocks_:3.jpg\"},\"size\":\"l\"},{\"type\":\"info\",\"title\":\"Вода вскипела\",\"source\":\"Чайник\",\"time\":\"16:20, Сегодня\",\"description\":null,\"icon\":\"kettle\",\"size\":\"s\"}]};\n\n//# sourceURL=webpack:///./public/mocks/events.json?");

/***/ })

/******/ });