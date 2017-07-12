webpackJsonp([0],{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RX = __webpack_require__(45);
var stripe_test_1 = __webpack_require__(137);
// import { Store } from './store/store';
// import { handleRoute } from "./routes";
// import { Root } from "./components/page/root";
// const store = Store;
// handleRoute();
// <Root store={store} />
exports.App = function () { return (RX.createElement(RX.View, null,
    RX.createElement(RX.Text, null, "TEST"),
    RX.createElement(stripe_test_1.StripeTest, null))); };


/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var client_config_1 = __webpack_require__(143);
exports.clientConfig = new client_config_1.ClientConfig({
    timeBatchSeconds: 10,
    sendLog_domain: 'https://told-stack-demo.azureedge.net',
    // sendLog_domain: 'http://localhost:7071',
    sendLog_route: 'api/logger/send-log',
});


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var client_config_1 = __webpack_require__(149);
exports.clientConfig = new client_config_1.ClientConfig({
    // lookup_domain: 'https://told-stack-demo.azurewebsites.net',
    // downloadBlob_domain: 'https://told-stack-demo.azurewebsites.net',
    lookup_domain: 'https://told-stack-demo.azureedge.net',
    downloadBlob_domain: 'https://told-stack-demo.azureedge.net',
    lookup_route: 'api/lookup-lsc',
    downloadBlob_route: 'api/lookup-lsc-download'
});


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var client_config_1 = __webpack_require__(153);
exports.clientConfig = new client_config_1.ClientConfig({
    stripePublishableKey: 'pk_test_hB4VRQY8ICsC6mVsRo8jjnIh',
    checkoutOptions: {
        business: {
            name: 'Told Software',
            imageUrl: 'https://toldstackdemo.blob.core.windows.net/images/ToldLogo128.png'
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

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var RX = __webpack_require__(45);
var stripe_1 = __webpack_require__(139);
var StripeTest = (function (_super) {
    __extends(StripeTest, _super);
    function StripeTest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prepare = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, stripe_1.stripeCheckoutProcess.prepare()];
                    case 1:
                        r = _a.sent();
                        this.setState({
                            isReady: true,
                            open: r.open,
                        });
                        r.result.subscribe(function (x) {
                            console.log('Result Changed', { result: x });
                            _this.setState({
                                result: x
                            });
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.open = function () {
            if (_this.state.open) {
                _this.state.open({
                    product: { amountCents: 100, description: 'Cool Thing to Buy' },
                    user: { email: 'me@home.com' },
                });
            }
        };
        return _this;
    }
    StripeTest.prototype.render = function () {
        if (!this.state.hasStarted) {
            this.setState({
                hasStarted: true
            });
            setTimeout(this.prepare);
        }
        return (RX.createElement(RX.View, null,
            RX.createElement(RX.Button, { disabled: !this.state.isReady, onPress: this.open }, "Checkout"),
            this.state.result && (RX.createElement(RX.View, null,
                RX.createElement(RX.Text, null,
                    "status: ",
                    this.state.result.status),
                RX.createElement(RX.Text, null,
                    "checkoutId: ",
                    this.state.result.checkoutId),
                RX.createElement(RX.Text, null,
                    "timeChanged: ",
                    this.state.result.timeChanged)))));
    };
    return StripeTest;
}(RX.Component));
exports.StripeTest = StripeTest;


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __webpack_require__(142);
var session_id_1 = __webpack_require__(141);
var config_1 = __webpack_require__(77);
var session = new session_id_1.SessionId();
exports.logger = new logger_1.Logger(config_1.clientConfig_logger, function () { return ({ sessionId: session.sessionId, userId: session.userId }); }, function () { return ({ path: 'a/b/c' }); }, function () { return ({ appVersion: 'v1.0', platform: 'web', userAgent: 'testUserAgent' }); });


/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var checkout_process_1 = __webpack_require__(151);
var config_1 = __webpack_require__(77);
var logger_1 = __webpack_require__(138);
exports.stripeCheckoutProcess = new checkout_process_1.StripeCheckoutProcess(config_1.clientConfig_stripe, {
    logCheckoutEvent: function (event, data) {
        logger_1.logger.major('Stripe', event, data);
    }
});


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RX = __webpack_require__(45);
var app_1 = __webpack_require__(133);
RX.App.initialize(true, true);
RX.UserInterface.setMainView(RX.createElement(app_1.App, null));


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rand_1 = __webpack_require__(146);
var SessionId = (function () {
    function SessionId(userId) {
        if (userId === void 0) { userId = null; }
        this.userId = userId;
        this.sessionId = createSessonId();
        if (!this.userId) {
            this.userId = createUserId_anonymous();
        }
    }
    SessionId.prototype.setActualUserId = function (userId) {
        if (this.userId.indexOf('anon-') !== 0) {
            throw 'setActualUserId is only valid if the current userId is anonymous';
        }
        this.userId = userId;
    };
    return SessionId;
}());
exports.SessionId = SessionId;
function createSessonId() {
    var iso = (new Date()).toISOString();
    var rand = rand_1.randHex(16);
    return iso + "_" + rand;
}
exports.createSessonId = createSessonId;
function createUserId_anonymous() {
    var iso = (new Date()).toISOString();
    var rand = rand_1.randHex(16);
    return "anon_" + iso + "_" + rand;
}
exports.createUserId_anonymous = createUserId_anonymous;


/***/ }),

/***/ 142:
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = (function () {
    function Logger(config, getUserInfo, getContextInfo, getDeviceInfo) {
        var _this = this;
        this.config = config;
        this.getUserInfo = getUserInfo;
        this.getContextInfo = getContextInfo;
        this.getDeviceInfo = getDeviceInfo;
        this._hasSentSessionInfo = false;
        this._startTime = Date.now();
        this._lastSendTime = Date.now();
        this._items = [];
        this._timeoutId = 0;
        this.sendBatch = function (shouldSendImmediately) {
            if (shouldSendImmediately === void 0) { shouldSendImmediately = false; }
            if (!shouldSendImmediately
                && Date.now() - _this._lastSendTime < _this.config.timeBatchSeconds * 1000) {
                _this.scheduleSend();
                return;
            }
            var items = _this._items;
            _this._items = [];
            _this.sendNow(items);
        };
        this.scheduleSend = function () {
            var timeUsed = Date.now() - _this._lastSendTime;
            var timeRemaining = _this.config.timeBatchSeconds - timeUsed;
            clearTimeout(_this._timeoutId);
            _this._timeoutId = setTimeout(_this.sendBatch, timeRemaining);
        };
        setTimeout(function () { return _this.sendSessionInfo(); }, 250);
    }
    Logger.prototype.sendSessionInfo = function () {
        if (!this._hasSentSessionInfo) {
            this._hasSentSessionInfo = true;
            this._items.push({
                category: 'Session',
                event: 'Info',
                data: null,
                userInfo: this.getUserInfo(),
                appContextInfo: this.getContextInfo(),
                deviceInfo: this.getDeviceInfo(),
                isError: undefined,
                time: Date.now(),
                runTime: Date.now() - this._startTime,
                startTime: this._startTime,
            });
            this.sendBatch(true);
        }
    };
    Logger.prototype.error = function (category, event, data, shouldSendImmediately) {
        if (shouldSendImmediately === void 0) { shouldSendImmediately = false; }
        this.log(category, event, data, true, true);
    };
    Logger.prototype.major = function (category, event, data, shouldSendImmediately) {
        if (shouldSendImmediately === void 0) { shouldSendImmediately = false; }
        this.log(category, event, data, true);
    };
    Logger.prototype.log = function (category, event, data, shouldSendImmediately, isError) {
        if (shouldSendImmediately === void 0) { shouldSendImmediately = false; }
        if (isError === void 0) { isError = false; }
        var d = {
            category: category,
            event: event,
            data: data,
            userInfo: this.getUserInfo(),
            appContextInfo: this.getContextInfo(),
            deviceInfo: undefined,
            isError: isError,
            time: Date.now(),
            runTime: Date.now() - this._startTime,
            startTime: this._startTime,
        };
        this._items.push(d);
        this.sendBatch(shouldSendImmediately);
    };
    Logger.prototype.sendNow = function (items) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var sentItems, body, hasSentAll, count, r, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this._lastSendTime = Date.now();
                        if (!items || !items.length) {
                            return [2 /*return*/];
                        }
                        items.forEach(function (x) {
                            if (!x.data) {
                                return;
                            }
                            var d = x.data;
                            if (typeof x.data !== 'string') {
                                d = JSON.stringify(x.data);
                            }
                            if (d.length > _this.config.maxDataSize) {
                                x.data = 'truncated:' + d.substr(0, _this.config.maxDataSize - 16) + '...';
                            }
                        });
                        sentItems = items;
                        body = JSON.stringify(items);
                        hasSentAll = true;
                        count = items.length;
                        while (body.length > this.config.maxSendSize) {
                            if (count === 1) {
                                // Truncate Message Data
                                sentItems.forEach(function (x) { return x.data = 'truncated:' + JSON.stringify(x.data).substr(0, _this.config.maxDataSize) + '...'; });
                                break;
                            }
                            hasSentAll = false;
                            count = Math.floor(count / 2);
                            sentItems = items.slice(0, count);
                            body = JSON.stringify(sentItems);
                        }
                        if (!hasSentAll) {
                            (_a = this._items).push.apply(_a, items.slice(count));
                        }
                        return [4 /*yield*/, fetch(this.config.getSendLogUrl(), { method: 'POST', body: body })];
                    case 1:
                        r = _c.sent();
                        // If send failure, add items back to end of queue to try again
                        if (!r.ok) {
                            sentItems.forEach(function (x) { return x._attempts++; });
                            (_b = this._items).push.apply(_b, sentItems.filter(function (x) { return x._attempts < _this.config.maxItemSendAttempts; }));
                        }
                        // Immediately Send Again to Send the rest of the batch
                        if (!hasSentAll) {
                            setTimeout(function () { return _this.sendBatch(true); });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return Logger;
}());
exports.Logger = Logger;


/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var objects_1 = __webpack_require__(30);
var ClientConfig = (function () {
    function ClientConfig(options) {
        var _this = this;
        this.maxSendSize = 32 * 1024;
        this.maxDataSize = 28 * 1024;
        this.sendLog_domain = '/';
        this.sendLog_route = 'api/logger/send-log';
        this.getSendLogUrl = function () { return _this.sendLog_domain + "/" + _this.sendLog_route; };
        objects_1.assignPartial(this, options);
    }
    return ClientConfig;
}());
exports.ClientConfig = ClientConfig;


/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InstanceLoader = (function () {
    function InstanceLoader(_load) {
        var _this = this;
        this._load = _load;
        this._isLoading = false;
        this._resolves = [];
        this._getInstance = function () {
            return new Promise(function (resolve, reject) {
                if (_this._instance) {
                    return resolve(_this._instance);
                }
                _this._resolves.push(resolve);
                if (_this._isLoading) {
                    return;
                }
                _this._isLoading = true;
                console.log('InstanceLoader START');
                _this._load().then(function (x) {
                    console.log('InstanceLoader LOADED');
                    _this._instance = x;
                    var resolves = _this._resolves;
                    _this._resolves = null;
                    resolves.forEach(function (r) {
                        setTimeout(function () {
                            try {
                                r(x);
                            }
                            catch (err) {
                                console.error('InstanceLoader: A resolver threw an uncaught error', { err: err });
                            }
                        });
                    });
                    console.log('InstanceLoader DONE');
                });
            });
        };
    }
    InstanceLoader.prototype.load = function () {
        return this._getInstance();
    };
    Object.defineProperty(InstanceLoader.prototype, "instance", {
        get: function () {
            return this._getInstance();
        },
        enumerable: true,
        configurable: true
    });
    return InstanceLoader;
}());
exports.InstanceLoader = InstanceLoader;


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var O = __webpack_require__(343);
exports.Observable = O.default;


/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// maxLength = 64
function randHex(length) {
    if (length === void 0) { length = 8; }
    return '0000000000000000000000000000000000000000000000000000000000000000'
        .substr(0, length).replace(/0/g, function () { return (0 | Math.random() * 16).toString(16); });
}
exports.randHex = randHex;


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ScriptLoader = (function () {
    function ScriptLoader(options) {
        var _this = this;
        this.options = options;
        this.hasStartedLoading = false;
        this.resolves = [];
        this.resolveAll = function () {
            var r = _this.resolves;
            _this.resolves = [];
            r.forEach(function (x) { return x(_this.instance); });
        };
    }
    ScriptLoader.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.instance) {
                resolve(_this.instance);
                return;
            }
            // Subscribe
            _this.resolves.push(resolve);
            if (_this.hasStartedLoading) {
                return;
            }
            _this.hasStartedLoading = true;
            console.log('ScriptLoader.load START');
            if (_this.options.onBeforeLoadScript) {
                _this.options.onBeforeLoadScript();
            }
            // Load Script
            var d = document;
            var s = 'script';
            var id = _this.options.scriptElementId;
            // Script already loaded
            if (d.getElementById(id)) {
                _this.resolveAll();
                return;
            }
            var fjs = d.getElementsByTagName(s)[0];
            var js = d.createElement(s);
            js.id = id;
            js.onload = function () {
                if (_this.options.onAfterLoadScript) {
                    _this.options.onAfterLoadScript();
                }
                _this.instance = _this.options.getInstance();
                _this.resolveAll();
            };
            js.src = _this.options.url;
            fjs.parentNode.insertBefore(js, fjs);
        });
    };
    return ScriptLoader;
}());
exports.ScriptLoader = ScriptLoader;


/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// https://gist.github.com/jed/982883
exports.uuid = {
    v4: function () { return ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (a) { return (a ^ Math.random() * 16 >> a / 4).toString(16); }); }
};


