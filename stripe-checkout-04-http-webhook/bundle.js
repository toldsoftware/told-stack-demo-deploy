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
/******/ 	return __webpack_require__(__webpack_require__.s = 457);
/******/ })
/************************************************************************/
/******/ ({

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const server_config_1 = __webpack_require__(262);
const stripe_client_1 = __webpack_require__(263);
const process_stripe_checkout_1 = __webpack_require__(266);
const runtimeConfig = {
    processRequest: process_stripe_checkout_1.processRequest
};
exports.config = new server_config_1.ServerConfig(stripe_client_1.clientConfig, runtimeConfig);


/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ServerConfig {
    constructor(clientConfig, runtimeConfig, default_storageConnectionString_AppSettingName = 'AZURE_STORAGE_CONNECTION_STRING', stripeSecretKey_AppSettingName = 'STRIPE_SECRET_KEY', stripeWebhookEndpointSecret_AppSettingName = 'STRIPE_WEBHOOK_ENDPOINT_SECRET') {
        this.clientConfig = clientConfig;
        this.runtimeConfig = runtimeConfig;
        this.default_storageConnectionString_AppSettingName = default_storageConnectionString_AppSettingName;
        this.stripeSecretKey_AppSettingName = stripeSecretKey_AppSettingName;
        this.stripeWebhookEndpointSecret_AppSettingName = stripeWebhookEndpointSecret_AppSettingName;
        this.storageConnection = this.default_storageConnectionString_AppSettingName;
        this.submit_route = this.clientConfig.submit_route;
        this.status_route = this.clientConfig.status_route;
        this.webhook_route = 'webhook/stripe';
        this.processQueue_queueName = 'stripe-checkout-request';
        this.webhookQueue_queueName = 'stripe-webhook';
        this.stripeCheckoutTable_tableName = `stripe`;
        this.stripeCheckoutTable_partitionKey_fromTrigger = `{emailHash}`;
        this.stripeCheckoutTable_rowKey_fromTrigger = `{serverCheckoutId}`;
        this.getEmailHash = this.clientConfig.getEmailHash;
        this.processRequest = this.runtimeConfig.processRequest;
    }
    getStripeCheckoutPartitionKey(emailHash, serverCheckoutId) {
        return emailHash;
    }
    getStripeCheckoutRowKey(emailHash, serverCheckoutId) {
        return serverCheckoutId;
    }
    getStripeSecretKey() {
        return process.env[this.stripeSecretKey_AppSettingName];
    }
    getStripeWebhookEndpointSecret() {
        return process.env[this.stripeWebhookEndpointSecret_AppSettingName];
    }
}
exports.ServerConfig = ServerConfig;


/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const client_config_1 = __webpack_require__(264);
exports.clientConfig = new client_config_1.ClientConfig({
    stripePublishableKey: 'pk_test_hB4VRQY8ICsC6mVsRo8jjnIh',
    checkoutOptions: {
        business: {
            name: 'Told Software',
            imageUrl: 'https://toldstackdemo.blob.core.windows.net/images/ToldLogo128.png',
            statementDescriptor: 'ToldSoft',
        },
        requirements: {
            requireZipCode: true,
            requireBillingAddress: true,
        },
        experience: {
            allowRememberMe: true
        },
    },
});


/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const objects_1 = __webpack_require__(50);
const hash_1 = __webpack_require__(265);
class ClientConfig {
    constructor(options) {
        this.options = options;
        this.domain = '/';
        this.submit_route = 'api/stripe-checkout-submit';
        this.status_route_partial = 'api/stripe-checkout-status';
        objects_1.assignPartial(this, options);
    }
    get status_route() { return `status_route_partial/{emailHash}/{serverCheckoutId}`; }
    getSubmitTokenUrl() {
        return `${this.domain}/${this.submit_route}`;
    }
    getCheckoutStatusUrl(email, serverCheckoutId) {
        return `${this.domain}/${this.status_route}/${this.getEmailHash(email)}/${serverCheckoutId}`;
    }
    getEmailHash(email) {
        return hash_1.hashEmail_partial(email);
    }
    getStripeChargeMetadata(options) {
        return Object.assign({}, options.user, options.product);
    }
    getStripeChargeStatementDescriptor(options) {
        return `${options.business.statementDescriptor} ${options.product.statementDescriptor}`.substr(0, 22);
    }
    getStripeChargeStatementDescriptor_subscription(options) {
        return `${options.business.statementDescriptor} ${options.product.statementDescriptor_subscription}`.substr(0, 22);
    }
}
exports.ClientConfig = ClientConfig;


/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hashEmail_partial(email) {
    const name = email
        .substr(0, email.indexOf('@'))
        .replace(/\./g, '_')
        .replace(/[^a-zA-Z0-9]/g, '');
    const h = hash(email);
    return name + h;
}
exports.hashEmail_partial = hashEmail_partial;
function hash(text) {
    return [...text].reduce((hash, c) => {
        const code = c.charCodeAt(0);
        hash = ((hash << 5) - hash) + code;
        return hash | 0;
    }, 0);
}
exports.hash = hash;


/***/ }),

/***/ 266:
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
function processRequest(request) {
    return __awaiter(this, void 0, void 0, function* () {
        // TODO: Do Something
        return;
    });
}
exports.processRequest = processRequest;


/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const function_04_http_webhook_1 = __webpack_require__(458);
const stripe_server_1 = __webpack_require__(261);
const run = function (...args) {
    function_04_http_webhook_1.runFunction.apply(null, [stripe_server_1.config, ...args]);
};
global.__run = run;
module.exports = global.__run;


/***/ }),

/***/ 458:
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
                webhookType: "genericJson",
                direction: "in",
                authLevel: "anonymous",
                route: config.webhook_route
            },
            {
                name: "res",
                type: "http",
                direction: "out"
            },
            {
                name: "outWebhookQueue",
                type: "queue",
                direction: "out",
                queueName: config.webhookQueue_queueName,
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
        const stripeSignature = req.headers['stripe-signature'];
        context.bindings.outWebhookQueue = {
            body: req.body,
            stripeSignature,
        };
        context.res = {
            status: 200,
            body: {
                ok: true,
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