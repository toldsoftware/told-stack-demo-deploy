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
/******/ 	return __webpack_require__(__webpack_require__.s = 326);
/******/ })
/************************************************************************/
/******/ ({

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const server_config_1 = __webpack_require__(275);
const logger_client_1 = __webpack_require__(278);
exports.config = new server_config_1.ServerConfig(logger_client_1.clientConfig);


/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const left_pad_1 = __webpack_require__(276);
const rand_1 = __webpack_require__(277);
class ServerConfig {
    constructor(clientConfig, default_storageConnectionString_AppSettingName = 'AZURE_STORAGE_CONNECTION_STRING') {
        this.clientConfig = clientConfig;
        this.default_storageConnectionString_AppSettingName = default_storageConnectionString_AppSettingName;
        this.storageConnection = this.default_storageConnectionString_AppSettingName;
        this.http_route = this.clientConfig.sendLog_route;
        this.logQueue_queueName = 'log';
        // logOversizeQueue_queueName = 'log-oversize';
        // logOversizeBlob_path = `log-oversize/{DateTime}_{rand-guid}.json`;
        // getLogOversizeBlobName(bindingData: HttpFunction_BindingData) {
        //     return this.logOversizeBlob_path
        //         .replace('{DateTime}', bindingData.DateTime)
        //         .replace('{rand-guid}', bindingData['rand-guid'])
        //         ;
        // }
        this.logTable_tableName_fromQueueTrigger = `log`;
        // logTable_partitionKey_fromQueueTrigger = `{}`;
        // logTable_rowKey_fromQueueTrigger = ``;
        this.sessionLookupTable_tableName_fromQueueTrigger = `sessionuserlookup`;
        this.sessionLookupTable_partitionKey_fromQueueTrigger = `session-user-lookup`;
        this.sessionLookupTable_rowKey_fromQueueTrigger = `{sessionId}`;
        this.userLookupTable_tableName_fromQueueTrigger = `sessionuserlookup`;
        this.userLookupTable_partitionKey_fromQueueTrigger = `user-session-lookup`;
        this.userLookupTable_rowKey_fromQueueTrigger = `{userId}`;
    }
    getPartitionKey(item) {
        return `${item.userInfo.sessionId}`;
    }
    getRowKey(item) {
        // Avoid Collisions in case of bot using replay values (add Random and Date)
        return `${item.userInfo.userId}_t-${left_pad_1.leftPad(item.runTime, 10, '-')}_r-${rand_1.randHex(8)}_d-${Date.now()}`;
    }
}
exports.ServerConfig = ServerConfig;


/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Max Length 64
function leftPad(v, length, character = '') {
    let p = '0000000000000000000000000000000000000000000000000000000000000000';
    if (character) {
        p = p.replace(/0/g, character);
    }
    return (p + v).substr(-length);
}
exports.leftPad = leftPad;


/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// maxLength = 64
function randHex(length = 8) {
    return '0000000000000000000000000000000000000000000000000000000000000000'
        .substr(0, length).replace(/0/g, () => (0 | Math.random() * 16).toString(16));
}
exports.randHex = randHex;


/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const client_config_1 = __webpack_require__(279);
exports.clientConfig = new client_config_1.ClientConfig({
    timeBatchSeconds: 10,
    sendLog_domain: 'https://told-stack-demo.azureedge.net',
    // sendLog_domain: 'http://localhost:7071',
    sendLog_route: 'api/logger/send-log',
});


/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const objects_1 = __webpack_require__(50);
class ClientConfig {
    constructor(options) {
        this.maxSendSize = 32 * 1024;
        this.maxDataSize = 28 * 1024;
        this.sendLog_domain = '/';
        this.sendLog_route = 'api/logger/send-log';
        this.getSendLogUrl = () => `${this.sendLog_domain}/${this.sendLog_route}`;
        objects_1.assignPartial(this, options);
    }
}
exports.ClientConfig = ClientConfig;


/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const function_02_queue_to_table_1 = __webpack_require__(327);
const logger_server_1 = __webpack_require__(274);
const run = function (...args) {
    function_02_queue_to_table_1.runFunction.apply(null, [logger_server_1.config, ...args]);
};
global.__run = run;
module.exports = global.__run;


/***/ }),