/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var objects_1 = __webpack_require__(30);
var ClientConfig = (function () {
    function ClientConfig(options) {
        this.timePollSeconds = 1;
        this.maxPollCount = 5;
        this.timeToLiveSeconds = 60;
        this.lookup_domain = '/';
        this.lookup_route = 'api/lookup-lsc';
        this.downloadBlob_domain = '/';
        this.downloadBlob_route = 'blob';
        // WARNING: Gzip is not working in the 4th step: Reading from .gzip blob with node and sending to client
        // In addition, since using a function instead of proxy, gzip is done automatically by the function
        // So it is not needed, and would only be useful to reduce storage size at the cost of increased processing
        this.shouldGzipDownloadBlob = false;
        objects_1.assignPartial(this, options);
    }
    ClientConfig.prototype.getLookupUrl = function (key) {
        return this.lookup_domain + "/" + this.lookup_route + "/" + key.containerName + "/" + key.blobName;
    };
    ClientConfig.prototype.getDataDownloadUrl = function (key, lookup) {
        return this.downloadBlob_domain + "/" + (this.downloadBlob_route ? this.downloadBlob_route + '/' : '') + key.containerName + "/" + this.getDataDownloadBlobName(key.blobName, lookup);
    };
    ClientConfig.prototype.getDataDownloadBlobName = function (blobName, lookup) {
        // TODO: Test if works with .ext and switch to underscore if needed
        return blobName + "/" + lookup.timeKey + (this.shouldGzipDownloadBlob ? '_gzip' : '');
    };
    return ClientConfig;
}());
exports.ClientConfig = ClientConfig;


