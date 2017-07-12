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
/******/ 	return __webpack_require__(__webpack_require__.s = 262);
/******/ })
/************************************************************************/
/******/ ({

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const server_config_1 = __webpack_require__(259);
const logger_client_1 = __webpack_require__(260);
exports.config = new server_config_1.ServerConfig(logger_client_1.clientConfig);


/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ServerConfig {
    // logTable_partitionKey_fromQueueTrigger = `{}`;
    // logTable_rowKey_fromQueueTrigger = ``;
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
    }
}
exports.ServerConfig = ServerConfig;


/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const client_config_1 = __webpack_require__(261);
exports.clientConfig = new client_config_1.ClientConfig({
    timeBatchSeconds: 10,
    sendLog_domain: 'https://told-stack-demo.azureedge.net',
    // sendLog_domain: 'http://localhost:7071',
    sendLog_route: 'api/logger/send-log',
});


/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const objects_1 = __webpack_require__(68);
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

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const function_01_http_1 = __webpack_require__(263);
const logger_server_1 = __webpack_require__(258);
const run = function (...args) {
    function_01_http_1.runFunction.apply(null, [logger_server_1.config, ...args]);
};
global.__run = run;
module.exports = global.__run;


/***/ }),

/***/ 263:
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
                name: "outLogQueue",
                type: "queue",
                direction: "out",
                queueName: config.logQueue_queueName,
                connection: config.storageConnection
            },
        ],
        disabled: false
    };
}
exports.createFunctionJson = createFunctionJson;
function runFunction(config, context, req) {
    return __awaiter(this, void 0, void 0, function* () {
        context.log('START');
        // Handle Max Queue Size (64kb) -> Put in a blob
        const items = JSON.parse(req.body);
        if (!items) {
            context.res = {
                body: {
                    error: 'No Items Sent'
                },
                headers: {
                    'Content-Type': 'application/json',
                }
            };
            context.log('DONE');
            context.done();
            return;
        }
        context.log(`Received ${items.length} log items`);
        // if (JSON.stringify(items).length < this.config.maxQueueSize) {
        context.bindings.outLogQueue = { items };
        context.log(`Stored in Queue`);
        // } else {
        //     context.bindings.outLogOversizeBlob = { items };
        //     context.bindings.outLogOversizeQueue = config.getLogOversizeBlobName(context.bindingData);
        //     context.log(`Stored in Oversize Blob`);
        // }
        context.res = {
            body: {
                ok: true
            },
            headers: {
                'Content-Type': 'application/json',
            }
        };
        context.log('DONE');
        context.done();
    });
}
exports.runFunction = runFunction;
;


/***/ }),

/***/ 68:
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
        t[k] = p[k];
    }
    return t;
}
exports.assignPartial = assignPartial;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map