/***/ 327:
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
// Queue Trigger: Update Request Queue
// Table In-Out: Changing Blob Singleton Check
// Queue Out: Update Execute Queue Only Once Per Stale Timeout
function createFunctionJson(config) {
    return {
        bindings: [
            {
                name: "inLogQueue",
                type: "queueTrigger",
                direction: "in",
                queueName: config.logQueue_queueName,
                connection: config.storageConnection
            },
            {
                name: "outLogTable",
                type: "table",
                direction: "out",
                tableName: config.logTable_tableName_fromQueueTrigger,
                // partitionKey: config.logTable_partitionKey_fromQueueTrigger,
                // rowKey: config.logTable_rowKey_fromQueueTrigger,
                connection: config.storageConnection
            },
            {
                name: "inSessionLookupTable",
                type: "table",
                direction: "in",
                tableName: config.sessionLookupTable_tableName_fromQueueTrigger,
                partitionKey: config.sessionLookupTable_partitionKey_fromQueueTrigger,
                rowKey: config.sessionLookupTable_rowKey_fromQueueTrigger,
                connection: config.storageConnection
            },
            {
                name: "outSessionLookupTable",
                type: "table",
                direction: "out",
                tableName: config.sessionLookupTable_tableName_fromQueueTrigger,
                partitionKey: config.sessionLookupTable_partitionKey_fromQueueTrigger,
                rowKey: config.sessionLookupTable_rowKey_fromQueueTrigger,
                connection: config.storageConnection
            },
            {
                name: "inUserLookupTable",
                type: "table",
                direction: "in",
                tableName: config.userLookupTable_tableName_fromQueueTrigger,
                partitionKey: config.userLookupTable_partitionKey_fromQueueTrigger,
                rowKey: config.userLookupTable_rowKey_fromQueueTrigger,
                connection: config.storageConnection
            },
            {
                name: "outUserLookupTable",
                type: "table",
                direction: "out",
                tableName: config.userLookupTable_tableName_fromQueueTrigger,
                partitionKey: config.userLookupTable_partitionKey_fromQueueTrigger,
                rowKey: config.userLookupTable_rowKey_fromQueueTrigger,
                connection: config.storageConnection
            },
        ],
        disabled: false
    };
}
exports.createFunctionJson = createFunctionJson;
function runFunction(config, context) {
    return __awaiter(this, void 0, void 0, function* () {
        context.log('START', { insertionTime: context.bindingData.insertionTime, itemsLength: context.bindings.inLogQueue.items.length });
        const ip = context.bindings.inLogQueue.ip;
        const userAgent = context.bindings.inLogQueue.userAgent;
        const requestInfo = context.bindings.inLogQueue.requestInfo;
        context.bindings.outLogTable = context.bindings.inLogQueue.items.map((x, i) => (Object.assign({ PartitionKey: config.getPartitionKey(x), RowKey: config.getRowKey(x), ip: i === 0 ? ip : undefined }, x, { 
            // userAgent: i === 0 ? userAgent : undefined,
            requestInfo: i === 0 ? requestInfo : undefined })));
        // Add to Session and User Lookup Tables
        if (!context.bindings.inSessionLookupTable) {
            context.bindings.outSessionLookupTable = { userId: context.bindings.inLogQueue.userId };
        }
        if (!context.bindings.inUserLookupTable) {
            context.bindings.outUserLookupTable = { sessionId: context.bindings.inLogQueue.sessionId };
        }
        context.log('DONE');
        context.done();
    });
}
exports.runFunction = runFunction;


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// export function objectToValueIterator<T>(obj: { [key: string]: T }): { [key: string]: T } & Iterable<T> {
Object.defineProperty(exports, "__esModule", { value: true });
//     const o = obj as any;
//     o[Symbol.iterator] = () => {
//         let keys = Object.getOwnPropertyNames(obj);
//         let i = 0;
//         return {
//             next: () => {
//                 const key = keys[i++];
//                 const value = obj[key];
//                 return {
//                     value,
//                     done: i >= keys.length
//                 };
//             }
//         };
//     };
//     return o;
// }
// export function objectToKeyValueIterator<T>(obj: { [key: string]: T }): { [key: string]: T } & Iterable<{ key: string, value: T }> {
//     const o = obj as any;
//     o[Symbol.iterator] = () => {
//         let keys = Object.getOwnPropertyNames(obj);
//         let i = 0;
//         return {
//             next: () => {
//                 const key = keys[i++];
//                 const value = obj[key];
//                 return {
//                     value: { key, value },
//                     done: i >= keys.length
//                 };
//             }
//         };
//     };
//     return o;
// }
function group(items, getKey) {
    const g = items.reduce((o, x) => {
        const k = getKey(x);
        const group = o[k] = o[k] || { items: [] };
        group.items.push(x);
        return o;
    }, {});
    //return objectToValueIterator(g);
    return g;
}
exports.group = group;
function groupToArray(items, getKey) {
    const g = group(items, getKey);
    return Object.getOwnPropertyNames(g).map(k => g[k].items);
}
exports.groupToArray = groupToArray;
function assignPartial(t, p) {
    for (let k in p) {
        if (p.hasOwnProperty(k)) {
            t[k] = p[k];
        }
    }
    return t;
}
exports.assignPartial = assignPartial;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map