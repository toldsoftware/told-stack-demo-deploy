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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Config {
    constructor(obtainBlobData, apiRoutePath = 'api/lookup-lsc') {
        this.obtainBlobData = obtainBlobData;
        this.apiRoutePath = apiRoutePath;
        this.timeToLiveSeconds = 60;
        this.timeExtendSeconds = 10;
        this.timeExecutionSeconds = 10;
        this.timePollSeconds = 15;
        this.maxPollCount = 3;
        this.domain = '/';
        this.blobProxyRoutePath = 'blob';
        // Function Template
        this.http_route = this.apiRoutePath + '/{container}/{blob}';
        this.updateRequestQueue_queueName = 'lookup-lsc-update-request-queue';
        this.updateExecuteQueue_queueName = 'lookup-lsc-update-execute-queue';
        // These will encode to a url that receives parametes
        // Example: '{container}/{blob}/_lookup.txt'
        this.lookupBlob_path = `{container}/{blob}/_lookup.txt`;
        this.changeBlob_path = `{container}/{blob}/changing`;
        this.changeBlob_path_fromQueueTrigger = `{queueTrigger.containerName}/{queueTrigger.blobName}/changing`;
        this.dataRawBlob_path_fromQueueTrigger = `{queueTrigger.containerName}/{queueTrigger.blobName}`;
        this.dataDownloadBlob_path_fromQueueTriggerDate = `{queueTrigger.containerName}/{queueTrigger.blobName}/{queueTrigger.startTime}.gzip`;
    }
    getKeyFromRequest(req, bindingData) {
        const d = bindingData;
        return {
            containerName: d.container,
            blobName: d.blob,
        };
    }
    getLookupUrl(key) {
        return `${this.domain}/${this.apiRoutePath}/${key.containerName}/${key.blobName}`;
    }
    getDataDownloadUrl(key, lookup) {
        return `${this.domain}/${this.blobProxyRoutePath}/${key.containerName}/${this.getDataDownloadBlobName(key.blobName, lookup)}`;
    }
    getLookupBlobName(blobName) {
        return `${blobName}/_lookup.txt`;
    }
    getDataDownloadBlobName(blobName, lookup) {
        // TODO: Test if works with .ext and switch to underscore if needed
        return `${blobName}/${lookup.startTime}.gzip`;
    }
}
exports.Config = Config;
//# sourceMappingURL=config.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __webpack_require__(0);
exports.config = new config_1.Config(() => __awaiter(this, void 0, void 0, function* () { return { data: 'TEST ' + new Date() }; }));


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const gzip_1 = __webpack_require__(7);
// Queue Trigger: Update Request Queue
// Blob Out: Changing Blob
// Blob In-Out: Data Blob
// Blob Out: Lookup Blob
function createFunctionJson(config) {
    return {
        bindings: [
            {
                name: "inUpdateExecuteQueue",
                type: "queueTrigger",
                direction: "in",
                queueName: config.updateExecuteQueue_queueName
            },
            {
                name: "inoutRawDataBlob",
                type: "blob",
                direction: "inout",
                path: config.dataRawBlob_path_fromQueueTrigger
            },
            {
                name: "outDataDownloadBlob",
                type: "blob",
                direction: "out",
                path: config.dataDownloadBlob_path_fromQueueTriggerDate
            },
            // {
            //     name: "outChangeBlob",
            //     type: "blob",
            //     direction: "out",
            //     path: config.changeBlob_path_fromQueueTrigger
            // },
            {
                name: "outLookupBlob",
                type: "blob",
                direction: "out",
                path: config.lookupBlob_path
            },
        ],
        disabled: false
    };
}
exports.createFunctionJson = createFunctionJson;
function runFunction(config, context) {
    return __awaiter(this, void 0, void 0, function* () {
        const blobData = yield config.obtainBlobData(context.bindings.inoutRawDataBlob, context.bindings.inUpdateExecuteQueue);
        context.bindings.inoutRawDataBlob = blobData;
        context.bindings.outDataDownloadBlob = yield gzip_1.gzipText(JSON.stringify(blobData));
        // context.bindings.outChangeBlob = null;
        context.bindings.outLookupBlob = { startTime: context.bindings.inUpdateExecuteQueue.startTime };
        context.done();
    });
}
exports.runFunction = runFunction;
//# sourceMappingURL=function-03-update-execute-queue.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const zlib_1 = __webpack_require__(8);
function gzipText(dataJson) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            zlib_1.gzip(dataJson, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    });
}
exports.gzipText = gzipText;
//# sourceMappingURL=gzip.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const function_03_update_execute_queue_1 = __webpack_require__(6);
const config_lookup_lsc_1 = __webpack_require__(1);
const run = function (...args) {
    function_03_update_execute_queue_1.runFunction.apply(null, [config_lookup_lsc_1.config, ...args]);
};
global.__run = run;
module.exports = global.__run;


/***/ })
/******/ ]);