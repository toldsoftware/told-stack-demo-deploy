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
/******/ 	return __webpack_require__(__webpack_require__.s = 126);
/******/ })
/************************************************************************/
/******/ ({

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const function_01_http_1 = __webpack_require__(53);
const config_test_blob_1 = __webpack_require__(31);
const run = function (...args) {
    function_01_http_1.runFunction.apply(null, [config_test_blob_1.config, ...args]);
};
global.__run = run;
module.exports = global.__run;


/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Config {
    constructor(obtainBlobData, apiRoutePath = 'api/lookup-lsc', default_storageConnectionString_AppSettingName = 'AZURE_STORAGE_CONNECTION_STRING') {
        this.obtainBlobData = obtainBlobData;
        this.apiRoutePath = apiRoutePath;
        this.default_storageConnectionString_AppSettingName = default_storageConnectionString_AppSettingName;
        this.timeToLiveSeconds = 60;
        this.timeExtendSeconds = 10;
        this.timeExecutionSeconds = 10;
        this.timePollSeconds = 15;
        this.maxPollCount = 3;
        this.domain = '/';
        this.blobProxyRoutePath = 'blob';
        this.lookupBlob_connection = this.default_storageConnectionString_AppSettingName;
        this.updateRequestQueue_connection = this.default_storageConnectionString_AppSettingName;
        this.updateExecuteQueue_connection = this.default_storageConnectionString_AppSettingName;
        this.changeTable_connection = this.default_storageConnectionString_AppSettingName;
        this.dataRawBlob_connection = this.default_storageConnectionString_AppSettingName;
        this.dataDownloadBlob_connection = this.default_storageConnectionString_AppSettingName;
        // Function Template
        // Slash in blobName is not supported (i.e. {*blob}) because table partitionKey/rowKey cannot / in the name
        // http_route = this.apiRoutePath + '/{container}/{*blob}';
        this.http_route = this.apiRoutePath + '/{container}/{blob}';
        this.updateRequestQueue_queueName = 'lookup-lsc-update-request-queue';
        this.updateExecuteQueue_queueName = 'lookup-lsc-update-execute-queue';
        // These will encode to a url that receives parametes
        // Example: '{container}/{blob}/_lookup.txt'
        this.lookupBlob_path = `{container}/{blob}/_lookup.txt`;
        this.lookupTable_tableName = `blobaccess`;
        this.lookupTable_partitionKey = `{container}_{blob}`;
        this.lookupTable_rowKey = `lookup`;
        this.changeTable_tableName = `blobaccess`;
        this.changeTable_partitionKey = `{container}_{blob}`;
        this.changeTable_rowKey = `change`;
        this.changeTable_tableName_fromQueueTrigger = `blobaccess`;
        this.changeTable_partitionKey_fromQueueTrigger = `{queueTrigger.containerName}_{queueTrigger.blobName}`;
        this.changeTable_rowKey_fromQueueTrigger = `change`;
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

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __webpack_require__(13);
const obtain_test_blob_data_1 = __webpack_require__(32);
exports.config = new config_1.Config(obtain_test_blob_data_1.obtainTestBlobData, 'api/test-blob');


/***/ }),

/***/ 32:
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
function obtainTestBlobData(oldBlob, key) {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            data: {
                key,
                time: new Date(),
                oldBlob
            }
        };
    });
}
exports.obtainTestBlobData = obtainTestBlobData;


/***/ }),

/***/ 53:
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
// Http Request: Handle Update Request
// Table In: Read Old Lookup Blob Value
// Queue Out: Update Request Queue
// Http Response: Return Old Lookup Value with Short TTL
function createFunctionJson(config) {
    return {
        bindings: [
            {
                name: "req",
                type: "httpTrigger",
                direction: "in",
                authLevel: "anonymous",
                route: config.http_route
            },
            {
                name: "res",
                type: "http",
                direction: "out"
            },
            {
                name: "inLookupTable",
                type: "table",
                direction: "in",
                tableName: config.lookupTable_tableName,
                partitionKey: config.lookupTable_partitionKey,
                rowKey: config.lookupTable_rowKey,
                connection: config.lookupBlob_connection
            },
            {
                name: "outUpdateRequestQueue",
                type: "queue",
                direction: "out",
                queueName: config.updateRequestQueue_queueName,
                connection: config.updateRequestQueue_connection
            },
        ],
        disabled: false
    };
}
exports.createFunctionJson = createFunctionJson;
function runFunction(config, context, req) {
    return __awaiter(this, void 0, void 0, function* () {
        context.log('START');
        const dataKey = config.getKeyFromRequest(req, context.bindingData);
        const lookup = context.bindings.inLookupTable;
        context.log('Lookup', { lookup });
        // If the blob value is not stale
        // Return Current Blob Value with Long TTL
        const remainingTtl = lookup && lookup.startTime
            && (lookup.startTime + config.timeToLiveSeconds * 1000 - Date.now());
        if (remainingTtl > 0) {
            // Return Old Lookup (Long TTL)
            context.res = {
                body: lookup,
                headers: {
                    'Cache-Control': `public, max-age=${remainingTtl}`
                }
            };
            context.done();
            return;
        }
        // Set Update Request Queue
        context.bindings.outUpdateRequestQueue = Object.assign({}, dataKey, { startTime: Date.now() });
        // Return Current Blob Value with Short TTL
        if (!lookup) {
            // Deal with missing lookup (First time request?)
            context.res = {
                status: 400,
                body: `Not Ready Yet: Try again in ${config.timePollSeconds} Seconds`,
                headers: {
                    'Cache-Control': `public, max-age=${config.timeExtendSeconds}`
                }
            };
            context.done();
            return;
        }
        // Return Old Lookup (Short)
        context.res = {
            body: lookup,
            headers: {
                'Cache-Control': `public, max-age=${config.timeExtendSeconds}`
            }
        };
        context.done();
    });
}
exports.runFunction = runFunction;
;
//# sourceMappingURL=function-01-http.js.map

/***/ })

/******/ });