/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CheckoutStatus;
(function (CheckoutStatus) {
    // Nothing has happened yet
    CheckoutStatus["NotStarted"] = "NotStarted";
    // The user has clicked the open button and is opening
    CheckoutStatus["Started"] = "Started";
    // The form has called the opened callback
    CheckoutStatus["Opened"] = "Opened";
    // The form has called the closed callback (Caneelled)
    CheckoutStatus["Closed"] = "Closed";
    // The user has submitted and the provider is verifying the information 
    CheckoutStatus["Verifing"] = "Verifing";
    // The payment was sent to the server
    CheckoutStatus["Submitting"] = "Submitting";
    // The payment is being processed on the server
    CheckoutStatus["Processing"] = "Processing";
    // The payment was made successfully
    CheckoutStatus["Success"] = "Success";
    // The payment failed (Try Again)
    CheckoutStatus["PaymentFailed"] = "PaymentFailed";
    // The payment succeeded but the processing failed (Customer Support)
    CheckoutStatus["ProcessingFailed"] = "ProcessingFailed";
    // The payment process was not found
    CheckoutStatus["NotFound"] = "NotFound";
})(CheckoutStatus = exports.CheckoutStatus || (exports.CheckoutStatus = {}));


/***/ }),

/***/ 151:
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(145);
var checkout_types_1 = __webpack_require__(150);
var stripe_checkout_access_1 = __webpack_require__(152);
var objects_1 = __webpack_require__(30);
var uuid_1 = __webpack_require__(148);
var StripeCheckoutProcess = (function () {
    function StripeCheckoutProcess(config, runtime) {
        var _this = this;
        this.config = config;
        this.runtime = runtime;
        this.prepare = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var checkoutId, observer, lastResult, updateResult, result, tokenCallback, open;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('StripeCheckoutProcess START');
                        if (!this._access) {
                            this._access = new stripe_checkout_access_1.StripeCheckoutAccess(this.config.stripePublishableKey);
                        }
                        console.log('StripeCheckoutProcess Prepare Stripe Access');
                        return [4 /*yield*/, this._access.prepare()];
                    case 1:
                        _a.sent();
                        console.log('StripeCheckoutProcess Setup Result Observer');
                        checkoutId = uuid_1.uuid.v4();
                        lastResult = {
                            checkoutId: checkoutId,
                            status: checkout_types_1.CheckoutStatus.NotStarted,
                            timeChanged: Date.now(),
                        };
                        updateResult = function (result) {
                            console.log('StripeCheckoutProcess updateResult', { result: result });
                            if (result.checkoutId && result.checkoutId !== lastResult.checkoutId) {
                                throw 'StripeCheckoutProcess: Cannot change checkoutId';
                            }
                            objects_1.assignPartial(lastResult, result);
                            lastResult.checkoutId = checkoutId;
                            lastResult.timeChanged = Date.now();
                            observer.next(lastResult);
                            _this.runtime.logCheckoutEvent('ResultChange', lastResult);
                        };
                        result = new observable_1.Observable(function (o) {
                            console.log('StripeCheckoutProcess Observable START');
                            observer = o;
                        });
                        tokenCallback = function (token, args) {
                            updateResult({ status: checkout_types_1.CheckoutStatus.Submitting });
                            // TODO: Submit to server
                        };
                        open = function (options) {
                            var o = {};
                            objects_1.assignPartial(o, _this.config.checkoutOptions);
                            objects_1.assignPartial(o, options);
                            _this._access.open({
                                tokenCallback: tokenCallback,
                                recommendedOptions: {
                                    amount: o.product.amountCents,
                                    name: o.business.name,
                                    image: o.business.imageUrl,
                                    description: o.product.description,
                                    zipCode: o.requirements.requireZipCode,
                                    billingAddress: o.requirements.requireBillingAddress,
                                },
                                additionalOptions: {
                                    email: o.user.email,
                                    allowRememberMe: o.experience.allowRememberMe,
                                    opened: function () {
                                        updateResult({ status: checkout_types_1.CheckoutStatus.Opened });
                                    },
                                    closed: function () {
                                        if (lastResult.status < checkout_types_1.CheckoutStatus.Submitting) {
                                            updateResult({ status: checkout_types_1.CheckoutStatus.Closed });
                                        }
                                    },
                                },
                            });
                            _this.runtime.logCheckoutEvent('Open', { checkoutId: checkoutId, openOptions: options, configOptions: _this.config.checkoutOptions });
                            updateResult({ status: checkout_types_1.CheckoutStatus.Started });
                        };
                        console.log('StripeCheckoutProcess DONE');
                        return [2 /*return*/, {
                                open: open,
                                result: result
                            }];
                }
            });
        }); };
    }
    StripeCheckoutProcess.prototype.getResult = function (checkoutId) {
        throw new Error("Method not implemented.");
    };
    return StripeCheckoutProcess;
}());
exports.StripeCheckoutProcess = StripeCheckoutProcess;


