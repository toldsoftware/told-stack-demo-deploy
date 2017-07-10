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
/******/ 	return __webpack_require__(__webpack_require__.s = 292);
/******/ })
/************************************************************************/
/******/ ({

/***/ 251:
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
const server_config_1 = __webpack_require__(252);
const lookup_lsc_config_1 = __webpack_require__(253);
exports.config = new server_config_1.ServerConfig(lookup_lsc_config_1.clientConfig, () => __awaiter(this, void 0, void 0, function* () { return { data: 'TEST ' + new Date() }; }));


/***/ }),

/***/ 252:
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
        this.updateRequestQueue_connection = this.default_storageConnectionString_AppSettingName;
        this.updateExecuteQueue_connection = this.default_storageConnectionString_AppSettingName;
        this.lookupTable_connection = this.default_storageConnectionString_AppSettingName;
        this.changeTable_connection = this.default_storageConnectionString_AppSettingName;
        this.dataRawBlob_connection = this.default_storageConnectionString_AppSettingName;
        this.dataDownloadBlob_connection = this.default_storageConnectionString_AppSettingName;
        // Slash in blobName is not supported (i.e. {*blob}) because table partitionKey/rowKey cannot / in the name
        // http_route = this.apiRoutePath + '/{container}/{*blob}';
        this.http_route = this.clientConfig.apiRoutePath + '/{container}/{blob}';
        this.getDataDownloadBlobName = this.clientConfig.getDataDownloadBlobName;
        this.dataRawBlob_path_fromQueueTrigger = `{containerName}/{blobName}`;
        this.dataDownloadBlob_path_fromQueueTriggerDate = `{containerName}/{blobName}/{timeKey}.gzip`;
        this.updateRequestQueue_queueName = 'lookup-lsc-update-request-queue';
        this.updateExecuteQueue_queueName = 'lookup-lsc-update-execute-queue';
        // These will encode to a url that receives parametes
        // Example: '{container}/{blob}/_lookup.txt'
        this.lookupTable_tableName = `blobaccess`;
        this.lookupTable_partitionKey = `{container}_{blob}`;
        this.lookupTable_rowKey = `lookup`;
        this.lookupTable_tableName_fromQueueTrigger = `blobaccess`;
        this.lookupTable_partitionKey_fromQueueTrigger = `{containerName}_{blobName}`;
        this.lookupTable_rowKey_fromQueueTrigger = `lookup`;
        this.changeTable_tableName = `blobaccess`;
        this.changeTable_partitionKey = `{container}_{blob}`;
        this.changeTable_rowKey = `change`;
        this.changeTable_tableName_fromQueueTrigger = `blobaccess`;
        this.changeTable_partitionKey_fromQueueTrigger = `{containerName}_{blobName}`;
        this.changeTable_rowKey_fromQueueTrigger = `change`;
    }
    getKeyFromRequest(req, bindingData) {
        const d = bindingData;
        return {
            containerName: d.container,
            blobName: d.blob,
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

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const client_config_1 = __webpack_require__(254);
exports.clientConfig = new client_config_1.ClientConfig();


/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
;
class ClientConfig {
    constructor(domain = '/', apiRoutePath = 'api/lookup-lsc', blobProxyRoutePath = 'blob') {
        this.domain = domain;
        this.apiRoutePath = apiRoutePath;
        this.blobProxyRoutePath = blobProxyRoutePath;
        this.timePollSeconds = 1;
        this.maxPollCount = 5;
    }
    getLookupUrl(key) {
        return `${this.domain}/${this.apiRoutePath}/${key.containerName}/${key.blobName}`;
    }
    getDataDownloadUrl(key, lookup) {
        return `${this.domain}/${this.blobProxyRoutePath}/${key.containerName}/${this.getDataDownloadBlobName(key.blobName, lookup)}`;
    }
    getDataDownloadBlobName(blobName, lookup) {
        // TODO: Test if works with .ext and switch to underscore if needed
        return `${blobName}/${lookup.timeKey}.gzip`;
    }
}
exports.ClientConfig = ClientConfig;


/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const function_01_http_1 = __webpack_require__(293);
const config_lookup_lsc_1 = __webpack_require__(251);
const run = function (...args) {
    function_01_http_1.runFunction.apply(null, [config_lookup_lsc_1.config, ...args]);
};
global.__run = run;
module.exports = global.__run;


/***/ }),

/***/ 293:
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
                connection: config.lookupTable_connection
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
        const remainingTtl = lookup && lookup.timeKey
            && Math.ceil((parseInt(lookup.timeKey) + config.timeToLiveSeconds * 1000 - Date.now()) / 1000);
        context.log('remainingTtl', { remainingTtl, timeKey: lookup, timeToLiveSeconds: config.timeToLiveSeconds, now: Date.now() });
        if (remainingTtl > config.timeExtendSeconds) {
            context.log('Return Old Lookup', { lookup, remainingTtl });
            // Return Old Lookup (Long TTL)
            context.res = {
                body: lookup,
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': `public, max-age=${remainingTtl}`
                }
            };
            context.log('DONE');
            context.done();
            return;
        }
        context.log('Request Update');
        // Set Update Request Queue
        context.bindings.outUpdateRequestQueue = Object.assign({}, dataKey, { timeKey: '' + Date.now() });
        // Return Current Blob Value with Short TTL
        if (!lookup) {
            context.log('Missing Lookup (First Time?)');
            context.res = {
                body: { error: `Not Ready Yet: Try again in ${config.timePollSeconds} Seconds` },
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': `public, max-age=${config.timeExtendSeconds}`,
                }
            };
            // context.res = {
            //     status: 400,
            //     body: `Not Ready Yet: Try again in ${config.timePollSeconds} Seconds`,
            //     headers: {
            //         'Cache-Control': `public, max-age=${config.timeExtendSeconds}`
            //     }
            // };
            context.log('DONE');
            context.done();
            return;
        }
        // Return Old Lookup (Short)
        context.log('Return Old Lookup with Short TTL while Getting New Lookup and Value');
        context.res = {
            body: lookup,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': `public, max-age=${config.timeExtendSeconds}`,
            }
        };
        context.log('DONE');
        context.done();
    });
}
exports.runFunction = runFunction;
;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map