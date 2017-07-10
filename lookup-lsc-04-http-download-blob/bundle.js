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
/******/ 	return __webpack_require__(__webpack_require__.s = 299);
/******/ })
/************************************************************************/
/******/ ({

/***/ 249:
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
const server_config_1 = __webpack_require__(250);
const config_lookup_lsc_1 = __webpack_require__(251);
exports.config = new server_config_1.ServerConfig(config_lookup_lsc_1.clientConfig, () => __awaiter(this, void 0, void 0, function* () { return { data: 'TEST ' + new Date() }; }));


/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ServerConfig {
    constructor(clientConfig, obtainBlobData, default_storageConnectionString_AppSettingName = 'AZURE_STORAGE_CONNECTION_STRING') {
        this.clientConfig = clientConfig;
        this.obtainBlobData = obtainBlobData;
        this.default_storageConnectionString_AppSettingName = default_storageConnectionString_AppSettingName;
        this.timeToLiveSeconds = 60;
        this.timeExtendSeconds = 1;
        this.timeExecutionSeconds = 10;
        this.timePollSeconds = this.clientConfig.timePollSeconds;
        this.shouldGzip = this.clientConfig.shouldGzipDownloadBlob;
        this.updateRequestQueue_connection = this.default_storageConnectionString_AppSettingName;
        this.updateExecuteQueue_connection = this.default_storageConnectionString_AppSettingName;
        this.lookupTable_connection = this.default_storageConnectionString_AppSettingName;
        this.changeTable_connection = this.default_storageConnectionString_AppSettingName;
        this.dataRawBlob_connection = this.default_storageConnectionString_AppSettingName;
        this.dataDownloadBlob_connection = this.default_storageConnectionString_AppSettingName;
        // Slash in blobName is not supported (i.e. {*blobName}) because table partitionKey/rowKey cannot / in the name
        // http_route = this.apiRoutePath + '/{containerName}/{*blobName}';
        this.http_route = this.clientConfig.lookup_route + '/{containerName}/{blobName}';
        this.getDataDownloadBlobName = this.clientConfig.getDataDownloadBlobName;
        this.dataRawBlob_path_fromQueueTrigger = `{containerName}/{blobName}`;
        this.dataDownloadBlob_path_from_queueTriggerDate = `{containerName}/{blobName}/{timeKey}${this.shouldGzip ? '_gzip' : ''}`;
        this.http_dataDownload_route = this.clientConfig.downloadBlob_route + '/{containerName}/{blobName}/{timeKey}';
        this.dataDownloadBlob_path_from_http_dataDownload_route = `{containerName}/{blobName}/{timeKey}${this.shouldGzip ? '_gzip' : ''}`;
        this.updateRequestQueue_queueName = 'lookup-lsc-update-request-queue';
        this.updateExecuteQueue_queueName = 'lookup-lsc-update-execute-queue';
        // These will encode to a url that receives parametes
        // Example: '{containerName}/{blobName}/_lookup.txt'
        this.lookupTable_tableName = `blobaccess`;
        this.lookupTable_partitionKey = `{containerName}_{blobName}`;
        this.lookupTable_rowKey = `lookup`;
        this.lookupTable_tableName_fromQueueTrigger = `blobaccess`;
        this.lookupTable_partitionKey_fromQueueTrigger = `{containerName}_{blobName}`;
        this.lookupTable_rowKey_fromQueueTrigger = `lookup`;
        this.changeTable_tableName = `blobaccess`;
        this.changeTable_partitionKey = `{containerName}_{blobName}`;
        this.changeTable_rowKey = `change`;
        this.changeTable_tableName_fromQueueTrigger = `blobaccess`;
        this.changeTable_partitionKey_fromQueueTrigger = `{containerName}_{blobName}`;
        this.changeTable_rowKey_fromQueueTrigger = `change`;
    }
    getKeyFromRequest(req, bindingData) {
        const d = bindingData;
        return {
            containerName: d.containerName,
            blobName: d.blobName,
        };
    }
    getLookupTableRowKey_fromQueueTrigger(queueTrigger) {
        return {
            table: this.lookupTable_tableName_fromQueueTrigger
                .replace(/\{containerName\}/g, queueTrigger.containerName)
                .replace(/\{blobName\}/g, queueTrigger.blobName),
            partition: this.lookupTable_partitionKey_fromQueueTrigger
                .replace(/\{containerName\}/g, queueTrigger.containerName)
                .replace(/\{blobName\}/g, queueTrigger.blobName),
            row: this.lookupTable_rowKey_fromQueueTrigger
                .replace(/\{containerName\}/g, queueTrigger.containerName)
                .replace(/\{blobName\}/g, queueTrigger.blobName),
        };
    }
    getChangeTableRowKey_fromQueueTrigger(queueTrigger) {
        return {
            table: this.changeTable_tableName_fromQueueTrigger
                .replace(/\{containerName\}/g, queueTrigger.containerName)
                .replace(/\{blobName\}/g, queueTrigger.blobName),
            partition: this.changeTable_partitionKey_fromQueueTrigger
                .replace(/\{containerName\}/g, queueTrigger.containerName)
                .replace(/\{blobName\}/g, queueTrigger.blobName),
            row: this.changeTable_rowKey_fromQueueTrigger
                .replace(/\{containerName\}/g, queueTrigger.containerName)
                .replace(/\{blobName\}/g, queueTrigger.blobName),
        };
    }
}
exports.ServerConfig = ServerConfig;


/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const client_config_1 = __webpack_require__(252);
exports.clientConfig = new client_config_1.ClientConfig({
    lookup_domain: 'https://told-stack-demo.azurewebsites.net',
    lookup_route: 'api/lookup-lsc',
    downloadBlob_domain: 'https://told-stack-demo.azurewebsites.net',
    downloadBlob_route: 'api/lookup-lsc-download'
});


/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
;
class ClientConfig {
    constructor(options) {
        this.timePollSeconds = 1;
        this.maxPollCount = 5;
        this.lookup_domain = '/';
        this.lookup_route = 'api/lookup-lsc';
        this.downloadBlob_domain = '/';
        this.downloadBlob_route = 'blob';
        this.shouldGzipDownloadBlob = true;
        Object.assign(this, options);
    }
    getLookupUrl(key) {
        return `${this.lookup_domain}/${this.lookup_route}/${key.containerName}/${key.blobName}`;
    }
    getDataDownloadUrl(key, lookup) {
        return `${this.downloadBlob_domain}/${this.downloadBlob_route ? this.downloadBlob_route + '/' : ''}${key.containerName}/${this.getDataDownloadBlobName(key.blobName, lookup)}`;
    }
    getDataDownloadBlobName(blobName, lookup) {
        // TODO: Test if works with .ext and switch to underscore if needed
        return `${blobName}/${lookup.timeKey}${this.shouldGzipDownloadBlob ? '_gzip' : ''}`;
    }
}
exports.ClientConfig = ClientConfig;


/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Http Request: Handle Update Request
// Blob In: Read Old Lookup Blob Value
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
                name: "inInputBlob",
                type: "blob",
                direction: "in",
                path: config.inputBlob_path,
                connection: config.inputBlob_connection
            },
        ],
        disabled: false
    };
}
exports.createFunctionJson = createFunctionJson;
function runFunction(config, context, req) {
    const data = context.bindings.inInputBlob;
    context.res = {
        body: data,
        headers: {
            'Content-Type': config.responseOptions.contentType || 'application/json',
            'Content-Encoding': config.responseOptions.contentEncoding || undefined,
            'Cache-Control': config.responseOptions.cacheControl || undefined,
        }
    };
    context.done();
}
exports.runFunction = runFunction;
;


/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const function_04_http_download_blob_1 = __webpack_require__(300);
const config_lookup_lsc_1 = __webpack_require__(249);
const run = function (...args) {
    function_04_http_download_blob_1.runFunction.apply(null, [config_lookup_lsc_1.config, ...args]);
};
global.__run = run;
module.exports = global.__run;


/***/ }),

/***/ 300:
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
const function_01_http_1 = __webpack_require__(255);
function createFunctionJson(config) {
    return function_01_http_1.createFunctionJson({
        http_route: config.http_dataDownload_route,
        inputBlob_connection: config.dataDownloadBlob_connection,
        inputBlob_path: config.dataDownloadBlob_path_from_http_dataDownload_route,
    });
}
exports.createFunctionJson = createFunctionJson;
function runFunction(config, context, req) {
    return __awaiter(this, void 0, void 0, function* () {
        return function_01_http_1.runFunction({
            responseOptions: {
                cacheControl: 'public, max-age=' + (config.timeToLiveSeconds * 4),
                contentEncoding: config.shouldGzip ? 'gzip' : undefined,
                contentType: 'application/json',
            }
        }, context, req);
    });
}
exports.runFunction = runFunction;
;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map