/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var script_loader_1 = __webpack_require__(147);
var instance_loader_1 = __webpack_require__(144);
var scriptLoader = new script_loader_1.ScriptLoader({
    url: 'https://checkout.stripe.com/checkout.js',
    scriptElementId: 'StripeCheckout',
    getInstance: function () {
        return StripeCheckout;
    }
});
var StripeCheckoutAccess = (function () {
    function StripeCheckoutAccess(stripePublishableKey) {
        var _this = this;
        this.stripePublishableKey = stripePublishableKey;
        this.handlerLoader = new instance_loader_1.InstanceLoader(function () { return __awaiter(_this, void 0, void 0, function () {
            var s, handler;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('StripeCheckoutProcess.handlerLoader START');
                        return [4 /*yield*/, scriptLoader.load()];
                    case 1:
                        s = _a.sent();
                        console.log('StripeCheckoutProcess.handlerLoader LOADED');
                        return [4 /*yield*/, s.configure({ key: this.stripePublishableKey })];
                    case 2:
                        handler = _a.sent();
                        console.log('StripeCheckoutProcess.handlerLoader END');
                        return [2 /*return*/, handler];
                }
            });
        }); });
        this.prepare = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.handlerLoader.instance];
                    case 1:
                        _a._handler = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        // This must be a direct call to handler.open (It cannot be async or will get popup-blocked)
        this.open = function (options) {
            var handler = _this._handler;
            if (!handler) {
                throw 'The Stripe Checkout Handler must be loaded before Open is Clicked';
            }
            handler.open(__assign({ token: options.tokenCallback }, options.recommendedOptions, options.additionalOptions));
        };
    }
    return StripeCheckoutAccess;
}());
exports.StripeCheckoutAccess = StripeCheckoutAccess;


