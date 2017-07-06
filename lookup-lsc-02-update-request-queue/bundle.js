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
/******/ 	return __webpack_require__(__webpack_require__.s = 124);
/******/ })
/************************************************************************/
/******/ ({

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const function_02_update_request_queue_1 = __webpack_require__(54);
const config_lookup_lsc_1 = __webpack_require__(29);
const run = function (...args) {
    function_02_update_request_queue_1.runFunction.apply(null, [config_lookup_lsc_1.config, ...args]);
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

/***/ 29:
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
const config_1 = __webpack_require__(13);
exports.config = new config_1.Config(() => __awaiter(this, void 0, void 0, function* () { return { data: 'TEST ' + new Date() }; }));


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Queue Trigger: Update Request Queue
// Table In-Out: Changing Blob Singleton Check
// Queue Out: Update Execute Queue Only Once Per Stale Timeout
function createFunctionJson(config) {
    return {
        bindings: [
            {
                name: "inUpdateRequestQueue",
                type: "queueTrigger",
                direction: "in",
                queueName: config.updateRequestQueue_queueName,
                connection: config.updateRequestQueue_connection
            },
            {
                name: "inoutChangeTable",
                type: "blob",
                direction: "inout",
                tableName: config.changeTable_tableName_fromQueueTrigger,
                partitionKey: config.changeTable_partitionKey_fromQueueTrigger,
                rowKey: config.changeTable_rowKey_fromQueueTrigger,
                connection: config.changeTable_connection
            },
            {
                name: "outUpdateExecuteQueue",
                type: "queue",
                direction: "out",
                queueName: config.updateExecuteQueue_queueName,
                connection: config.updateExecuteQueue_connection
            },
            // BUG FIX: To Prevent inout RawDataBlob from crashing next step if it doesn't exist
            {
                name: "outRawDataBlob",
                type: "blob",
                direction: "out",
                path: config.dataRawBlob_path_fromQueueTrigger,
                connection: config.dataRawBlob_connection,
            },
        ],
        disabled: false
    };
}
exports.createFunctionJson = createFunctionJson;
function runFunction(config, context) {
    // BUG FIX: To Prevent inout RawDataBlob from crashing next step if it doesn't exist
    if (!context.bindings.inoutChangeTable) {
        context.bindings.outRawDataBlob = {};
    }
    if (context.bindings.inoutChangeTable
        && context.bindings.inoutChangeTable.startTime
        && context.bindingData.insertionTime.getTime() < context.bindings.inoutChangeTable.startTime + config.timeExecutionSeconds * 1000) {
        // The update is already executing, don't do anything
        context.done();
        return;
    }
    // Queue Execute Update
    context.bindings.inoutChangeTable = { startTime: Date.now() };
    context.bindings.outUpdateExecuteQueue = context.bindings.inUpdateRequestQueue;
    context.done();
}
exports.runFunction = runFunction;
//# sourceMappingURL=function-02-update-request-queue.js.map

/***/ })

/******/ });