/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var objects_1 = __webpack_require__(30);
var ClientConfig = (function () {
    function ClientConfig(options) {
        this.options = options;
        objects_1.assignPartial(this, options);
    }
    return ClientConfig;
}());
exports.ClientConfig = ClientConfig;


/***/ }),

/***/ 30:
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
    var g = items.reduce(function (o, x) {
        var k = getKey(x);
        var group = o[k] = o[k] || { items: [] };
        group.items.push(x);
        return o;
    }, {});
    //return objectToValueIterator(g);
    return g;
}
exports.group = group;
function groupToArray(items, getKey) {
    var g = group(items, getKey);
    return Object.getOwnPropertyNames(g).map(function (k) { return g[k].items; });
}
exports.groupToArray = groupToArray;
function assignPartial(t, p) {
    for (var k in p) {
        t[k] = p[k];
    }
    return t;
}
exports.assignPartial = assignPartial;


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = __webpack_require__(135);
exports.clientConfig_lookupLsc = client_1.clientConfig;
var logger_client_1 = __webpack_require__(134);
exports.clientConfig_logger = logger_client_1.clientConfig;
var stripe_client_1 = __webpack_require__(136);
exports.clientConfig_stripe = stripe_client_1.clientConfig;


/***/ })

},[140]);
//# sourceMappingURL=bundle.js.map