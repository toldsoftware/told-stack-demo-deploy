/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return Children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClass", function() { return createClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return createFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return isValidElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return findDOMNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return unmountComponentAtNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return PureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_renderSubtreeIntoContainer", function() { return renderSubtreeIntoContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a; });



var version = '15.1.0'; // trick libraries to think we are react

var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

var REACT_ELEMENT_TYPE = (typeof Symbol!=='undefined' && Symbol.for && Symbol.for('react.element')) || 0xeac7;

var COMPONENT_WRAPPER_KEY = typeof Symbol!=='undefined' ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

// don't autobind these methods since they already have guaranteed context.
var AUTOBIND_BLACKLIST = {
	constructor: 1,
	render: 1,
	shouldComponentUpdate: 1,
	componentWillReceiveProps: 1,
	componentWillUpdate: 1,
	componentDidUpdate: 1,
	componentWillMount: 1,
	componentDidMount: 1,
	componentWillUnmount: 1,
	componentDidUnmount: 1
};


var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vert|word|writing|x)[A-Z]/;


var BYPASS_HOOK = {};

/*global process*/
var DEV = typeof process==='undefined' || !__webpack_require__.i({"NODE_ENV":"production"}) || "production"!=='production';

// a component that renders nothing. Used to replace components for unmountComponentAtNode.
function EmptyComponent() { return null; }



// make react think we're react.
var VNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])('a', null).constructor;
VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
VNode.prototype.preactCompatUpgraded = false;
VNode.prototype.preactCompatNormalized = false;

Object.defineProperty(VNode.prototype, 'type', {
	get: function() { return this.nodeName; },
	set: function(v) { this.nodeName = v; },
	configurable:true
});

Object.defineProperty(VNode.prototype, 'props', {
	get: function() { return this.attributes; },
	set: function(v) { this.attributes = v; },
	configurable:true
});



var oldEventHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].event;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].event = function (e) {
	if (oldEventHook) { e = oldEventHook(e); }
	e.persist = Object;
	e.nativeEvent = e;
	return e;
};


var oldVnodeHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode = function (vnode) {
	if (!vnode.preactCompatUpgraded) {
		vnode.preactCompatUpgraded = true;

		var tag = vnode.nodeName,
			attrs = vnode.attributes = extend({}, vnode.attributes);

		if (typeof tag==='function') {
			if (tag[COMPONENT_WRAPPER_KEY]===true || (tag.prototype && 'isReactComponent' in tag.prototype)) {
				if (vnode.children && String(vnode.children)==='') { vnode.children = undefined; }
				if (vnode.children) { attrs.children = vnode.children; }

				if (!vnode.preactCompatNormalized) {
					normalizeVNode(vnode);
				}
				handleComponentVNode(vnode);
			}
		}
		else {
			if (vnode.children && String(vnode.children)==='') { vnode.children = undefined; }
			if (vnode.children) { attrs.children = vnode.children; }

			if (attrs.defaultValue) {
				if (!attrs.value && attrs.value!==0) {
					attrs.value = attrs.defaultValue;
				}
				delete attrs.defaultValue;
			}

			handleElementVNode(vnode, attrs);
		}
	}

	if (oldVnodeHook) { oldVnodeHook(vnode); }
};

function handleComponentVNode(vnode) {
	var tag = vnode.nodeName,
		a = vnode.attributes;

	vnode.attributes = {};
	if (tag.defaultProps) { extend(vnode.attributes, tag.defaultProps); }
	if (a) { extend(vnode.attributes, a); }
}

function handleElementVNode(vnode, a) {
	var shouldSanitize, attrs, i;
	if (a) {
		for (i in a) { if ((shouldSanitize = CAMEL_PROPS.test(i))) { break; } }
		if (shouldSanitize) {
			attrs = vnode.attributes = {};
			for (i in a) {
				if (a.hasOwnProperty(i)) {
					attrs[ CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i ] = a[i];
				}
			}
		}
	}
}



// proxy render() since React returns a Component reference.
function render$1(vnode, parent, callback) {
	var prev = parent && parent._preactCompatRendered && parent._preactCompatRendered.base;

	// ignore impossible previous renders
	if (prev && prev.parentNode!==parent) { prev = null; }

	// default to first Element child
	if (!prev) { prev = parent.children[0]; }

	// remove unaffected siblings
	for (var i=parent.childNodes.length; i--; ) {
		if (parent.childNodes[i]!==prev) {
			parent.removeChild(parent.childNodes[i]);
		}
	}

	var out = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(vnode, parent, prev);
	if (parent) { parent._preactCompatRendered = out && (out._component || { base: out }); }
	if (typeof callback==='function') { callback(); }
	return out && out._component || out;
}


var ContextProvider = function () {};

ContextProvider.prototype.getChildContext = function () {
	return this.props.context;
};
ContextProvider.prototype.render = function (props) {
	return props.children[0];
};

function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	var wrap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(ContextProvider, { context: parentComponent.context }, vnode);
	var c = render$1(wrap, container);
	if (callback) { callback(c); }
	return c._component || c.base;
}


function unmountComponentAtNode(container) {
	var existing = container._preactCompatRendered && container._preactCompatRendered.base;
	if (existing && existing.parentNode===container) {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(EmptyComponent), container, existing);
		return true;
	}
	return false;
}



var ARR = [];

// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
	map: function(children, fn, ctx) {
		if (children == null) { return null; }
		children = Children.toArray(children);
		if (ctx && ctx!==children) { fn = fn.bind(ctx); }
		return children.map(fn);
	},
	forEach: function(children, fn, ctx) {
		if (children == null) { return null; }
		children = Children.toArray(children);
		if (ctx && ctx!==children) { fn = fn.bind(ctx); }
		children.forEach(fn);
	},
	count: function(children) {
		return children && children.length || 0;
	},
	only: function(children) {
		children = Children.toArray(children);
		if (children.length!==1) { throw new Error('Children.only() expects only one child.'); }
		return children[0];
	},
	toArray: function(children) {
		if (children == null) { return []; }
		return Array.isArray && Array.isArray(children) ? children : ARR.concat(children);
	}
};


/** Track current render() component for ref assignment */
var currentComponent;


function createFactory(type) {
	return createElement.bind(null, type);
}


var DOM = {};
for (var i=ELEMENTS.length; i--; ) {
	DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
}

function upgradeToVNodes(arr, offset) {
	for (var i=offset || 0; i<arr.length; i++) {
		var obj = arr[i];
		if (Array.isArray(obj)) {
			upgradeToVNodes(obj);
		}
		else if (obj && typeof obj==='object' && !isValidElement(obj) && ((obj.props && obj.type) || (obj.attributes && obj.nodeName) || obj.children)) {
			arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
		}
	}
}

function isStatelessComponent(c) {
	return typeof c==='function' && !(c.prototype && c.prototype.render);
}


// wraps stateless functional components in a PropTypes validator
function wrapStatelessComponent(WrappedComponent) {
	return createClass({
		displayName: WrappedComponent.displayName || WrappedComponent.name,
		render: function() {
			return WrappedComponent(this.props, this.context);
		}
	});
}


function statelessComponentHook(Ctor) {
	var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
	if (Wrapped) { return Wrapped===true ? Ctor : Wrapped; }

	Wrapped = wrapStatelessComponent(Ctor);

	Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable:true, value:true });
	Wrapped.displayName = Ctor.displayName;
	Wrapped.propTypes = Ctor.propTypes;
	Wrapped.defaultProps = Ctor.defaultProps;

	Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable:true, value:Wrapped });

	return Wrapped;
}


function createElement() {
	var args = [], len = arguments.length;
	while ( len-- ) args[ len ] = arguments[ len ];

	upgradeToVNodes(args, 2);
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["h"].apply(void 0, args));
}


function normalizeVNode(vnode) {
	vnode.preactCompatNormalized = true;

	applyClassName(vnode);

	if (isStatelessComponent(vnode.nodeName)) {
		vnode.nodeName = statelessComponentHook(vnode.nodeName);
	}

	var ref = vnode.attributes.ref,
		type = ref && typeof ref;
	if (currentComponent && (type==='string' || type==='number')) {
		vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
	}

	applyEventNormalization(vnode);

	return vnode;
}


function cloneElement$1(element, props) {
	var children = [], len = arguments.length - 2;
	while ( len-- > 0 ) children[ len ] = arguments[ len + 2 ];

	if (!isValidElement(element)) { return element; }
	var elementProps = element.attributes || element.props;
	var node = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(
		element.nodeName || element.type,
		elementProps,
		element.children || elementProps && elementProps.children
	);
	// Only provide the 3rd argument if needed.
	// Arguments 3+ overwrite element.children in preactCloneElement
	var cloneArgs = [node, props];
	if (children && children.length) {
		cloneArgs.push(children);
	}
	else if (props && props.children) {
		cloneArgs.push(props.children);
	}
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["cloneElement"].apply(void 0, cloneArgs));
}


function isValidElement(element) {
	return element && ((element instanceof VNode) || element.$$typeof===REACT_ELEMENT_TYPE);
}


function createStringRefProxy(name, component) {
	return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
		if (component && component.refs) {
			component.refs[name] = resolved;
			if (resolved===null) {
				delete component._refProxies[name];
				component = null;
			}
		}
	});
}


function applyEventNormalization(ref) {
	var nodeName = ref.nodeName;
	var attributes = ref.attributes;

	if (!attributes || typeof nodeName!=='string') { return; }
	var props = {};
	for (var i in attributes) {
		props[i.toLowerCase()] = i;
	}
	if (props.ondoubleclick) {
		attributes.ondblclick = attributes[props.ondoubleclick];
		delete attributes[props.ondoubleclick];
	}
	// for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
	if (props.onchange && (nodeName==='textarea' || (nodeName.toLowerCase()==='input' && !/^fil|che|rad/i.test(attributes.type)))) {
		var normalized = props.oninput || 'oninput';
		if (!attributes[normalized]) {
			attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
			delete attributes[props.onchange];
		}
	}
}


function applyClassName(ref) {
	var attributes = ref.attributes;

	if (!attributes) { return; }
	var cl = attributes.className || attributes.class;
	if (cl) { attributes.className = cl; }
}


function extend(base, props) {
	for (var key in props) {
		if (props.hasOwnProperty(key)) {
			base[key] = props[key];
		}
	}
	return base;
}


function shallowDiffers(a, b) {
	for (var i in a) { if (!(i in b)) { return true; } }
	for (var i$1 in b) { if (a[i$1]!==b[i$1]) { return true; } }
	return false;
}


function findDOMNode(component) {
	return component && component.base || component;
}


function F(){}

function createClass(obj) {
	function cl(props, context) {
		bindAll(this);
		Component$1.call(this, props, context, BYPASS_HOOK);
		newComponentHook.call(this, props, context);
	}

	obj = extend({ constructor: cl }, obj);

	// We need to apply mixins here so that getDefaultProps is correctly mixed
	if (obj.mixins) {
		applyMixins(obj, collateMixins(obj.mixins));
	}
	if (obj.statics) {
		extend(cl, obj.statics);
	}
	if (obj.propTypes) {
		cl.propTypes = obj.propTypes;
	}
	if (obj.defaultProps) {
		cl.defaultProps = obj.defaultProps;
	}
	if (obj.getDefaultProps) {
		cl.defaultProps = obj.getDefaultProps();
	}

	F.prototype = Component$1.prototype;
	cl.prototype = extend(new F(), obj);

	cl.displayName = obj.displayName || 'Component';

	return cl;
}


// Flatten an Array of mixins to a map of method name to mixin implementations
function collateMixins(mixins) {
	var keyed = {};
	for (var i=0; i<mixins.length; i++) {
		var mixin = mixins[i];
		for (var key in mixin) {
			if (mixin.hasOwnProperty(key) && typeof mixin[key]==='function') {
				(keyed[key] || (keyed[key]=[])).push(mixin[key]);
			}
		}
	}
	return keyed;
}


// apply a mapping of Arrays of mixin methods to a component prototype
function applyMixins(proto, mixins) {
	for (var key in mixins) { if (mixins.hasOwnProperty(key)) {
		proto[key] = multihook(
			mixins[key].concat(proto[key] || ARR),
			key==='getDefaultProps' || key==='getInitialState' || key==='getChildContext'
		);
	} }
}


function bindAll(ctx) {
	for (var i in ctx) {
		var v = ctx[i];
		if (typeof v==='function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
			(ctx[i] = v.bind(ctx)).__bound = true;
		}
	}
}


function callMethod(ctx, m, args) {
	if (typeof m==='string') {
		m = ctx.constructor.prototype[m];
	}
	if (typeof m==='function') {
		return m.apply(ctx, args);
	}
}

function multihook(hooks, skipDuplicates) {
	return function() {
		var arguments$1 = arguments;
		var this$1 = this;

		var ret;
		for (var i=0; i<hooks.length; i++) {
			var r = callMethod(this$1, hooks[i], arguments$1);

			if (skipDuplicates && r!=null) {
				if (!ret) { ret = {}; }
				for (var key in r) { if (r.hasOwnProperty(key)) {
					ret[key] = r[key];
				} }
			}
			else if (typeof r!=='undefined') { ret = r; }
		}
		return ret;
	};
}


function newComponentHook(props, context) {
	propsHook.call(this, props, context);
	this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
	this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
}


function propsHook(props, context) {
	if (!props) { return; }

	// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
	var c = props.children;
	if (c && Array.isArray(c) && c.length===1) {
		props.children = c[0];

		// but its totally still going to be an Array.
		if (props.children && typeof props.children==='object') {
			props.children.length = 1;
			props.children[0] = props.children;
		}
	}

	// add proptype checking
	if (DEV) {
		var ctor = typeof this==='function' ? this : this.constructor,
			propTypes = this.propTypes || ctor.propTypes;
		var displayName = this.displayName || ctor.name;

		if (propTypes) {
			__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.checkPropTypes(propTypes, props, 'prop', displayName);
		}
	}
}


function beforeRender(props) {
	currentComponent = this;
}

function afterRender() {
	if (currentComponent===this) {
		currentComponent = null;
	}
}



function Component$1(props, context, opts) {
	__WEBPACK_IMPORTED_MODULE_1_preact__["Component"].call(this, props, context);
	this.state = this.getInitialState ? this.getInitialState() : {};
	this.refs = {};
	this._refProxies = {};
	if (opts!==BYPASS_HOOK) {
		newComponentHook.call(this, props, context);
	}
}
extend(Component$1.prototype = new __WEBPACK_IMPORTED_MODULE_1_preact__["Component"](), {
	constructor: Component$1,

	isReactComponent: {},

	replaceState: function(state, callback) {
		var this$1 = this;

		this.setState(state, callback);
		for (var i in this$1.state) {
			if (!(i in state)) {
				delete this$1.state[i];
			}
		}
	},

	getDOMNode: function() {
		return this.base;
	},

	isMounted: function() {
		return !!this.base;
	}
});



function PureComponent(props, context) {
	Component$1.call(this, props, context);
}
F.prototype = Component$1.prototype;
PureComponent.prototype = new F();
PureComponent.prototype.isPureReactComponent = true;
PureComponent.prototype.shouldComponentUpdate = function(props, state) {
	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};



var index = {
	version: version,
	DOM: DOM,
	PropTypes: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a,
	Children: Children,
	render: render$1,
	createClass: createClass,
	createFactory: createFactory,
	createElement: createElement,
	cloneElement: cloneElement$1,
	isValidElement: isValidElement,
	findDOMNode: findDOMNode,
	unmountComponentAtNode: unmountComponentAtNode,
	Component: Component$1,
	PureComponent: PureComponent,
	unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=preact-compat.es.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Interfaces.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Defines the template for the ReactXP interface that needs to be
* implemented for each platform.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = __webpack_require__(0);
var AppConfig_1 = __webpack_require__(138);
var SubscribableEvent = __webpack_require__(79);
var Types = __webpack_require__(6);
exports.Types = Types;
var ActivityIndicator = (function (_super) {
    __extends(ActivityIndicator, _super);
    function ActivityIndicator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ActivityIndicator;
}(React.Component));
exports.ActivityIndicator = ActivityIndicator;
var Alert = (function () {
    function Alert() {
    }
    return Alert;
}());
exports.Alert = Alert;
var AnimatedComponent = (function (_super) {
    __extends(AnimatedComponent, _super);
    function AnimatedComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AnimatedComponent;
}(React.Component));
exports.AnimatedComponent = AnimatedComponent;
var AnimatedImage = (function (_super) {
    __extends(AnimatedImage, _super);
    function AnimatedImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AnimatedImage;
}(AnimatedComponent));
exports.AnimatedImage = AnimatedImage;
var AnimatedText = (function (_super) {
    __extends(AnimatedText, _super);
    function AnimatedText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AnimatedText;
}(AnimatedComponent));
exports.AnimatedText = AnimatedText;
var AnimatedTextInput = (function (_super) {
    __extends(AnimatedTextInput, _super);
    function AnimatedTextInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AnimatedTextInput;
}(AnimatedComponent));
exports.AnimatedTextInput = AnimatedTextInput;
var AnimatedView = (function (_super) {
    __extends(AnimatedView, _super);
    function AnimatedView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AnimatedView;
}(AnimatedComponent));
exports.AnimatedView = AnimatedView;
var App = (function () {
    function App() {
        this.activationStateChangedEvent = new SubscribableEvent.SubscribableEvent();
        // Memory Warnings
        this.memoryWarningEvent = new SubscribableEvent.SubscribableEvent();
    }
    // Initialization
    App.prototype.initialize = function (debug, development) {
        AppConfig_1.default.setAppConfig(debug, development);
    };
    return App;
}());
exports.App = App;
var UserInterface = (function () {
    function UserInterface() {
        this.contentSizeMultiplierChangedEvent = new SubscribableEvent.SubscribableEvent();
        this.touchLatencyEvent = new SubscribableEvent.SubscribableEvent();
        this.keyboardNavigationEvent = new SubscribableEvent.SubscribableEvent();
    }
    return UserInterface;
}());
exports.UserInterface = UserInterface;
var Modal = (function () {
    function Modal() {
    }
    return Modal;
}());
exports.Modal = Modal;
var Popup = (function () {
    function Popup() {
    }
    return Popup;
}());
exports.Popup = Popup;
var Linking = (function () {
    function Linking() {
        this.deepLinkRequestEvent = new SubscribableEvent.SubscribableEvent();
    }
    return Linking;
}());
exports.Linking = Linking;
var Accessibility = (function () {
    function Accessibility() {
        this.screenReaderChangedEvent = new SubscribableEvent.SubscribableEvent();
    }
    return Accessibility;
}());
exports.Accessibility = Accessibility;
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Button;
}(React.Component));
exports.Button = Button;
var Picker = (function (_super) {
    __extends(Picker, _super);
    function Picker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Picker;
}(React.Component));
exports.Picker = Picker;
var Component = (function (_super) {
    __extends(Component, _super);
    function Component() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Component;
}(React.Component));
exports.Component = Component;
var Image = (function (_super) {
    __extends(Image, _super);
    function Image() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Image;
}(React.Component));
exports.Image = Image;
var Clipboard = (function () {
    function Clipboard() {
    }
    return Clipboard;
}());
exports.Clipboard = Clipboard;
var Link = (function (_super) {
    __extends(Link, _super);
    function Link() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Link;
}(React.Component));
exports.Link = Link;
var Storage = (function () {
    function Storage() {
    }
    return Storage;
}());
exports.Storage = Storage;
var Location = (function () {
    function Location() {
    }
    return Location;
}());
exports.Location = Location;
var Navigator = (function (_super) {
    __extends(Navigator, _super);
    function Navigator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Navigator;
}(React.Component));
exports.Navigator = Navigator;
var DeviceNetworkType;
(function (DeviceNetworkType) {
    DeviceNetworkType[DeviceNetworkType["UNKNOWN"] = 0] = "UNKNOWN";
    DeviceNetworkType[DeviceNetworkType["NONE"] = 1] = "NONE";
    DeviceNetworkType[DeviceNetworkType["WIFI"] = 2] = "WIFI";
    DeviceNetworkType[DeviceNetworkType["MOBILE_2G"] = 3] = "MOBILE_2G";
    DeviceNetworkType[DeviceNetworkType["MOBILE_3G"] = 4] = "MOBILE_3G";
    DeviceNetworkType[DeviceNetworkType["MOBILE_4G"] = 5] = "MOBILE_4G";
})(DeviceNetworkType = exports.DeviceNetworkType || (exports.DeviceNetworkType = {}));
var Network = (function () {
    function Network() {
        this.connectivityChangedEvent = new SubscribableEvent.SubscribableEvent();
    }
    return Network;
}());
exports.Network = Network;
var Platform = (function () {
    function Platform() {
    }
    return Platform;
}());
exports.Platform = Platform;
var Input = (function () {
    function Input() {
        this.backButtonEvent = new SubscribableEvent.SubscribableEvent();
        this.keyDownEvent = new SubscribableEvent.SubscribableEvent();
        this.keyUpEvent = new SubscribableEvent.SubscribableEvent();
    }
    return Input;
}());
exports.Input = Input;
var ScrollView = (function (_super) {
    __extends(ScrollView, _super);
    function ScrollView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ScrollView;
}(React.Component));
exports.ScrollView = ScrollView;
var StatusBar = (function () {
    function StatusBar() {
    }
    return StatusBar;
}());
exports.StatusBar = StatusBar;
var Styles = (function () {
    function Styles() {
    }
    return Styles;
}());
exports.Styles = Styles;
var Text = (function (_super) {
    __extends(Text, _super);
    function Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Text;
}(React.Component));
exports.Text = Text;
var TextInput = (function (_super) {
    __extends(TextInput, _super);
    function TextInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TextInput;
}(React.Component));
exports.TextInput = TextInput;
var UserPresence = (function () {
    function UserPresence() {
        this.userPresenceChangedEvent = new SubscribableEvent.SubscribableEvent();
    }
    return UserPresence;
}());
exports.UserPresence = UserPresence;
var ViewBase = (function (_super) {
    __extends(ViewBase, _super);
    function ViewBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ViewBase;
}(React.Component));
exports.ViewBase = ViewBase;
var View = (function (_super) {
    __extends(View, _super);
    function View() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return View;
}(ViewBase));
exports.View = View;
var GestureView = (function (_super) {
    __extends(GestureView, _super);
    function GestureView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GestureView;
}(ViewBase));
exports.GestureView = GestureView;
var WebView = (function (_super) {
    __extends(WebView, _super);
    function WebView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WebView;
}(ViewBase));
exports.WebView = WebView;


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* lodashMini.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Import and re-export of part of the lodash module. This helps reduce bundle size.
*/

var assign = __webpack_require__(282);
exports.assign = assign;
var clone = __webpack_require__(126);
exports.clone = clone;
var cloneDeep = __webpack_require__(284);
exports.cloneDeep = cloneDeep;
var defer = __webpack_require__(288);
exports.defer = defer;
var each = __webpack_require__(289);
exports.each = each;
var endsWith = __webpack_require__(290);
exports.endsWith = endsWith;
var extend = __webpack_require__(291);
exports.extend = extend;
var filter = __webpack_require__(127);
exports.filter = filter;
var findIndex = __webpack_require__(292);
exports.findIndex = findIndex;
var findLast = __webpack_require__(293);
exports.findLast = findLast;
var flatten = __webpack_require__(128);
exports.flatten = flatten;
var get = __webpack_require__(129);
exports.get = get;
var isArray = __webpack_require__(4);
exports.isArray = isArray;
var isEmpty = __webpack_require__(297);
exports.isEmpty = isEmpty;
var isEqual = __webpack_require__(298);
exports.isEqual = isEqual;
var isNumber = __webpack_require__(299);
exports.isNumber = isNumber;
var isObject = __webpack_require__(7);
exports.isObject = isObject;
var kebabCase = __webpack_require__(300);
exports.kebabCase = kebabCase;
var keys = __webpack_require__(16);
exports.keys = keys;
var map = __webpack_require__(302);
exports.map = map;
var mapValues = __webpack_require__(303);
exports.mapValues = mapValues;
var max = __webpack_require__(304);
exports.max = max;
var memoize = __webpack_require__(132);
exports.memoize = memoize;
var merge = __webpack_require__(305);
exports.merge = merge;
var omit = __webpack_require__(308);
exports.omit = omit;
var remove = __webpack_require__(312);
exports.remove = remove;
var throttle = __webpack_require__(315);
exports.throttle = throttle;
var union = __webpack_require__(318);
exports.union = union;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Types.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Type definitions for ReactXP framework.
*/

var SubscribableEvent_1 = __webpack_require__(79);
exports.SubscribableEvent = SubscribableEvent_1.SubscribableEvent;
exports.SubscriptionToken = SubscribableEvent_1.SubscriptionToken;
var AnimatedValue = (function () {
    function AnimatedValue(val) {
        // No-op
    }
    return AnimatedValue;
}());
exports.AnimatedValue = AnimatedValue;
// Auto, Yes, No - iOS & Android.
// NoHideDescendants - iOS, Android, & Desktop.
var ImportantForAccessibility;
(function (ImportantForAccessibility) {
    ImportantForAccessibility[ImportantForAccessibility["Auto"] = 1] = "Auto";
    ImportantForAccessibility[ImportantForAccessibility["Yes"] = 2] = "Yes";
    ImportantForAccessibility[ImportantForAccessibility["No"] = 3] = "No";
    ImportantForAccessibility[ImportantForAccessibility["NoHideDescendants"] = 4] = "NoHideDescendants";
})(ImportantForAccessibility = exports.ImportantForAccessibility || (exports.ImportantForAccessibility = {}));
// Android & Desktop supported prop, which allows screen-reader to inform its users when a
// component has dynamically changed. For example, the content of an inApp toast.
var AccessibilityLiveRegion;
(function (AccessibilityLiveRegion) {
    AccessibilityLiveRegion[AccessibilityLiveRegion["None"] = 0] = "None";
    AccessibilityLiveRegion[AccessibilityLiveRegion["Polite"] = 1] = "Polite";
    AccessibilityLiveRegion[AccessibilityLiveRegion["Assertive"] = 2] = "Assertive";
})(AccessibilityLiveRegion = exports.AccessibilityLiveRegion || (exports.AccessibilityLiveRegion = {}));
// NOTE: This enum is organized based on priority of these traits (0 is the lowest),
// which can be assigned to an accessible object. On native, all traits are combined as
// a list. On desktop, trait with the maximum value is picked. Whenever you are adding
// a new trait add it in the right priority order in the list.
var AccessibilityTrait;
(function (AccessibilityTrait) {
    // Desktop and iOS.
    AccessibilityTrait[AccessibilityTrait["Summary"] = 0] = "Summary";
    AccessibilityTrait[AccessibilityTrait["Adjustable"] = 1] = "Adjustable";
    // Desktop, iOS, and Android.
    AccessibilityTrait[AccessibilityTrait["Button"] = 2] = "Button";
    AccessibilityTrait[AccessibilityTrait["Tab"] = 3] = "Tab";
    AccessibilityTrait[AccessibilityTrait["Selected"] = 4] = "Selected";
    // Android only.
    AccessibilityTrait[AccessibilityTrait["Radio_button_checked"] = 5] = "Radio_button_checked";
    AccessibilityTrait[AccessibilityTrait["Radio_button_unchecked"] = 6] = "Radio_button_unchecked";
    // iOS only.
    AccessibilityTrait[AccessibilityTrait["Link"] = 7] = "Link";
    AccessibilityTrait[AccessibilityTrait["Header"] = 8] = "Header";
    AccessibilityTrait[AccessibilityTrait["Search"] = 9] = "Search";
    AccessibilityTrait[AccessibilityTrait["Image"] = 10] = "Image";
    AccessibilityTrait[AccessibilityTrait["Plays"] = 11] = "Plays";
    AccessibilityTrait[AccessibilityTrait["Key"] = 12] = "Key";
    AccessibilityTrait[AccessibilityTrait["Text"] = 13] = "Text";
    AccessibilityTrait[AccessibilityTrait["Disabled"] = 14] = "Disabled";
    AccessibilityTrait[AccessibilityTrait["FrequentUpdates"] = 15] = "FrequentUpdates";
    AccessibilityTrait[AccessibilityTrait["StartsMedia"] = 16] = "StartsMedia";
    AccessibilityTrait[AccessibilityTrait["AllowsDirectInteraction"] = 17] = "AllowsDirectInteraction";
    AccessibilityTrait[AccessibilityTrait["PageTurn"] = 18] = "PageTurn";
    // Desktop only.
    AccessibilityTrait[AccessibilityTrait["Menu"] = 19] = "Menu";
    AccessibilityTrait[AccessibilityTrait["MenuItem"] = 20] = "MenuItem";
    AccessibilityTrait[AccessibilityTrait["MenuBar"] = 21] = "MenuBar";
    AccessibilityTrait[AccessibilityTrait["TabList"] = 22] = "TabList";
    AccessibilityTrait[AccessibilityTrait["List"] = 23] = "List";
    AccessibilityTrait[AccessibilityTrait["ListItem"] = 24] = "ListItem";
    AccessibilityTrait[AccessibilityTrait["ListBox"] = 25] = "ListBox";
    AccessibilityTrait[AccessibilityTrait["Group"] = 26] = "Group";
    AccessibilityTrait[AccessibilityTrait["CheckBox"] = 27] = "CheckBox";
    AccessibilityTrait[AccessibilityTrait["ComboBox"] = 28] = "ComboBox";
    AccessibilityTrait[AccessibilityTrait["Log"] = 29] = "Log";
    AccessibilityTrait[AccessibilityTrait["Status"] = 30] = "Status";
    AccessibilityTrait[AccessibilityTrait["Dialog"] = 31] = "Dialog";
    // Desktop & mobile. This is at the end because this
    // is the highest priority trait.
    AccessibilityTrait[AccessibilityTrait["None"] = 32] = "None";
})(AccessibilityTrait = exports.AccessibilityTrait || (exports.AccessibilityTrait = {}));
var GestureMouseCursor;
(function (GestureMouseCursor) {
    GestureMouseCursor[GestureMouseCursor["Default"] = 0] = "Default";
    GestureMouseCursor[GestureMouseCursor["Pointer"] = 1] = "Pointer";
    GestureMouseCursor[GestureMouseCursor["Grab"] = 2] = "Grab";
    GestureMouseCursor[GestureMouseCursor["Move"] = 3] = "Move";
})(GestureMouseCursor = exports.GestureMouseCursor || (exports.GestureMouseCursor = {}));
var PreferredPanGesture;
(function (PreferredPanGesture) {
    PreferredPanGesture[PreferredPanGesture["Horizontal"] = 0] = "Horizontal";
    PreferredPanGesture[PreferredPanGesture["Vertical"] = 1] = "Vertical";
})(PreferredPanGesture = exports.PreferredPanGesture || (exports.PreferredPanGesture = {}));
var WebViewSandboxMode;
(function (WebViewSandboxMode) {
    WebViewSandboxMode[WebViewSandboxMode["None"] = 0] = "None";
    WebViewSandboxMode[WebViewSandboxMode["AllowForms"] = 1] = "AllowForms";
    WebViewSandboxMode[WebViewSandboxMode["AllowModals"] = 2] = "AllowModals";
    WebViewSandboxMode[WebViewSandboxMode["AllowOrientationLock"] = 4] = "AllowOrientationLock";
    WebViewSandboxMode[WebViewSandboxMode["AllowPointerLock"] = 8] = "AllowPointerLock";
    WebViewSandboxMode[WebViewSandboxMode["AllowPopups"] = 16] = "AllowPopups";
    WebViewSandboxMode[WebViewSandboxMode["AllowPopupsToEscapeSandbox"] = 32] = "AllowPopupsToEscapeSandbox";
    WebViewSandboxMode[WebViewSandboxMode["AllowPresentation"] = 64] = "AllowPresentation";
    WebViewSandboxMode[WebViewSandboxMode["AllowSameOrigin"] = 128] = "AllowSameOrigin";
    WebViewSandboxMode[WebViewSandboxMode["AllowScripts"] = 256] = "AllowScripts";
    WebViewSandboxMode[WebViewSandboxMode["AllowTopNavigation"] = 512] = "AllowTopNavigation";
})(WebViewSandboxMode = exports.WebViewSandboxMode || (exports.WebViewSandboxMode = {}));
//
// Navigator
// ----------------------------------------------------------------------
var NavigatorSceneConfigType;
(function (NavigatorSceneConfigType) {
    NavigatorSceneConfigType[NavigatorSceneConfigType["FloatFromRight"] = 0] = "FloatFromRight";
    NavigatorSceneConfigType[NavigatorSceneConfigType["FloatFromLeft"] = 1] = "FloatFromLeft";
    NavigatorSceneConfigType[NavigatorSceneConfigType["FloatFromBottom"] = 2] = "FloatFromBottom";
    NavigatorSceneConfigType[NavigatorSceneConfigType["Fade"] = 3] = "Fade";
    NavigatorSceneConfigType[NavigatorSceneConfigType["FadeWithSlide"] = 4] = "FadeWithSlide";
})(NavigatorSceneConfigType = exports.NavigatorSceneConfigType || (exports.NavigatorSceneConfigType = {}));
//
// Location
// ----------------------------------------------------------------------
var LocationErrorType;
(function (LocationErrorType) {
    LocationErrorType[LocationErrorType["PermissionDenied"] = 1] = "PermissionDenied";
    LocationErrorType[LocationErrorType["PositionUnavailable"] = 2] = "PositionUnavailable";
    LocationErrorType[LocationErrorType["Timeout"] = 3] = "Timeout";
})(LocationErrorType = exports.LocationErrorType || (exports.LocationErrorType = {}));
//
// Animated
// ----------------------------------------------------------------------
var Animated;
(function (Animated) {
})(Animated = exports.Animated || (exports.Animated = {}));
var LinkingErrorCode;
(function (LinkingErrorCode) {
    LinkingErrorCode[LinkingErrorCode["NoAppFound"] = 0] = "NoAppFound";
    LinkingErrorCode[LinkingErrorCode["UnexpectedFailure"] = 1] = "UnexpectedFailure";
    LinkingErrorCode[LinkingErrorCode["Blocked"] = 2] = "Blocked";
    LinkingErrorCode[LinkingErrorCode["InitialUrlNotFound"] = 3] = "InitialUrlNotFound";
})(LinkingErrorCode = exports.LinkingErrorCode || (exports.LinkingErrorCode = {}));
//
// App
// ----------------------------------------------------------------------
var AppActivationState;
(function (AppActivationState) {
    AppActivationState[AppActivationState["Active"] = 1] = "Active";
    AppActivationState[AppActivationState["Background"] = 2] = "Background";
    AppActivationState[AppActivationState["Inactive"] = 3] = "Inactive";
    AppActivationState[AppActivationState["Extension"] = 4] = "Extension";
})(AppActivationState = exports.AppActivationState || (exports.AppActivationState = {}));


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Styles.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation of style functions.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = __webpack_require__(3);
var RX = __webpack_require__(1);
var StyleLeakDetector_1 = __webpack_require__(340);
var Styles = (function (_super) {
    __extends(Styles, _super);
    function Styles() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Use memoize to cache the result after the first call.
        _this._createDummyElement = _.memoize(function () {
            return document.createElement('testCss');
        });
        _this._getCssPropertyAliasesJsStyle = _.memoize(function () {
            var props = [
                'flex',
                'flexDirection',
                'alignItems',
                'justifyContent',
                'alignSelf',
                'alignContent',
                'transform',
                'transition',
                'animationDuration',
                'animationTimingFunction',
                'animationDirection',
                'animationDelay',
                'animationIterationCount',
                'animationName',
                'hyphens',
                'filter',
                'appRegion'
            ];
            var aliases = {};
            props.forEach(function (prop) {
                var alias = _this._getCssPropertyAlias(prop);
                if (prop !== alias) {
                    aliases[prop] = alias;
                }
            });
            return aliases;
        });
        _this.getCssPropertyAliasesCssStyle = memoize(function () {
            var jsStyleAliases = _this._getCssPropertyAliasesJsStyle();
            var aliases = {};
            _.each(_.keys(jsStyleAliases), function (prop) {
                aliases[prop] = _this._convertJsToCssStyle(jsStyleAliases[prop]);
            });
            return aliases;
        });
        return _this;
    }
    // Combines a set of styles
    Styles.prototype.combine = function (defaultStyle, ruleSet) {
        var combinedStyles = {};
        if (defaultStyle) {
            combinedStyles = _.extend(combinedStyles, defaultStyle);
        }
        if (ruleSet) {
            combinedStyles = _.extend.apply(_, [combinedStyles].concat(ruleSet));
        }
        if ((combinedStyles.marginLeft !== undefined || combinedStyles.marginRight !== undefined ||
            combinedStyles.marginTop !== undefined || combinedStyles.marginBottom !== undefined) &&
            combinedStyles.margin !== undefined) {
            console.error('Conflicting rules for margin specified.');
            delete combinedStyles.margin;
        }
        if ((combinedStyles.paddingLeft !== undefined || combinedStyles.paddingRight !== undefined ||
            combinedStyles.paddingTop !== undefined || combinedStyles.paddingBottom !== undefined) &&
            combinedStyles.padding !== undefined) {
            console.error('Conflicting rules for padding specified.');
            delete combinedStyles.padding;
        }
        if (combinedStyles.borderWidth ||
            combinedStyles.borderTopWidth || combinedStyles.borderRightWidth ||
            combinedStyles.borderBottomWidth || combinedStyles.borderLeftWidth) {
            // If the caller specified a non-zero border width
            // but no border color or style, set the defaults to
            // match those of React Native platforms.
            if (combinedStyles.borderColor === undefined) {
                combinedStyles.borderColor = 'black';
            }
            if (combinedStyles.borderStyle === undefined) {
                combinedStyles.borderStyle = 'solid';
            }
        }
        return combinedStyles;
    };
    // Creates opaque styles that can be used for View
    Styles.prototype.createViewStyle = function (ruleSet, cacheStyle) {
        if (cacheStyle === void 0) { cacheStyle = true; }
        return this._adaptStyles(ruleSet, cacheStyle);
    };
    // Creates opaque styles that can be used for View
    Styles.prototype.createAnimatedViewStyle = function (ruleSet) {
        return this._adaptStyles(ruleSet, false);
    };
    // Creates opaque styles that can be used for ScrollView
    Styles.prototype.createScrollViewStyle = function (ruleSet, cacheStyle) {
        if (cacheStyle === void 0) { cacheStyle = true; }
        return this._adaptStyles(ruleSet, cacheStyle);
    };
    // Creates opaque styles that can be used for Button
    Styles.prototype.createButtonStyle = function (ruleSet, cacheStyle) {
        if (cacheStyle === void 0) { cacheStyle = true; }
        return this._adaptStyles(ruleSet, cacheStyle);
    };
    // Creates opaque styles that can be used for WebView
    Styles.prototype.createWebViewStyle = function (ruleSet, cacheStyle) {
        if (cacheStyle === void 0) { cacheStyle = true; }
        return this._adaptStyles(ruleSet, cacheStyle);
    };
    // Creates opaque styles that can be used for Text
    Styles.prototype.createTextStyle = function (ruleSet, cacheStyle) {
        if (cacheStyle === void 0) { cacheStyle = true; }
        return this._adaptStyles(ruleSet, cacheStyle);
    };
    // Creates opaque styles that can be used for Text
    Styles.prototype.createAnimatedTextStyle = function (ruleSet) {
        return this._adaptStyles(ruleSet, false);
    };
    // Creates opaque styles that can be used for TextInput
    Styles.prototype.createTextInputStyle = function (ruleSet, cacheStyle) {
        if (cacheStyle === void 0) { cacheStyle = true; }
        return this._adaptStyles(ruleSet, cacheStyle);
    };
    // Creates opaque styles that can be used for TextInput
    Styles.prototype.createAnimatedTextInputStyle = function (ruleSet) {
        return this._adaptStyles(ruleSet, false);
    };
    // Creates opaque styles that can be used for Link
    Styles.prototype.createLinkStyle = function (ruleSet, cacheStyle) {
        if (cacheStyle === void 0) { cacheStyle = true; }
        return this._adaptStyles(ruleSet, cacheStyle);
    };
    // Creates opaque styles that can be used for Image
    Styles.prototype.createImageStyle = function (ruleSet, cacheStyle) {
        if (cacheStyle === void 0) { cacheStyle = true; }
        return this._adaptStyles(ruleSet, cacheStyle);
    };
    // Creates opaque styles that can be used for Image
    Styles.prototype.createAnimatedImageStyle = function (ruleSet) {
        return this._adaptStyles(ruleSet, false);
    };
    // Creates opaque styles that can be used for Picker
    Styles.prototype.createPickerStyle = function (ruleSet, cacheStyle) {
        if (cacheStyle === void 0) { cacheStyle = true; }
        return this._adaptStyles(ruleSet, cacheStyle);
    };
    // Returns the name of a CSS property or its alias. Returns null if the property is not supported.
    Styles.prototype._getCssPropertyAlias = function (name) {
        // If we're inside unit tests, document may not be defined yet. We don't need prefixes for tests
        if (typeof document === 'undefined') {
            return null;
        }
        var upperName = name.charAt(0).toUpperCase() + name.slice(1);
        var propsToTest = [name, upperName];
        propsToTest = propsToTest.concat(['Webkit', 'webkit', 'Moz', 'O', 'ms'].map(function (prefix) { return prefix + upperName; }));
        var testElement = this._createDummyElement();
        var styleObj = testElement.style;
        for (var i = 0; i < propsToTest.length; i++) {
            var prop = propsToTest[i];
            if (styleObj[prop] !== undefined) {
                return prop;
            }
        }
        return null;
    };
    // Converts a property from JavaScript style (camel-case) to CSS style (lowercase with hyphens).
    Styles.prototype._convertJsToCssStyle = function (prop) {
        var cssString = '';
        if (prop) {
            for (var i = 0; i < prop.length; i++) {
                var lowerChar = prop[i].toLowerCase();
                if (lowerChar === prop[i]) {
                    cssString += lowerChar;
                }
                else {
                    cssString += '-' + lowerChar;
                }
            }
        }
        return cssString;
    };
    Styles.prototype.getParentComponentName = function (component) {
        var parentConstructor;
        var internalInstance = component['_reactInternalInstance'];
        if (internalInstance && internalInstance._currentElement &&
            internalInstance._currentElement._owner && internalInstance._currentElement._owner._instance) {
            parentConstructor = internalInstance._currentElement._owner._instance.constructor;
        }
        if (!parentConstructor) {
            return '';
        }
        return parentConstructor.name ? parentConstructor.name : parentConstructor;
    };
    Styles.prototype._adaptStyles = function (def, validate) {
        if (validate) {
            StyleLeakDetector_1.default.detectLeaks(def);
        }
        // Expand composite types.
        if (def.font) {
            if (def.font.fontFamily !== undefined) {
                def.fontFamily = def.font.fontFamily;
            }
            if (def.font.fontWeight !== undefined) {
                def.fontWeight = def.font.fontWeight;
            }
            if (def.font.fontStyle !== undefined) {
                def.fontStyle = def.font.fontStyle;
            }
            delete def.font;
        }
        if (def.flex !== undefined) {
            var flexValue = def.flex;
            delete def.flex;
            if (flexValue > 0) {
                // p 1 auto
                def.flexGrow = flexValue;
                def.flexShrink = 1;
            }
            else if (flexValue < 0) {
                // 0 -n auto
                def.flexGrow = 0;
                def.flexShrink = -flexValue;
            }
            else {
                // 0 0 auto
                def.flexGrow = 0;
                def.flexShrink = 0;
            }
        }
        if (def.transform) {
            var transformStrings_1 = [];
            var animatedTransforms_1 = [];
            _.each(def.transform, function (t) {
                _.each(_.keys(t), function (key) {
                    // Animated transforms use AnimatedValue objects rather
                    // than strings. We need to store these separately.
                    if (typeof t[key] === 'object') {
                        animatedTransforms_1.push({ type: key, value: t[key] });
                    }
                    else {
                        var value = t[key].toString();
                        if (key.indexOf('rotate') === 0) {
                            value += 'deg';
                        }
                        else if (key.indexOf('translate') === 0) {
                            value += 'px';
                        }
                        transformStrings_1.push(key + '(' + value + ')');
                    }
                });
            });
            delete def.transform;
            if (transformStrings_1.length > 0) {
                def['transform'] = transformStrings_1.join(' ');
            }
            if (animatedTransforms_1.length > 0) {
                def['animatedTransform'] = animatedTransforms_1;
            }
        }
        if (def.shadowOffset !== undefined || def.shadowRadius !== undefined || def.shadowColor !== undefined) {
            var width = 0;
            var height = 0;
            var radius = 0;
            var color = 'black';
            if (def.shadowOffset !== undefined) {
                width = def.shadowOffset.width;
                height = def.shadowOffset.height;
                delete def.shadowOffset;
            }
            if (def.shadowRadius !== undefined) {
                radius = def.shadowRadius;
                delete def.shadowRadius;
            }
            if (def.shadowColor !== undefined) {
                color = def.shadowColor;
                delete def.shadowColor;
            }
            def['boxShadow'] = width + 'px ' + height + 'px ' + radius + 'px 0px ' + color;
        }
        // CSS (and React JS) support lineHeight defined as either a multiple of the font
        // size or a pixel count. The Types interface always uses a pixel count. We need to
        // convert to the string notation to make CSS happy.
        if (def.lineHeight !== undefined) {
            def['lineHeight'] = def.lineHeight + 'px';
        }
        // Add default border width if border style or some subset of border widths
        // were provided. Otherwise the browser will default to a two-pixel border.
        if (def.borderStyle || def.borderTopWidth || def.borderRightWidth || def.borderBottomWidth || def.borderLeftWidth) {
            if (def.borderWidth === undefined) {
                if (def.borderTopWidth === undefined) {
                    def.borderTopWidth = 0;
                }
                if (def.borderRightWidth === undefined) {
                    def.borderRightWidth = 0;
                }
                if (def.borderBottomWidth === undefined) {
                    def.borderBottomWidth = 0;
                }
                if (def.borderLeftWidth === undefined) {
                    def.borderLeftWidth = 0;
                }
            }
        }
        // CSS doesn't support vertical/horizontal margins or padding.
        if (def.marginVertical !== undefined) {
            def.marginTop = def.marginVertical;
            def.marginBottom = def.marginVertical;
            delete def.marginVertical;
        }
        if (def.marginHorizontal !== undefined) {
            def.marginLeft = def.marginHorizontal;
            def.marginRight = def.marginHorizontal;
            delete def.marginHorizontal;
        }
        if ((def.marginHorizontal !== undefined || def.marginVertical !== undefined ||
            def.marginLeft !== undefined || def.marginRight !== undefined ||
            def.marginTop !== undefined || def.marginBottom !== undefined) && def.margin !== undefined) {
            console.error('Conflicting rules for margin specified.');
            delete def.margin;
        }
        if (def.paddingVertical !== undefined) {
            def.paddingTop = def.paddingVertical;
            def.paddingBottom = def.paddingVertical;
            delete def.paddingVertical;
        }
        if (def.paddingHorizontal !== undefined) {
            def.paddingLeft = def.paddingHorizontal;
            def.paddingRight = def.paddingHorizontal;
            delete def.paddingHorizontal;
        }
        if ((def.paddingHorizontal !== undefined || def.paddingVertical !== undefined ||
            def.paddingLeft !== undefined || def.paddingRight !== undefined ||
            def.paddingTop !== undefined || def.paddingBottom !== undefined) && def.padding !== undefined) {
            console.error('Conflicting rules for padding specified.');
            delete def.padding;
        }
        // CSS doesn't support 'textDecorationLine'
        if (def.textDecorationLine !== undefined) {
            def['textDecoration'] = def.textDecorationLine;
            delete def.textDecorationLine;
        }
        // Add common aliases if necessary.
        var jsAliases = this._getCssPropertyAliasesJsStyle();
        for (var prop in jsAliases) {
            if (def[prop] !== undefined && jsAliases[prop]) {
                def[jsAliases[prop]] = def[prop];
            }
        }
        // Add IE-specific word wrap property.
        if (def.wordBreak === 'break-word') {
            def['wordWrap'] = 'break-word';
        }
        return def;
    };
    return Styles;
}(RX.Styles));
exports.Styles = Styles;
function memoize(func, resolver) {
    return _.memoize(func, resolver);
}
exports.memoize = memoize;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Styles();


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(113);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(76),
    isLength = __webpack_require__(77);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(204),
    baseMatchesProperty = __webpack_require__(205),
    identity = __webpack_require__(22),
    isArray = __webpack_require__(4),
    property = __webpack_require__(309);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(61),
    baseAssignValue = __webpack_require__(40);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(98),
    baseKeys = __webpack_require__(104),
    isArrayLike = __webpack_require__(11);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(21),
    getRawTag = __webpack_require__(241),
    objectToString = __webpack_require__(269);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(201),
    getValue = __webpack_require__(242);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {/**
 * SyncTasks.ts
 * Author: David de Regt
 * Copyright: Microsoft 2015
 *
 * A very simple promise library that resolves all promises synchronously instead of
 * kicking them back to the main ticking thread.  This affirmatively rejects the A+
 * standard for promises, and is used for a combination of performance (wrapping
 * things back to the main thread is really slow) and because indexeddb loses
 * context for its calls if you send them around the event loop and transactions
 * automatically close.
 */

Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    // If we catch exceptions in success/fail blocks, it silently falls back to the fail case of the outer promise.
    // If this is global variable is true, it will also spit out a console.error with the exception for debugging.
    exceptionsToConsole: true,
    // Whether or not to actually attempt to catch exceptions with try/catch blocks inside the resolution cases.
    // Disable this for debugging when you'd rather the debugger caught the exception synchronously rather than
    // digging through a stack trace.
    catchExceptions: true,
    // Use this option in order to debug double resolution asserts locally.
    // Enabling this option in the release would have a negative impact on the application performance.
    traceEnabled: false,
    exceptionHandler: null,
    // If an ErrorFunc is not added to the task (then, catch, always) before the task rejects or synchonously
    // after that, then this function is called with the error. Default throws the error.
    unhandledErrorHandler: (function (err) { throw err; })
};
function fromThenable(thenable) {
    var deferred = Defer();
    // NOTE: The {} around the error handling is critical to ensure that
    // we do not trigger "Possible unhandled rejection" warnings. By adding
    // the braces, the error handler rejects the outer promise, but returns
    // void. If we remove the braces, it would *also* return something which
    // would be unhandled
    thenable.then(function (value) { deferred.resolve(value); return undefined; }, function (err) { deferred.reject(err); });
    return deferred.promise();
}
exports.fromThenable = fromThenable;
function isThenable(object) {
    return object !== null && object !== void 0 && typeof object.then === 'function';
}
function isCancelable(object) {
    return object !== null && object !== void 0 && typeof object.cancel === 'function';
}
// Runs trier(). If config.catchExceptions is set then any exception is caught and handed to catcher.
function run(trier, catcher) {
    if (exports.config.catchExceptions) {
        // Any try/catch/finally block in a function makes the entire function ineligible for optimization is most JS engines.
        // Make sure this stays in a small/quick function, or break out into its own function.
        try {
            return trier();
        }
        catch (e) {
            return catcher(e);
        }
    }
    else {
        return trier();
    }
}
var asyncCallbacks = [];
// Ideally, we use setImmediate, but that's only supported on some environments.
// Suggestion: Use the "setimmediate" NPM package to polyfill where it's not available.
var useSetImmediate = typeof setImmediate !== 'undefined';
/**
 * This function will defer callback of the specified callback lambda until the next JS tick, simulating standard A+ promise behavior
 */
function asyncCallback(callback) {
    asyncCallbacks.push(callback);
    if (asyncCallbacks.length === 1) {
        // Start a callback for the next tick
        if (useSetImmediate) {
            setImmediate(resolveAsyncCallbacks);
        }
        else {
            setTimeout(resolveAsyncCallbacks, 0);
        }
    }
}
exports.asyncCallback = asyncCallback;
function resolveAsyncCallbacks() {
    var savedCallbacks = asyncCallbacks;
    asyncCallbacks = [];
    for (var i = 0; i < savedCallbacks.length; i++) {
        savedCallbacks[i]();
    }
}
function Defer() {
    return new Internal.SyncTask();
}
exports.Defer = Defer;
function Resolved(val) {
    return new Internal.SyncTask().resolve(val).promise();
}
exports.Resolved = Resolved;
function Rejected(val) {
    return new Internal.SyncTask().reject(val).promise();
}
exports.Rejected = Rejected;
var Internal;
(function (Internal) {
    var SyncTask = (function () {
        function SyncTask() {
            this._completedSuccess = false;
            this._completedFail = false;
            this._traceEnabled = false;
            this._cancelCallbacks = [];
            this._wasCanceled = false;
            this._resolving = false;
            this._storedCallbackSets = [];
            // 'Handled' just means there was a callback set added.
            // Note: If that callback does not handle the error then that callback's task will be 'unhandled' instead of this one.
            this._mustHandleError = true;
        }
        SyncTask.prototype._addCallbackSet = function (set, callbackWillChain) {
            var _this = this;
            var task = new SyncTask();
            task.onCancel(function (context) {
                set.wasCanceled = true;
                set.cancelContext = context;
                _this.cancel(context);
            });
            set.task = task;
            this._storedCallbackSets.push(set);
            if (callbackWillChain) {
                // The callback inherits responsibility for "handling" errors.
                this._mustHandleError = false;
            }
            else {
                // The callback can never "handle" errors since nothing can chain to it.
                task._mustHandleError = false;
            }
            // The _resolve* functions handle callbacks being added while they are running.
            if (!this._resolving) {
                if (this._completedSuccess) {
                    this._resolveSuccesses();
                }
                else if (this._completedFail) {
                    this._resolveFailures();
                }
            }
            return task.promise();
        };
        SyncTask.prototype.onCancel = function (callback) {
            // Only register cancel callback handler on promise that hasn't been completed
            if (!this._completedSuccess && !this._completedFail) {
                if (this._wasCanceled) {
                    callback(this._cancelContext);
                }
                else {
                    this._cancelCallbacks.push(callback);
                }
            }
            return this;
        };
        SyncTask.prototype.then = function (successFunc, errorFunc) {
            return this._addCallbackSet({
                successFunc: successFunc,
                failFunc: errorFunc
            }, true);
        };
        SyncTask.prototype.thenAsync = function (successFunc, errorFunc) {
            return this._addCallbackSet({
                successFunc: successFunc,
                failFunc: errorFunc,
                asyncCallback: true
            }, true);
        };
        SyncTask.prototype.catch = function (errorFunc) {
            return this._addCallbackSet({
                failFunc: errorFunc
            }, true);
        };
        SyncTask.prototype.always = function (func) {
            return this._addCallbackSet({
                successFunc: func,
                failFunc: func
            }, true);
        };
        SyncTask.prototype.setTracingEnabled = function (enabled) {
            this._traceEnabled = enabled;
            return this;
        };
        // Finally should let you inspect the value of the promise as it passes through without affecting the then chaining
        // i.e. a failed promise with a finally after it should then chain to the fail case of the next then
        SyncTask.prototype.finally = function (func) {
            this._addCallbackSet({
                successFunc: func,
                failFunc: func
            }, false);
            return this;
        };
        SyncTask.prototype.done = function (successFunc) {
            this._addCallbackSet({
                successFunc: successFunc
            }, false);
            return this;
        };
        SyncTask.prototype.fail = function (errorFunc) {
            this._addCallbackSet({
                failFunc: errorFunc
            }, false);
            return this;
        };
        SyncTask.prototype.resolve = function (obj) {
            this._checkState(true);
            this._completedSuccess = true;
            this._storedResolution = obj;
            this._resolveSuccesses();
            return this;
        };
        SyncTask.prototype.reject = function (obj) {
            this._checkState(false);
            this._completedFail = true;
            this._storedErrResolution = obj;
            this._resolveFailures();
            SyncTask._enforceErrorHandled(this);
            return this;
        };
        SyncTask.prototype._checkState = function (resolve) {
            if (this._completedSuccess || this._completedFail) {
                if (this._completeStack) {
                    console.error(this._completeStack.message, this._completeStack.stack);
                }
                var message = 'Failed to ' + (resolve ? 'resolve' : 'reject') +
                    ': the task is already ' + (this._completedSuccess ? 'resolved' : 'rejected');
                throw new Error(message);
            }
            if (exports.config.traceEnabled || this._traceEnabled) {
                this._completeStack = new Error( true ? 'resolve' : 'reject');
            }
        };
        // Make sure any rejected task has its failured handled.
        SyncTask._enforceErrorHandled = function (task) {
            if (!task._mustHandleError) {
                return;
            }
            SyncTask._rejectedTasks.push(task);
            // Wait for some async time in the future to check these tasks.
            if (!SyncTask._enforceErrorHandledTimer) {
                SyncTask._enforceErrorHandledTimer = setTimeout(function () {
                    SyncTask._enforceErrorHandledTimer = null;
                    var rejectedTasks = SyncTask._rejectedTasks;
                    SyncTask._rejectedTasks = [];
                    rejectedTasks.forEach(function (rejectedTask, i) {
                        if (rejectedTask._mustHandleError) {
                            // Unhandled!
                            exports.config.unhandledErrorHandler(rejectedTask._storedErrResolution);
                        }
                    });
                }, 0);
            }
        };
        SyncTask.prototype.cancel = function (context) {
            var _this = this;
            if (this._wasCanceled) {
                throw new Error('Already Canceled');
            }
            this._wasCanceled = true;
            this._cancelContext = context;
            if (this._cancelCallbacks.length > 0) {
                this._cancelCallbacks.forEach(function (callback) {
                    if (!_this._completedSuccess && !_this._completedFail) {
                        callback(_this._cancelContext);
                    }
                });
            }
        };
        SyncTask.prototype.promise = function () {
            return this;
        };
        SyncTask.prototype._resolveSuccesses = function () {
            var _this = this;
            this._resolving = true;
            // New callbacks can be added as the current callbacks run: use a loop to get through all of them.
            while (this._storedCallbackSets.length) {
                // Only iterate over the current list of callbacks.
                var callbacks = this._storedCallbackSets;
                this._storedCallbackSets = [];
                callbacks.forEach(function (callback) {
                    if (callback.asyncCallback) {
                        asyncCallback(function () { return _this._resolveCallback(callback); });
                    }
                    else {
                        _this._resolveCallback(callback);
                    }
                });
            }
            this._resolving = false;
        };
        SyncTask.prototype._resolveCallback = function (callback) {
            var _this = this;
            if (callback.successFunc) {
                run(function () {
                    var ret = callback.successFunc(_this._storedResolution);
                    if (isCancelable(ret)) {
                        if (callback.wasCanceled) {
                            ret.cancel(callback.cancelContext);
                        }
                        else {
                            callback.task.onCancel(function (context) { return ret.cancel(context); });
                        }
                        // Note: don't care if ret is canceled. We don't need to bubble out since this is already resolved.
                    }
                    if (isThenable(ret)) {
                        // The success block of a then returned a new promise, so
                        ret.then(function (r) { callback.task.resolve(r); }, function (e) { callback.task.reject(e); });
                    }
                    else {
                        callback.task.resolve(ret);
                    }
                }, function (e) {
                    _this._handleException(e, 'SyncTask caught exception in success block: ' + e.toString());
                    callback.task.reject(e);
                });
            }
            else {
                callback.task.resolve(this._storedResolution);
            }
        };
        SyncTask.prototype._resolveFailures = function () {
            var _this = this;
            this._resolving = true;
            // New callbacks can be added as the current callbacks run: use a loop to get through all of them.
            while (this._storedCallbackSets.length) {
                // Only iterate over the current list of callbacks.
                var callbacks = this._storedCallbackSets;
                this._storedCallbackSets = [];
                callbacks.forEach(function (callback) {
                    if (callback.failFunc) {
                        run(function () {
                            var ret = callback.failFunc(_this._storedErrResolution);
                            if (isCancelable(ret)) {
                                if (callback.wasCanceled) {
                                    ret.cancel(callback.cancelContext);
                                }
                                else {
                                    callback.task.onCancel(function (context) { return ret.cancel(context); });
                                }
                                // Note: don't care if ret is canceled. We don't need to bubble out since this is already rejected.
                            }
                            if (isThenable(ret)) {
                                ret.then(function (r) { callback.task.resolve(r); }, function (e) { callback.task.reject(e); });
                            }
                            else {
                                // The failure has been handled: ret is the resolved value.
                                callback.task.resolve(ret);
                            }
                        }, function (e) {
                            _this._handleException(e, 'SyncTask caught exception in failure block: ' + e.toString());
                            callback.task.reject(e);
                        });
                    }
                    else {
                        callback.task.reject(_this._storedErrResolution);
                    }
                });
            }
            this._resolving = false;
        };
        SyncTask.prototype._handleException = function (e, message) {
            if (exports.config.exceptionsToConsole) {
                console.error(message);
            }
            if (exports.config.exceptionHandler) {
                exports.config.exceptionHandler(e);
            }
        };
        return SyncTask;
    }());
    SyncTask._rejectedTasks = [];
    SyncTask._enforceErrorHandledTimer = null;
    Internal.SyncTask = SyncTask;
})(Internal || (Internal = {}));
function all(items) {
    if (items.length === 0) {
        return Resolved([]);
    }
    var outTask = Defer();
    var countRemaining = items.length;
    var foundError = null;
    var results = Array(items.length);
    outTask.onCancel(function (val) {
        items.forEach(function (item) {
            if (isCancelable(item)) {
                item.cancel(val);
            }
        });
    });
    var checkFinish = function () {
        if (--countRemaining === 0) {
            if (foundError !== null) {
                outTask.reject(foundError);
            }
            else {
                outTask.resolve(results);
            }
        }
    };
    items.forEach(function (item, index) {
        if (isThenable(item)) {
            var task = item;
            task.then(function (res) {
                results[index] = res;
                checkFinish();
            }, function (err) {
                if (foundError === null) {
                    foundError = (err !== null) ? err : true;
                }
                checkFinish();
            });
        }
        else {
            // Not a task, so resolve directly with the item
            results[index] = item;
            checkFinish();
        }
    });
    return outTask.promise();
}
exports.all = all;
function race(items) {
    var outTask = Defer();
    var hasSettled = false;
    outTask.onCancel(function (val) {
        items.forEach(function (item) {
            if (isCancelable(item)) {
                item.cancel(val);
            }
        });
    });
    items.forEach(function (item) {
        if (isThenable(item)) {
            var task = item;
            task.then(function (res) {
                if (!hasSettled) {
                    hasSettled = true;
                    outTask.resolve(res);
                }
            }, function (err) {
                if (!hasSettled) {
                    hasSettled = true;
                    outTask.reject(err);
                }
            });
        }
        else {
            // Not a task, so resolve directly with the item
            if (!hasSettled) {
                hasSettled = true;
                outTask.resolve(item);
            }
        }
    });
    return outTask.promise();
}
exports.race = race;
function raceTimer(promise, timeMs) {
    var timerDef = Defer();
    var token = setTimeout(function () {
        timerDef.resolve({ timedOut: true });
    }, timeMs);
    var adaptedPromise = promise.then(function (resp) {
        clearTimeout(token);
        return { timedOut: false, result: resp };
    });
    return race([adaptedPromise, timerDef.promise()]);
}
exports.raceTimer = raceTimer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(87).setImmediate))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(10);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(17),
    isObjectLike = __webpack_require__(15);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(328)();
}


/***/ }),
/* 25 */,
/* 26 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(22),
    overRest = __webpack_require__(123),
    setToString = __webpack_require__(124);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(23);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(197),
    isObjectLike = __webpack_require__(15);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(10),
    stubFalse = __webpack_require__(314);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(53)(module)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(98),
    baseKeysIn = __webpack_require__(203),
    isArrayLike = __webpack_require__(11);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* FocusManager.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Manages focusable elements for better keyboard navigation.
*/

var ReactDOM = __webpack_require__(0);
var PropTypes = __webpack_require__(24);
var _lastComponentId = 0;
var FocusManager = (function () {
    function FocusManager(parent) {
        this._myFocusableComponentIds = {};
        if (parent) {
            this._parent = parent;
        }
        else if (FocusManager._rootFocusManager) {
            console.error('FocusManager: root is already set');
        }
        else {
            FocusManager._rootFocusManager = this;
        }
    }
    // Whenever the focusable element is mounted, we let the application
    // know so that FocusManager could account for this element during the
    // focus restriction.
    FocusManager.prototype.addFocusableComponent = function (component) {
        if (component._focusableComponentId) {
            return;
        }
        var componentId = 'fc-' + ++_lastComponentId;
        var storedComponent = {
            component: component,
            restricted: false,
            limitedCount: 0,
            onFocus: function () {
                FocusManager._currentFocusedComponent = storedComponent;
            }
        };
        component._focusableComponentId = componentId;
        FocusManager._allFocusableComponents[componentId] = storedComponent;
        var withinRestrictionOwner = false;
        for (var parent_1 = this; parent_1; parent_1 = parent_1._parent) {
            parent_1._myFocusableComponentIds[componentId] = true;
            if (FocusManager._currentRestrictionOwner === parent_1) {
                withinRestrictionOwner = true;
            }
            if (parent_1._isFocusLimited) {
                storedComponent.limitedCount++;
            }
        }
        if (!withinRestrictionOwner && FocusManager._currentRestrictionOwner) {
            storedComponent.restricted = true;
        }
        FocusManager._updateComponentFocusRestriction(storedComponent);
        var el = ReactDOM.findDOMNode(component);
        if (el) {
            el.addEventListener('focus', storedComponent.onFocus);
        }
    };
    FocusManager.prototype.removeFocusableComponent = function (component) {
        var componentId = component._focusableComponentId;
        if (componentId) {
            var storedComponent = FocusManager._allFocusableComponents[componentId];
            var el = ReactDOM.findDOMNode(component);
            if (storedComponent && el) {
                el.removeEventListener('focus', storedComponent.onFocus);
            }
            storedComponent.removed = true;
            storedComponent.restricted = false;
            storedComponent.limitedCount = 0;
            FocusManager._updateComponentFocusRestriction(storedComponent);
            delete storedComponent.callbacks;
            for (var parent_2 = this; parent_2; parent_2 = parent_2._parent) {
                delete parent_2._myFocusableComponentIds[componentId];
            }
            delete FocusManager._allFocusableComponents[componentId];
            delete component._focusableComponentId;
        }
    };
    FocusManager.prototype.restrictFocusWithin = function () {
        var _this = this;
        // Limit the focus received by the keyboard navigation to all
        // the descendant focusable elements by setting tabIndex of all
        // other elements to -1.
        if (FocusManager._currentRestrictionOwner === this) {
            return;
        }
        if (FocusManager._currentRestrictionOwner) {
            FocusManager._removeFocusRestriction();
        }
        FocusManager._restrictionStack.push(this);
        FocusManager._currentRestrictionOwner = this;
        this._prevFocusedComponent = FocusManager._currentFocusedComponent;
        if (this._prevFocusedComponent && !this._prevFocusedComponent.removed) {
            var el = ReactDOM.findDOMNode(this._prevFocusedComponent.component);
            if (el && el.blur) {
                el.blur();
            }
        }
        Object.keys(FocusManager._allFocusableComponents).forEach(function (componentId) {
            if (!(componentId in _this._myFocusableComponentIds)) {
                var storedComponent = FocusManager._allFocusableComponents[componentId];
                storedComponent.restricted = true;
                FocusManager._updateComponentFocusRestriction(storedComponent);
            }
        });
    };
    FocusManager.prototype.removeFocusRestriction = function () {
        var _this = this;
        // Restore the focus to the previous view with restrictFocusWithin or
        // remove the restriction if there is no such view.
        FocusManager._restrictionStack = FocusManager._restrictionStack.filter(function (focusManager) {
            return focusManager !== _this;
        });
        var prevFocusedComponent = this._prevFocusedComponent;
        delete this._prevFocusedComponent;
        if (FocusManager._currentRestrictionOwner === this) {
            FocusManager._removeFocusRestriction();
            var prevRestrictionOwner = FocusManager._restrictionStack.pop();
            FocusManager._currentRestrictionOwner = undefined;
            if (prevRestrictionOwner) {
                prevRestrictionOwner.restrictFocusWithin();
            }
            // If possible, focus the element which was focused before the restriction.
            if (prevFocusedComponent && !prevFocusedComponent.removed &&
                !prevFocusedComponent.restricted && !prevFocusedComponent.limitedCount) {
                var el = ReactDOM.findDOMNode(prevFocusedComponent.component);
                if (el && el.focus) {
                    el.focus();
                }
            }
        }
    };
    FocusManager.prototype.limitFocusWithin = function () {
        if (this._isFocusLimited) {
            return;
        }
        this._isFocusLimited = true;
        Object.keys(this._myFocusableComponentIds).forEach(function (componentId) {
            var storedComponent = FocusManager._allFocusableComponents[componentId];
            storedComponent.limitedCount++;
            FocusManager._updateComponentFocusRestriction(storedComponent);
        });
    };
    FocusManager.prototype.removeFocusLimitation = function () {
        if (!this._isFocusLimited) {
            return;
        }
        Object.keys(this._myFocusableComponentIds).forEach(function (componentId) {
            var storedComponent = FocusManager._allFocusableComponents[componentId];
            storedComponent.limitedCount--;
            FocusManager._updateComponentFocusRestriction(storedComponent);
        });
        this._isFocusLimited = false;
    };
    FocusManager.prototype.release = function () {
        this.removeFocusRestriction();
        this.removeFocusLimitation();
    };
    FocusManager.prototype.subscribe = function (component, callback) {
        var storedComponent = FocusManager._getStoredComponent(component);
        if (storedComponent) {
            if (!storedComponent.callbacks) {
                storedComponent.callbacks = [];
            }
            storedComponent.callbacks.push(callback);
        }
    };
    FocusManager.prototype.unsubscribe = function (component, callback) {
        var storedComponent = FocusManager._getStoredComponent(component);
        if (storedComponent && storedComponent.callbacks) {
            storedComponent.callbacks = storedComponent.callbacks.filter(function (cb) {
                return cb !== callback;
            });
        }
    };
    FocusManager.prototype.isComponentFocusRestrictedOrLimited = function (component) {
        var storedComponent = FocusManager._getStoredComponent(component);
        return storedComponent && (storedComponent.restricted || storedComponent.limitedCount > 0);
    };
    FocusManager._getStoredComponent = function (component) {
        var componentId = component._focusableComponentId;
        if (componentId) {
            return FocusManager._allFocusableComponents[componentId];
        }
        return null;
    };
    FocusManager._callFocusableComponentStateChangeCallbacks = function (storedComponent, restrictedOrLimited) {
        if (!storedComponent.callbacks) {
            return;
        }
        storedComponent.callbacks.forEach(function (callback) {
            callback.call(storedComponent.component, restrictedOrLimited);
        });
    };
    FocusManager._removeFocusRestriction = function () {
        Object.keys(FocusManager._allFocusableComponents).forEach(function (componentId) {
            var storedComponent = FocusManager._allFocusableComponents[componentId];
            storedComponent.restricted = false;
            FocusManager._updateComponentFocusRestriction(storedComponent);
        });
    };
    FocusManager._setTabIndex = function (component, value) {
        var el = ReactDOM.findDOMNode(component);
        if (el) {
            var prev = el.hasAttribute('tabindex') ? el.tabIndex : undefined;
            if (value === undefined) {
                if (prev !== undefined) {
                    el.removeAttribute('tabindex');
                }
            }
            else {
                el.tabIndex = value;
            }
            return prev;
        }
        return null;
    };
    FocusManager._updateComponentFocusRestriction = function (storedComponent) {
        if ((storedComponent.restricted || (storedComponent.limitedCount > 0)) && !('origTabIndex' in storedComponent)) {
            storedComponent.origTabIndex = FocusManager._setTabIndex(storedComponent.component, -1);
            FocusManager._callFocusableComponentStateChangeCallbacks(storedComponent, true);
        }
        else if (!storedComponent.restricted && !storedComponent.limitedCount && ('origTabIndex' in storedComponent)) {
            FocusManager._setTabIndex(storedComponent.component, storedComponent.origTabIndex);
            delete storedComponent.origTabIndex;
            FocusManager._callFocusableComponentStateChangeCallbacks(storedComponent, false);
        }
    };
    return FocusManager;
}());
FocusManager._restrictionStack = [];
FocusManager._allFocusableComponents = {};
exports.FocusManager = FocusManager;
// A mixin for the focusable elements, to tell the views that
// they exist and should be accounted during the focus restriction.
//
// isConditionallyFocusable is an optional callback which will be
// called for componentDidMount() or for componentWillUpdate() to
// determine if the component is actually focusable.
function applyFocusableComponentMixin(Component, isConditionallyFocusable) {
    var contextTypes = Component.contextTypes || {};
    contextTypes.focusManager = PropTypes.object;
    Component.contextTypes = contextTypes;
    inheritMethod('componentDidMount', function (focusManager) {
        if (!isConditionallyFocusable || isConditionallyFocusable.call(this)) {
            focusManager.addFocusableComponent(this);
        }
    });
    inheritMethod('componentWillUnmount', function (focusManager) {
        focusManager.removeFocusableComponent(this);
    });
    inheritMethod('componentWillUpdate', function (focusManager, origArguments) {
        if (isConditionallyFocusable) {
            var isFocusable = isConditionallyFocusable.apply(this, origArguments);
            if (isFocusable && !this._focusableComponentId) {
                focusManager.addFocusableComponent(this);
            }
            else if (!isFocusable && this._focusableComponentId) {
                focusManager.removeFocusableComponent(this);
            }
        }
    });
    function inheritMethod(methodName, action) {
        var origCallback = Component.prototype[methodName];
        Component.prototype[methodName] = function () {
            var focusManager = this._focusManager || (this.context && this.context.focusManager);
            if (focusManager) {
                action.call(this, focusManager, arguments);
            }
            else {
                console.error('FocusableComponentMixin: context error!');
            }
            if (origCallback) {
                origCallback.apply(this, arguments);
            }
        };
    }
}
exports.applyFocusableComponentMixin = applyFocusableComponentMixin;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FocusManager;


/***/ }),
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(255),
    listCacheDelete = __webpack_require__(256),
    listCacheGet = __webpack_require__(257),
    listCacheHas = __webpack_require__(258),
    listCacheSet = __webpack_require__(259);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(37),
    stackClear = __webpack_require__(274),
    stackDelete = __webpack_require__(275),
    stackGet = __webpack_require__(276),
    stackHas = __webpack_require__(277),
    stackSet = __webpack_require__(278);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(30);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(111);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(4),
    isKey = __webpack_require__(75),
    stringToPath = __webpack_require__(280),
    toString = __webpack_require__(47);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(253);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(18);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(202),
    baseUnary = __webpack_require__(68),
    nodeUtil = __webpack_require__(268);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(106);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* AccessibilityUtil.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation of accessiblity functions for cross-platform
* ReactXP framework.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = __webpack_require__(3);
var AccessibilityUtil_1 = __webpack_require__(335);
var Types = __webpack_require__(6);
// Map of accessibility trait to an aria role attribute.  
// What's a role attribute? https://www.w3.org/wiki/PF/XTech/HTML5/RoleAttribute
var roleMap = (_a = {},
    _a[Types.AccessibilityTrait.None] = 'presentation',
    _a[Types.AccessibilityTrait.Button] = 'button',
    _a[Types.AccessibilityTrait.Link] = 'link',
    _a[Types.AccessibilityTrait.Header] = 'heading',
    _a[Types.AccessibilityTrait.Search] = 'search',
    _a[Types.AccessibilityTrait.Image] = 'img',
    _a[Types.AccessibilityTrait.Summary] = 'region',
    _a[Types.AccessibilityTrait.Adjustable] = 'slider',
    _a[Types.AccessibilityTrait.Menu] = 'menu',
    _a[Types.AccessibilityTrait.MenuItem] = 'menuitem',
    _a[Types.AccessibilityTrait.MenuBar] = 'menubar',
    _a[Types.AccessibilityTrait.Tab] = 'tab',
    _a[Types.AccessibilityTrait.TabList] = 'tablist',
    _a[Types.AccessibilityTrait.List] = 'list',
    _a[Types.AccessibilityTrait.ListItem] = 'listitem',
    _a[Types.AccessibilityTrait.ListBox] = 'listbox',
    _a[Types.AccessibilityTrait.Group] = 'group',
    _a[Types.AccessibilityTrait.CheckBox] = 'checkbox',
    _a[Types.AccessibilityTrait.ComboBox] = 'combobox',
    _a[Types.AccessibilityTrait.Log] = 'log',
    _a[Types.AccessibilityTrait.Status] = 'status',
    _a[Types.AccessibilityTrait.Dialog] = 'dialog',
    _a);
// Map of accesssibility live region to an aria-live property.
var liveRegionMap = (_b = {},
    _b[Types.AccessibilityLiveRegion.None] = 'off',
    _b[Types.AccessibilityLiveRegion.Assertive] = 'assertive',
    _b[Types.AccessibilityLiveRegion.Polite] = 'polite',
    _b);
var AccessibilityUtil = (function (_super) {
    __extends(AccessibilityUtil, _super);
    function AccessibilityUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Web equivalent value for aria-live property.
    AccessibilityUtil.prototype.accessibilityLiveRegionToString = function (liveRegion) {
        if (liveRegion) {
            return liveRegionMap[liveRegion];
        }
        return undefined;
    };
    // Web equivalent value for role property. 
    // NOTE: Web only supports a single aria-role on a component.
    AccessibilityUtil.prototype.accessibilityTraitToString = function (traits, defaultTrait) {
        // Combine & remove duplicate traits.
        var combinedTraits = defaultTrait ? [defaultTrait] : [];
        if (traits) {
            combinedTraits = _.union(combinedTraits, _.isArray(traits) ? traits : [traits]);
        }
        // Max enum value in this array of traits is role for web. Return corresponding
        // role string from roleMap.
        return combinedTraits.length > 0 ?
            roleMap[_.max(_.filter(combinedTraits, function (t) { return roleMap.hasOwnProperty(t); }))]
            : undefined;
    };
    AccessibilityUtil.prototype.accessibilityTraitToAriaSelected = function (traits) {
        // Walk through each trait and check if there's a selected trait. Return if one is found.
        if (traits && _.isArray(traits) && traits.indexOf(Types.AccessibilityTrait.Tab) !== -1) {
            return traits.indexOf(Types.AccessibilityTrait.Selected) !== -1 ? true : undefined;
        }
        // Here we are returning undefined if the above condtion is not met 
        // as we dont want to pollute the dom with "aria-selected = false" for every falsy condition
        return undefined;
    };
    return AccessibilityUtil;
}(AccessibilityUtil_1.AccessibilityUtil));
exports.AccessibilityUtil = AccessibilityUtil;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new AccessibilityUtil();
var _a, _b;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* View.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation of the cross-platform View abstraction.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(0);
var PropTypes = __webpack_require__(24);
var AccessibilityUtil_1 = __webpack_require__(50);
var AnimateListEdits_1 = __webpack_require__(367);
var restyleForInlineText = __webpack_require__(147);
var Styles_1 = __webpack_require__(8);
var ViewBase_1 = __webpack_require__(82);
var FocusManager_1 = __webpack_require__(34);
var _styles = {
    defaultStyle: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 0,
        flexShrink: 0,
        overflow: 'hidden',
        alignItems: 'stretch'
    },
    // See resize detector comments in renderResizeDetectorIfNeeded() method below.
    resizeDetectorContainerStyles: {
        position: 'absolute',
        left: '0',
        top: '0',
        right: '0',
        bottom: '0',
        overflow: 'scroll',
        zIndex: '-1',
        visibility: 'hidden'
    },
    resizeGrowDetectorStyles: {
        position: 'absolute',
        left: '100500px',
        top: '100500px',
        width: '1px',
        height: '1px'
    },
    resizeShrinkDetectorStyles: {
        position: 'absolute',
        width: '150%',
        height: '150%'
    }
};
if (typeof document !== 'undefined') {
    var ignorePointerEvents = '.reactxp-ignore-pointer-events  * { pointer-events: auto; }';
    var head = document.head;
    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(ignorePointerEvents));
    head.appendChild(style);
}
var View = (function (_super) {
    __extends(View, _super);
    function View(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this._resizeDetectorNodes = {};
        if (props.restrictFocusWithin || props.limitFocusWithin) {
            _this._focusManager = new FocusManager_1.FocusManager(context && context.focusManager);
            if (props.limitFocusWithin) {
                _this.setFocusLimited(true);
            }
        }
        return _this;
    }
    View.prototype._renderResizeDetectorIfNeeded = function (containerStyles) {
        // If needed, additional invisible DOM elements will be added inside the
        // view to track the size changes that are performed behind our back by
        // the browser's layout engine faster (ViewBase checks for the layout
        // updates once a second and sometimes it's not fast enough).
        var _this = this;
        // Unfortunately <div> doesn't have `resize` event, so we're trying to
        // detect the fact that the view has been resized with `scroll` events.
        // To do that, we create two scrollable <div>s and we put them into a
        // state in which `scroll` event is triggered by the browser when the
        // container gets resized (one element triggers `scroll` when the
        // container gets bigger, another triggers `scroll` when the container
        // gets smaller).
        if (!this.props.importantForLayout) {
            return null;
        }
        if (containerStyles.position !== 'relative') {
            console.error('View: importantForLayout property is applicable only for a view with relative position');
            return null;
        }
        var initResizer = function (key, ref) {
            var cur = _this._resizeDetectorNodes[key];
            var element = ReactDOM.findDOMNode(ref);
            if (cur) {
                delete _this._resizeDetectorNodes[key];
            }
            if (element) {
                _this._resizeDetectorNodes[key] = element;
            }
            _this._resizeDetectorOnScroll();
        };
        return [
            (React.createElement("div", { key: 'grow', style: _styles.resizeDetectorContainerStyles, ref: function (ref) { return initResizer('grow', ref); }, onScroll: function () { return _this._resizeDetectorOnScroll(); } },
                React.createElement("div", { style: _styles.resizeGrowDetectorStyles }))),
            (React.createElement("div", { key: 'shrink', style: _styles.resizeDetectorContainerStyles, ref: function (ref) { return initResizer('shrink', ref); }, onScroll: function () { return _this._resizeDetectorOnScroll(); } },
                React.createElement("div", { style: _styles.resizeShrinkDetectorStyles })))
        ];
    };
    View.prototype._resizeDetectorReset = function () {
        // Scroll the detectors to the bottom-right corner so
        // that `scroll` events will be triggered when the container
        // is resized.
        var scrollMax = 100500;
        var node = this._resizeDetectorNodes.grow;
        if (node) {
            node.scrollLeft = scrollMax;
            node.scrollTop = scrollMax;
        }
        node = this._resizeDetectorNodes.shrink;
        if (node) {
            node.scrollLeft = scrollMax;
            node.scrollTop = scrollMax;
        }
    };
    View.prototype._resizeDetectorOnScroll = function () {
        var _this = this;
        if (this._resizeDetectorAnimationFrame) {
            // Do not execute action more often than once per animation frame.
            return;
        }
        this._resizeDetectorAnimationFrame = window.requestAnimationFrame(function () {
            _this._resizeDetectorReset();
            _this._resizeDetectorAnimationFrame = undefined;
            ViewBase_1.default._checkViews();
        });
    };
    View.prototype.getChildContext = function () {
        // Let descendant Types components know that their nearest Types ancestor is not an Types.Text.
        // Because they're in an Types.View, they should use their normal styling rather than their
        // special styling for appearing inline with text.
        var childContext = {
            isRxParentAText: false
        };
        // Provide the descendants with the focus manager (if any).
        if (this._focusManager) {
            childContext.focusManager = this._focusManager;
        }
        return childContext;
    };
    View.prototype._getContainerRef = function () {
        return this;
    };
    View.prototype.setFocusRestricted = function (restricted) {
        if (!this._focusManager || !this.props.restrictFocusWithin) {
            console.error('View: setFocusRestricted method requires restrictFocusWithin property to be set to true');
            return;
        }
        if (restricted) {
            this._focusManager.restrictFocusWithin();
        }
        else {
            this._focusManager.removeFocusRestriction();
        }
    };
    View.prototype.setFocusLimited = function (limited) {
        if (!this._focusManager || !this.props.limitFocusWithin) {
            console.error('View: setFocusLimited method requires limitFocusWithin property to be set to true');
            return;
        }
        if (limited && !this._isFocusLimited) {
            this._isFocusLimited = true;
            this._focusManager.limitFocusWithin();
        }
        else if (!limited && this._isFocusLimited) {
            this._isFocusLimited = false;
            this._focusManager.removeFocusLimitation();
        }
    };
    View.prototype.render = function () {
        var combinedStyles = Styles_1.default.combine(_styles.defaultStyle, this.props.style);
        var ariaRole = AccessibilityUtil_1.default.accessibilityTraitToString(this.props.accessibilityTraits);
        var ariaSelected = AccessibilityUtil_1.default.accessibilityTraitToAriaSelected(this.props.accessibilityTraits);
        var isAriaHidden = AccessibilityUtil_1.default.isHidden(this.props.importantForAccessibility);
        var props = {
            role: ariaRole,
            tabIndex: this.props.tabIndex,
            style: combinedStyles,
            title: this.props.title,
            'aria-label': this.props.accessibilityLabel,
            'aria-hidden': isAriaHidden,
            'aria-selected': ariaSelected,
            onContextMenu: this.props.onContextMenu,
            onMouseEnter: this.props.onMouseEnter,
            onMouseLeave: this.props.onMouseLeave,
            onMouseOver: this.props.onMouseOver,
            onMouseMove: this.props.onMouseMove,
            onDragEnter: this.props.onDragEnter,
            onDragOver: this.props.onDragOver,
            onDragLeave: this.props.onDragLeave,
            onDrop: this.props.onDrop,
            onClick: this.props.onPress,
            onFocus: this.props.onFocus,
            onBlur: this.props.onBlur,
            onKeyDown: this.props.onKeyPress,
        };
        if (this.props.ignorePointerEvents) {
            props.className = 'reactxp-ignore-pointer-events';
            combinedStyles['pointerEvents'] = 'none';
        }
        var reactElement;
        var childAnimationsEnabled = this.props.animateChildEnter || this.props.animateChildMove || this.props.animateChildLeave;
        if (childAnimationsEnabled) {
            reactElement = (React.createElement(AnimateListEdits_1.default, __assign({}, props, { animateChildEnter: this.props.animateChildEnter, animateChildMove: this.props.animateChildMove, animateChildLeave: this.props.animateChildLeave }), this.props.children));
        }
        else {
            reactElement = (React.createElement("div", __assign({}, props),
                this._renderResizeDetectorIfNeeded(combinedStyles),
                this.props.children));
        }
        return this.context.isRxParentAText ?
            restyleForInlineText(reactElement) :
            reactElement;
    };
    View.prototype.componentWillReceiveProps = function (nextProps) {
        _super.prototype.componentWillReceiveProps.call(this, nextProps);
        if (!!this.props.restrictFocusWithin !== !!nextProps.restrictFocusWithin) {
            console.error('View: restrictFocusWithin is readonly and changing it during the component life cycle has no effect');
        }
        else if (!!this.props.limitFocusWithin !== !!nextProps.limitFocusWithin) {
            console.error('View: limitFocusWithin is readonly and changing it during the component life cycle has no effect');
        }
    };
    View.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (this._focusManager) {
            if (this.props.restrictFocusWithin) {
                this._focusManager.restrictFocusWithin();
            }
            if (this.props.limitFocusWithin && this._isFocusLimited) {
                this._focusManager.limitFocusWithin();
            }
        }
    };
    View.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (this._focusManager) {
            this._focusManager.release();
        }
    };
    return View;
}(ViewBase_1.default));
View.contextTypes = {
    isRxParentAText: PropTypes.bool,
    focusManager: PropTypes.object
};
View.childContextTypes = {
    isRxParentAText: PropTypes.bool.isRequired,
    focusManager: PropTypes.object
};
exports.View = View;
FocusManager_1.applyFocusableComponentMixin(View, function (nextProps) {
    var tabIndex = nextProps && ('tabIndex' in nextProps) ? nextProps.tabIndex : this.props.tabIndex;
    return tabIndex !== undefined && tabIndex !== -1;
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = View;


/***/ }),
/* 52 */,
/* 53 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Export web by default. Other platforms have custom index.[platform].js files
module.exports = __webpack_require__(360);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(88);
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 56 */,
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(18),
    root = __webpack_require__(10);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(260),
    mapCacheDelete = __webpack_require__(261),
    mapCacheGet = __webpack_require__(262),
    mapCacheHas = __webpack_require__(263),
    mapCacheSet = __webpack_require__(264);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(40),
    eq = __webpack_require__(30);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(38),
    arrayEach = __webpack_require__(96),
    assignValue = __webpack_require__(61),
    baseAssign = __webpack_require__(187),
    baseAssignIn = __webpack_require__(188),
    cloneBuffer = __webpack_require__(109),
    copyArray = __webpack_require__(70),
    copySymbols = __webpack_require__(227),
    copySymbolsIn = __webpack_require__(228),
    getAllKeys = __webpack_require__(114),
    getAllKeysIn = __webpack_require__(115),
    getTag = __webpack_require__(74),
    initCloneArray = __webpack_require__(250),
    initCloneByTag = __webpack_require__(251),
    initCloneObject = __webpack_require__(117),
    isArray = __webpack_require__(4),
    isBuffer = __webpack_require__(32),
    isObject = __webpack_require__(7),
    keys = __webpack_require__(16);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(101),
    createBaseEach = __webpack_require__(230);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 64 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(59),
    isFlattenable = __webpack_require__(252);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(41),
    toKey = __webpack_require__(29);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(198),
    isObjectLike = __webpack_require__(15);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 68 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(95);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(27),
    isIterateeCall = __webpack_require__(118);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(122);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(97),
    stubArray = __webpack_require__(133);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(176),
    Map = __webpack_require__(57),
    Promise = __webpack_require__(178),
    Set = __webpack_require__(93),
    WeakMap = __webpack_require__(179),
    baseGetTag = __webpack_require__(17),
    toSource = __webpack_require__(125);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(4),
    isSymbol = __webpack_require__(23);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(17),
    isObject = __webpack_require__(7);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(316);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* SubscribableEvent.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* A simple strongly-typed pub/sub/fire eventing system.
*/

var _ = __webpack_require__(80);
var SubscriptionToken = (function () {
    function SubscriptionToken(_event, _callback) {
        this._event = _event;
        this._callback = _callback;
    }
    SubscriptionToken.prototype.unsubscribe = function () {
        this._event.unsubscribe(this._callback);
    };
    return SubscriptionToken;
}());
exports.SubscriptionToken = SubscriptionToken;
var SubscribableEvent = (function () {
    function SubscribableEvent() {
        var _this = this;
        this.fire = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // Clone the array so original can be modified by handlers.
            var subs = _.clone(_this._subscribers);
            // Execute handlers in the reverse order in which they
            // were registered.
            for (var i = subs.length - 1; i >= 0; i--) {
                if (subs[i].apply(null, args)) {
                    // If the value was handled, early out.
                    return true;
                }
            }
            return false;
        });
        this._subscribers = [];
    }
    SubscribableEvent.prototype.dispose = function () {
        this._subscribers = [];
    };
    SubscribableEvent.prototype.subscribe = function (callback) {
        this._subscribers.push(callback);
        return new SubscriptionToken(this, callback);
    };
    SubscribableEvent.prototype.unsubscribe = function (callback) {
        _.pull(this._subscribers, callback);
    };
    return SubscribableEvent;
}());
exports.SubscribableEvent = SubscribableEvent;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* lodashMini.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Imports a subset of lodash library needed for ReactXP's implementation.
*/

var clone = __webpack_require__(126);
exports.clone = clone;
var filter = __webpack_require__(127);
exports.filter = filter;
var pull = __webpack_require__(310);
exports.pull = pull;
var sortBy = __webpack_require__(313);
exports.sortBy = sortBy;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* FrontLayerViewManager.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Manages the layering of the main view, modals and popups.
*/

var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(0);
var RootView_1 = __webpack_require__(361);
var FrontLayerViewManager = (function () {
    function FrontLayerViewManager() {
        var _this = this;
        this._mainView = null;
        this._modalStack = [];
        this._activePopupOptions = null;
        this._activePopupId = null;
        this._activePopupAutoDismiss = false;
        this._activePopupAutoDismissDelay = 0;
        this._activePopupShowDelay = 0;
        this._popupShowDelayTimer = null;
        this._shouldPopupBeDismissed = function (options) {
            return _this._activePopupOptions &&
                _this._activePopupOptions.getAnchor() === options.getAnchor();
        };
    }
    FrontLayerViewManager.prototype.setMainView = function (element) {
        this._mainView = element;
        this._renderRootView();
    };
    FrontLayerViewManager.prototype.isModalDisplayed = function (modalId) {
        return this._modalStack.some(function (d) { return d.id === modalId; });
    };
    FrontLayerViewManager.prototype.showModal = function (modal, modalId) {
        if (!modalId) {
            console.error('modal must have valid ID');
        }
        // Dismiss any active popups.
        if (this._activePopupOptions) {
            this.dismissPopup(this._activePopupId);
        }
        this._modalStack.push({ modal: modal, id: modalId });
        this._renderRootView();
    };
    FrontLayerViewManager.prototype.dismissModal = function (modalId) {
        this._modalStack = this._modalStack.filter(function (d) { return d.id !== modalId; });
        this._renderRootView();
    };
    FrontLayerViewManager.prototype.dismissAllModals = function () {
        if (this._modalStack.length > 0) {
            this._modalStack = [];
            this._renderRootView();
        }
    };
    FrontLayerViewManager.prototype.showPopup = function (options, popupId, showDelay) {
        // If options.dismissIfShown is true, calling this methos will behave like a toggle. On one call, it will open the popup.
        // If it is called when pop up is seen, it will dismiss the popup.
        // If options.dismissIfShown is false, we will simply show the popup always.
        if (options.dismissIfShown) {
            if (this._shouldPopupBeDismissed(options)) {
                this.dismissPopup(popupId);
                return false;
            }
        }
        this._showPopup(options, popupId, showDelay);
        return true;
    };
    FrontLayerViewManager.prototype._showPopup = function (options, popupId, showDelay) {
        var _this = this;
        if (this._activePopupOptions) {
            if (this._activePopupOptions.onDismiss) {
                this._activePopupOptions.onDismiss();
            }
        }
        if (this._popupShowDelayTimer) {
            clearTimeout(this._popupShowDelayTimer);
            this._popupShowDelayTimer = null;
        }
        this._activePopupOptions = options;
        this._activePopupId = popupId;
        this._activePopupAutoDismiss = false;
        this._activePopupAutoDismissDelay = 0;
        this._activePopupShowDelay = showDelay || 0;
        this._renderRootView();
        if (this._activePopupShowDelay > 0) {
            this._popupShowDelayTimer = window.setTimeout(function () {
                _this._activePopupShowDelay = 0;
                _this._popupShowDelayTimer = null;
                _this._renderRootView();
            }, this._activePopupShowDelay);
        }
    };
    FrontLayerViewManager.prototype.autoDismissPopup = function (popupId, dismissDelay) {
        if (popupId === this._activePopupId && this._activePopupOptions) {
            if (this._popupShowDelayTimer) {
                clearTimeout(this._popupShowDelayTimer);
                this._popupShowDelayTimer = null;
            }
            this._activePopupAutoDismiss = true;
            this._activePopupAutoDismissDelay = dismissDelay || 0;
            this._renderRootView();
        }
    };
    FrontLayerViewManager.prototype.dismissPopup = function (popupId) {
        if (popupId === this._activePopupId && this._activePopupOptions) {
            if (this._activePopupOptions.onDismiss) {
                this._activePopupOptions.onDismiss();
            }
            if (this._popupShowDelayTimer) {
                clearTimeout(this._popupShowDelayTimer);
                this._popupShowDelayTimer = null;
            }
            this._activePopupOptions = null;
            this._activePopupId = null;
            this._renderRootView();
        }
    };
    FrontLayerViewManager.prototype.dismissAllPopups = function () {
        this.dismissPopup(this._activePopupId);
    };
    FrontLayerViewManager.prototype._renderRootView = function () {
        var _this = this;
        var topModal = this._modalStack.length > 0 ?
            this._modalStack[this._modalStack.length - 1].modal : null;
        var rootView = (React.createElement(RootView_1.RootView, { mainView: this._mainView, keyBoardFocusOutline: this._mainView.props.keyBoardFocusOutline, mouseFocusOutline: this._mainView.props.mouseFocusOutline, modal: topModal, activePopupOptions: this._activePopupShowDelay > 0 ? null : this._activePopupOptions, autoDismiss: this._activePopupAutoDismiss, autoDismissDelay: this._activePopupAutoDismissDelay, onDismissPopup: function () { return _this.dismissPopup(_this._activePopupId); } }));
        var container = document.getElementsByClassName('app-container')[0];
        ReactDOM.render(rootView, container);
    };
    return FrontLayerViewManager;
}());
exports.FrontLayerViewManager = FrontLayerViewManager;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new FrontLayerViewManager();


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* ViewBase.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* A base class for the Web-specific implementation of the cross-platform View abstraction.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = __webpack_require__(3);
var ReactDOM = __webpack_require__(0);
var RX = __webpack_require__(1);
var SyncTasks = __webpack_require__(20);
var Types = __webpack_require__(6);
// We create a periodic timer to detect layout changes that are performed behind
// our back by the browser's layout engine. We do this more aggressively when
// the app is known to be active and in the foreground.
var _layoutTimerActiveDuration = 1000;
var _layoutTimerInactiveDuration = 10000;
var ViewBase = (function (_super) {
    __extends(ViewBase, _super);
    function ViewBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isMounted = false;
        _this._lastX = 0;
        _this._lastY = 0;
        _this._lastWidth = 0;
        _this._lastHeight = 0;
        return _this;
    }
    ViewBase.prototype._getContainer = function () {
        // Perf: Don't prefetch this since we might never need it
        var containerRef = this._getContainerRef();
        if (!this._container && containerRef) {
            this._container = ReactDOM.findDOMNode(containerRef);
        }
        return this._container;
    };
    // Sets the activation state so we can stop our periodic timer
    // when the app is in the background.
    ViewBase.setActivationState = function (newState) {
        if (ViewBase._appActivationState !== newState) {
            ViewBase._appActivationState = newState;
            // Cancel any existing timers.
            if (ViewBase._viewCheckingTimer) {
                window.clearInterval(ViewBase._viewCheckingTimer);
                ViewBase._viewCheckingTimer = null;
            }
            if (ViewBase._viewCheckingList.length > 0) {
                // If we're becoming active, check and report layout changes immediately.
                if (newState === Types.AppActivationState.Active) {
                    ViewBase._checkViews();
                }
                ViewBase._viewCheckingTimer = setInterval(ViewBase._checkViews, newState === Types.AppActivationState.Active ?
                    _layoutTimerActiveDuration : _layoutTimerInactiveDuration);
            }
        }
    };
    ViewBase.prototype.componentWillReceiveProps = function (nextProps) {
        if (!!this.props.onLayout !== !!nextProps.onLayout) {
            if (this.props.onLayout) {
                this._checkViewCheckerUnbuild();
            }
            if (nextProps.onLayout) {
                this._checkViewCheckerBuild();
            }
        }
    };
    ViewBase._checkViews = function () {
        _.each(ViewBase._viewCheckingList, function (view) {
            view._checkAndReportLayout();
        });
    };
    ViewBase._reportLayoutChange = function (func) {
        this._layoutReportList.push(func);
        if (!ViewBase._layoutReportingTimer) {
            ViewBase._layoutReportingTimer = window.setTimeout(function () {
                ViewBase._layoutReportingTimer = null;
                ViewBase._reportDeferredLayoutChanges();
            }, 0);
        }
    };
    ViewBase._reportDeferredLayoutChanges = function () {
        var reportList = this._layoutReportList;
        this._layoutReportList = [];
        _.each(reportList, function (func) {
            try {
                func();
            }
            catch (e) {
                console.error('Caught exception on onLayout response: ', e);
            }
        });
    };
    // Returns a promise to indicate when firing of onLayout event has completed (if any)
    ViewBase.prototype._checkAndReportLayout = function () {
        var _this = this;
        if (!this._isMounted) {
            return SyncTasks.Resolved();
        }
        var container = this._getContainer();
        if (!container) {
            return SyncTasks.Resolved();
        }
        var newX = container.offsetLeft;
        var newY = container.offsetTop;
        var marginTop = !container.style.marginTop ? 0 : parseInt(container.style.marginTop, 10) || 0;
        var marginBottom = !container.style.marginBottom ? 0 : parseInt(container.style.marginBottom, 10) || 0;
        var marginRight = !container.style.marginRight ? 0 : parseInt(container.style.marginRight, 10) || 0;
        var marginLeft = !container.style.marginLeft ? 0 : parseInt(container.style.marginLeft, 10) || 0;
        var newWidth = container.offsetWidth + marginRight + marginLeft;
        var newHeight = container.offsetHeight + marginTop + marginBottom;
        if (this._lastX !== newX || this._lastY !== newY || this._lastWidth !== newWidth || this._lastHeight !== newHeight) {
            this._lastX = newX;
            this._lastY = newY;
            this._lastWidth = newWidth;
            this._lastHeight = newHeight;
            var deferred_1 = SyncTasks.Defer();
            ViewBase._reportLayoutChange(function () {
                if (!_this._isMounted || !_this.props.onLayout) {
                    deferred_1.resolve();
                    return;
                }
                _this.props.onLayout({
                    x: newX,
                    y: newY,
                    width: _this._lastWidth,
                    height: _this._lastHeight
                });
                deferred_1.resolve();
            });
            return deferred_1.promise();
        }
        return SyncTasks.Resolved();
    };
    ViewBase.prototype._checkViewCheckerBuild = function () {
        // Enable the timer to check for layout changes. Use a different duration
        // when the app is active versus inactive.
        if (!ViewBase._viewCheckingTimer) {
            ViewBase._viewCheckingTimer = setInterval(ViewBase._checkViews, ViewBase._appActivationState === Types.AppActivationState.Active ?
                _layoutTimerActiveDuration : _layoutTimerInactiveDuration);
        }
        if (!ViewBase._isResizeHandlerInstalled) {
            window.addEventListener('resize', ViewBase._onResize);
            ViewBase._isResizeHandlerInstalled = true;
        }
        ViewBase._viewCheckingList.push(this);
    };
    ViewBase.prototype._checkViewCheckerUnbuild = function () {
        var _this = this;
        ViewBase._viewCheckingList = _.filter(ViewBase._viewCheckingList, function (v) { return v !== _this; });
        if (ViewBase._viewCheckingList.length === 0) {
            if (ViewBase._viewCheckingTimer) {
                clearInterval(ViewBase._viewCheckingTimer);
                ViewBase._viewCheckingTimer = null;
            }
            if (ViewBase._isResizeHandlerInstalled) {
                window.removeEventListener('resize', ViewBase._onResize);
                ViewBase._isResizeHandlerInstalled = false;
            }
        }
    };
    ViewBase.prototype.componentDidMount = function () {
        this._isMounted = true;
        if (this.props.onLayout) {
            this._checkViewCheckerBuild();
        }
        // Chain through to the same render-checking code
        this.componentDidUpdate();
    };
    ViewBase.prototype.componentDidUpdate = function () {
        if (this.props.onLayout) {
            this._checkAndReportLayout();
        }
    };
    ViewBase._onResize = function () {
        // Often views change size in response to an overall window resize. Rather than
        // wait for the next timer to fire, do it immediately.
        ViewBase._checkViews();
    };
    ViewBase.prototype.componentWillUnmount = function () {
        this._isMounted = false;
        // Don't retain a reference to a DOM object. This can cause memory leaks
        // because the GC may not be able to clean them up.
        this._container = null;
        if (this.props.onLayout) {
            this._checkViewCheckerUnbuild();
        }
    };
    ViewBase.prototype.blur = function () {
        var el = ReactDOM.findDOMNode(this);
        if (el) {
            el.blur();
        }
    };
    ViewBase.prototype.focus = function () {
        var el = ReactDOM.findDOMNode(this);
        if (el) {
            el.focus();
        }
    };
    return ViewBase;
}(RX.ViewBase));
ViewBase._viewCheckingTimer = null;
ViewBase._isResizeHandlerInstalled = false;
ViewBase._viewCheckingList = [];
ViewBase._appActivationState = Types.AppActivationState.Active;
ViewBase._layoutReportList = [];
ViewBase._layoutReportingTimer = null;
exports.ViewBase = ViewBase;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ViewBase;


/***/ }),
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(377);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = __webpack_require__.i({"NODE_ENV":"production"}).NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(384);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(383);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(9)))

/***/ }),
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function() {
  (function(root, factory) {
    if (true) {
      return !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return factory();
      }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
      return module.exports = factory();
    } else {
      return root.ifvisible = factory();
    }
  })(this, function() {
    var addEvent, customEvent, doc, fireEvent, hidden, idleStartedTime, idleTime, ie, ifvisible, init, initialized, status, trackIdleStatus, visibilityChange;
    ifvisible = {};
    doc = document;
    initialized = false;
    status = "active";
    idleTime = 60000;
    idleStartedTime = false;
    customEvent = (function() {
      var S4, addCustomEvent, cgid, fireCustomEvent, guid, listeners, removeCustomEvent;
      S4 = function() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      };
      guid = function() {
        return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
      };
      listeners = {};
      cgid = '__ceGUID';
      addCustomEvent = function(obj, event, callback) {
        obj[cgid] = undefined;
        if (!obj[cgid]) {
          obj[cgid] = "ifvisible.object.event.identifier";
        }
        if (!listeners[obj[cgid]]) {
          listeners[obj[cgid]] = {};
        }
        if (!listeners[obj[cgid]][event]) {
          listeners[obj[cgid]][event] = [];
        }
        return listeners[obj[cgid]][event].push(callback);
      };
      fireCustomEvent = function(obj, event, memo) {
        var ev, j, len, ref, results;
        if (obj[cgid] && listeners[obj[cgid]] && listeners[obj[cgid]][event]) {
          ref = listeners[obj[cgid]][event];
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            ev = ref[j];
            results.push(ev(memo || {}));
          }
          return results;
        }
      };
      removeCustomEvent = function(obj, event, callback) {
        var cl, i, j, len, ref;
        if (callback) {
          if (obj[cgid] && listeners[obj[cgid]] && listeners[obj[cgid]][event]) {
            ref = listeners[obj[cgid]][event];
            for (i = j = 0, len = ref.length; j < len; i = ++j) {
              cl = ref[i];
              if (cl === callback) {
                listeners[obj[cgid]][event].splice(i, 1);
                return cl;
              }
            }
          }
        } else {
          if (obj[cgid] && listeners[obj[cgid]] && listeners[obj[cgid]][event]) {
            return delete listeners[obj[cgid]][event];
          }
        }
      };
      return {
        add: addCustomEvent,
        remove: removeCustomEvent,
        fire: fireCustomEvent
      };
    })();
    addEvent = (function() {
      var setListener;
      setListener = false;
      return function(el, ev, fn) {
        if (!setListener) {
          if (el.addEventListener) {
            setListener = function(el, ev, fn) {
              return el.addEventListener(ev, fn, false);
            };
          } else if (el.attachEvent) {
            setListener = function(el, ev, fn) {
              return el.attachEvent('on' + ev, fn, false);
            };
          } else {
            setListener = function(el, ev, fn) {
              return el['on' + ev] = fn;
            };
          }
        }
        return setListener(el, ev, fn);
      };
    })();
    fireEvent = function(element, event) {
      var evt;
      if (doc.createEventObject) {
        return element.fireEvent('on' + event, evt);
      } else {
        evt = doc.createEvent('HTMLEvents');
        evt.initEvent(event, true, true);
        return !element.dispatchEvent(evt);
      }
    };
    ie = (function() {
      var all, check, div, undef, v;
      undef = void 0;
      v = 3;
      div = doc.createElement("div");
      all = div.getElementsByTagName("i");
      check = function() {
        return (div.innerHTML = "<!--[if gt IE " + (++v) + "]><i></i><![endif]-->", all[0]);
      };
      while (check()) {
        continue;
      }
      if (v > 4) {
        return v;
      } else {
        return undef;
      }
    })();
    hidden = false;
    visibilityChange = void 0;
    if (typeof doc.hidden !== "undefined") {
      hidden = "hidden";
      visibilityChange = "visibilitychange";
    } else if (typeof doc.mozHidden !== "undefined") {
      hidden = "mozHidden";
      visibilityChange = "mozvisibilitychange";
    } else if (typeof doc.msHidden !== "undefined") {
      hidden = "msHidden";
      visibilityChange = "msvisibilitychange";
    } else if (typeof doc.webkitHidden !== "undefined") {
      hidden = "webkitHidden";
      visibilityChange = "webkitvisibilitychange";
    }
    trackIdleStatus = function() {
      var timer, wakeUp;
      timer = false;
      wakeUp = function() {
        clearTimeout(timer);
        if (status !== "active") {
          ifvisible.wakeup();
        }
        idleStartedTime = +(new Date());
        return timer = setTimeout(function() {
          if (status === "active") {
            return ifvisible.idle();
          }
        }, idleTime);
      };
      wakeUp();
      addEvent(doc, "mousemove", wakeUp);
      addEvent(doc, "keyup", wakeUp);
      addEvent(doc, "touchstart", wakeUp);
      addEvent(window, "scroll", wakeUp);
      ifvisible.focus(wakeUp);
      return ifvisible.wakeup(wakeUp);
    };
    init = function() {
      var blur;
      if (initialized) {
        return true;
      }
      if (hidden === false) {
        blur = "blur";
        if (ie < 9) {
          blur = "focusout";
        }
        addEvent(window, blur, function() {
          return ifvisible.blur();
        });
        addEvent(window, "focus", function() {
          return ifvisible.focus();
        });
      } else {
        addEvent(doc, visibilityChange, function() {
          if (doc[hidden]) {
            return ifvisible.blur();
          } else {
            return ifvisible.focus();
          }
        }, false);
      }
      initialized = true;
      return trackIdleStatus();
    };
    ifvisible = {
      setIdleDuration: function(seconds) {
        return idleTime = seconds * 1000;
      },
      getIdleDuration: function() {
        return idleTime;
      },
      getIdleInfo: function() {
        var now, res;
        now = +(new Date());
        res = {};
        if (status === "idle") {
          res.isIdle = true;
          res.idleFor = now - idleStartedTime;
          res.timeLeft = 0;
          res.timeLeftPer = 100;
        } else {
          res.isIdle = false;
          res.idleFor = now - idleStartedTime;
          res.timeLeft = (idleStartedTime + idleTime) - now;
          res.timeLeftPer = (100 - (res.timeLeft * 100 / idleTime)).toFixed(2);
        }
        return res;
      },
      focus: function(callback) {
        if (typeof callback === "function") {
          this.on("focus", callback);
        } else {
          status = "active";
          customEvent.fire(this, "focus");
          customEvent.fire(this, "wakeup");
          customEvent.fire(this, "statusChanged", {
            status: status
          });
        }
        return this;
      },
      blur: function(callback) {
        if (typeof callback === "function") {
          this.on("blur", callback);
        } else {
          status = "hidden";
          customEvent.fire(this, "blur");
          customEvent.fire(this, "idle");
          customEvent.fire(this, "statusChanged", {
            status: status
          });
        }
        return this;
      },
      idle: function(callback) {
        if (typeof callback === "function") {
          this.on("idle", callback);
        } else {
          status = "idle";
          customEvent.fire(this, "idle");
          customEvent.fire(this, "statusChanged", {
            status: status
          });
        }
        return this;
      },
      wakeup: function(callback) {
        if (typeof callback === "function") {
          this.on("wakeup", callback);
        } else {
          status = "active";
          customEvent.fire(this, "wakeup");
          customEvent.fire(this, "statusChanged", {
            status: status
          });
        }
        return this;
      },
      on: function(name, callback) {
        init();
        customEvent.add(this, name, callback);
        return this;
      },
      off: function(name, callback) {
        init();
        customEvent.remove(this, name, callback);
        return this;
      },
      onEvery: function(seconds, callback) {
        var paused, t;
        init();
        paused = false;
        if (callback) {
          t = setInterval(function() {
            if (status === "active" && paused === false) {
              return callback();
            }
          }, seconds * 1000);
        }
        return {
          stop: function() {
            return clearInterval(t);
          },
          pause: function() {
            return paused = true;
          },
          resume: function() {
            return paused = false;
          },
          code: t,
          callback: callback
        };
      },
      now: function(check) {
        init();
        return status === (check || "active");
      }
    };
    return ifvisible;
  });

}).call(this);

//# sourceMappingURL=ifvisible.js.map


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(18),
    root = __webpack_require__(10);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(58),
    setCacheAdd = __webpack_require__(271),
    setCacheHas = __webpack_require__(272);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(10);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 96 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(217),
    isArguments = __webpack_require__(31),
    isArray = __webpack_require__(4),
    isBuffer = __webpack_require__(32),
    isIndex = __webpack_require__(43),
    isTypedArray = __webpack_require__(46);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(40),
    eq = __webpack_require__(30);

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(231);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(100),
    keys = __webpack_require__(16);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(59),
    isArray = __webpack_require__(4);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(64),
    baseIsNaN = __webpack_require__(200),
    strictIndexOf = __webpack_require__(279);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(28),
    nativeKeys = __webpack_require__(266);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(63),
    isArrayLike = __webpack_require__(11);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(21),
    arrayMap = __webpack_require__(26),
    isArray = __webpack_require__(4),
    isSymbol = __webpack_require__(23);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(41),
    last = __webpack_require__(301),
    parent = __webpack_require__(270),
    toKey = __webpack_require__(29);

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),
/* 108 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(10);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(53)(module)))

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(69);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(18);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(94),
    arraySome = __webpack_require__(185),
    cacheHas = __webpack_require__(108);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(102),
    getSymbols = __webpack_require__(73),
    keys = __webpack_require__(16);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(102),
    getSymbolsIn = __webpack_require__(116),
    keysIn = __webpack_require__(33);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(59),
    getPrototype = __webpack_require__(72),
    getSymbols = __webpack_require__(73),
    stubArray = __webpack_require__(133);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(190),
    getPrototype = __webpack_require__(72),
    isPrototype = __webpack_require__(28);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(30),
    isArrayLike = __webpack_require__(11),
    isIndex = __webpack_require__(43),
    isObject = __webpack_require__(7);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 120 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 121 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 122 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(182);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(214),
    shortOut = __webpack_require__(273);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 125 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(62);

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

module.exports = clone;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(97),
    baseFilter = __webpack_require__(193),
    baseIteratee = __webpack_require__(13),
    isArray = __webpack_require__(4);

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(65);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(66);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(11),
    isObjectLike = __webpack_require__(15);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(17),
    getPrototype = __webpack_require__(72),
    isObjectLike = __webpack_require__(15);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(58);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7),
    isSymbol = __webpack_require__(23);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* AppConfig.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* A simple class to store application config.
*/

var AppConfig = (function () {
    function AppConfig() {
        this._isDebug = false;
        this._isDevelopment = false;
    }
    AppConfig.prototype.setAppConfig = function (isDebug, isDevelopment) {
        this._isDebug = isDebug;
        this._isDevelopment = isDevelopment;
    };
    AppConfig.prototype.isDebugMode = function () {
        return this._isDebug;
    };
    AppConfig.prototype.isDevelopmentMode = function () {
        return this._isDevelopment;
    };
    return AppConfig;
}());
exports.AppConfig = AppConfig;
var instance = new AppConfig();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = instance;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Accessibility.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web wrapper for subscribing or querying the current state of the
* screen reader.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Accessibility_1 = __webpack_require__(334);
var Accessibility = (function (_super) {
    __extends(Accessibility, _super);
    function Accessibility() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Calling this API on web has no effect.
    Accessibility.prototype.isScreenReaderEnabled = function () {
        return false;
    };
    return Accessibility;
}(Accessibility_1.Accessibility));
exports.Accessibility = Accessibility;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Accessibility();


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Image.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation of the cross-platform Image abstraction.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = __webpack_require__(3);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(0);
var SyncTasks = __webpack_require__(20);
var PropTypes = __webpack_require__(24);
var restyleForInlineText = __webpack_require__(147);
var RX = __webpack_require__(1);
var Styles_1 = __webpack_require__(8);
var _styles = {
    image: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        opacity: 0,
        maxWidth: '100%',
        maxHeight: '100%'
    },
    defaultContainer: Styles_1.default.createImageStyle({
        position: 'relative',
        flex: 0,
        overflow: 'visible',
        backgroundColor: 'transparent'
    })
};
var XhrBlobUrlCache = (function () {
    function XhrBlobUrlCache() {
    }
    XhrBlobUrlCache.get = function (source) {
        if (this._cachedXhrBlobUrls[source]) {
            this._cachedXhrBlobUrls[source].refCount++;
            return this._cachedXhrBlobUrls[source].xhrBlobUrl;
        }
        return null;
    };
    XhrBlobUrlCache.insert = function (source, xhrBlobUrl) {
        XhrBlobUrlCache._cleanupIfCapacityExceeded();
        if (this._cachedXhrBlobUrls[source]) {
            XhrBlobUrlCache._cachedXhrBlobUrls[source].refCount++;
        }
        else {
            var xhrBlobUrlCacheEntry = {
                xhrBlobUrl: xhrBlobUrl,
                insertionDate: Date.now(),
                refCount: 1
            };
            XhrBlobUrlCache._cachedXhrBlobUrls[source] = xhrBlobUrlCacheEntry;
        }
    };
    XhrBlobUrlCache.release = function (source) {
        // Keep track of which cache entries are being used as we don't want to clean up a resource that someone is
        // still relying on.
        if (this._cachedXhrBlobUrls[source]) {
            XhrBlobUrlCache._cachedXhrBlobUrls[source].refCount--;
        }
    };
    XhrBlobUrlCache._cleanupIfCapacityExceeded = function () {
        // If we've reached maximum capacity, clean up the oldest freeable cache entry if any. An entry is freeable is
        // it's not currently in use (refCount == 0). Return whether we have room to add more entries to the cache.
        if (Object.keys(XhrBlobUrlCache._cachedXhrBlobUrls).length + 1 > XhrBlobUrlCache._maximumItems) {
            var oldestFreeableKey_1;
            var oldestFreeableEntry_1;
            Object.keys(XhrBlobUrlCache._cachedXhrBlobUrls).forEach(function (key) {
                if ((!oldestFreeableEntry_1 || XhrBlobUrlCache._cachedXhrBlobUrls[key].insertionDate < oldestFreeableEntry_1.insertionDate) &&
                    XhrBlobUrlCache._cachedXhrBlobUrls[key].refCount === 0) {
                    oldestFreeableKey_1 = key;
                    oldestFreeableEntry_1 = XhrBlobUrlCache._cachedXhrBlobUrls[key];
                }
            });
            if (oldestFreeableKey_1) {
                URL.revokeObjectURL(oldestFreeableEntry_1.xhrBlobUrl);
                delete XhrBlobUrlCache._cachedXhrBlobUrls[oldestFreeableKey_1];
            }
        }
    };
    return XhrBlobUrlCache;
}());
// Use a global cache to work around the image loading delays introduced by the xhr requests. This is especially
// visible when scrolling a virtual list view which contains xhr images.
XhrBlobUrlCache._maximumItems = 128;
XhrBlobUrlCache._cachedXhrBlobUrls = {};
var Image = (function (_super) {
    __extends(Image, _super);
    function Image(props) {
        var _this = _super.call(this, props) || this;
        _this._isMounted = false;
        _this._onLoad = function () {
            if (!_this._isMounted) {
                return;
            }
            // Measure the natural width & height of the image.
            _this._nativeImageWidth = undefined;
            _this._nativeImageHeight = undefined;
            var imageDOM = ReactDOM.findDOMNode(_this.refs['image']);
            if (imageDOM) {
                _this._nativeImageWidth = imageDOM.naturalWidth;
                _this._nativeImageHeight = imageDOM.naturalHeight;
            }
            // We can hide the img now. We assume that if the img. URL resolved without error,
            // then the background img. URL also did.
            _this.setState({
                showImgTag: false
            });
            if (_this.props.onLoad) {
                _this.props.onLoad({ width: _this._nativeImageWidth, height: _this._nativeImageHeight });
            }
        };
        _this._imgOnError = function () {
            _this._onError();
        };
        _this._onMouseUp = function (e) {
            if (e.button === 0) {
                // Types.Image doesn't officially support an onClick prop, but when it's
                // contained within a button, it may have this prop.
                var onClick = _this.props.onClick;
                if (onClick) {
                    onClick(e);
                }
            }
        };
        var performXhrRequest = _this._initializeAndSetState(props);
        if (performXhrRequest) {
            _this._startXhrImageFetch(props);
        }
        return _this;
    }
    Image.prototype.getChildContext = function () {
        // Let descendant RX components know that their nearest RX ancestor is not an RX.Text.
        // Because they're in an RX.Image, they should use their normal styling rather than their
        // special styling for appearing inline with text.
        return { isRxParentAText: false };
    };
    Image.prefetch = function (url) {
        var defer = SyncTasks.Defer();
        var img = new window.Image();
        img.src = url;
        img.onload = (function (event) {
            defer.resolve(true);
        });
        img.onerror = (function (event) {
            defer.reject('Failed to prefetch url ' + url);
        });
        img.onabort = (function (event) {
            defer.reject('Prefetch cancelled for url ' + url);
        });
        return defer.promise();
    };
    Image.prototype.componentWillReceiveProps = function (nextProps) {
        var sourceOrHeaderChanged = (nextProps.source !== this.props.source ||
            !_.isEqual(nextProps.headers || {}, this.props.headers || {}));
        if (!nextProps.onLoad !== !this.props.onLoad || !nextProps.onError !== !this.props.onError || sourceOrHeaderChanged) {
            var performXhrRequest = this._initializeAndSetState(nextProps);
            if (sourceOrHeaderChanged && performXhrRequest) {
                this._startXhrImageFetch(nextProps);
            }
        }
    };
    Image.prototype.componentDidMount = function () {
        this._isMounted = true;
    };
    Image.prototype.componentWillUnmount = function () {
        this._isMounted = false;
        if (this.state.displayUrl && this.state.xhrRequest) {
            XhrBlobUrlCache.release(this.props.source);
        }
    };
    Image.prototype._initializeAndSetState = function (props) {
        // Retrieve the xhr blob url from the cache if it exists. This is a performance optimization as we've seen xhr
        // requests take some time and cause flicker during rendering. Even when we're hitting the browser cache, we've
        // seen it stall and take some time.
        var cachedXhrBlobUrl = props.headers ? XhrBlobUrlCache.get(props.source) : null;
        var displayUrl = !!cachedXhrBlobUrl ? cachedXhrBlobUrl :
            !!props.headers ? '' : props.source;
        // Only make the xhr request if headers are specified and there was no cache hit.
        var performXhrRequest = !!props.headers && !cachedXhrBlobUrl;
        // We normally don't show an img tag because we use background images. However, if the caller has supplied an
        // onLoad or onError callback, we'll use the img tag until we receive an onLoad or onError.
        this.state = {
            showImgTag: (!performXhrRequest || !!cachedXhrBlobUrl) && (!!props.onLoad || !!props.onError),
            xhrRequest: !!props.headers,
            displayUrl: displayUrl
        };
        return performXhrRequest;
    };
    Image.prototype._handleXhrBlob = function (blob) {
        if (!this._isMounted) {
            return;
        }
        this.setState({
            displayUrl: URL.createObjectURL(blob)
        });
        // Save the newly fetched xhr blob url in the cache.
        XhrBlobUrlCache.insert(this.props.source, this.state.displayUrl);
        this._onLoad();
    };
    Image.prototype._startXhrImageFetch = function (props) {
        // Test hook to simulate a slower hxr request.
        // window.setTimeout(() => this._actuallyStartXhrImageFetch(props), 2500);
        this._actuallyStartXhrImageFetch(props);
    };
    Image.prototype._actuallyStartXhrImageFetch = function (props) {
        var _this = this;
        // Fetch Implementation
        if (window.fetch) {
            var headers = new Headers();
            Object.keys(props.headers).forEach(function (key) {
                headers.append(key, props.headers[key]);
            });
            var xhr = new Request(props.source, {
                method: 'GET',
                headers: headers,
                mode: 'cors'
            });
            fetch(xhr)
                .then(function (response) {
                if (!response.ok) {
                    _this._onError(new Error(response.statusText));
                }
                response.blob().then(function (blob) {
                    _this._handleXhrBlob(blob);
                });
            }, function (err) {
                _this._onError(err);
            });
        }
        else {
            var req = new XMLHttpRequest();
            req.open('GET', props.source, true);
            req.responseType = 'blob';
            Object.keys(props.headers).forEach(function (key) {
                req.setRequestHeader(key, props.headers[key]);
            });
            req.onload = function () {
                if (req.status >= 400 || req.status < 600) {
                    _this._onError(new Error(req.statusText));
                }
                else {
                    _this._handleXhrBlob(req.response);
                }
            };
            req.onerror = function () {
                _this._onError(new Error('Network issue downloading the image.'));
            };
            req.send();
        }
    };
    Image.prototype.render = function () {
        // Prepare image source (necessary as iOS implementation also allows objects)
        if (typeof this.props.source !== 'string' && typeof this.props.source !== 'undefined') {
            var errorText = 'Types/web/Image only accepts string sources! You passed: '
                + this.props.source + ' of type ' + (typeof this.props.source);
            throw new Error(errorText);
        }
        var optionalImg = null;
        if (this.state.showImgTag) {
            optionalImg = (React.createElement("img", { style: _styles.image, src: this.state.displayUrl, alt: this.props.accessibilityLabel, onLoad: this._onLoad, onError: this._imgOnError, key: 'image', ref: 'image' }));
        }
        var reactElement = (React.createElement("div", { style: this._getStyles(), onMouseUp: this._onMouseUp, title: this.props.title },
            optionalImg,
            this.props.children));
        return this.context.isRxParentAText ?
            restyleForInlineText(reactElement) :
            reactElement;
    };
    Image.prototype._getStyles = function () {
        var combinedStyles = Styles_1.default.combine(_styles.defaultContainer, this.props.style);
        combinedStyles['display'] = 'flex';
        // It is necessary to wrap the url in quotes as in url("a.jpg?q=(a and b)").
        // If the url is unquoted and contains paranthesis, e.g. a.jpg?q=(a and b), it will become url(a.jpg?q=(a and b))
        // which will not render on the screen.
        combinedStyles['backgroundImage'] = 'url("' + this.state.displayUrl + '")';
        // Types doesn't support border styles other than "solid" for images.
        if (combinedStyles.borderWidth) {
            combinedStyles['borderStyle'] = 'solid';
        }
        var resizeMode = 'contain';
        switch (this.props.resizeMode) {
            case 'cover':
                resizeMode = 'cover';
                break;
            case 'stretch':
                resizeMode = '100% 100%';
                break;
            case 'repeat':
                resizeMode = 'auto';
                break;
        }
        combinedStyles['backgroundPosition'] = 'center center';
        combinedStyles['backgroundSize'] = resizeMode;
        combinedStyles['backgroundRepeat'] = this.props.resizeMode === 'repeat' ? 'repeat' : 'no-repeat';
        return combinedStyles;
    };
    Image.prototype._onError = function (err) {
        if (!this._isMounted) {
            return;
        }
        // We can hide the img now. We assume that if the img. URL failed to resolve,
        // then the background img. URL also did.
        this.setState({
            showImgTag: false
        });
        if (this.props.onError) {
            this.props.onError(err);
        }
    };
    // Note: This works only if you have an onLoaded handler and wait for the image to load.
    Image.prototype.getNativeWidth = function () {
        return this._nativeImageWidth;
    };
    Image.prototype.getNativeHeight = function () {
        return this._nativeImageHeight;
    };
    return Image;
}(RX.Image));
Image.contextTypes = {
    isRxParentAText: PropTypes.bool
};
Image.childContextTypes = {
    isRxParentAText: PropTypes.bool.isRequired
};
exports.Image = Image;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Image;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Input.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web implementation of Input interface.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RX = __webpack_require__(1);
var Input = (function (_super) {
    __extends(Input, _super);
    function Input() {
        return _super.call(this) || this;
    }
    Input.prototype.dispatchKeyDown = function (e) {
        this.keyDownEvent.fire(e);
    };
    Input.prototype.dispatchKeyUp = function (e) {
        if (this.keyUpEvent.fire(e)) {
            e.stopPropagation();
        }
    };
    return Input;
}(RX.Input));
exports.Input = Input;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Input();


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* ScrollViewConfig.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific scroll view configuration, required to avoid circular
* dependency between application and ScrollView.
*/

var ScrollViewConfig = (function () {
    function ScrollViewConfig() {
        this._useCustomScrollbars = false;
    }
    // Enable native scrollbars for all instances.
    ScrollViewConfig.prototype.setUseCustomScrollbars = function (value) {
        this._useCustomScrollbars = value;
    };
    ScrollViewConfig.prototype.useCustomScrollbars = function () {
        return this._useCustomScrollbars;
    };
    return ScrollViewConfig;
}());
exports.ScrollViewConfig = ScrollViewConfig;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new ScrollViewConfig();


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Text.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation of the cross-platform Text abstraction.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(0);
var PropTypes = __webpack_require__(24);
var AccessibilityUtil_1 = __webpack_require__(50);
var RX = __webpack_require__(1);
var Styles_1 = __webpack_require__(8);
// Adding a CSS rule to display non-selectable texts. Those texts
// will be displayed as pseudo elements to prevent them from being copied
// to clipboard. It's not possible to style pseudo elements with inline
// styles, so, we're dynamically creating a <style> tag with the rule.
if (typeof document !== 'undefined') {
    var textAsPseudoElement = '[data-text-as-pseudo-element]::before { content: attr(data-text-as-pseudo-element); }';
    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(textAsPseudoElement));
    document.head.appendChild(style);
}
var _styles = {
    defaultStyle: {
        position: 'relative',
        display: 'inline',
        flexGrow: 0,
        flexShrink: 0,
        overflow: 'hidden',
        whiteSpace: 'pre-wrap',
        overflowWrap: 'break-word',
        msHyphens: 'auto'
    },
    ellipsis: {
        position: 'relative',
        display: 'inline',
        flexGrow: 0,
        flexShrink: 0,
        overflow: 'hidden',
        whiteSpace: 'pre',
        textOverflow: 'ellipsis'
    }
};
var Text = (function (_super) {
    __extends(Text, _super);
    function Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Text.prototype.getChildContext = function () {
        // Let descendant Types components know that their nearest Types ancestor is an Types.Text.
        // Because they're in an Types.Text, they should style themselves specially for appearing
        // inline with text.
        return { isRxParentAText: true };
    };
    Text.prototype.render = function () {
        // Handle special case
        if (typeof this.props.children === 'string' && this.props.children === '\n') {
            return React.createElement("br", null);
        }
        var isAriaHidden = AccessibilityUtil_1.default.isHidden(this.props.importantForAccessibility);
        if (this.props.selectable || typeof this.props.children !== 'string') {
            return (React.createElement("div", { style: this._getStyles(), "aria-hidden": isAriaHidden, onClick: this.props.onPress }, this.props.children));
        }
        else {
            // user-select CSS property doesn't prevent the text from being copied to clipboard.
            // To avoid getting to clipboard, the text from data-text-as-pseudo-element attribute
            // will be displayed as pseudo element.
            return (React.createElement("div", { style: this._getStyles(), "aria-hidden": isAriaHidden, onClick: this.props.onPress, "data-text-as-pseudo-element": this.props.children }));
        }
    };
    Text.prototype._getStyles = function () {
        // There's no way in HTML to properly handle numberOfLines > 1,
        // but we can correctly handle the common case where numberOfLines is 1.
        var combinedStyles = Styles_1.default.combine(this.props.numberOfLines === 1 ?
            _styles.ellipsis : _styles.defaultStyle, this.props.style);
        // Handle cursor styles
        if (this.props.selectable) {
            combinedStyles['cursor'] = 'text';
            combinedStyles['userSelect'] = 'text';
            combinedStyles['WebkitUserSelect'] = 'text';
            combinedStyles['MozUserSelect'] = 'text';
            combinedStyles['msUserSelect'] = 'text';
        }
        else {
            combinedStyles['cursor'] = 'inherit';
        }
        if (this.props.onPress) {
            combinedStyles['cursor'] = 'pointer';
        }
        return combinedStyles;
    };
    Text.prototype.blur = function () {
        var el = ReactDOM.findDOMNode(this);
        if (el) {
            el.blur();
        }
    };
    Text.prototype.focus = function () {
        var el = ReactDOM.findDOMNode(this);
        if (el) {
            el.focus();
        }
    };
    return Text;
}(RX.Text));
Text.childContextTypes = {
    isRxParentAText: PropTypes.bool.isRequired
};
exports.Text = Text;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Text;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* TextInput.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation of the cross-platform TextInput abstraction.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = __webpack_require__(3);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(0);
var RX = __webpack_require__(1);
var Styles_1 = __webpack_require__(8);
var FocusManager_1 = __webpack_require__(34);
var _styles = {
    defaultStyle: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 0,
        overflowX: 'hidden',
        overflowY: 'auto',
        alignItems: 'stretch'
    }
};
var TextInput = (function (_super) {
    __extends(TextInput, _super);
    function TextInput(props) {
        var _this = _super.call(this, props) || this;
        _this._selectionStart = 0;
        _this._selectionEnd = 0;
        _this._onPaste = function (e) {
            if (_this.props.onPaste) {
                _this.props.onPaste(e);
            }
            _this._checkSelectionChanged();
        };
        _this._onInput = function (e) {
            if (!e.defaultPrevented) {
                var el = ReactDOM.findDOMNode(_this);
                if (el) {
                    // Has the input value changed?
                    var value = el.value || '';
                    if (_this.state.inputValue !== value) {
                        // If the parent component didn't specify a value, we'll keep
                        // track of the modified value.
                        if (_this.props.value === undefined) {
                            _this.setState({
                                inputValue: value
                            });
                        }
                        if (_this.props.onChangeText) {
                            _this.props.onChangeText(value);
                        }
                    }
                    _this._checkSelectionChanged();
                }
            }
        };
        _this._checkSelectionChanged = function () {
            var el = ReactDOM.findDOMNode(_this);
            if (el) {
                if (_this._selectionStart !== el.selectionStart || _this._selectionEnd !== el.selectionEnd) {
                    _this._selectionStart = el.selectionStart;
                    _this._selectionEnd = el.selectionEnd;
                    if (_this.props.onSelectionChange) {
                        _this.props.onSelectionChange(_this._selectionStart, _this._selectionEnd);
                    }
                }
            }
        };
        _this._onKeyDown = function (e) {
            // Generate a "submit editing" event if the user
            // pressed enter or return.
            if (e.keyCode === 13 && (!_this.props.multiline || _this.props.blurOnSubmit)) {
                if (_this.props.onSubmitEditing) {
                    _this.props.onSubmitEditing();
                }
                if (_this.props.blurOnSubmit) {
                    _this.blur();
                }
            }
            if (_this.props.onKeyPress) {
                _this.props.onKeyPress(e);
            }
            _this._checkSelectionChanged();
        };
        _this._onScroll = function (e) {
            if (_this.props.onScroll) {
                var _a = e.target, scrollLeft = _a.scrollLeft, scrollTop = _a.scrollTop;
                _this.props.onScroll(scrollLeft, scrollTop);
            }
        };
        _this._focus = function () {
            var el = ReactDOM.findDOMNode(_this);
            if (el) {
                el.focus();
            }
        };
        _this.state = {
            inputValue: props.value || props.defaultValue || ''
        };
        return _this;
    }
    TextInput.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.value !== undefined && nextProps.value !== this.state.inputValue) {
            this.setState({
                inputValue: nextProps.value || ''
            });
        }
    };
    TextInput.prototype.componentDidMount = function () {
        if (this.props.autoFocus) {
            this.focus();
        }
    };
    TextInput.prototype.render = function () {
        var combinedStyles = Styles_1.default.combine(_styles.defaultStyle, this.props.style);
        // Always hide the outline and border.
        combinedStyles = _.extend({
            outline: 'none',
            border: 'none',
            resize: 'none'
        }, combinedStyles);
        // By default, the control is editable.
        var editable = (this.props.editable !== undefined ? this.props.editable : true);
        var spellCheck = (this.props.spellCheck !== undefined ? this.props.spellCheck : this.props.autoCorrect);
        // Use a textarea for multi-line and a regular input for single-line.
        if (this.props.multiline) {
            return (React.createElement("textarea", { style: combinedStyles, value: this.state.inputValue, autoCorrect: this.props.autoCorrect, spellCheck: spellCheck, disabled: !editable, maxLength: this.props.maxLength, placeholder: this.props.placeholder, onInput: this._onInput, onKeyDown: this._onKeyDown, onKeyUp: this._checkSelectionChanged, onFocus: this.props.onFocus, onBlur: this.props.onBlur, onMouseDown: this._checkSelectionChanged, onMouseUp: this._checkSelectionChanged, onPaste: this._onPaste, onScroll: this._onScroll, "aria-label": this.props.accessibilityLabel }));
        }
        else {
            return (React.createElement("input", { style: combinedStyles, value: this.state.inputValue, autoCorrect: this.props.autoCorrect, spellCheck: spellCheck, disabled: !editable, maxLength: this.props.maxLength, placeholder: this.props.placeholder, onInput: this._onInput, onKeyDown: this._onKeyDown, onKeyUp: this._checkSelectionChanged, onFocus: this.props.onFocus, onBlur: this.props.onBlur, onMouseDown: this._checkSelectionChanged, onMouseUp: this._checkSelectionChanged, onPaste: this._onPaste, "aria-label": this.props.accessibilityLabel, type: this.props.secureTextEntry ? 'password' : 'text' }));
        }
    };
    TextInput.prototype.blur = function () {
        var el = ReactDOM.findDOMNode(this);
        if (el) {
            el.blur();
        }
    };
    TextInput.prototype.focus = function () {
        this._focus();
    };
    TextInput.prototype.setAccessibilityFocus = function () {
        this._focus();
    };
    TextInput.prototype.isFocused = function () {
        var el = ReactDOM.findDOMNode(this);
        if (el) {
            return document.activeElement === el;
        }
        return false;
    };
    TextInput.prototype.selectAll = function () {
        var el = ReactDOM.findDOMNode(this);
        if (el) {
            el.select();
        }
    };
    TextInput.prototype.selectRange = function (start, end) {
        var el = ReactDOM.findDOMNode(this);
        if (el) {
            el.setSelectionRange(start, end);
        }
    };
    TextInput.prototype.getSelectionRange = function () {
        var range = {
            start: 0,
            end: 0
        };
        var el = ReactDOM.findDOMNode(this);
        if (el) {
            range.start = el.selectionStart;
            range.end = el.selectionEnd;
        }
        return range;
    };
    TextInput.prototype.setValue = function (value) {
        var inputValue = value || '';
        if (this.state.inputValue !== inputValue) {
            // It's important to set the actual value in the DOM immediately. This allows us to call other related methods
            // like selectRange synchronously afterward.
            var el = ReactDOM.findDOMNode(this);
            if (el) {
                el.value = inputValue;
            }
            this.setState({
                inputValue: inputValue
            });
            if (this.props.onChangeText) {
                this.props.onChangeText(value);
            }
        }
    };
    return TextInput;
}(RX.TextInput));
exports.TextInput = TextInput;
FocusManager_1.applyFocusableComponentMixin(TextInput);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TextInput;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* UserInterface.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation of the ReactXP interfaces related to
* UI (layout measurements, etc.).
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ReactDOM = __webpack_require__(0);
var ScrollViewConfig_1 = __webpack_require__(142);
var SyncTasks = __webpack_require__(20);
var FrontLayerViewManager_1 = __webpack_require__(81);
var RX = __webpack_require__(1);
var UserInterface = (function (_super) {
    __extends(UserInterface, _super);
    function UserInterface() {
        var _this = _super.call(this) || this;
        _this._isNavigatingWithKeyboard = false;
        _this._keyboardNavigationStateChanged = function (isNavigatingWithKeyboard) {
            _this._isNavigatingWithKeyboard = isNavigatingWithKeyboard;
        };
        _this.keyboardNavigationEvent.subscribe(_this._keyboardNavigationStateChanged);
        return _this;
    }
    UserInterface.prototype.measureLayoutRelativeToWindow = function (component) {
        var deferred = SyncTasks.Defer();
        var componentDomNode = ReactDOM.findDOMNode(component);
        if (!componentDomNode) {
            deferred.reject('measureLayoutRelativeToWindow failed');
        }
        else {
            var componentBoundingRect = componentDomNode.getBoundingClientRect();
            deferred.resolve({
                x: componentBoundingRect.left,
                y: componentBoundingRect.top,
                width: componentBoundingRect.width,
                height: componentBoundingRect.height
            });
        }
        return deferred.promise();
    };
    UserInterface.prototype.measureLayoutRelativeToAncestor = function (component, ancestor) {
        var deferred = SyncTasks.Defer();
        var componentDomNode = ReactDOM.findDOMNode(component);
        var ancestorDomNode = ReactDOM.findDOMNode(ancestor);
        if (!componentDomNode || !ancestorDomNode) {
            deferred.reject('measureLayoutRelativeToAncestor failed');
        }
        else {
            var componentBoundingRect = componentDomNode.getBoundingClientRect();
            var ancestorBoundingRect = ancestorDomNode.getBoundingClientRect();
            deferred.resolve({
                x: componentBoundingRect.left - ancestorBoundingRect.left,
                y: componentBoundingRect.top - ancestorBoundingRect.top,
                width: componentBoundingRect.width,
                height: componentBoundingRect.height
            });
        }
        return deferred.promise();
    };
    UserInterface.prototype.measureWindow = function () {
        return {
            x: 0,
            y: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    };
    UserInterface.prototype.getContentSizeMultiplier = function () {
        // Browsers don't support font-specific scaling. They scale all of their
        // UI elements the same.
        return SyncTasks.Resolved(1);
    };
    UserInterface.prototype.getMaxContentSizeMultiplier = function () {
        // Browsers don't support font-specific scaling. They scale all of their
        // UI elements the same.
        return SyncTasks.Resolved(0);
    };
    UserInterface.prototype.setMaxContentSizeMultiplier = function (maxContentSizeMultiplier) {
        // Browsers don't support font-specific scaling. They scale all of their
        // UI elements the same.
        // No-op.
    };
    UserInterface.prototype.isHighPixelDensityScreen = function () {
        return this.getPixelRatio() > 1;
    };
    UserInterface.prototype.getPixelRatio = function () {
        var pixelRatio = 0;
        if (window.devicePixelRatio) {
            pixelRatio = window.devicePixelRatio;
        }
        return pixelRatio;
    };
    UserInterface.prototype.setMainView = function (element) {
        FrontLayerViewManager_1.default.setMainView(element);
    };
    UserInterface.prototype.useCustomScrollbars = function (enable) {
        if (enable === void 0) { enable = true; }
        ScrollViewConfig_1.default.setUseCustomScrollbars(enable);
    };
    UserInterface.prototype.dismissKeyboard = function () {
        // Nothing to do
    };
    UserInterface.prototype.enableTouchLatencyEvents = function (latencyThresholdMs) {
        // Nothing to do
    };
    UserInterface.prototype.evaluateTouchLatency = function (e) {
        // Nothing to do
    };
    UserInterface.prototype.isNavigatingWithKeyboard = function () {
        return this._isNavigatingWithKeyboard;
    };
    return UserInterface;
}(RX.UserInterface));
exports.UserInterface = UserInterface;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new UserInterface();


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* executeTransition.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Provides a convenient API for applying a CSS transition to a DOM element and
* notifying when the transition is complete.
*/

var _ = __webpack_require__(3);
// Convenient API for applying a CSS transition to a DOM element. Calls `done` when the transition is completed.
function executeTransition(element, transitions, done) {
    var longestDurationPlusDelay = 0;
    var longestDurationProperty = '';
    var cssTransitions = [];
    _.each(transitions, function (transition) {
        var property = transition.property;
        var duration = transition.duration;
        var timing = transition.timing === undefined ? 'linear' : transition.timing;
        var delay = transition.delay === undefined ? 0 : transition.delay;
        var from = transition.from;
        if (duration + delay > longestDurationPlusDelay) {
            longestDurationPlusDelay = duration + delay;
            longestDurationProperty = property;
        }
        // Initial state
        element.style[property] = from;
        // Resolve styles. This is a trick to force the browser to refresh the
        // computed styles. Without this, it won't pick up the new "from" value
        // that we just set above.
        // tslint:disable-next-line
        getComputedStyle(element).opacity;
        // TODO: Cross-browser equivalent of 'transition' style (e.g. vendor prefixed).
        cssTransitions.push(duration + 'ms ' + property + ' ' + timing + ' ' + delay + 'ms');
    });
    element.style.transition = cssTransitions.join(', ');
    var finish;
    var onTransitionEnd = function (ev) {
        if (ev.target === element && ev.propertyName === longestDurationProperty) {
            finish();
        }
    };
    // TODO: Cross-browser equivalent of 'transitionEnd' event (e.g. vendor prefixed).
    element.addEventListener('webkitTransitionEnd', onTransitionEnd);
    element.addEventListener('transitionEnd', onTransitionEnd);
    var timeoutId = 0;
    var didFinish = false;
    finish = function () {
        if (!didFinish) {
            clearTimeout(timeoutId);
            // TODO: Cross-browser equivalent of 'transitionEnd' event (e.g. vendor prefixed).
            element.removeEventListener('webkitTransitionEnd', onTransitionEnd);
            element.removeEventListener('transitionEnd', onTransitionEnd);
            // Only clean the transition if we are ending the same transition it was initially set.
            // There are cases where transitions may be overriden before the transition before ends.
            if (element.dataset['transitionId'] === timeoutId.toString()) {
                delete element.dataset['transitionId'];
                element.style.transition = 'none';
            }
            didFinish = true;
            done();
        }
    };
    // Watchdog timeout for cases where transitionEnd event doesn't fire.
    timeoutId = window.setTimeout(finish, longestDurationPlusDelay + 10);
    element.dataset['transitionId'] = timeoutId.toString();
    // On webkit browsers, we need to defer the setting of the actual properties
    // for some reason.
    _.defer(function () {
        // Set the "to" values.
        _.each(transitions, function (transition) {
            var property = transition.property;
            var to = transition.to;
            element.style[property] = to;
        });
    });
}
exports.executeTransition = executeTransition;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = executeTransition;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* restyleForInlineText.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* When a ReactXP component appears as a child of an RX.Text, it needs to be styled
* specially so that it appears inline with the text rather than introducing line
* breaks.
*
* This utility restyles the component that is passed to it as inline so it flows
* with the text. When a ReactXP component is a child of a text, pass the return value
* of its render method to this utility. See RX.View for an example.
*/

var _ = __webpack_require__(3);
var assert = __webpack_require__(55);
var React = __webpack_require__(0);
function restyleForInlineText(reactElement) {
    var style = reactElement.props['style'];
    assert(style &&
        style['width'] !== undefined &&
        style['height'] !== undefined, 'Children of an <RX.Text> must have a defined height and width');
    /*
      We'll use display: inline-block for inline element because
      inline-flex will introduce new lines into the text that is
      copied to the clipboard. In most our use-cases inline-block
      is fine and should behave same as inline-flex.

      Example:
        <flex>
          <inline> // InlineView
            <inline text node>
            <inline-flex> // set by this function - will introduce new line when copied
              <inline transparent text with emoticon text representation>
              <inline-block sprite clipping element>
                <inline-block sprite background texture>
            <inline text node>

        result into selection: "[text node][transparent text][new line][text node]"
        with inline-block this will properly resolve as "[text node][transparent text][text node]"
    */
    return React.cloneElement(reactElement, {
        style: _.assign({}, style, {
            display: 'inline-block',
            // Reset the line height so the value from outside
            // the inlined item doesn't cascade into this element.
            lineHeight: 'normal'
        })
    });
}
module.exports = restyleForInlineText;


/***/ }),
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 174 */,
/* 175 */,
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(18),
    root = __webpack_require__(10);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(245),
    hashDelete = __webpack_require__(246),
    hashGet = __webpack_require__(247),
    hashHas = __webpack_require__(248),
    hashSet = __webpack_require__(249);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(18),
    root = __webpack_require__(10);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(18),
    root = __webpack_require__(10);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 180 */
/***/ (function(module, exports) {

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

module.exports = addMapEntry;


/***/ }),
/* 181 */
/***/ (function(module, exports) {

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

module.exports = addSetEntry;


/***/ }),
/* 182 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(103);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 184 */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),
/* 185 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 186 */
/***/ (function(module, exports) {

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(14),
    keys = __webpack_require__(16);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(14),
    keysIn = __webpack_require__(33);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),
/* 189 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

module.exports = baseClamp;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 191 */
/***/ (function(module, exports) {

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * The base implementation of `_.delay` and `_.defer` which accepts `args`
 * to provide to `func`.
 *
 * @private
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {Array} args The arguments to provide to `func`.
 * @returns {number|Object} Returns the timer id or timeout object.
 */
function baseDelay(func, wait, args) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return setTimeout(function() { func.apply(undefined, args); }, wait);
}

module.exports = baseDelay;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(23);

/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index],
        current = iteratee(value);

    if (current != null && (computed === undefined
          ? (current === current && !isSymbol(current))
          : comparator(current, computed)
        )) {
      var computed = current,
          result = value;
    }
  }
  return result;
}

module.exports = baseExtremum;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(63);

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;


/***/ }),
/* 194 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */
function baseGt(value, other) {
  return value > other;
}

module.exports = baseGt;


/***/ }),
/* 195 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 196 */
/***/ (function(module, exports) {

/**
 * This function is like `baseIndexOf` except that it accepts a comparator.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOfWith(array, value, fromIndex, comparator) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (comparator(array[index], value)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseIndexOfWith;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(17),
    isObjectLike = __webpack_require__(15);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(38),
    equalArrays = __webpack_require__(112),
    equalByTag = __webpack_require__(237),
    equalObjects = __webpack_require__(238),
    getTag = __webpack_require__(74),
    isArray = __webpack_require__(4),
    isBuffer = __webpack_require__(32),
    isTypedArray = __webpack_require__(46);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(38),
    baseIsEqual = __webpack_require__(67);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 200 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(76),
    isMasked = __webpack_require__(254),
    isObject = __webpack_require__(7),
    toSource = __webpack_require__(125);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(17),
    isLength = __webpack_require__(77),
    isObjectLike = __webpack_require__(15);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7),
    isPrototype = __webpack_require__(28),
    nativeKeysIn = __webpack_require__(267);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(199),
    getMatchData = __webpack_require__(240),
    matchesStrictComparable = __webpack_require__(121);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(67),
    get = __webpack_require__(129),
    hasIn = __webpack_require__(296),
    isKey = __webpack_require__(75),
    isStrictComparable = __webpack_require__(119),
    matchesStrictComparable = __webpack_require__(121),
    toKey = __webpack_require__(29);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(38),
    assignMergeValue = __webpack_require__(99),
    baseFor = __webpack_require__(100),
    baseMergeDeep = __webpack_require__(207),
    isObject = __webpack_require__(7),
    keysIn = __webpack_require__(33);

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(99),
    cloneBuffer = __webpack_require__(109),
    cloneTypedArray = __webpack_require__(110),
    copyArray = __webpack_require__(70),
    initCloneObject = __webpack_require__(117),
    isArguments = __webpack_require__(31),
    isArray = __webpack_require__(4),
    isArrayLikeObject = __webpack_require__(130),
    isBuffer = __webpack_require__(32),
    isFunction = __webpack_require__(76),
    isObject = __webpack_require__(7),
    isPlainObject = __webpack_require__(131),
    isTypedArray = __webpack_require__(46),
    toPlainObject = __webpack_require__(317);

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = object[key],
      srcValue = source[key],
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(26),
    baseIteratee = __webpack_require__(13),
    baseMap = __webpack_require__(105),
    baseSortBy = __webpack_require__(216),
    baseUnary = __webpack_require__(68),
    compareMultiple = __webpack_require__(226),
    identity = __webpack_require__(22);

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  var index = -1;
  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),
/* 209 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(66);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 211 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(26),
    baseIndexOf = __webpack_require__(103),
    baseIndexOfWith = __webpack_require__(196),
    baseUnary = __webpack_require__(68),
    copyArray = __webpack_require__(70);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * The base implementation of `_.pullAllBy` without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns `array`.
 */
function basePullAll(array, values, iteratee, comparator) {
  var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
      index = -1,
      length = values.length,
      seen = array;

  if (array === values) {
    values = copyArray(values);
  }
  if (iteratee) {
    seen = arrayMap(array, baseUnary(iteratee));
  }
  while (++index < length) {
    var fromIndex = 0,
        value = values[index],
        computed = iteratee ? iteratee(value) : value;

    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
      if (seen !== array) {
        splice.call(seen, fromIndex, 1);
      }
      splice.call(array, fromIndex, 1);
    }
  }
  return array;
}

module.exports = basePullAll;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

var baseUnset = __webpack_require__(107),
    isIndex = __webpack_require__(43);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * The base implementation of `_.pullAt` without support for individual
 * indexes or capturing the removed elements.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {number[]} indexes The indexes of elements to remove.
 * @returns {Array} Returns `array`.
 */
function basePullAt(array, indexes) {
  var length = array ? indexes.length : 0,
      lastIndex = length - 1;

  while (length--) {
    var index = indexes[length];
    if (length == lastIndex || index !== previous) {
      var previous = index;
      if (isIndex(index)) {
        splice.call(array, index, 1);
      } else {
        baseUnset(array, index);
      }
    }
  }
  return array;
}

module.exports = basePullAt;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(285),
    defineProperty = __webpack_require__(111),
    identity = __webpack_require__(22);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 215 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 216 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),
/* 217 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(94),
    arrayIncludes = __webpack_require__(183),
    arrayIncludesWith = __webpack_require__(184),
    cacheHas = __webpack_require__(108),
    createSet = __webpack_require__(234),
    setToArray = __webpack_require__(45);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(22);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(69);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var addMapEntry = __webpack_require__(180),
    arrayReduce = __webpack_require__(60),
    mapToArray = __webpack_require__(120);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

module.exports = cloneMap;


/***/ }),
/* 222 */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var addSetEntry = __webpack_require__(181),
    arrayReduce = __webpack_require__(60),
    setToArray = __webpack_require__(45);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

module.exports = cloneSet;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(21);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(23);

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var compareAscending = __webpack_require__(225);

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(14),
    getSymbols = __webpack_require__(73);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(14),
    getSymbolsIn = __webpack_require__(116);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(10);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(11);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 231 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(60),
    deburr = __webpack_require__(287),
    words = __webpack_require__(319);

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(13),
    isArrayLike = __webpack_require__(11),
    keys = __webpack_require__(16);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(93),
    noop = __webpack_require__(306),
    setToArray = __webpack_require__(45);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var isPlainObject = __webpack_require__(131);

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(211);

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(21),
    Uint8Array = __webpack_require__(95),
    eq = __webpack_require__(30),
    equalArrays = __webpack_require__(112),
    mapToArray = __webpack_require__(120),
    setToArray = __webpack_require__(45);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(114);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(128),
    overRest = __webpack_require__(123),
    setToString = __webpack_require__(124);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(119),
    keys = __webpack_require__(16);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(21);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 242 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(41),
    isArguments = __webpack_require__(31),
    isArray = __webpack_require__(4),
    isIndex = __webpack_require__(43),
    isLength = __webpack_require__(77),
    toKey = __webpack_require__(29);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 244 */
/***/ (function(module, exports) {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(44);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 246 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(44);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(44);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(44);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 250 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(69),
    cloneDataView = __webpack_require__(220),
    cloneMap = __webpack_require__(221),
    cloneRegExp = __webpack_require__(222),
    cloneSet = __webpack_require__(223),
    cloneSymbol = __webpack_require__(224),
    cloneTypedArray = __webpack_require__(110);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(21),
    isArguments = __webpack_require__(31),
    isArray = __webpack_require__(4);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 253 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(229);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 255 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(39);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(39);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(39);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(39);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(177),
    ListCache = __webpack_require__(37),
    Map = __webpack_require__(57);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(42);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(42);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(42);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(42);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(132);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(122);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 267 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(113);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(53)(module)))

/***/ }),
/* 269 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(66),
    baseSlice = __webpack_require__(215);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),
/* 271 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 272 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 273 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(37);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 275 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 276 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 277 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(37),
    Map = __webpack_require__(57),
    MapCache = __webpack_require__(58);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 279 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(265);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 281 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)',
    rsOrdUpper = '\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(61),
    copyObject = __webpack_require__(14),
    createAssigner = __webpack_require__(71),
    isArrayLike = __webpack_require__(11),
    isPrototype = __webpack_require__(28),
    keys = __webpack_require__(16);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(14),
    createAssigner = __webpack_require__(71),
    keysIn = __webpack_require__(33);

/**
 * This method is like `_.assign` except that it iterates over own and
 * inherited source properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extend
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assign
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assignIn({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
 */
var assignIn = createAssigner(function(object, source) {
  copyObject(source, keysIn(source), object);
});

module.exports = assignIn;


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(62);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),
/* 285 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7),
    now = __webpack_require__(307),
    toNumber = __webpack_require__(134);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

var deburrLetter = __webpack_require__(236),
    toString = __webpack_require__(47);

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

var baseDelay = __webpack_require__(191),
    baseRest = __webpack_require__(27);

/**
 * Defers invoking the `func` until the current call stack has cleared. Any
 * additional arguments are provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to defer.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * _.defer(function(text) {
 *   console.log(text);
 * }, 'deferred');
 * // => Logs 'deferred' after one millisecond.
 */
var defer = baseRest(function(func, args) {
  return baseDelay(func, 1, args);
});

module.exports = defer;


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(295);


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var baseClamp = __webpack_require__(189),
    baseToString = __webpack_require__(106),
    toInteger = __webpack_require__(78),
    toString = __webpack_require__(47);

/**
 * Checks if `string` ends with the given target string.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {string} [target] The string to search for.
 * @param {number} [position=string.length] The position to search up to.
 * @returns {boolean} Returns `true` if `string` ends with `target`,
 *  else `false`.
 * @example
 *
 * _.endsWith('abc', 'c');
 * // => true
 *
 * _.endsWith('abc', 'b');
 * // => false
 *
 * _.endsWith('abc', 'b', 2);
 * // => true
 */
function endsWith(string, target, position) {
  string = toString(string);
  target = baseToString(target);

  var length = string.length;
  position = position === undefined
    ? length
    : baseClamp(toInteger(position), 0, length);

  var end = position;
  position -= target.length;
  return position >= 0 && string.slice(position, end) == target;
}

module.exports = endsWith;


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(283);


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(64),
    baseIteratee = __webpack_require__(13),
    toInteger = __webpack_require__(78);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(233),
    findLastIndex = __webpack_require__(294);

/**
 * This method is like `_.find` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=collection.length-1] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * _.findLast([1, 2, 3, 4], function(n) {
 *   return n % 2 == 1;
 * });
 * // => 3
 */
var findLast = createFind(findLastIndex);

module.exports = findLast;


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(64),
    baseIteratee = __webpack_require__(13),
    toInteger = __webpack_require__(78);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * This method is like `_.findIndex` except that it iterates over elements
 * of `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ];
 *
 * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
 * // => 2
 *
 * // The `_.matches` iteratee shorthand.
 * _.findLastIndex(users, { 'user': 'barney', 'active': true });
 * // => 0
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findLastIndex(users, ['active', false]);
 * // => 2
 *
 * // The `_.property` iteratee shorthand.
 * _.findLastIndex(users, 'active');
 * // => 0
 */
function findLastIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = length - 1;
  if (fromIndex !== undefined) {
    index = toInteger(fromIndex);
    index = fromIndex < 0
      ? nativeMax(length + index, 0)
      : nativeMin(index, length - 1);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index, true);
}

module.exports = findLastIndex;


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(96),
    baseEach = __webpack_require__(63),
    castFunction = __webpack_require__(219),
    isArray = __webpack_require__(4);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(195),
    hasPath = __webpack_require__(243);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(104),
    getTag = __webpack_require__(74),
    isArguments = __webpack_require__(31),
    isArray = __webpack_require__(4),
    isArrayLike = __webpack_require__(11),
    isBuffer = __webpack_require__(32),
    isPrototype = __webpack_require__(28),
    isTypedArray = __webpack_require__(46);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(67);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(17),
    isObjectLike = __webpack_require__(15);

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

var createCompounder = __webpack_require__(232);

/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @example
 *
 * _.kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * _.kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * _.kebabCase('__FOO_BAR__');
 * // => 'foo-bar'
 */
var kebabCase = createCompounder(function(result, word, index) {
  return result + (index ? '-' : '') + word.toLowerCase();
});

module.exports = kebabCase;


/***/ }),
/* 301 */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(26),
    baseIteratee = __webpack_require__(13),
    baseMap = __webpack_require__(105),
    isArray = __webpack_require__(4);

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(40),
    baseForOwn = __webpack_require__(101),
    baseIteratee = __webpack_require__(13);

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

var baseExtremum = __webpack_require__(192),
    baseGt = __webpack_require__(194),
    identity = __webpack_require__(22);

/**
 * Computes the maximum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * _.max([4, 2, 8, 6]);
 * // => 8
 *
 * _.max([]);
 * // => undefined
 */
function max(array) {
  return (array && array.length)
    ? baseExtremum(array, identity, baseGt)
    : undefined;
}

module.exports = max;


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(206),
    createAssigner = __webpack_require__(71);

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),
/* 306 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(10);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(26),
    baseClone = __webpack_require__(62),
    baseUnset = __webpack_require__(107),
    castPath = __webpack_require__(41),
    copyObject = __webpack_require__(14),
    customOmitClone = __webpack_require__(235),
    flatRest = __webpack_require__(239),
    getAllKeysIn = __webpack_require__(115);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(209),
    basePropertyDeep = __webpack_require__(210),
    isKey = __webpack_require__(75),
    toKey = __webpack_require__(29);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(27),
    pullAll = __webpack_require__(311);

/**
 * Removes all given values from `array` using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
 * to remove elements from an array by predicate.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {...*} [values] The values to remove.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 *
 * _.pull(array, 'a', 'c');
 * console.log(array);
 * // => ['b', 'b']
 */
var pull = baseRest(pullAll);

module.exports = pull;


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

var basePullAll = __webpack_require__(212);

/**
 * This method is like `_.pull` except that it accepts an array of values to remove.
 *
 * **Note:** Unlike `_.difference`, this method mutates `array`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 *
 * _.pullAll(array, ['a', 'c']);
 * console.log(array);
 * // => ['b', 'b']
 */
function pullAll(array, values) {
  return (array && array.length && values && values.length)
    ? basePullAll(array, values)
    : array;
}

module.exports = pullAll;


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(13),
    basePullAt = __webpack_require__(213);

/**
 * Removes all elements from `array` that `predicate` returns truthy for
 * and returns an array of the removed elements. The predicate is invoked
 * with three arguments: (value, index, array).
 *
 * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
 * to pull elements from an array by value.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new array of removed elements.
 * @example
 *
 * var array = [1, 2, 3, 4];
 * var evens = _.remove(array, function(n) {
 *   return n % 2 == 0;
 * });
 *
 * console.log(array);
 * // => [1, 3]
 *
 * console.log(evens);
 * // => [2, 4]
 */
function remove(array, predicate) {
  var result = [];
  if (!(array && array.length)) {
    return result;
  }
  var index = -1,
      indexes = [],
      length = array.length;

  predicate = baseIteratee(predicate, 3);
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result.push(value);
      indexes.push(index);
    }
  }
  basePullAt(array, indexes);
  return result;
}

module.exports = remove;


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(65),
    baseOrderBy = __webpack_require__(208),
    baseRest = __webpack_require__(27),
    isIterateeCall = __webpack_require__(118);

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;


/***/ }),
/* 314 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(286),
    isObject = __webpack_require__(7);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(134);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(14),
    keysIn = __webpack_require__(33);

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(65),
    baseRest = __webpack_require__(27),
    baseUniq = __webpack_require__(218),
    isArrayLikeObject = __webpack_require__(130);

/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */
var union = baseRest(function(arrays) {
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
});

module.exports = union;


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

var asciiWords = __webpack_require__(186),
    hasUnicodeWord = __webpack_require__(244),
    toString = __webpack_require__(47),
    unicodeWords = __webpack_require__(281);

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;


/***/ }),
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

!function() {
    'use strict';
    function VNode() {}
    function h(nodeName, attributes) {
        var lastSimple, child, simple, i, children = EMPTY_CHILDREN;
        for (i = arguments.length; i-- > 2; ) stack.push(arguments[i]);
        if (attributes && null != attributes.children) {
            if (!stack.length) stack.push(attributes.children);
            delete attributes.children;
        }
        while (stack.length) if ((child = stack.pop()) && void 0 !== child.pop) for (i = child.length; i--; ) stack.push(child[i]); else {
            if (child === !0 || child === !1) child = null;
            if (simple = 'function' != typeof nodeName) if (null == child) child = ''; else if ('number' == typeof child) child = String(child); else if ('string' != typeof child) simple = !1;
            if (simple && lastSimple) children[children.length - 1] += child; else if (children === EMPTY_CHILDREN) children = [ child ]; else children.push(child);
            lastSimple = simple;
        }
        var p = new VNode();
        p.nodeName = nodeName;
        p.children = children;
        p.attributes = null == attributes ? void 0 : attributes;
        p.key = null == attributes ? void 0 : attributes.key;
        if (void 0 !== options.vnode) options.vnode(p);
        return p;
    }
    function extend(obj, props) {
        for (var i in props) obj[i] = props[i];
        return obj;
    }
    function cloneElement(vnode, props) {
        return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
    }
    function enqueueRender(component) {
        if (!component.__d && (component.__d = !0) && 1 == items.push(component)) (options.debounceRendering || setTimeout)(rerender);
    }
    function rerender() {
        var p, list = items;
        items = [];
        while (p = list.pop()) if (p.__d) renderComponent(p);
    }
    function isSameNodeType(node, vnode, hydrating) {
        if ('string' == typeof vnode || 'number' == typeof vnode) return void 0 !== node.splitText;
        if ('string' == typeof vnode.nodeName) return !node._componentConstructor && isNamedNode(node, vnode.nodeName); else return hydrating || node._componentConstructor === vnode.nodeName;
    }
    function isNamedNode(node, nodeName) {
        return node.__n === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
    }
    function getNodeProps(vnode) {
        var props = extend({}, vnode.attributes);
        props.children = vnode.children;
        var defaultProps = vnode.nodeName.defaultProps;
        if (void 0 !== defaultProps) for (var i in defaultProps) if (void 0 === props[i]) props[i] = defaultProps[i];
        return props;
    }
    function createNode(nodeName, isSvg) {
        var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
        node.__n = nodeName;
        return node;
    }
    function removeNode(node) {
        if (node.parentNode) node.parentNode.removeChild(node);
    }
    function setAccessor(node, name, old, value, isSvg) {
        if ('className' === name) name = 'class';
        if ('key' === name) ; else if ('ref' === name) {
            if (old) old(null);
            if (value) value(node);
        } else if ('class' === name && !isSvg) node.className = value || ''; else if ('style' === name) {
            if (!value || 'string' == typeof value || 'string' == typeof old) node.style.cssText = value || '';
            if (value && 'object' == typeof value) {
                if ('string' != typeof old) for (var i in old) if (!(i in value)) node.style[i] = '';
                for (var i in value) node.style[i] = 'number' == typeof value[i] && IS_NON_DIMENSIONAL.test(i) === !1 ? value[i] + 'px' : value[i];
            }
        } else if ('dangerouslySetInnerHTML' === name) {
            if (value) node.innerHTML = value.__html || '';
        } else if ('o' == name[0] && 'n' == name[1]) {
            var useCapture = name !== (name = name.replace(/Capture$/, ''));
            name = name.toLowerCase().substring(2);
            if (value) {
                if (!old) node.addEventListener(name, eventProxy, useCapture);
            } else node.removeEventListener(name, eventProxy, useCapture);
            (node.__l || (node.__l = {}))[name] = value;
        } else if ('list' !== name && 'type' !== name && !isSvg && name in node) {
            setProperty(node, name, null == value ? '' : value);
            if (null == value || value === !1) node.removeAttribute(name);
        } else {
            var ns = isSvg && name !== (name = name.replace(/^xlink\:?/, ''));
            if (null == value || value === !1) if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase()); else node.removeAttribute(name); else if ('function' != typeof value) if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value); else node.setAttribute(name, value);
        }
    }
    function setProperty(node, name, value) {
        try {
            node[name] = value;
        } catch (e) {}
    }
    function eventProxy(e) {
        return this.__l[e.type](options.event && options.event(e) || e);
    }
    function flushMounts() {
        var c;
        while (c = mounts.pop()) {
            if (options.afterMount) options.afterMount(c);
            if (c.componentDidMount) c.componentDidMount();
        }
    }
    function diff(dom, vnode, context, mountAll, parent, componentRoot) {
        if (!diffLevel++) {
            isSvgMode = null != parent && void 0 !== parent.ownerSVGElement;
            hydrating = null != dom && !('__preactattr_' in dom);
        }
        var ret = idiff(dom, vnode, context, mountAll, componentRoot);
        if (parent && ret.parentNode !== parent) parent.appendChild(ret);
        if (!--diffLevel) {
            hydrating = !1;
            if (!componentRoot) flushMounts();
        }
        return ret;
    }
    function idiff(dom, vnode, context, mountAll, componentRoot) {
        var out = dom, prevSvgMode = isSvgMode;
        if (null == vnode) vnode = '';
        if ('string' == typeof vnode) {
            if (dom && void 0 !== dom.splitText && dom.parentNode && (!dom._component || componentRoot)) {
                if (dom.nodeValue != vnode) dom.nodeValue = vnode;
            } else {
                out = document.createTextNode(vnode);
                if (dom) {
                    if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                    recollectNodeTree(dom, !0);
                }
            }
            out.__preactattr_ = !0;
            return out;
        }
        if ('function' == typeof vnode.nodeName) return buildComponentFromVNode(dom, vnode, context, mountAll);
        isSvgMode = 'svg' === vnode.nodeName ? !0 : 'foreignObject' === vnode.nodeName ? !1 : isSvgMode;
        if (!dom || !isNamedNode(dom, String(vnode.nodeName))) {
            out = createNode(String(vnode.nodeName), isSvgMode);
            if (dom) {
                while (dom.firstChild) out.appendChild(dom.firstChild);
                if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
                recollectNodeTree(dom, !0);
            }
        }
        var fc = out.firstChild, props = out.__preactattr_ || (out.__preactattr_ = {}), vchildren = vnode.children;
        if (!hydrating && vchildren && 1 === vchildren.length && 'string' == typeof vchildren[0] && null != fc && void 0 !== fc.splitText && null == fc.nextSibling) {
            if (fc.nodeValue != vchildren[0]) fc.nodeValue = vchildren[0];
        } else if (vchildren && vchildren.length || null != fc) innerDiffNode(out, vchildren, context, mountAll, hydrating || null != props.dangerouslySetInnerHTML);
        diffAttributes(out, vnode.attributes, props);
        isSvgMode = prevSvgMode;
        return out;
    }
    function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
        var j, c, vchild, child, originalChildren = dom.childNodes, children = [], keyed = {}, keyedLen = 0, min = 0, len = originalChildren.length, childrenLen = 0, vlen = vchildren ? vchildren.length : 0;
        if (0 !== len) for (var i = 0; i < len; i++) {
            var _child = originalChildren[i], props = _child.__preactattr_, key = vlen && props ? _child._component ? _child._component.__k : props.key : null;
            if (null != key) {
                keyedLen++;
                keyed[key] = _child;
            } else if (props || (void 0 !== _child.splitText ? isHydrating ? _child.nodeValue.trim() : !0 : isHydrating)) children[childrenLen++] = _child;
        }
        if (0 !== vlen) for (var i = 0; i < vlen; i++) {
            vchild = vchildren[i];
            child = null;
            var key = vchild.key;
            if (null != key) {
                if (keyedLen && void 0 !== keyed[key]) {
                    child = keyed[key];
                    keyed[key] = void 0;
                    keyedLen--;
                }
            } else if (!child && min < childrenLen) for (j = min; j < childrenLen; j++) if (void 0 !== children[j] && isSameNodeType(c = children[j], vchild, isHydrating)) {
                child = c;
                children[j] = void 0;
                if (j === childrenLen - 1) childrenLen--;
                if (j === min) min++;
                break;
            }
            child = idiff(child, vchild, context, mountAll);
            if (child && child !== dom) if (i >= len) dom.appendChild(child); else if (child !== originalChildren[i]) if (child === originalChildren[i + 1]) removeNode(originalChildren[i]); else dom.insertBefore(child, originalChildren[i] || null);
        }
        if (keyedLen) for (var i in keyed) if (void 0 !== keyed[i]) recollectNodeTree(keyed[i], !1);
        while (min <= childrenLen) if (void 0 !== (child = children[childrenLen--])) recollectNodeTree(child, !1);
    }
    function recollectNodeTree(node, unmountOnly) {
        var component = node._component;
        if (component) unmountComponent(component); else {
            if (null != node.__preactattr_ && node.__preactattr_.ref) node.__preactattr_.ref(null);
            if (unmountOnly === !1 || null == node.__preactattr_) removeNode(node);
            removeChildren(node);
        }
    }
    function removeChildren(node) {
        node = node.lastChild;
        while (node) {
            var next = node.previousSibling;
            recollectNodeTree(node, !0);
            node = next;
        }
    }
    function diffAttributes(dom, attrs, old) {
        var name;
        for (name in old) if ((!attrs || null == attrs[name]) && null != old[name]) setAccessor(dom, name, old[name], old[name] = void 0, isSvgMode);
        for (name in attrs) if (!('children' === name || 'innerHTML' === name || name in old && attrs[name] === ('value' === name || 'checked' === name ? dom[name] : old[name]))) setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
    }
    function collectComponent(component) {
        var name = component.constructor.name;
        (components[name] || (components[name] = [])).push(component);
    }
    function createComponent(Ctor, props, context) {
        var inst, list = components[Ctor.name];
        if (Ctor.prototype && Ctor.prototype.render) {
            inst = new Ctor(props, context);
            Component.call(inst, props, context);
        } else {
            inst = new Component(props, context);
            inst.constructor = Ctor;
            inst.render = doRender;
        }
        if (list) for (var i = list.length; i--; ) if (list[i].constructor === Ctor) {
            inst.__b = list[i].__b;
            list.splice(i, 1);
            break;
        }
        return inst;
    }
    function doRender(props, state, context) {
        return this.constructor(props, context);
    }
    function setComponentProps(component, props, opts, context, mountAll) {
        if (!component.__x) {
            component.__x = !0;
            if (component.__r = props.ref) delete props.ref;
            if (component.__k = props.key) delete props.key;
            if (!component.base || mountAll) {
                if (component.componentWillMount) component.componentWillMount();
            } else if (component.componentWillReceiveProps) component.componentWillReceiveProps(props, context);
            if (context && context !== component.context) {
                if (!component.__c) component.__c = component.context;
                component.context = context;
            }
            if (!component.__p) component.__p = component.props;
            component.props = props;
            component.__x = !1;
            if (0 !== opts) if (1 === opts || options.syncComponentUpdates !== !1 || !component.base) renderComponent(component, 1, mountAll); else enqueueRender(component);
            if (component.__r) component.__r(component);
        }
    }
    function renderComponent(component, opts, mountAll, isChild) {
        if (!component.__x) {
            var rendered, inst, cbase, props = component.props, state = component.state, context = component.context, previousProps = component.__p || props, previousState = component.__s || state, previousContext = component.__c || context, isUpdate = component.base, nextBase = component.__b, initialBase = isUpdate || nextBase, initialChildComponent = component._component, skip = !1;
            if (isUpdate) {
                component.props = previousProps;
                component.state = previousState;
                component.context = previousContext;
                if (2 !== opts && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === !1) skip = !0; else if (component.componentWillUpdate) component.componentWillUpdate(props, state, context);
                component.props = props;
                component.state = state;
                component.context = context;
            }
            component.__p = component.__s = component.__c = component.__b = null;
            component.__d = !1;
            if (!skip) {
                rendered = component.render(props, state, context);
                if (component.getChildContext) context = extend(extend({}, context), component.getChildContext());
                var toUnmount, base, childComponent = rendered && rendered.nodeName;
                if ('function' == typeof childComponent) {
                    var childProps = getNodeProps(rendered);
                    inst = initialChildComponent;
                    if (inst && inst.constructor === childComponent && childProps.key == inst.__k) setComponentProps(inst, childProps, 1, context, !1); else {
                        toUnmount = inst;
                        component._component = inst = createComponent(childComponent, childProps, context);
                        inst.__b = inst.__b || nextBase;
                        inst.__u = component;
                        setComponentProps(inst, childProps, 0, context, !1);
                        renderComponent(inst, 1, mountAll, !0);
                    }
                    base = inst.base;
                } else {
                    cbase = initialBase;
                    toUnmount = initialChildComponent;
                    if (toUnmount) cbase = component._component = null;
                    if (initialBase || 1 === opts) {
                        if (cbase) cbase._component = null;
                        base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, !0);
                    }
                }
                if (initialBase && base !== initialBase && inst !== initialChildComponent) {
                    var baseParent = initialBase.parentNode;
                    if (baseParent && base !== baseParent) {
                        baseParent.replaceChild(base, initialBase);
                        if (!toUnmount) {
                            initialBase._component = null;
                            recollectNodeTree(initialBase, !1);
                        }
                    }
                }
                if (toUnmount) unmountComponent(toUnmount);
                component.base = base;
                if (base && !isChild) {
                    var componentRef = component, t = component;
                    while (t = t.__u) (componentRef = t).base = base;
                    base._component = componentRef;
                    base._componentConstructor = componentRef.constructor;
                }
            }
            if (!isUpdate || mountAll) mounts.unshift(component); else if (!skip) {
                flushMounts();
                if (component.componentDidUpdate) component.componentDidUpdate(previousProps, previousState, previousContext);
                if (options.afterUpdate) options.afterUpdate(component);
            }
            if (null != component.__h) while (component.__h.length) component.__h.pop().call(component);
            if (!diffLevel && !isChild) flushMounts();
        }
    }
    function buildComponentFromVNode(dom, vnode, context, mountAll) {
        var c = dom && dom._component, originalComponent = c, oldDom = dom, isDirectOwner = c && dom._componentConstructor === vnode.nodeName, isOwner = isDirectOwner, props = getNodeProps(vnode);
        while (c && !isOwner && (c = c.__u)) isOwner = c.constructor === vnode.nodeName;
        if (c && isOwner && (!mountAll || c._component)) {
            setComponentProps(c, props, 3, context, mountAll);
            dom = c.base;
        } else {
            if (originalComponent && !isDirectOwner) {
                unmountComponent(originalComponent);
                dom = oldDom = null;
            }
            c = createComponent(vnode.nodeName, props, context);
            if (dom && !c.__b) {
                c.__b = dom;
                oldDom = null;
            }
            setComponentProps(c, props, 1, context, mountAll);
            dom = c.base;
            if (oldDom && dom !== oldDom) {
                oldDom._component = null;
                recollectNodeTree(oldDom, !1);
            }
        }
        return dom;
    }
    function unmountComponent(component) {
        if (options.beforeUnmount) options.beforeUnmount(component);
        var base = component.base;
        component.__x = !0;
        if (component.componentWillUnmount) component.componentWillUnmount();
        component.base = null;
        var inner = component._component;
        if (inner) unmountComponent(inner); else if (base) {
            if (base.__preactattr_ && base.__preactattr_.ref) base.__preactattr_.ref(null);
            component.__b = base;
            removeNode(base);
            collectComponent(component);
            removeChildren(base);
        }
        if (component.__r) component.__r(null);
    }
    function Component(props, context) {
        this.__d = !0;
        this.context = context;
        this.props = props;
        this.state = this.state || {};
    }
    function render(vnode, parent, merge) {
        return diff(merge, vnode, {}, !1, parent, !1);
    }
    var options = {};
    var stack = [];
    var EMPTY_CHILDREN = [];
    var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    var items = [];
    var mounts = [];
    var diffLevel = 0;
    var isSvgMode = !1;
    var hydrating = !1;
    var components = {};
    extend(Component.prototype, {
        setState: function(state, callback) {
            var s = this.state;
            if (!this.__s) this.__s = extend({}, s);
            extend(s, 'function' == typeof state ? state(s, this.props) : state);
            if (callback) (this.__h = this.__h || []).push(callback);
            enqueueRender(this);
        },
        forceUpdate: function(callback) {
            if (callback) (this.__h = this.__h || []).push(callback);
            renderComponent(this, 2);
        },
        render: function() {}
    });
    var preact = {
        h: h,
        createElement: h,
        cloneElement: cloneElement,
        Component: Component,
        render: render,
        rerender: rerender,
        options: options
    };
    if (true) module.exports = preact; else self.preact = preact;
}();
//# sourceMappingURL=preact.js.map

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(172);
var invariant = __webpack_require__(173);
var ReactPropTypesSecret = __webpack_require__(329);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Accessibility.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Common wrapper for accessibility helper exposed from ReactXP.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SubscribableEvent = __webpack_require__(79);
var RX = __webpack_require__(1);
var Accessibility = (function (_super) {
    __extends(Accessibility, _super);
    function Accessibility() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.newAnnouncementReadyEvent = new SubscribableEvent.SubscribableEvent();
        return _this;
    }
    Accessibility.prototype.announceForAccessibility = function (announcement) {
        this.newAnnouncementReadyEvent.fire(announcement);
    };
    return Accessibility;
}(RX.Accessibility));
exports.Accessibility = Accessibility;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Accessibility;


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* AccessibilityUtil.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Common accessibility interface for platform-specific accessibility utilities.
*/

var Types = __webpack_require__(6);
exports.ImportantForAccessibilityMap = (_a = {},
    _a[Types.ImportantForAccessibility.Auto] = 'auto',
    _a[Types.ImportantForAccessibility.Yes] = 'yes',
    _a[Types.ImportantForAccessibility.No] = 'no',
    _a[Types.ImportantForAccessibility.NoHideDescendants] = 'no-hide-descendants',
    _a);
// Platform specific helpers exposed through Native-Common AccessibilityUtil. 
var AccessibilityPlatformUtil = (function () {
    function AccessibilityPlatformUtil() {
    }
    return AccessibilityPlatformUtil;
}());
exports.AccessibilityPlatformUtil = AccessibilityPlatformUtil;
var AccessibilityUtil = (function () {
    function AccessibilityUtil() {
    }
    AccessibilityUtil.prototype.isHidden = function (importantForAccessibility) {
        if (importantForAccessibility) {
            var importantForAccessibilityString = this.importantForAccessibilityToString(importantForAccessibility);
            return importantForAccessibilityString === exports.ImportantForAccessibilityMap[Types.ImportantForAccessibility.NoHideDescendants];
        }
        return undefined;
    };
    AccessibilityUtil.prototype.importantForAccessibilityToString = function (importantForAccessibility, defaultImportantForAccessibility) {
        importantForAccessibility = importantForAccessibility || defaultImportantForAccessibility;
        if (exports.ImportantForAccessibilityMap[importantForAccessibility]) {
            return exports.ImportantForAccessibilityMap[importantForAccessibility];
        }
        return undefined;
    };
    return AccessibilityUtil;
}());
exports.AccessibilityUtil = AccessibilityUtil;
var _a;


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
var float32ArraySupported = typeof Float32Array === 'function';
function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C(aA1) { return 3.0 * aA1; }
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier(aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }
// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope(aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }
function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0.0) {
            aB = currentT;
        }
        else {
            aA = currentT;
        }
    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
    return currentT;
}
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0.0) {
            return aGuessT;
        }
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
}
function bezier(mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
        throw new Error('bezier x values must be in [0, 1] range');
    }
    // Precompute samples table
    var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
    if (mX1 !== mY1 || mX2 !== mY2) {
        for (var i = 0; i < kSplineTableSize; ++i) {
            sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
        }
    }
    function getTForX(aX) {
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
        }
        --currentSample;
        // Interpolate to provide an initial guess for t
        var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        }
        else if (initialSlope === 0.0) {
            return guessForT;
        }
        else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
    }
    return function BezierEasing(x) {
        if (mX1 === mY1 && mX2 === mY2) {
            return x; // linear
        }
        // Because JavaScript number are imprecise, we should guarantee the extremes are right.
        if (x === 0) {
            return 0;
        }
        if (x === 1) {
            return 1;
        }
        return calcBezier(getTForX(x), mY1, mY2);
    };
}
exports.bezier = bezier;


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Easing.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Easing functions for animations.
*/

var Bezier = __webpack_require__(336);
var Easing = (function () {
    function Easing() {
    }
    Easing.prototype.CubicBezier = function (x1, y1, x2, y2) {
        return {
            cssName: 'cubic-bezier(' + x1 + ', ' + y1 + ', ' + x2 + ', ' + y2 + ')',
            function: Bezier.bezier(x1, y1, x2, y2)
        };
    };
    Easing.prototype.Default = function () {
        var bezier = this.CubicBezier(0.42, 0, 1, 1);
        return {
            cssName: 'ease',
            function: bezier.function
        };
    };
    Easing.prototype.Linear = function () {
        return {
            cssName: 'linear',
            function: function (input) { return input; }
        };
    };
    Easing.prototype.Out = function () {
        var bezier = this.CubicBezier(0, 0, 0.58, 1);
        return {
            cssName: 'ease-out',
            function: bezier.function
        };
    };
    Easing.prototype.In = function () {
        var bezier = this.CubicBezier(0.42, 0, 1, 1);
        return {
            cssName: 'ease-in',
            function: bezier.function
        };
    };
    Easing.prototype.InOut = function () {
        var bezier = this.CubicBezier(0.42, 0, 0.58, 1);
        return {
            cssName: 'ease-in-out',
            function: bezier.function
        };
    };
    Easing.prototype.OutBack = function () {
        var bezier = this.CubicBezier(0.175, 0.885, 0.320, 1.275);
        return {
            cssName: bezier.cssName,
            function: bezier.function
        };
    };
    Easing.prototype.InBack = function () {
        var bezier = this.CubicBezier(0.600, -0.280, 0.735, 0.045);
        return {
            cssName: bezier.cssName,
            function: bezier.function
        };
    };
    Easing.prototype.InOutBack = function () {
        var bezier = this.CubicBezier(0.680, -0.550, 0.265, 1.550);
        return {
            cssName: bezier.cssName,
            function: bezier.function
        };
    };
    Easing.prototype.Steps = function (intervals, end) {
        if (end === void 0) { end = true; }
        return {
            cssName: 'steps(' + intervals + ', ' + (end ? 'end' : 'start') + ')',
            function: function (input) {
                var interval = intervals * input;
                if (end) {
                    interval = Math.floor(interval);
                }
                else {
                    interval = Math.ceil(interval);
                }
                return interval / intervals;
            }
        };
    };
    Easing.prototype.StepStart = function () {
        var steps = this.Steps(1, false);
        return {
            cssName: 'steps(1, start)',
            function: steps.function
        };
    };
    Easing.prototype.StepEnd = function () {
        var steps = this.Steps(1, true);
        return {
            cssName: 'steps(1, end)',
            function: steps.function
        };
    };
    return Easing;
}());
exports.Easing = Easing;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Easing();


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Linking.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Common implementation for deep linking.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = __webpack_require__(80);
var RX = __webpack_require__(1);
// Collection of Regex that help validate an email.
// The name can be any of these characters.
var emailNameRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.@-]+$/i;
// However, the name cannot contain '..', or start/end with '.'.
var emailNameConstraintViolationRegex = /\.\.|^\.|\.$/i;
// The host is limited to these characters.
var emailHostRegex = /^[a-z0-9.-]+$/i;
// However, the host cannot contain '..', start/end with '.', or have any (sub)domain start/end with '-'.
var emailHostConstraintViolationRegex = /\.\.|^[.-]|[.-]$|\.-|-\./i;
var Linking = (function (_super) {
    __extends(Linking, _super);
    function Linking() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Launches SMS app
    Linking.prototype.launchSms = function (phoneInfo) {
        // Format phone info
        var phoneUrl = this._createSmsUrl(phoneInfo);
        return this._openUrl(phoneUrl);
    };
    // Opens url
    Linking.prototype.openUrl = function (url) {
        return this._openUrl(url);
    };
    // Escaped Email uri - mailto:[emailAddress]?subject=<emailSubject>&body=<emailBody>
    Linking.prototype._createEmailUrl = function (emailInfo) {
        var emailUrl = 'mailto:';
        var validEmails;
        if (emailInfo.to && emailInfo.to.length > 0) {
            validEmails = this._filterValidEmails(emailInfo.to);
            emailUrl += validEmails.join(',');
        }
        emailUrl += '?';
        if (emailInfo.cc && emailInfo.cc.length > 0) {
            validEmails = this._filterValidEmails(emailInfo.cc);
            emailUrl += 'cc=' + validEmails.join(',') + '&';
        }
        if (emailInfo.bcc && emailInfo.bcc.length > 0) {
            validEmails = this._filterValidEmails(emailInfo.bcc);
            emailUrl += 'bcc=' + validEmails.join(',') + '&';
        }
        if (emailInfo.subject) {
            emailUrl += 'subject=' + encodeURIComponent(emailInfo.subject) + '&';
        }
        if (emailInfo.body) {
            emailUrl += 'body=' + encodeURIComponent(emailInfo.body);
        }
        return emailUrl;
    };
    // Escaped SMS uri - sms:<phoneNumber>?body=<messageString>
    Linking.prototype._createSmsUrl = function (smsInfo) {
        var smsUrl = 'sms:';
        if (smsInfo.phoneNumber) {
            smsUrl += encodeURI(smsInfo.phoneNumber);
        }
        if (smsInfo.body) {
            smsUrl += '?body=' + encodeURIComponent(smsInfo.body);
        }
        return smsUrl;
    };
    Linking.prototype._isEmailValid = function (email) {
        // Emails have a max length of 254, and the smallest email looks like 'a@io' (with length 4).
        if (!email || email.length > 254 || email.length < 4) {
            return false;
        }
        // Note: using 'last' since '@' is valid in the name (but not the host, otherwise it would be impossible to parse).
        var lastAtIndex = email.lastIndexOf('@');
        // Email must have an '@', and there must be characters on each side of the '@'.
        // Note: the host must have at least two characters.
        if (lastAtIndex === -1 || lastAtIndex === 0 || lastAtIndex >= email.length - 2) {
            return false;
        }
        var name = email.substring(0, lastAtIndex);
        var host = email.substring(lastAtIndex + 1);
        return !emailNameConstraintViolationRegex.test(name)
            && !emailHostConstraintViolationRegex.test(host)
            && emailNameRegex.test(name)
            && emailHostRegex.test(host);
    };
    Linking.prototype._filterValidEmails = function (emails) {
        var _this = this;
        var validEmails = _.filter(emails, function (e) {
            return _this._isEmailValid(e);
        });
        return validEmails;
    };
    return Linking;
}(RX.Linking));
exports.Linking = Linking;


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Location.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Methods to fetch the user's location.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RX = __webpack_require__(1);
var SyncTasks = __webpack_require__(20);
var Types = __webpack_require__(6);
var Location = (function (_super) {
    __extends(Location, _super);
    function Location() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Location.prototype.setConfiguration = function (config) {
        if (this.isAvailable() && navigator.geolocation.setRNConfiguration) {
            navigator.geolocation.setRNConfiguration(config);
        }
    };
    // Check if a geolocation service is available.
    Location.prototype.isAvailable = function () {
        return !!('geolocation' in navigator);
    };
    // Get the current location of the user. This method returns a promise that either
    // resolves to the position or rejects with an error code.
    Location.prototype.getCurrentPosition = function (options) {
        var deferred = SyncTasks.Defer();
        var reportedError = false;
        if (!this.isAvailable()) {
            var error = {
                code: Types.LocationErrorType.PositionUnavailable,
                message: 'Position unavailable because device does not support it.',
                PERMISSION_DENIED: 0,
                POSITION_UNAVAILABLE: 1,
                TIMEOUT: 0
            };
            return deferred.reject(error).promise();
        }
        navigator.geolocation.getCurrentPosition(function (position) {
            deferred.resolve(position);
        }, function (error) {
            // We need to protect against a known bug on some platforms where
            // a timeout error is reported after other types of errors (e.g.
            // the user hasn't granted access).
            if (!reportedError) {
                deferred.reject(error);
                reportedError = true;
            }
        }, options);
        return deferred.promise();
    };
    // Get the current location of the user on a repeating basis. This method returns
    // a promise that resolves to a watcher id or rejects with an error code. If resolved,
    // future locations and errors will be piped through the provided callbacks.
    Location.prototype.watchPosition = function (successCallback, errorCallback, options) {
        if (!this.isAvailable()) {
            return SyncTasks.Rejected(Types.LocationErrorType.PositionUnavailable);
        }
        var watchId = navigator.geolocation.watchPosition(function (position) {
            successCallback(position);
        }, function (error) {
            if (errorCallback) {
                errorCallback(error.code);
            }
        }, options);
        return SyncTasks.Resolved(watchId);
    };
    // Clears a location watcher from watchPosition.
    Location.prototype.clearWatch = function (watchID) {
        navigator.geolocation.clearWatch(watchID);
    };
    return Location;
}(RX.Location));
exports.Location = Location;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Location();


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* StyleLeakDetector.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Detects style memory-leaks in react-native.
* To fix warning you could:
*  - use not cached styles by providing cacheStyle == falst to Style.create... method
*  - for colors you could use StylesRegestry component
*  - for rx component you could temporary disable validation by calling pause method and restore by calling resume,
*    but please make sure that it doesn't leaks first please
*/

var _ = __webpack_require__(80);
var AppConfig_1 = __webpack_require__(138);
var StyleLeakDetector = (function () {
    function StyleLeakDetector() {
        this._fingerprintRegistry = {};
    }
    StyleLeakDetector.prototype._getFingerprint = function (object) {
        return JSON.stringify(this._sortAny(object));
    };
    /**
     * We need to sort objects before using JSON.stringify as otherwise objects
     * {a: 1, b: 2} and {b: 2, a: 1} would have a different fingerprints
     */
    StyleLeakDetector.prototype._sortAny = function (object) {
        if (object instanceof Array) {
            return this._sortArray(object);
        }
        else if (object instanceof Object) {
            return this._sortObject(object);
        }
        else {
            return object;
        }
    };
    StyleLeakDetector.prototype._sortObject = function (object) {
        var result = {};
        var keys = [];
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
        keys = _.sortBy(keys);
        var keysLength = keys.length;
        for (var i = 0; i < keysLength; i++) {
            var key = keys[i];
            var value = object[key];
            result[key] = this._sortAny(value);
        }
        return result;
    };
    StyleLeakDetector.prototype._sortArray = function (object) {
        var length = object.length;
        for (var i = 0; i < length; i++) {
            object[i] = this._sortAny(object[i]);
        }
        return object;
    };
    StyleLeakDetector.prototype.isDisabled = function () {
        return false;
    };
    StyleLeakDetector.prototype.detectLeaks = function (style) {
        if (AppConfig_1.default.isDevelopmentMode() && !this.isDisabled()) {
            var error = new Error();
            // we detect leaks on chrome and firefox only, other browser have now this member
            var stack = error.stack;
            if (stack) {
                var styleAllocationId = stack + this._getFingerprint(style);
                var firstAllocation = this._fingerprintRegistry[styleAllocationId];
                if (firstAllocation) {
                    console.warn('Possible style leak of: ', style, 'first allocation: ', firstAllocation);
                }
                else {
                    this._fingerprintRegistry[styleAllocationId] = stack;
                }
            }
        }
    };
    return StyleLeakDetector;
}());
exports.StyleLeakDetector = StyleLeakDetector;
var instance = new StyleLeakDetector();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = instance;


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* ActivityIndicator.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Control to display an animated activity indicator.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = __webpack_require__(0);
var RX = __webpack_require__(1);
var _activityIndicatorCss = "\n.rx-activity {\n  position: relative;\n  width: 100px;\n  height: 100px;\n}\n.rx-activity .layer-1-translate,\n.rx-activity .layer-3-translate,\n.rx-activity .layer-5-translate,\n.rx-activity .layer-7-translate {\n  -webkit-transform: translate(50px, 50px);\n          transform: translate(50px, 50px);\n}\n.rx-activity .layer-2-translate,\n.rx-activity .layer-4-translate,\n.rx-activity .layer-6-translate,\n.rx-activity .layer-8-translate {\n  -webkit-transform: translate(0px, -40px);\n          transform: translate(0px, -40px);\n}\n.rx-activity .layer-2-content,\n.rx-activity .layer-4-content,\n.rx-activity .layer-6-content,\n.rx-activity .layer-8-content {\n  width: 100px;\n  height: 100px;\n}\n.rx-activity .layer-2-content .shape-0,\n.rx-activity .layer-4-content .shape-0,\n.rx-activity .layer-6-content .shape-0,\n.rx-activity .layer-8-content .shape-0 {\n  position: absolute;\n  left: -7.5px;\n  top: -7.5px;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n}\n.rx-activity div {\n  position: absolute;\n  width: 0;\n  height: 0;\n}\n.rx-activity .animation {\n  -webkit-animation-duration: 1.4s;\n          animation-duration: 1.4s;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-direction: normal;\n          animation-direction: normal;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n.rx-activity .layer-1-rotate {\n  -webkit-animation-name: rx-activity-layer-1-rotate;\n          animation-name: rx-activity-layer-1-rotate;\n}\n.rx-activity .layer-2-scale {\n  -webkit-animation-name: rx-activity-layer-2-scale;\n          animation-name: rx-activity-layer-2-scale;\n}\n.rx-activity .layer-3-rotate {\n  -webkit-animation-name: rx-activity-layer-3-rotate;\n          animation-name: rx-activity-layer-3-rotate;\n}\n.rx-activity .layer-4-scale {\n  -webkit-animation-name: rx-activity-layer-4-scale;\n          animation-name: rx-activity-layer-4-scale;\n}\n.rx-activity .layer-5-rotate {\n  -webkit-animation-name: rx-activity-layer-5-rotate;\n          animation-name: rx-activity-layer-5-rotate;\n}\n.rx-activity .layer-6-scale {\n  -webkit-animation-name: rx-activity-layer-6-scale;\n          animation-name: rx-activity-layer-6-scale;\n}\n.rx-activity .layer-7-rotate {\n  -webkit-animation-name: rx-activity-layer-7-rotate;\n          animation-name: rx-activity-layer-7-rotate;\n}\n.rx-activity .layer-8-scale {\n  -webkit-animation-name: rx-activity-layer-8-scale;\n          animation-name: rx-activity-layer-8-scale;\n}\n.rx-activity .shape-0 {\n  background-color: white;\n}\n.rx-activity.hidden {\n  visibility: hidden;\n}\n.rx-activity-extra-small {\n  width: 16px;\n  height: 16px;\n}\n.rx-activity-extra-small .layer-1-translate,\n.rx-activity-extra-small .layer-3-translate,\n.rx-activity-extra-small .layer-5-translate,\n.rx-activity-extra-small .layer-7-translate {\n  -webkit-transform: translate(8px, 8px);\n          transform: translate(8px, 8px);\n}\n.rx-activity-extra-small .layer-2-translate,\n.rx-activity-extra-small .layer-4-translate,\n.rx-activity-extra-small .layer-6-translate,\n.rx-activity-extra-small .layer-8-translate {\n  -webkit-transform: translate(0px, -6.4px);\n          transform: translate(0px, -6.4px);\n}\n.rx-activity-extra-small .layer-2-content,\n.rx-activity-extra-small .layer-4-content,\n.rx-activity-extra-small .layer-6-content,\n.rx-activity-extra-small .layer-8-content {\n  width: 16px;\n  height: 16px;\n}\n.rx-activity-extra-small .layer-2-content .shape-0,\n.rx-activity-extra-small .layer-4-content .shape-0,\n.rx-activity-extra-small .layer-6-content .shape-0,\n.rx-activity-extra-small .layer-8-content .shape-0 {\n  position: absolute;\n  left: -2px;\n  top: -2px;\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n}\n.rx-activity-small {\n  width: 20px;\n  height: 20px;\n}\n.rx-activity-small .layer-1-translate,\n.rx-activity-small .layer-3-translate,\n.rx-activity-small .layer-5-translate,\n.rx-activity-small .layer-7-translate {\n  -webkit-transform: translate(10px, 10px);\n          transform: translate(10px, 10px);\n}\n.rx-activity-small .layer-2-translate,\n.rx-activity-small .layer-4-translate,\n.rx-activity-small .layer-6-translate,\n.rx-activity-small .layer-8-translate {\n  -webkit-transform: translate(0px, -8px);\n          transform: translate(0px, -8px);\n}\n.rx-activity-small .layer-2-content,\n.rx-activity-small .layer-4-content,\n.rx-activity-small .layer-6-content,\n.rx-activity-small .layer-8-content {\n  width: 20px;\n  height: 20px;\n}\n.rx-activity-small .layer-2-content .shape-0,\n.rx-activity-small .layer-4-content .shape-0,\n.rx-activity-small .layer-6-content .shape-0,\n.rx-activity-small .layer-8-content .shape-0 {\n  position: absolute;\n  left: -3px;\n  top: -3px;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.rx-activity-medium {\n  width: 36px;\n  height: 36px;\n}\n.rx-activity-medium .layer-1-translate,\n.rx-activity-medium .layer-3-translate,\n.rx-activity-medium .layer-5-translate,\n.rx-activity-medium .layer-7-translate {\n  -webkit-transform: translate(18px, 18px);\n          transform: translate(18px, 18px);\n}\n.rx-activity-medium .layer-2-translate,\n.rx-activity-medium .layer-4-translate,\n.rx-activity-medium .layer-6-translate,\n.rx-activity-medium .layer-8-translate {\n  -webkit-transform: translate(0px, -14.4px);\n          transform: translate(0px, -14.4px);\n}\n.rx-activity-medium .layer-2-content,\n.rx-activity-medium .layer-4-content,\n.rx-activity-medium .layer-6-content,\n.rx-activity-medium .layer-8-content {\n  width: 36px;\n  height: 36px;\n}\n.rx-activity-medium .layer-2-content .shape-0,\n.rx-activity-medium .layer-4-content .shape-0,\n.rx-activity-medium .layer-6-content .shape-0,\n.rx-activity-medium .layer-8-content .shape-0 {\n  position: absolute;\n  left: -4.5px;\n  top: -4.5px;\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n}\n@-webkit-keyframes rx-activity-layer-1-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    -webkit-animation-timing-function: cubic-bezier(1, 0.2, 0.25, 0.76);\n            animation-timing-function: cubic-bezier(1, 0.2, 0.25, 0.76);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@keyframes rx-activity-layer-1-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    -webkit-animation-timing-function: cubic-bezier(1, 0.2, 0.25, 0.76);\n            animation-timing-function: cubic-bezier(1, 0.2, 0.25, 0.76);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@-webkit-keyframes rx-activity-layer-2-scale {\n  0% {\n    -webkit-transform: scale(0.96);\n            transform: scale(0.96);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  14.29% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  47.62% {\n    -webkit-transform: scale(0.35);\n            transform: scale(0.35);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  66.67% {\n    -webkit-transform: scale(0.45);\n            transform: scale(0.45);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  72.62% {\n    -webkit-transform: scale(0.45);\n            transform: scale(0.45);\n    -webkit-animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);\n            animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);\n  }\n  100% {\n    -webkit-transform: scale(0.45);\n            transform: scale(0.45);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@keyframes rx-activity-layer-2-scale {\n  0% {\n    -webkit-transform: scale(0.96);\n            transform: scale(0.96);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  14.29% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  47.62% {\n    -webkit-transform: scale(0.35);\n            transform: scale(0.35);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  66.67% {\n    -webkit-transform: scale(0.45);\n            transform: scale(0.45);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  72.62% {\n    -webkit-transform: scale(0.45);\n            transform: scale(0.45);\n    -webkit-animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);\n            animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);\n  }\n  100% {\n    -webkit-transform: scale(0.45);\n            transform: scale(0.45);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@-webkit-keyframes rx-activity-layer-3-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    -webkit-animation-timing-function: cubic-bezier(0.88, 0.21, 0.25, 0.76);\n            animation-timing-function: cubic-bezier(0.88, 0.21, 0.25, 0.76);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@keyframes rx-activity-layer-3-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    -webkit-animation-timing-function: cubic-bezier(0.88, 0.21, 0.25, 0.76);\n            animation-timing-function: cubic-bezier(0.88, 0.21, 0.25, 0.76);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@-webkit-keyframes rx-activity-layer-4-scale {\n  0% {\n    -webkit-transform: scale(0.96);\n            transform: scale(0.96);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  9.52% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  42.86% {\n    -webkit-transform: scale(0.35);\n            transform: scale(0.35);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  61.9% {\n    -webkit-transform: scale(0.45);\n            transform: scale(0.45);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  72.62% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    -webkit-animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);\n            animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);\n  }\n  100% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@keyframes rx-activity-layer-4-scale {\n  0% {\n    -webkit-transform: scale(0.96);\n            transform: scale(0.96);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  9.52% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  42.86% {\n    -webkit-transform: scale(0.35);\n            transform: scale(0.35);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  61.9% {\n    -webkit-transform: scale(0.45);\n            transform: scale(0.45);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  72.62% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    -webkit-animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);\n            animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);\n  }\n  100% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@-webkit-keyframes rx-activity-layer-5-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    -webkit-animation-timing-function: cubic-bezier(0.76, 0.21, 0.25, 0.76);\n            animation-timing-function: cubic-bezier(0.76, 0.21, 0.25, 0.76);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@keyframes rx-activity-layer-5-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    -webkit-animation-timing-function: cubic-bezier(0.76, 0.21, 0.25, 0.76);\n            animation-timing-function: cubic-bezier(0.76, 0.21, 0.25, 0.76);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@-webkit-keyframes rx-activity-layer-6-scale {\n  0% {\n    -webkit-transform: scale(0.96);\n            transform: scale(0.96);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  4.76% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  38.1% {\n    -webkit-transform: scale(0.35);\n            transform: scale(0.35);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  57.14% {\n    -webkit-transform: scale(0.45);\n            transform: scale(0.45);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  72.62% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    -webkit-animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);\n            animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);\n  }\n  100% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@keyframes rx-activity-layer-6-scale {\n  0% {\n    -webkit-transform: scale(0.96);\n            transform: scale(0.96);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  4.76% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  38.1% {\n    -webkit-transform: scale(0.35);\n            transform: scale(0.35);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  57.14% {\n    -webkit-transform: scale(0.45);\n            transform: scale(0.45);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  72.62% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    -webkit-animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);\n            animation-timing-function: cubic-bezier(0.17, 0, 0.83, 1);\n  }\n  100% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@-webkit-keyframes rx-activity-layer-7-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    -webkit-animation-timing-function: cubic-bezier(0.65, 0.21, 0.25, 0.76);\n            animation-timing-function: cubic-bezier(0.65, 0.21, 0.25, 0.76);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@keyframes rx-activity-layer-7-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    -webkit-animation-timing-function: cubic-bezier(0.65, 0.21, 0.25, 0.76);\n            animation-timing-function: cubic-bezier(0.65, 0.21, 0.25, 0.76);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@-webkit-keyframes rx-activity-layer-8-scale {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  33.33% {\n    -webkit-transform: scale(0.35);\n            transform: scale(0.35);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 1, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 1, 1);\n  }\n  52.38% {\n    -webkit-transform: scale(0.45);\n            transform: scale(0.45);\n    -webkit-animation-timing-function: cubic-bezier(0.8, 0, 0.78, 1);\n            animation-timing-function: cubic-bezier(0.8, 0, 0.78, 1);\n  }\n  72.62% {\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0, 1);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n@keyframes rx-activity-layer-8-scale {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0.67, 1);\n  }\n  33.33% {\n    -webkit-transform: scale(0.35);\n            transform: scale(0.35);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 1, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 1, 1);\n  }\n  52.38% {\n    -webkit-transform: scale(0.45);\n            transform: scale(0.45);\n    -webkit-animation-timing-function: cubic-bezier(0.8, 0, 0.78, 1);\n            animation-timing-function: cubic-bezier(0.8, 0, 0.78, 1);\n  }\n  72.62% {\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15);\n    -webkit-animation-timing-function: cubic-bezier(0.33, 0, 0, 1);\n            animation-timing-function: cubic-bezier(0.33, 0, 0, 1);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n  }\n}\n";
var ActivityIndicator = (function (_super) {
    __extends(ActivityIndicator, _super);
    function ActivityIndicator(props) {
        var _this = _super.call(this, props) || this;
        _this._isMounted = false;
        ActivityIndicator._installStyleSheet();
        _this.state = { isVisible: false };
        return _this;
    }
    ActivityIndicator._installStyleSheet = function () {
        // Have we installed the style sheet already?
        if (ActivityIndicator._isStyleSheetInstalled) {
            return;
        }
        // We set the CSS style sheet here to avoid the need
        // for users of this class to carry along another CSS
        // file.
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = _activityIndicatorCss;
        }
        else {
            style.appendChild(document.createTextNode(_activityIndicatorCss));
        }
        head.appendChild(style);
    };
    ActivityIndicator.prototype.componentDidMount = function () {
        var _this = this;
        this._isMounted = true;
        if (this.props.deferTime && this.props.deferTime > 0) {
            window.setTimeout(function () {
                if (_this._isMounted) {
                    _this.setState({ isVisible: true });
                }
            }, this.props.deferTime);
        }
        else {
            this.setState({ isVisible: true });
        }
    };
    ActivityIndicator.prototype.componentWillUnmount = function () {
        this._isMounted = false;
    };
    ActivityIndicator.prototype.render = function () {
        var colorStyle = {
            backgroundColor: this.props.color
        };
        var spinnerClasses = ['rx-activity'];
        if (this.props.size === 'tiny') {
            spinnerClasses.push('rx-activity-extra-small');
        }
        else if (this.props.size === 'small') {
            spinnerClasses.push('rx-activity-small');
        }
        else if (this.props.size === 'medium') {
            spinnerClasses.push('rx-activity-medium');
        }
        if (!this.state.isVisible) {
            spinnerClasses.push('hidden');
        }
        return (React.createElement("div", { className: spinnerClasses.join(' ') },
            React.createElement("div", { className: 'layer-7' },
                React.createElement("div", { className: 'layer-7-translate' },
                    React.createElement("div", { className: 'layer-7-rotate animation' },
                        React.createElement("div", { className: 'layer-8' },
                            React.createElement("div", { className: 'layer-8-translate' },
                                React.createElement("div", { className: 'layer-8-scale animation' },
                                    React.createElement("div", { className: 'layer-8-content ' },
                                        React.createElement("div", { className: 'shape shape-0', style: colorStyle })))))))),
            React.createElement("div", { className: 'layer-5' },
                React.createElement("div", { className: 'layer-5-translate' },
                    React.createElement("div", { className: 'layer-5-rotate animation' },
                        React.createElement("div", { className: 'layer-6' },
                            React.createElement("div", { className: 'layer-6-translate' },
                                React.createElement("div", { className: 'layer-6-scale animation' },
                                    React.createElement("div", { className: 'layer-6-content ' },
                                        React.createElement("div", { className: 'shape shape-0', style: colorStyle })))))))),
            React.createElement("div", { className: 'layer-3' },
                React.createElement("div", { className: 'layer-3-translate' },
                    React.createElement("div", { className: 'layer-3-rotate animation' },
                        React.createElement("div", { className: 'layer-4' },
                            React.createElement("div", { className: 'layer-4-translate' },
                                React.createElement("div", { className: 'layer-4-scale animation' },
                                    React.createElement("div", { className: 'layer-4-content ' },
                                        React.createElement("div", { className: 'shape shape-0', style: colorStyle })))))))),
            React.createElement("div", { className: 'layer-1' },
                React.createElement("div", { className: 'layer-1-translate' },
                    React.createElement("div", { className: 'layer-1-rotate animation' },
                        React.createElement("div", { className: 'layer-2' },
                            React.createElement("div", { className: 'layer-2-translate' },
                                React.createElement("div", { className: 'layer-2-scale animation' },
                                    React.createElement("div", { className: 'layer-2-content ' },
                                        React.createElement("div", { className: 'shape shape-0', style: colorStyle }))))))))));
    };
    return ActivityIndicator;
}(RX.ActivityIndicator));
ActivityIndicator._isStyleSheetInstalled = false;
exports.ActivityIndicator = ActivityIndicator;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ActivityIndicator;


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Alert.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web Alert dialog boxes.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RX = __webpack_require__(1);
// Web/HTML implementation for alert dialog boxes
var Alert = (function (_super) {
    __extends(Alert, _super);
    function Alert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Alert.prototype.show = function (title, message, buttons, icon) {
        if ('Notification' in window) {
            // There is no <button> and <type> support for Web/HTML notifications!
            var options_1 = { body: message, icon: icon };
            // Permission check / request is needed to support browsers with an opt-in notificiaton permission model
            if (Notification.permission === 'granted') {
                /* tslint:disable:no-unused-variable */
                // new instance of Notification needs to be created but not used
                var htmlNotification = new Notification(title, options_1);
            }
            else if (Notification.permission !== 'denied') {
                Notification.requestPermission(function (permission) {
                    if (permission === 'granted') {
                        /* tslint:disable:no-unused-variable */
                        // new instance of Notification needs to be created but not used
                        var htmlNotification = new Notification(title, options_1);
                    }
                });
            }
        }
        else {
            // Fallback to traditional js alert() if Notification isn't supported
            alert("" + title + (message !== undefined && message !== null && message.length > 0 ? ": " + message : ''));
        }
    };
    return Alert;
}(RX.Alert));
exports.Alert = Alert;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Alert();


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Animated.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Implements animated components for web version of ReactXP.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var _ = __webpack_require__(3);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(0);
var Easing_1 = __webpack_require__(337);
exports.Easing = Easing_1.default;
var executeTransition_1 = __webpack_require__(146);
var Image_1 = __webpack_require__(140);
var View_1 = __webpack_require__(51);
var Text_1 = __webpack_require__(143);
var TextInput_1 = __webpack_require__(144);
var Styles_1 = __webpack_require__(8);
var Types = __webpack_require__(6);
// Animated Css Property Units - check /common/Types for the list of available
// css animated properties
var animatedPropUnits = {
    // AnimatedFlexboxStyleRules
    height: 'px',
    width: 'px',
    left: 'px',
    right: 'px',
    top: 'px',
    bottom: 'px',
    // AnimatedTransformStyleRules
    perspective: '',
    rotate: 'deg',
    rotateX: 'deg',
    rotateY: 'deg',
    scale: '',
    scaleX: '',
    scaleY: '',
    scaleZ: '',
    translateX: 'px',
    translateY: 'px',
    skewX: '',
    skewY: '',
    // AnimatedViewAndImageCommonStyleRules
    backgroundColor: '',
    opacity: '',
    borderRadius: 'px',
    // AnimatedTextStyleRules
    color: '',
    fontSize: ''
};
// Every Animation subclass should extend this.
var Animation = (function () {
    function Animation() {
        this._triggerAnimation = false; // Flag that sets animation to start.
    }
    return Animation;
}());
exports.Animation = Animation;
// Incrementor for the animated value
// this incrementor is necessary for all the initialization
var animatedValueUniqueId = 0;
// The animated value object
var Value = (function (_super) {
    __extends(Value, _super);
    // Initializes the object with the defaults and assigns the id for the animated value.
    function Value(value) {
        var _this = _super.call(this, value) || this;
        _this._cssProperties = {};
        _this._isInitialized = false;
        _this._value = value;
        _this._animations = {};
        _this._listeners = {};
        _this._animationId = 0;
        _this._listenerId = 0;
        _this._animatedValueUniqueId = ++animatedValueUniqueId;
        return _this;
    }
    // Gets the unique id for this animated value
    Value.prototype.getId = function () {
        return this._animatedValueUniqueId;
    };
    // Gets the current animated value (this gets updates after animation concludes)
    Value.prototype.getValue = function () {
        return this._value;
    };
    Value.prototype.interpolate = function (config) {
        var _this = this;
        // TODO: This is a temporary implementation in order to keep parity with RN's API.
        // In reallity we should support string values as well string tovalues in the animations.
        // We need to work with the RN folks in order to understand what was the motivation for them
        // To not go with that approach instead.
        if (!config || !config.inputRange || !config.outputRange) {
            throw 'The interpolation config is invalid. Make sure you set input and output ranges with the same indexes';
        }
        // TODO: VSO #773423: Support >2 input/output values.
        if (config.inputRange.length !== 2 && config.outputRange.length !== 2) {
            throw 'The interpolation input/output ranges need to be length 2 and map from (input(0) -> output(0))' +
                'and to (input(1) -> input(1))';
        }
        var input0 = config.inputRange[0];
        var input1 = config.inputRange[1];
        if (input0 > input1) {
            throw 'The interpolation input values should be in ascending order.';
        }
        this._interpolationConfig = {};
        _.each(config.inputRange, function (value, index) {
            _this._interpolationConfig[value] = config.outputRange[index];
        });
        return this;
    };
    // Gets animation reference by id. An animated value may be referenced in multiple animations.
    Value.prototype.getAnimation = function (id) {
        // Return CSS key (transition/animation) string from animation object if available.
        if (this._animations) {
            return this._animations[id];
        }
        return null;
    };
    // Adds a new associated css property to this animated value.
    Value.prototype.addCssProperty = function (key, value) {
        if (key && value) {
            this._cssProperties[key] = value;
        }
        else {
            throw 'Trying to add a css property which has invalid key/value. Key:' + key;
        }
    };
    // Updates a value in this animated reference.
    Value.prototype.setValue = function (value) {
        if (value === undefined) {
            throw 'An invalid value was passed into setvalue in the animated value api';
        }
        this._updateValue(value);
        this._updateElementStyles();
    };
    // True if the animated value was correctly initialized; false otherwise.
    Value.prototype.isInitialized = function () {
        return this._isInitialized;
    };
    // Sets an HTML element for the animated value
    Value.prototype.setAsInitialized = function (element) {
        if (!element) {
            throw 'The element being set in the animated value is not valid.';
        }
        if (this._element === element) {
            return;
        }
        // TODO: Support multiple elements in the future.
        this._element = element;
        this._isInitialized = true;
        this._startPendingAnimations();
    };
    // Clears the HTML element reference and marks the value as uninitialized
    Value.prototype.destroy = function () {
        this._isInitialized = false;
        this._element = null;
    };
    // Add listener for when the value gets updated.
    Value.prototype.addListener = function (callback) {
        if (callback) {
            this._listenerId++;
            this._listeners[this._listenerId] = callback;
        }
        return this._listenerId;
    };
    // Remove a specific listner.
    Value.prototype.removeListener = function (id) {
        delete this._listeners[id];
    };
    // Remove all listeners.
    Value.prototype.removeAllListeners = function () {
        this._listeners = {};
    };
    // Add an associated animation into this animated value.
    Value.prototype.addAnimation = function (animation) {
        if (!animation) {
            throw 'It\'s not ok to add a null animation into animated value bah';
        }
        this._animationId++;
        animation._id = this._animationId;
        this._animations[this._animationId] = animation;
        return this._animationId;
    };
    // Start a specific animation.
    Value.prototype.startAnimation = function (id, onEnd) {
        if (!id) {
            throw 'An id is needed in order to start an animation in the animated value';
        }
        var animation = this._animations[id];
        if (!animation) {
            throw 'Animation not found so not possible to start it.';
        }
        animation.start(onEnd);
    };
    // Stop animation.
    Value.prototype.stopAnimation = function (id) {
        if (!id) {
            throw 'An id is needed in order to stop an animation in the animated value';
        }
        var animation = this._animations[id];
        if (!animation) {
            throw 'Animation not found so not possible to stop it.';
        }
        animation.stop();
        // Make sure the reference for this animation is destroyed.
        // This will avoid problems where timing animations are shared across multiple states.
        this._animations[id] = null;
    };
    Value.prototype._startPendingAnimations = function () {
        // Start animations if they were waiting for the animated value to be initialized.
        // This is accomplished via the animate flag within the animation (isReadyToAnimate).
        _.each(this._animations, function (animation) {
            if (animation && animation._triggerAnimation) {
                animation.forceAnimate();
            }
        });
    };
    Value.prototype._updateElementStyles = function () {
        // Update the style of the element.
        if (this._isInitialized) {
            this.updateElementStylesOnto(this._element.style);
        }
    };
    Value.prototype.updateElementStylesOnto = function (styles) {
        var _this = this;
        // Just update the style and make sure it renders the frame 1.
        _.each(this._cssProperties, function (value, key) {
            styles[key] = value.replace(new RegExp('##', 'g'), _this.getCssValueString());
        });
    };
    Value.prototype.getCssValueString = function () {
        if (this._interpolationConfig) {
            var fromValue = this._interpolationConfig[this.getValue()];
            if (fromValue === undefined) {
                throw 'The interpolation config does not match the animated value or to value specified';
            }
            return fromValue.toString();
        }
        return this.getValue().toString();
    };
    // Update the value and kicks the callbacks.
    Value.prototype._updateValue = function (value) {
        // If value the same, do nothing.
        if (value === this._value) {
            return;
        }
        this._value = value;
        // Notify subscribers about the new value.
        for (var key in this._listeners) {
            if (typeof this._listeners[key] === 'ValueListenerCallback') {
                this._listeners[key](this.getValue());
            }
        }
    };
    return Value;
}(Types.AnimatedValue));
exports.Value = Value;
// Parser for the transform css. Transform needs a special way to parse animated values.
var AnimatedTransform = (function () {
    function AnimatedTransform() {
    }
    AnimatedTransform.initialize = function (style) {
        // Temporary cache for the animated values parsed so far.
        var animatedValues = [];
        if (style['animatedTransform']) {
            _.each(style['animatedTransform'], function (transform) {
                animatedValues.push(transform.value);
                // We currently support only one animated transform type per style.
                // The last one will "win".
                transform.value.addCssProperty('transform', transform.type + '(##' + animatedPropUnits[transform.type] + ') ');
            });
        }
        return animatedValues;
    };
    return AnimatedTransform;
}());
// Animating functions
var TimingAnimation = (function (_super) {
    __extends(TimingAnimation, _super);
    function TimingAnimation(value, config) {
        var _this = _super.call(this) || this;
        _this._animatedValue = value;
        _this._toValue = config.toValue;
        _this._easing = config.easing || Easing_1.default.Default();
        _this._duration = config.duration !== undefined ? config.duration : 500;
        _this._delay = config.delay || 0;
        _this._loop = config.loop !== undefined;
        _this._initialized = false;
        return _this;
    }
    TimingAnimation.prototype._stripUnits = function (value) {
        // We need to strip off 'deg' or 'px' units from the end
        // of the interpolated values for compatibility with React Native.
        var trimmedValue = value.trim();
        var unitsToStrip = ['deg', 'px'];
        _.each(unitsToStrip, function (units) {
            if (_.endsWith(trimmedValue, units)) {
                value = trimmedValue.substr(0, trimmedValue.length - units.length);
                return false;
            }
        });
        return value;
    };
    // Animate the animated value
    TimingAnimation.prototype.forceAnimate = function () {
        var _this = this;
        if (this._animatedValue.isInitialized()) {
            var properties_1 = [];
            var fromValue_1;
            var toValue_1;
            // TODO: Support animating multiple properties in the same animated value at the same time.
            _.each(this._animatedValue._cssProperties, function (value, property) {
                if (_this._animatedValue._interpolationConfig) {
                    fromValue_1 = _this._animatedValue._interpolationConfig[_this._animatedValue.getValue()].toString();
                    toValue_1 = _this._animatedValue._interpolationConfig[_this._toValue.toString()].toString();
                    if (!fromValue_1 || !toValue_1) {
                        throw 'The interpolation config does not match the animated value or to value specified';
                    }
                    fromValue_1 = _this._stripUnits(fromValue_1);
                    toValue_1 = _this._stripUnits(toValue_1);
                }
                else {
                    fromValue_1 = _this._animatedValue.getValue().toString();
                    toValue_1 = _this._toValue.toString();
                }
                var from = value.replace(new RegExp('##', 'g'), fromValue_1);
                var to = value.replace(new RegExp('##', 'g'), toValue_1);
                properties_1.push({
                    property: _.kebabCase(property),
                    duration: _this._duration,
                    timing: _this._easing.cssName,
                    delay: _this._delay,
                    from: from,
                    to: to
                });
            });
            this.resetAnimation();
            executeTransition_1.executeTransition(this._animatedValue._element, properties_1, function () {
                if (_this._triggerAnimation) {
                    if (!_this._loop) {
                        _this._animatedValue.setValue(_this._toValue);
                    }
                    _this._triggerAnimation = false;
                    if (_this._onEnd) {
                        _this._onEnd({ finished: !_this._loop });
                    }
                }
            });
        }
    };
    TimingAnimation.prototype.resetAnimation = function () {
        if (this._animatedValue.isInitialized()) {
            this._animatedValue._element.style.transition = 'none';
        }
    };
    // Flag the animation to start.
    TimingAnimation.prototype.start = function (onEnd) {
        this._onEnd = onEnd;
        this._triggerAnimation = true;
        this.forceAnimate();
    };
    // Flag the animation to stop.
    TimingAnimation.prototype.stop = function () {
        this._triggerAnimation = false;
        this._animatedValue.setValue(this._toValue);
        this.resetAnimation();
        if (this._onEnd) {
            this._onEnd({ finished: false });
        }
    };
    return TimingAnimation;
}(Animation));
exports.timing = function (value, config) {
    if (!value || !config) {
        throw 'Timing animation requires value and config';
    }
    // Set the animation on the value as soon as the timing animation is created
    // And trigger start and stop through animations
    var id = value.addAnimation(new TimingAnimation(value, config));
    var isLooping = config.loop !== undefined && config.loop != null;
    return {
        start: function (callback) {
            function animate() {
                if (isLooping) {
                    value.setValue(config.loop.restartFrom);
                }
                value.startAnimation(id, function (r) {
                    if (callback) {
                        callback(r);
                    }
                    if (!isLooping) {
                        return;
                    }
                    // Hack to get into the loop
                    animate();
                });
            }
            // Trigger animation loop (hack for now)
            animate();
        },
        stop: function () {
            isLooping = false;
            value.stopAnimation(id);
        },
    };
};
exports.sequence = function (animations) {
    if (!animations) {
        throw 'Sequence animation requires a list of animations';
    }
    var hasBeenStopped = false;
    var doneCount = 0;
    var result = {
        start: function (callback) {
            if (!animations || animations.length === 0) {
                throw 'No animations were passed to the animated sequence api';
            }
            var executeNext = function () {
                doneCount++;
                var isFinished = doneCount === animations.length;
                if (hasBeenStopped || isFinished) {
                    doneCount = 0;
                    hasBeenStopped = false;
                    if (callback) {
                        callback({ finished: isFinished });
                    }
                    return;
                }
                animations[doneCount].start(executeNext);
            };
            animations[doneCount].start(executeNext);
        },
        stop: function () {
            if (doneCount < animations.length) {
                doneCount = 0;
                hasBeenStopped = true;
                animations[doneCount].stop();
            }
        }
    };
    return result;
};
exports.parallel = function (animations) {
    if (!animations) {
        throw 'Parallel animation requires a list of animations';
    }
    // Variable to make sure we only call stop() at most once
    var hasBeenStopped = false;
    var doneCount = 0;
    var result = {
        start: function (callback) {
            if (!animations || animations.length === 0) {
                throw 'No animations were passed to the animated parallel api';
            }
            // Walk through animations and start all as soon as possible.
            animations.forEach(function (animation, id) {
                animation.start(function (animationResult) {
                    doneCount++;
                    var isFinished = doneCount === animations.length;
                    if (hasBeenStopped || isFinished) {
                        doneCount = 0;
                        hasBeenStopped = false;
                        if (callback) {
                            callback({ finished: isFinished });
                        }
                        return;
                    }
                });
            });
        },
        stop: function () {
            doneCount = 0;
            hasBeenStopped = true;
            animations.forEach(function (animation) {
                animation.stop();
            });
        }
    };
    return result;
};
// Function for creating wrapper AnimatedComponent around passed in component
function createAnimatedComponent(Component) {
    var refName = 'animatedNode';
    var AnimatedComponentGenerated = (function (_super) {
        __extends(AnimatedComponentGenerated, _super);
        function AnimatedComponentGenerated(props) {
            var _this = _super.call(this, props) || this;
            _this._updateStyles(props);
            return _this;
        }
        AnimatedComponentGenerated.prototype.setNativeProps = function (props) {
            throw 'Called setNativeProps on web AnimatedComponent';
        };
        AnimatedComponentGenerated.prototype.componentWillReceiveProps = function (props) {
            this._updateStyles(props);
        };
        AnimatedComponentGenerated.prototype._updateStyles = function (props) {
            var _this = this;
            this._propsWithoutStyle = _.omit(props, 'style');
            if (!props.style) {
                this._initialStyle = undefined;
                this._animatedValues = [];
                return;
            }
            // If a style is present, make sure we initialize all animations associated with
            // animated values on it.
            // The way this works is:
            // - Animated value can be associated with multiple animated styles.
            // - When the component is being created we will walk through all the styles
            //   and initialize all the animations within the animated value (the animation
            //   gets registered when the animation function (e.g. timing) gets called, where the
            //   the reference to the animation is kept within the animated value.
            // - We will initialize the animated value with the list of css properties and html element
            //   where the style transition/animation. Should be applied and the css properties
            //   associated with it: key and from/to values.
            // - Then we will kick off the animation as soon as it's initialized or flag it to
            //   start anytime later.
            // Attempt to get static initial styles for the first build.  After the build,
            // initializeComponent will take over and apply styles dynamically.
            var styles = Styles_1.default.combine(null, props.style);
            // Initialize the tricky properties here (e.g. transform).
            this._animatedValues = AnimatedTransform.initialize(styles);
            // Initialize the simple ones here (e.g. opacity);
            for (var key in styles) {
                if (styles[key] instanceof Value) {
                    styles[key].addCssProperty(key, '##' + animatedPropUnits[key]);
                    this._animatedValues.push(styles[key]);
                }
            }
            this._initialStyle = {};
            // Build the simple static styles
            for (var styleKey in styles) {
                if (_.isObject(styles[styleKey])) {
                    continue;
                }
                else if (styles.hasOwnProperty(styleKey)) {
                    this._initialStyle[styleKey] = styles[styleKey];
                }
            }
            // Add the complicated styles
            _.each(this._animatedValues, function (value) {
                value.updateElementStylesOnto(_this._initialStyle);
            });
        };
        AnimatedComponentGenerated.prototype.initializeComponent = function (props) {
            // Conclude the initialization setting the element.
            var element = ReactDOM.findDOMNode(this.refs[refName]);
            if (element) {
                this._animatedValues.forEach(function (Value) {
                    Value.setAsInitialized(element);
                });
            }
        };
        AnimatedComponentGenerated.prototype.componentDidMount = function () {
            this.initializeComponent(this.props);
        };
        AnimatedComponentGenerated.prototype.componentDidUpdate = function () {
            this.initializeComponent(this.props);
        };
        AnimatedComponentGenerated.prototype.componentWillUnmount = function () {
            _.each(this._animatedValues, function (value) {
                value.destroy();
            });
            this._animatedValues = [];
        };
        AnimatedComponentGenerated.prototype.focus = function () {
            if (this.refs[refName] instanceof View_1.default) {
                var component = this.refs[refName];
                if (component.focus) {
                    component.focus();
                }
            }
        };
        AnimatedComponentGenerated.prototype.blur = function () {
            if (this.refs[refName] instanceof View_1.default) {
                var component = this.refs[refName];
                if (component.blur) {
                    component.blur();
                }
            }
        };
        AnimatedComponentGenerated.prototype.setFocusRestricted = function (restricted) {
            if (this.refs[refName] instanceof View_1.default) {
                var view = this.refs[refName];
                view.setFocusRestricted(restricted);
            }
        };
        AnimatedComponentGenerated.prototype.setFocusLimited = function (limited) {
            if (this.refs[refName] instanceof View_1.default) {
                var view = this.refs[refName];
                view.setFocusLimited(limited);
            }
        };
        AnimatedComponentGenerated.prototype.render = function () {
            return (React.createElement(Component, __assign({ style: this._initialStyle }, this._propsWithoutStyle, { ref: refName }), this.props.children));
        };
        return AnimatedComponentGenerated;
    }(React.Component));
    // Update the component's display name for easy debugging in react devtools extension
    AnimatedComponentGenerated.displayName = "Animated." + (Component.displayName || Component.name || 'Component');
    return AnimatedComponentGenerated;
}
exports.Image = createAnimatedComponent(Image_1.default);
exports.Text = createAnimatedComponent(Text_1.default);
exports.TextInput = createAnimatedComponent(TextInput_1.default);
exports.View = createAnimatedComponent(View_1.default);


/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* App.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Implements App interface for ReactXP.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RX = __webpack_require__(1);
var Types = __webpack_require__(6);
if (typeof (document) !== 'undefined') {
    var ifvisible = __webpack_require__(92);
}
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super.call(this) || this;
        // Handle test environment where document is not defined.
        if (typeof (document) !== 'undefined') {
            _this._activationState = ifvisible.now() ? Types.AppActivationState.Active : Types.AppActivationState.Background;
            ifvisible.on('focus', function () {
                if (_this._activationState !== Types.AppActivationState.Active) {
                    _this._activationState = Types.AppActivationState.Active;
                    _this.activationStateChangedEvent.fire(_this._activationState);
                }
            });
            ifvisible.on('blur', function () {
                if (_this._activationState !== Types.AppActivationState.Background) {
                    _this._activationState = Types.AppActivationState.Background;
                    _this.activationStateChangedEvent.fire(_this._activationState);
                }
            });
        }
        return _this;
    }
    App.prototype.initialize = function (debug, development) {
        _super.prototype.initialize.call(this, debug, development);
        window['rxdebug'] = debug;
    };
    App.prototype.getActivationState = function () {
        return this._activationState;
    };
    return App;
}(RX.App));
exports.App = App;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new App();


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Button.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation of the cross-platform Button abstraction.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = __webpack_require__(3);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(0);
var AccessibilityUtil_1 = __webpack_require__(50);
var RX = __webpack_require__(1);
var Styles_1 = __webpack_require__(8);
var Types = __webpack_require__(6);
var FocusManager_1 = __webpack_require__(34);
var _styles = {
    defaultButton: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 0,
        flexShrink: 0,
        overflow: 'hidden',
        alignItems: 'stretch',
        justifyContent: 'center',
        appRegion: 'no-drag',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        textAlign: 'left',
        borderWidth: '0'
    },
    disabled: {
        opacity: 0.5
    }
};
var _longPressTime = 1000;
var _defaultAccessibilityTrait = Types.AccessibilityTrait.Button;
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._lastMouseDownTime = 0;
        _this._ignoreClick = false;
        _this._focusDueToMouseEvent = false;
        _this._blurDueToMouseEvent = false;
        _this.onClick = function (e) {
            if (_this._ignoreClick) {
                e.stopPropagation();
                _this._ignoreClick = false;
            }
            else if (!_this.props.disabled && _this.props.onPress) {
                _this.props.onPress(e);
            }
        };
        _this._onContextMenu = function (e) {
            if (_this.props.onContextMenu) {
                _this.props.onContextMenu(e);
            }
        };
        _this._onMouseDown = function (e) {
            if (_this.props.onPressIn) {
                _this.props.onPressIn(e);
            }
            if (_this.props.onLongPress) {
                _this._lastMouseDownTime = Date.now().valueOf();
                _this._lastMouseDownEvent = e;
                e.persist();
                _this._longPressTimer = window.setTimeout(function () {
                    _this._longPressTimer = undefined;
                    if (_this.props.onLongPress) {
                        _this.props.onLongPress(_this._lastMouseDownEvent);
                        _this._ignoreClick = true;
                    }
                }, _longPressTime);
            }
        };
        _this._onMouseUp = function (e) {
            if (_this.props.onPressOut) {
                _this.props.onPressOut(e);
            }
            if (_this._longPressTimer) {
                window.clearTimeout(_this._longPressTimer);
            }
        };
        _this._onMouseEnter = function (e) {
            if (_this.props.onHoverStart) {
                _this._focusDueToMouseEvent = true;
                _this.props.onHoverStart(e);
            }
        };
        _this._onMouseLeave = function (e) {
            if (_this.props.onHoverEnd) {
                _this._blurDueToMouseEvent = true;
                _this.props.onHoverEnd(e);
            }
        };
        // When we get focus on an element, show the hover effect on the element.
        // This ensures that users using keyboard also get the similar experience as mouse users for accessibility.
        _this._onFocus = function (e) {
            if (_this.props.onHoverStart && !_this._focusDueToMouseEvent) {
                _this.props.onHoverStart(e);
            }
            _this._focusDueToMouseEvent = false;
            if (_this.props.onFocus) {
                _this.props.onFocus(e);
            }
        };
        _this._onBlur = function (e) {
            if (_this.props.onHoverEnd && !_this._blurDueToMouseEvent) {
                _this.props.onHoverEnd(e);
            }
            _this._blurDueToMouseEvent = false;
            if (_this.props.onBlur) {
                _this.props.onBlur(e);
            }
        };
        return _this;
    }
    Button.prototype.render = function () {
        var ariaRole = AccessibilityUtil_1.default.accessibilityTraitToString(this.props.accessibilityTraits, _defaultAccessibilityTrait);
        var ariaSelected = AccessibilityUtil_1.default.accessibilityTraitToAriaSelected(this.props.accessibilityTraits);
        var isAriaHidden = AccessibilityUtil_1.default.isHidden(this.props.importantForAccessibility);
        // NOTE: We use tabIndex=0 to support focus.
        return (React.createElement("button", { style: this._getStyles(), role: ariaRole, title: this.props.title, tabIndex: this.props.tabIndex, "aria-label": this.props.accessibilityLabel || this.props.title, "aria-disabled": this.props.disabled, "aria-hidden": isAriaHidden, "aria-selected": ariaSelected, onClick: this.onClick, onContextMenu: this._onContextMenu, onMouseDown: this._onMouseDown, onMouseUp: this._onMouseUp, onMouseEnter: this._onMouseEnter, onMouseLeave: this._onMouseLeave, onFocus: this._onFocus, onBlur: this._onBlur, onKeyDown: this.props.onKeyPress, disabled: this.props.disabled }, this.props.children));
    };
    Button.prototype.focus = function () {
        var el = ReactDOM.findDOMNode(this);
        if (el) {
            el.focus();
        }
    };
    Button.prototype.blur = function () {
        var el = ReactDOM.findDOMNode(this);
        if (el) {
            el.blur();
        }
    };
    Button.prototype._getStyles = function () {
        var buttonStyles = _.extend.apply(_, [{}].concat(this.props.style));
        // Specify default syle for padding only if padding is not already specified
        if (buttonStyles && buttonStyles.padding === undefined &&
            buttonStyles.paddingRight === undefined && buttonStyles.paddingLeft === undefined &&
            buttonStyles.paddingBottom === undefined && buttonStyles.paddingTop === undefined &&
            buttonStyles.paddingHorizontal === undefined && buttonStyles.paddingVertical === undefined) {
            buttonStyles['padding'] = '0';
        }
        var combinedStyles = Styles_1.default.combine(_styles.defaultButton, buttonStyles);
        if (this.props.disabled) {
            combinedStyles.opacity = 0.5;
        }
        if (this.props.disabled) {
            combinedStyles['cursor'] = 'default';
        }
        else {
            combinedStyles['cursor'] = this.props.cursor || 'pointer';
        }
        return combinedStyles;
    };
    return Button;
}(RX.Button));
exports.Button = Button;
FocusManager_1.applyFocusableComponentMixin(Button);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;


/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Clipboard.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation of the cross-platform Clipboard abstraction.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RX = __webpack_require__(1);
var Clipboard = (function (_super) {
    __extends(Clipboard, _super);
    function Clipboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Clipboard.prototype.setText = function (text) {
        var node = Clipboard._createInvisibleNode();
        node.textContent = text;
        document.body.appendChild(node);
        Clipboard._copyNode(node);
        document.body.removeChild(node);
    };
    Clipboard.prototype.getText = function () {
        // Not supported in web platforms. This should can be only handled in the paste event handlers
        throw 'Not implemented';
    };
    Clipboard._createInvisibleNode = function () {
        var node = document.createElement('span');
        node.style.position = 'absolute';
        node.style.left = '-10000px';
        var style = node.style;
        // Explicitly mark the node as selectable.
        if (style['userSelect'] !== undefined) {
            style['userSelect'] = 'text';
        }
        if (style['msUserSelect'] !== undefined) {
            style['msUserSelect'] = 'text';
        }
        if (style['webkitUserSelect'] !== undefined) {
            style['webkitUserSelect'] = 'text';
        }
        if (style['MozUserSelect'] !== undefined) {
            style['MozUserSelect'] = 'text';
        }
        return node;
    };
    Clipboard._copyNode = function (node) {
        var selection = getSelection();
        selection.removeAllRanges();
        var range = document.createRange();
        range.selectNodeContents(node);
        selection.addRange(range);
        document.execCommand('copy');
        selection.removeAllRanges();
    };
    return Clipboard;
}(RX.Clipboard));
exports.Clipboard = Clipboard;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Clipboard();


/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Scrollbar.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Custom scrollbar implementation for web.
*/

var UNIT = 'px';
var SCROLLER_MIN_SIZE = 15;
var SCROLLER_NEGATIVE_MARGIN = 30;
var LTR_OVERRIDE_CLASS = 'ltroverride';
var NEUTRAL_OVERRIDE_CLASS = 'neutraloverride';
var _nativeSrollBarWidth = -1;
var _isStyleSheetInstalled = false;
var _customScrollbarCss = "\n    .rxCustomScroll .scrollViewport > * {\n        box-sizing: border-box;\n        display: block;\n    }\n    .rxCustomScroll .rail {\n        position: absolute;\n        border-radius: 4px;\n        opacity: 0;\n        background-color: transparent;\n        transition-delay: 0, 0;\n        transition-duration: .2s, .2s;\n        transition-property: background-color, opacity;\n        transition-timing-function: linear, linear;\n        display: none;\n        box-sizing: border-box;\n    }\n    .rxCustomScroll .rail:hover {\n        background-color: #EEE;\n        border-color: #EEE;\n        opacity: .9;\n        border-radius: 6px;\n    }\n    .rxCustomScroll .rail:hover .slider {\n        border-radius: 6px;\n    }\n    .rxCustomScroll .rail .slider {\n        position: absolute;\n        border-radius: 4px;\n        background: #555;\n        box-sizing: border-box;\n        border: 1px solid #555;\n    }\n    .rxCustomScroll:not(.neutraloverride) > .scrollViewportV > * {\n        margin-right: em(-17px) !important;\n    }\n    .rxCustomScroll .railV {\n        top: 0;\n        bottom: 0;\n        right: 3px;\n        width: 8px;\n    }\n    .rxCustomScroll .railV .slider {\n        top: 10px;\n        width: 8px;\n        min-height: 15px;\n    }\n    .rxCustomScroll .railV.railBoth {\n        bottom: 15px;\n    }\n    .rxCustomScroll .railH {\n        left: 0;\n        right: 0;\n        bottom: 3px;\n        height: 8px;\n    }\n    .rxCustomScroll .railH .slider {\n        left: 10px;\n        top: -1px;\n        height: 8px;\n        min-width: 15px;\n    }\n    .rxCustomScroll .railH.railBoth {\n        right: 15px;\n    }\n    .rxCustomScroll.active .rail {\n        display: block;\n    }\n    .rxCustomScroll:hover .rail {\n        opacity: .6;\n    }\n    .rxCustomScroll:hover .rail .slider {\n        background: #AAA;\n        border-color: #AAA;\n    }\n    .rxCustomScroll.rxCustomScrollH {\n        width: auto;\n    }\n    .rxCustomScroll.rxCustomScrollV {\n        width: 100%;\n    }\n    .rxCustomScroll.scrolling .rail {\n        background-color: #EEE;\n        border-color: #EEE;\n        opacity: .9;\n        border-radius: 6px;\n    }\n    .rxCustomScroll.scrolling .rail .slider {\n        border-radius: 6px;\n        background: #AAA;\n        border-color: #AAA;\n    }\n    .rxCustomScroll.scrolling .scrollViewport > * {\n        pointer-events: none !important;\n    }\n    .rxCustomScroll.scrolling .railV {\n        width: 12px;\n    }\n    .rxCustomScroll.scrolling .railV .slider {\n        width: 12px;\n    }\n    .rxCustomScroll.scrolling .railH {\n        height: 12px;\n    }\n    .rxCustomScroll.scrolling .railH .slider {\n        height: 12px;\n    }\n    .rxCustomScroll .railV:hover {\n        width: 12px;\n    }\n    .rxCustomScroll .railV:hover .slider {\n        width: 12px;\n    }\n    .rxCustomScroll .railH:hover {\n        height: 12px;\n    }\n    .rxCustomScroll .railH:hover .slider {\n        height: 12px;\n    }\n";
var Scrollbar = (function () {
    function Scrollbar(container) {
        this._verticalBar = {};
        this._horizontalBar = {};
        this._dragging = false;
        this._scrollingVisible = false;
        this._hasHorizontal = false;
        this._hasVertical = true;
        this._stopDragCallback = this._stopDrag.bind(this);
        this._startDragVCallback = this._startDrag.bind(this, true);
        this._startDragHCallback = this._startDrag.bind(this, false);
        this._handleDragCallback = this._handleDrag.bind(this);
        this._handleWheelCallback = this._handleWheel.bind(this);
        this._handleMouseDownCallback = this._handleMouseDown.bind(this);
        this._updateCallback = this.update.bind(this);
        if (!container) {
            throw new Error('Container must not be null');
        }
        this._container = container;
    }
    Scrollbar.getNativeScrollbarWidth = function () {
        // Have we cached the value alread?
        if (_nativeSrollBarWidth >= 0) {
            return _nativeSrollBarWidth;
        }
        var inner = document.createElement('p');
        inner.style.width = '100%';
        inner.style.height = '100%';
        var outer = document.createElement('div');
        outer.style.position = 'absolute';
        outer.style.top = '0';
        outer.style.left = '0';
        outer.style.visibility = 'hidden';
        outer.style.width = '100px';
        outer.style.height = '100px';
        outer.style.overflow = 'hidden';
        outer.appendChild(inner);
        document.body.appendChild(outer);
        var w1 = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        var w2 = inner.offsetWidth;
        if (w1 === w2) {
            w2 = outer.clientWidth;
        }
        document.body.removeChild(outer);
        _nativeSrollBarWidth = w1 - w2;
        return _nativeSrollBarWidth;
    };
    Scrollbar._installStyleSheet = function () {
        // Have we installed the style sheet already?
        if (_isStyleSheetInstalled) {
            return;
        }
        // We set the CSS style sheet here to avoid the need
        // for users of this class to carry along another CSS
        // file.
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = _customScrollbarCss;
        }
        else {
            style.appendChild(document.createTextNode(_customScrollbarCss));
        }
        head.appendChild(style);
    };
    Scrollbar.prototype._tryLtrOverride = function () {
        var rtlbox = document.createElement('div');
        rtlbox.style.cssText = 'position: absolute; overflow-y: scroll; width: 30px; visibility: hidden;';
        rtlbox.innerHTML = '<div class="probe"></div>';
        this._container.appendChild(rtlbox);
        var probe = rtlbox.querySelector('.probe'), rtlboxRect = rtlbox.getBoundingClientRect(), probeRect = probe.getBoundingClientRect(), isLeftBound = rtlboxRect.left === probeRect.left, isRightBound = rtlboxRect.right === probeRect.right, isNeutral = isLeftBound && isRightBound;
        this._container.classList.remove(NEUTRAL_OVERRIDE_CLASS);
        this._container.classList.remove(LTR_OVERRIDE_CLASS);
        if (isNeutral) {
            this._container.classList.add(NEUTRAL_OVERRIDE_CLASS);
        }
        else if (isLeftBound) {
            this._container.classList.add(LTR_OVERRIDE_CLASS);
        }
        rtlbox.innerHTML = '';
        this._container.removeChild(rtlbox);
    };
    Scrollbar.prototype._prevent = function (e) {
        e.preventDefault();
    };
    Scrollbar.prototype._updateSliders = function () {
        if (this._hasHorizontal) {
            // Read from DOM before we write back
            var newSliderWidth = this._horizontalBar.sliderSize + UNIT;
            var newSliderLeft = this._viewport.scrollLeft * this._horizontalBar.scroll2Slider + UNIT;
            this._horizontalBar.slider.style.width = newSliderWidth;
            this._horizontalBar.slider.style.left = newSliderLeft;
        }
        if (this._hasVertical) {
            // Read from DOM before we write back
            var newSliderHeight = this._verticalBar.sliderSize + UNIT;
            var newSliderTop = this._viewport.scrollTop * this._verticalBar.scroll2Slider + UNIT;
            this._verticalBar.slider.style.height = newSliderHeight;
            this._verticalBar.slider.style.top = newSliderTop;
        }
    };
    Scrollbar.prototype._handleDrag = function (e) {
        if (this._dragIsVertical) {
            this._viewport.scrollTop = (e.pageY - this._verticalBar.dragOffset) * this._verticalBar.slider2Scroll;
        }
        else {
            this._viewport.scrollLeft = (e.pageX - this._horizontalBar.dragOffset) * this._horizontalBar.slider2Scroll;
        }
    };
    Scrollbar.prototype._startDrag = function (dragIsVertical, e) {
        if (!this._dragging) {
            window.addEventListener('mouseup', this._stopDragCallback);
            window.addEventListener('mousemove', this._handleDragCallback);
            this._container.classList.add('scrolling');
            if (this._hasHorizontal) {
                this._horizontalBar.dragOffset = e.pageX - this._horizontalBar.slider.offsetLeft;
            }
            if (this._hasVertical) {
                this._verticalBar.dragOffset = e.pageY - this._verticalBar.slider.offsetTop;
            }
            this._dragging = true;
            this._dragIsVertical = dragIsVertical;
        }
        this._prevent(e);
    };
    Scrollbar.prototype._stopDrag = function () {
        this._container.classList.remove('scrolling');
        window.removeEventListener('mouseup', this._stopDragCallback);
        window.removeEventListener('mousemove', this._handleDragCallback);
        this._dragging = false;
    };
    Scrollbar.prototype._handleWheel = function (e) {
        // Always prefer the vertical axis if present. User can override with the control key.
        if (this._hasVertical) {
            this._viewport.scrollTop = this._normalizeDelta(e) + this._viewport.scrollTop;
        }
        else if (this._hasHorizontal) {
            this._viewport.scrollLeft = this._normalizeDelta(e) + this._viewport.scrollLeft;
        }
    };
    Scrollbar.prototype._handleMouseDown = function (e) {
        this._prevent(e);
    };
    Scrollbar.prototype._normalizeDelta = function (e) {
        if (e.deltaY) {
            return e.deltaY > 0 ? 100 : -100;
        }
        var originalEvent = e.originalEvent;
        if (originalEvent && originalEvent.wheelDelta) {
            return originalEvent.wheelDelta;
        }
        return 0;
    };
    Scrollbar.prototype._addListeners = function () {
        if (this._hasVertical) {
            this._verticalBar.slider.addEventListener('mousedown', this._startDragVCallback);
            this._verticalBar.rail.addEventListener('wheel', this._handleWheelCallback);
            this._verticalBar.rail.addEventListener('mousedown', this._handleMouseDownCallback);
        }
        if (this._hasHorizontal) {
            this._horizontalBar.slider.addEventListener('mousedown', this._startDragHCallback);
            this._horizontalBar.rail.addEventListener('wheel', this._handleWheelCallback);
            this._horizontalBar.rail.addEventListener('mousedown', this._handleMouseDownCallback);
        }
    };
    Scrollbar.prototype._removeListeners = function () {
        if (this._hasVertical) {
            this._verticalBar.slider.removeEventListener('mousedown', this._startDragVCallback);
            this._verticalBar.rail.removeEventListener('wheel', this._handleWheelCallback);
            this._verticalBar.rail.removeEventListener('mousedown', this._handleMouseDownCallback);
        }
        if (this._hasHorizontal) {
            this._horizontalBar.slider.removeEventListener('mousedown', this._startDragHCallback);
            this._horizontalBar.rail.removeEventListener('wheel', this._handleWheelCallback);
            this._horizontalBar.rail.removeEventListener('mousedown', this._handleMouseDownCallback);
        }
    };
    Scrollbar.prototype._createDivWithClass = function (className) {
        var div = document.createElement('div');
        div.className = className;
        return div;
    };
    Scrollbar.prototype._addScrollBar = function (scrollbarInfo, railClass, hasBoth) {
        var slider = this._createDivWithClass('slider');
        scrollbarInfo.rail = this._createDivWithClass('rail ' + railClass + (hasBoth ? ' railBoth' : ''));
        scrollbarInfo.slider = slider;
        scrollbarInfo.rail.appendChild(slider);
        this._container.appendChild(scrollbarInfo.rail);
    };
    Scrollbar.prototype._addScrollbars = function () {
        var containerClass = this._hasVertical ? 'rxCustomScrollV' : 'rxCustomScrollH';
        if (this._hasVertical) {
            this._addScrollBar(this._verticalBar, 'railV', this._hasHorizontal);
        }
        if (this._hasHorizontal) {
            this._addScrollBar(this._horizontalBar, 'railH', this._hasVertical);
        }
        this._container.classList.add(containerClass);
        this._container.classList.add('rxCustomScroll');
        this._viewport = this._container.querySelector('.scrollViewport');
    };
    Scrollbar.prototype._removeScrollbars = function () {
        if (this._hasVertical) {
            this._verticalBar.rail.innerHTML = '';
            this._container.removeChild(this._verticalBar.rail);
        }
        if (this._hasHorizontal) {
            this._horizontalBar.rail.innerHTML = '';
            this._container.removeChild(this._horizontalBar.rail);
        }
    };
    Scrollbar.prototype._calcNewBarSize = function (bar, newSize, newScrollSize, hasBoth) {
        if (hasBoth) {
            newSize -= SCROLLER_NEGATIVE_MARGIN;
            newScrollSize -= SCROLLER_NEGATIVE_MARGIN - Scrollbar.getNativeScrollbarWidth();
        }
        if (newScrollSize !== bar.scrollSize || newSize !== bar.size) {
            bar.size = newSize;
            bar.scrollSize = newScrollSize;
            bar.scroll2Slider = newSize / newScrollSize;
            bar.sliderSize = newSize * bar.scroll2Slider;
            // Don't allow the sliders to overlap.
            if (hasBoth) {
                bar.sliderSize = Math.max(bar.sliderSize - SCROLLER_NEGATIVE_MARGIN + Scrollbar.getNativeScrollbarWidth(), 0);
            }
            if (bar.sliderSize < SCROLLER_MIN_SIZE) {
                var railRange = newSize - SCROLLER_MIN_SIZE + bar.sliderSize;
                bar.scroll2Slider = railRange / newScrollSize;
                bar.slider2Scroll = newScrollSize / railRange;
            }
            else {
                bar.slider2Scroll = newScrollSize / newSize;
            }
        }
    };
    Scrollbar.prototype._resize = function () {
        if (this._hasHorizontal) {
            this._calcNewBarSize(this._horizontalBar, this._viewport.offsetWidth, this._viewport.scrollWidth, this._hasVertical);
        }
        if (this._hasVertical) {
            this._calcNewBarSize(this._verticalBar, this._viewport.offsetHeight, this._viewport.scrollHeight, this._hasHorizontal);
        }
    };
    Scrollbar.prototype.update = function () {
        this._resize();
        // We add one below to provide a small fudge factor because browsers round their scroll and offset values to the
        // nearest integer, and IE sometimes ends up returning a scroll and offset value that are off by one.
        if ((this._verticalBar && this._verticalBar.scrollSize > this._verticalBar.size + 1) ||
            (this._horizontalBar && this._horizontalBar.scrollSize > this._horizontalBar.size + 1)) {
            this.show();
            this._updateSliders();
        }
        else {
            this.hide();
        }
    };
    Scrollbar.prototype.show = function () {
        if (!this._scrollingVisible) {
            this._container.classList.add('active');
            this._addListeners();
            this._scrollingVisible = true;
        }
    };
    Scrollbar.prototype.hide = function () {
        if (this._scrollingVisible) {
            this._container.classList.remove('active');
            this._removeListeners();
            this._scrollingVisible = false;
        }
    };
    Scrollbar.prototype.init = function (options) {
        if (options) {
            this._hasHorizontal = options.horizontal;
            // Only if vertical is explicitly false as opposed to null, set it to false (default is true)
            if (options.vertical === false) {
                this._hasVertical = options.vertical;
            }
        }
        Scrollbar._installStyleSheet();
        this._tryLtrOverride();
        this._addScrollbars();
        this.show();
        this.update();
        this._container.addEventListener('mouseenter', this._updateCallback);
    };
    Scrollbar.prototype.dispose = function () {
        this._stopDrag();
        this._container.removeEventListener('mouseenter', this._updateCallback);
        this.hide();
        this._removeScrollbars();
        // release DOM nodes
        this._container = null;
        this._viewport = null;
        this._verticalBar = null;
        this._horizontalBar = null;
    };
    return Scrollbar;
}());
exports.Scrollbar = Scrollbar;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Scrollbar;


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* GestureView.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation of the cross-platform GestureView component.
* It provides support for the scroll wheel, clicks and double clicks.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = __webpack_require__(3);
var React = __webpack_require__(0);
var MouseResponder_1 = __webpack_require__(369);
var RX = __webpack_require__(1);
var Styles_1 = __webpack_require__(8);
var Types = __webpack_require__(6);
var _styles = {
    defaultView: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 0,
        flexShrink: 0,
        overflow: 'hidden',
        alignItems: 'stretch',
        justifyContent: 'center'
    }
};
var _doubleTapDurationThreshold = 250;
var _doubleTapPixelThreshold = 20;
var _panPixelThreshold = 10;
var _preferredPanRatio = 3;
var GestureType;
(function (GestureType) {
    GestureType[GestureType["None"] = 0] = "None";
    GestureType[GestureType["Pan"] = 1] = "Pan";
    GestureType[GestureType["PanVertical"] = 2] = "PanVertical";
    GestureType[GestureType["PanHorizontal"] = 3] = "PanHorizontal";
})(GestureType || (GestureType = {}));
var _idCounter = 1;
var GestureView = (function (_super) {
    __extends(GestureView, _super);
    function GestureView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // State for tracking double taps
        _this._doubleTapTimer = null;
        _this._lastTapEvent = null;
        // private _pendingGestureState: Types.PanGestureState = null;
        _this._pendingGestureType = GestureType.None;
        _this._gestureTypeLocked = false;
        _this._skipNextTap = false;
        _this._setContainerRef = function (container) {
            // safe since div refs resolve into HTMLElement and not react element.
            _this._container = container;
        };
        _this._onClick = function (e) {
            if (!_this.props.onDoubleTap) {
                // If there is no double-tap handler, we can invoke the tap handler immediately.
                _this._sendTapEvent(e);
            }
            else if (_this._isDoubleTap(e)) {
                // This is a double-tap, so swallow the previous single tap.
                _this._cancelDoubleTapTimer();
                _this._sendDoubleTapEvent(e);
                _this._lastTapEvent = null;
            }
            else {
                // This wasn't a double-tap. Report any previous single tap and start the double-tap
                // timer so we can determine whether the current tap is a single or double.
                _this._reportDelayedTap();
                _this._startDoubleTapTimer(e);
            }
        };
        _this._detectGestureType = function (gestureState) {
            // we need to lock gesture type until it's completed
            if (_this._gestureTypeLocked) {
                return _this._pendingGestureType;
            }
            _this._gestureTypeLocked = true;
            if (_this._shouldRespondToPan(gestureState)) {
                return GestureType.Pan;
            }
            else if (_this._shouldRespondToPanVertical(gestureState)) {
                return GestureType.PanVertical;
            }
            else if (_this._shouldRespondToPanHorizontal(gestureState)) {
                return GestureType.PanHorizontal;
            }
            _this._gestureTypeLocked = false;
            return GestureType.None;
        };
        _this._getPanPixelThreshold = function () {
            return _this.props.panPixelThreshold > 0 ? _this.props.panPixelThreshold : _panPixelThreshold;
        };
        _this._onWheel = function (e) {
            if (_this.props.onScrollWheel) {
                var clientRect = _this._getGestureViewClientRect();
                var scrollWheelEvent = {
                    clientX: e.clientX - clientRect.left,
                    clientY: e.clientY - clientRect.top,
                    pageX: e.pageX,
                    pageY: e.pageY,
                    scrollAmount: e.deltaY,
                    timeStamp: e.timeStamp
                };
                _this.props.onScrollWheel(scrollWheelEvent);
            }
        };
        _this._sendPanEvent = function (gestureState) {
            switch (_this._pendingGestureType) {
                case GestureType.Pan:
                    _this.props.onPan(gestureState);
                    break;
                case GestureType.PanVertical:
                    _this.props.onPanVertical(gestureState);
                    break;
                case GestureType.PanHorizontal:
                    _this.props.onPanHorizontal(gestureState);
                    break;
                default:
            }
            // we need to clean taps in case there was a pan event in the meantime
            if (_this._pendingGestureType !== GestureType.None) {
                _this._lastTapEvent = null;
                _this._cancelDoubleTapTimer();
                _this._skipNextTap = true;
            }
        };
        return _this;
    }
    GestureView.prototype.componentDidMount = function () {
        var _this = this;
        this._id = _idCounter++;
        this._responder = MouseResponder_1.default.create({
            id: this._id,
            target: this._container,
            shouldBecomeFirstResponder: function (event) {
                if (!_this.props.onPan && !_this.props.onPanHorizontal && !_this.props.onPanVertical) {
                    return false;
                }
                var _a = _this._container.getBoundingClientRect(), top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
                var clientX = event.clientX, clientY = event.clientY;
                if (clientX >= left && clientX <= right && clientY >= top && clientY <= bottom) {
                    return true;
                }
                return false;
            },
            onMove: function (event, gestureState) {
                _this._pendingGestureType = _this._detectGestureType(gestureState);
                _this._sendPanEvent(gestureState);
            },
            onTerminate: function (event, gestureState) {
                _this._pendingGestureType = _this._detectGestureType(gestureState);
                _this._sendPanEvent(gestureState);
                _this._pendingGestureType = GestureType.None;
                _this._gestureTypeLocked = false;
            }
        });
    };
    GestureView.prototype.componentWillUnmount = function () {
        // Dispose of timer before the component goes away.
        this._cancelDoubleTapTimer();
        if (this._responder) {
            this._responder.dispose();
        }
    };
    GestureView.prototype.render = function () {
        return (React.createElement("div", { style: this._getStyles(), ref: this._setContainerRef, onClick: this._onClick, onWheel: this._onWheel }, this.props.children));
    };
    GestureView.prototype._getStyles = function () {
        var combinedStyles = Styles_1.default.combine(_styles.defaultView, this.props.style);
        var cursorName = null;
        switch (this.props.mouseOverCursor) {
            case Types.GestureMouseCursor.Grab:
                cursorName = 'grab';
                break;
            case Types.GestureMouseCursor.Move:
                cursorName = 'move';
                break;
            case Types.GestureMouseCursor.Pointer:
                cursorName = 'pointer';
                break;
        }
        if (cursorName) {
            combinedStyles['cursor'] = cursorName;
        }
        return combinedStyles;
    };
    GestureView.prototype._shouldRespondToPan = function (gestureState) {
        if (!this.props.onPan) {
            return false;
        }
        var threshold = this._getPanPixelThreshold();
        var distance = this._calcDistance(gestureState.clientX - gestureState.initialClientX, gestureState.clientY - gestureState.initialClientY);
        if (distance < threshold) {
            return false;
        }
        return true;
    };
    GestureView.prototype._shouldRespondToPanVertical = function (gestureState) {
        if (!this.props.onPanVertical) {
            return false;
        }
        var dx = gestureState.clientX - gestureState.initialClientX;
        var dy = gestureState.clientY - gestureState.initialClientY;
        // Has the user started to pan?
        var panThreshold = this._getPanPixelThreshold();
        var isPan = Math.abs(dy) >= panThreshold;
        if (isPan && this.props.preferredPan === Types.PreferredPanGesture.Horizontal) {
            return Math.abs(dy) > Math.abs(dx * _preferredPanRatio);
        }
        return isPan;
    };
    GestureView.prototype._shouldRespondToPanHorizontal = function (gestureState) {
        if (!this.props.onPanHorizontal) {
            return false;
        }
        var dx = gestureState.clientX - gestureState.initialClientX;
        var dy = gestureState.clientY - gestureState.initialClientY;
        // Has the user started to pan?
        var panThreshold = this._getPanPixelThreshold();
        var isPan = Math.abs(dx) >= panThreshold;
        if (isPan && this.props.preferredPan === Types.PreferredPanGesture.Vertical) {
            return Math.abs(dx) > Math.abs(dy * _preferredPanRatio);
        }
        return isPan;
    };
    GestureView.prototype._calcDistance = function (dx, dy) {
        return Math.sqrt(dx * dx + dy * dy);
    };
    // This method assumes that the caller has already determined that two
    // clicks have been detected in a row. It is responsible for determining if
    // they occurred within close proximity and within a certain threshold of time.
    GestureView.prototype._isDoubleTap = function (e) {
        var timeStamp = e.timeStamp.valueOf();
        var pageX = e.pageX;
        var pageY = e.pageY;
        if (!this._lastTapEvent) {
            return false;
        }
        return (timeStamp - this._lastTapEvent.timeStamp.valueOf() <= _doubleTapDurationThreshold &&
            this._calcDistance(this._lastTapEvent.pageX - pageX, this._lastTapEvent.pageY - pageY) <=
                _doubleTapPixelThreshold);
    };
    // Starts a timer that reports a previous tap if it's not canceled by a subsequent gesture.
    GestureView.prototype._startDoubleTapTimer = function (e) {
        var _this = this;
        this._lastTapEvent = _.clone(e);
        this._doubleTapTimer = window.setTimeout(function () {
            _this._reportDelayedTap();
            _this._doubleTapTimer = null;
        }, _doubleTapDurationThreshold);
    };
    // Cancels any pending double-tap timer.
    GestureView.prototype._cancelDoubleTapTimer = function () {
        if (this._doubleTapTimer) {
            clearTimeout(this._doubleTapTimer);
            this._doubleTapTimer = null;
        }
    };
    // If there was a previous tap recorded but we haven't yet reported it because we were
    // waiting for a potential second tap, report it now.
    GestureView.prototype._reportDelayedTap = function () {
        if (this._lastTapEvent && this.props.onTap) {
            this._sendTapEvent(this._lastTapEvent);
            this._lastTapEvent = null;
        }
    };
    GestureView.prototype._sendTapEvent = function (e) {
        // we need to skip tap after succesfull pan event
        // mouse up would otherwise trigger both pan & tap
        if (this._skipNextTap) {
            this._skipNextTap = false;
            return;
        }
        if (this.props.onTap) {
            var clientRect = this._getGestureViewClientRect();
            var tapEvent = {
                pageX: e.pageX,
                pageY: e.pageY,
                clientX: e.clientX - clientRect.left,
                clientY: e.clientY - clientRect.top,
                timeStamp: e.timeStamp
            };
            this.props.onTap(tapEvent);
        }
    };
    GestureView.prototype._sendDoubleTapEvent = function (e) {
        if (this.props.onDoubleTap) {
            var clientRect = this._getGestureViewClientRect();
            var tapEvent = {
                pageX: e.pageX,
                pageY: e.pageY,
                clientX: e.clientX - clientRect.left,
                clientY: e.clientY - clientRect.top,
                timeStamp: e.timeStamp
            };
            this.props.onDoubleTap(tapEvent);
        }
    };
    GestureView.prototype._getGestureViewClientRect = function () {
        return this._container.getBoundingClientRect();
    };
    return GestureView;
}(RX.GestureView));
exports.GestureView = GestureView;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GestureView;


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* International.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation for i18n.
*/

var International = (function () {
    function International() {
    }
    International.prototype.allowRTL = function (allow) {
        // Need to implement
    };
    International.prototype.forceRTL = function (force) {
        // Need to implement
    };
    International.prototype.isRTL = function () {
        return false;
    };
    return International;
}());
exports.International = International;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new International();


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Link.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation of the cross-platform Link abstraction.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = __webpack_require__(0);
var RX = __webpack_require__(1);
var Styles_1 = __webpack_require__(8);
var FocusManager_1 = __webpack_require__(34);
var _styles = {
    defaultStyle: {
        position: 'relative',
        display: 'inline',
        flexDirection: 'column',
        flexGrow: 0,
        flexShrink: 0,
        overflow: 'hidden',
        alignItems: 'stretch',
        overflowWrap: 'break-word',
        msHyphens: 'auto'
    },
    ellipsis: {
        position: 'relative',
        display: 'inline',
        flexDirection: 'column',
        flexGrow: 0,
        flexShrink: 0,
        overflow: 'hidden',
        alignItems: 'stretch',
        whiteSpace: 'pre',
        textOverflow: 'ellipsis'
    }
};
var _longPressTime = 1000;
var Link = (function (_super) {
    __extends(Link, _super);
    function Link() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onClick = function (e) {
            e.stopPropagation();
            if (_this.props.onPress) {
                e.preventDefault();
                _this.props.onPress(e, _this.props.url);
            }
        };
        _this._onMouseDown = function (e) {
            if (_this.props.onLongPress) {
                e.persist();
                _this._longPressTimer = window.setTimeout(function () {
                    _this._longPressTimer = undefined;
                    if (_this.props.onLongPress) {
                        _this.props.onLongPress(e, _this.props.url);
                    }
                }, _longPressTime);
            }
        };
        _this._onMouseUp = function (e) {
            if (_this._longPressTimer) {
                window.clearTimeout(_this._longPressTimer);
                _this._longPressTimer = undefined;
            }
        };
        return _this;
    }
    Link.prototype.render = function () {
        // SECURITY WARNING:
        //   Note the use of rel='noreferrer'
        //   Destroy the back-link to this window. Otherwise the (untrusted) URL we are about to load can redirect OUR window.
        //   See: https://mathiasbynens.github.io/rel-noopener/
        return (React.createElement("a", { style: this._getStyles(), title: this.props.title, href: this.props.url, target: '_blank', rel: 'noreferrer', onClick: this._onClick, onMouseEnter: this.props.onHoverStart, onMouseLeave: this.props.onHoverEnd, onMouseDown: this._onMouseDown }, this.props.children));
    };
    Link.prototype._getStyles = function () {
        // There's no way in HTML to properly handle numberOfLines > 1,
        // but we can correctly handle the common case where numberOfLines is 1.
        var combinedStyles = Styles_1.default.combine(this.props.numberOfLines === 1 ? _styles.ellipsis : _styles.defaultStyle, this.props.style);
        // Handle cursor styles
        if (this.props.selectable) {
            combinedStyles['userSelect'] = 'text';
            combinedStyles['WebkitUserSelect'] = 'text';
            combinedStyles['MozUserSelect'] = 'text';
            combinedStyles['msUserSelect'] = 'text';
        }
        combinedStyles['cursor'] = 'pointer';
        return combinedStyles;
    };
    return Link;
}(RX.Link));
exports.Link = Link;
FocusManager_1.applyFocusableComponentMixin(Link);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Link;


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Linking.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation for deep linking
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SyncTasks = __webpack_require__(20);
var Types = __webpack_require__(6);
var Linking_1 = __webpack_require__(338);
var Linking = (function (_super) {
    __extends(Linking, _super);
    function Linking() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Linking.prototype._openUrl = function (url) {
        var otherWindow = window.open();
        if (!otherWindow) {
            // window opening was blocked by browser (probably not
            // invoked in direct reaction to user action, like thru
            // promise or setTimeout).
            return SyncTasks.Rejected({
                code: Types.LinkingErrorCode.Blocked,
                url: url,
                description: 'Window was blocked by popup blocker'
            });
        }
        // SECURITY WARNING:
        //   Destroy the back-link to this window. Otherwise the (untrusted) URL we are about to load can redirect OUR window.
        //   See: https://mathiasbynens.github.io/rel-noopener/
        // Note: can only set to null, otherwise is readonly.
        // Note: In order for mailto links to work properly window.opener cannot be null.
        if (url.indexOf('mailto:') !== 0) {
            otherWindow.opener = null;
        }
        otherWindow.location.href = url;
        return SyncTasks.Resolved();
    };
    Linking.prototype.launchEmail = function (emailInfo) {
        // Format email info
        var emailUrl = this._createEmailUrl(emailInfo);
        window.location.href = emailUrl;
        return SyncTasks.Resolved();
    };
    Linking.prototype.getInitialUrl = function () {
        return SyncTasks.Resolved(null);
    };
    return Linking;
}(Linking_1.Linking));
exports.Linking = Linking;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Linking();


/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Modal.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation of the cross-platform Modal abstraction.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FrontLayerViewManager_1 = __webpack_require__(81);
var RX = __webpack_require__(1);
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Modal.prototype.isDisplayed = function (modalId) {
        return FrontLayerViewManager_1.default.isModalDisplayed(modalId);
    };
    Modal.prototype.show = function (modal, modalId) {
        FrontLayerViewManager_1.default.showModal(modal, modalId);
    };
    Modal.prototype.dismiss = function (modalId) {
        FrontLayerViewManager_1.default.dismissModal(modalId);
    };
    Modal.prototype.dismissAll = function () {
        FrontLayerViewManager_1.default.dismissAllModals();
    };
    return Modal;
}(RX.Modal));
exports.Modal = Modal;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Modal();


/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* ModalContainer.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation of a view that's used to render modals.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = __webpack_require__(0);
var _styles = {
    modalContainerStyle: {
        display: 'flex',
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: '1 1 auto',
        alignSelf: 'stretch',
        overflow: 'hidden',
        zIndex: 10000
    }
};
var ModalContainer = (function (_super) {
    __extends(ModalContainer, _super);
    function ModalContainer() {
        return _super.call(this) || this;
    }
    ModalContainer.prototype.render = function () {
        return (React.createElement("div", { style: _styles.modalContainerStyle }, this.props.children));
    };
    return ModalContainer;
}(React.Component));
exports.ModalContainer = ModalContainer;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ModalContainer;


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
* Navigator.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web specific implementation of Navigator. This is inspired from React.Navigator.
* This component is set with props, which are callback methods. It is primarily driven
* by state updates instigated by its public helpers like immediatelyResetRouteStack, push,
* pop, which update the state and cause transitions.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = __webpack_require__(3);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(0);
var rebound = __webpack_require__(376);
var NavigatorSceneConfigFactory_1 = __webpack_require__(355);
var RX = __webpack_require__(1);
var Styles_1 = __webpack_require__(8);
var View_1 = __webpack_require__(51);
// Default styles
var _styles = {
    container: Styles_1.default.createViewStyle({
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'stretch',
        overflow: 'hidden'
    }),
    defaultSceneStyle: Styles_1.default.createViewStyle({
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
    }),
    baseScene: Styles_1.default.createViewStyle({
        position: 'absolute',
        overflow: 'hidden',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
    }),
    disabledScene: Styles_1.default.createViewStyle({
        top: 0,
        bottom: 0,
        flex: 1
    }),
    transitioner: Styles_1.default.createViewStyle({
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'transparent',
        overflow: 'hidden',
        alignItems: 'stretch'
    }),
    sceneStyle: Styles_1.default.createViewStyle({
        flex: 1,
        shadowOffset: { height: 0, width: 0 },
        shadowRadius: 40,
        shadowColor: 'rgba(0, 0, 0, 0.2)'
    })
};
var Navigator = (function (_super) {
    __extends(Navigator, _super);
    // Receives initial props and sets initial state for Navigator
    function Navigator(initialProps) {
        var _this = _super.call(this, initialProps) || this;
        // Keep a map of all rendered scenes, keyed off their routeId
        _this._renderedSceneMap = {};
        // Default navigator state
        _this.state = {
            sceneConfigStack: [],
            routeStack: [],
            presentedIndex: 0,
            transitionFromIndex: undefined,
            transitionQueue: []
        };
        return _this;
    }
    Navigator.prototype.componentWillMount = function () {
        var _this = this;
        this.springSystem = new rebound.SpringSystem();
        this.spring = this.springSystem.createSpring();
        this.spring.setRestSpeedThreshold(0.05);
        this.spring.setCurrentValue(0).setAtRest();
        this.spring.addListener({
            onSpringUpdate: function () {
                _this._handleSpringUpdate();
            },
            onSpringAtRest: function () {
                _this._completeTransition();
            }
        });
    };
    Navigator.prototype.componentDidMount = function () {
        this._updateDimensionsCache();
        this._handleSpringUpdate();
    };
    Navigator.prototype.componentDidUpdate = function () {
        this._updateDimensionsCache();
    };
    Navigator.prototype.render = function () {
        var _this = this;
        var newRenderedSceneMap = {};
        var scenes;
        if (this.state.routeStack.length > 0) {
            scenes = this.state.routeStack.map(function (route, index) {
                var renderedScene;
                if (_this._renderedSceneMap[route.routeId] &&
                    index !== _this.state.presentedIndex) {
                    renderedScene = _this._renderedSceneMap[route.routeId];
                }
                else {
                    renderedScene = _this._renderNavigatorScene(route, index);
                }
                newRenderedSceneMap[route.routeId] = renderedScene;
                return renderedScene;
            });
        }
        else {
            scenes = [];
        }
        this._renderedSceneMap = _.clone(newRenderedSceneMap);
        return (React.createElement(View_1.default, { key: 'container', style: _styles.container },
            React.createElement(View_1.default, { style: _styles.transitioner, ref: 'transitioner' }, scenes)));
    };
    // Public Navigator Helper methods. These methods modify Navigator state, which kicks of
    // re-renders for the Navigator
    Navigator.prototype.jumpTo = function (route) {
        var destIndex = this.state.routeStack.indexOf(route);
        this._jumpN(destIndex - this.state.presentedIndex);
    };
    Navigator.prototype.jumpForward = function () {
        this._jumpN(1);
    };
    Navigator.prototype.jumpBack = function () {
        this._jumpN(-1);
    };
    Navigator.prototype.push = function (route) {
        var _this = this;
        this._invariant(!!route, 'Must supply route to push');
        var activeLength = this.state.presentedIndex + 1;
        var activeStack = this.state.routeStack.slice(0, activeLength);
        var activeAnimationConfigStack = this.state.sceneConfigStack.slice(0, activeLength);
        var nextStack = activeStack.concat([route]);
        var destIndex = nextStack.length - 1;
        var nextAnimationConfigStack = activeAnimationConfigStack.concat([
            this._getSceneConfigFromRoute(route)
        ]);
        this.setState({
            routeStack: nextStack,
            sceneConfigStack: nextAnimationConfigStack
        }, function () {
            _this._enableScene(destIndex);
            _this._transitionTo(destIndex);
        });
    };
    Navigator.prototype.immediatelyResetRouteStack = function (nextRouteStack) {
        var _this = this;
        var destIndex = nextRouteStack.length - 1;
        this.setState({
            // Build a sceneConfigStack
            sceneConfigStack: _.map(nextRouteStack, function (route) { return _this._getSceneConfigFromRoute(route); }),
            routeStack: nextRouteStack,
            presentedIndex: destIndex,
            transitionFromIndex: undefined,
            transitionQueue: []
        }, function () {
            _this._handleSpringUpdate();
        });
    };
    Navigator.prototype.pop = function () {
        if (this.state.transitionQueue.length) {
            // This is the workaround to prevent user from firing multiple `pop()` calls that may pop the routes beyond
            // the limit. Because `this.state.presentedIndex` does not update until the transition starts, we can't
            // reliably use `this.state.presentedIndex` to know whether we can safely keep popping the routes or not at
            // this moment.
            return;
        }
        if (this.state.presentedIndex > 0) {
            this._popN(1);
        }
    };
    // This method replaces the route at the given index of the stack and pops to that index.
    Navigator.prototype.replaceAtIndex = function (route, index) {
        this._invariant(!!route, 'Must supply route to replace');
        if (index < 0) {
            index += this.state.routeStack.length;
        }
        if (this.state.routeStack.length <= index) {
            return;
        }
        var nextRouteStack = this.state.routeStack.slice(0, index + 1);
        var nextAnimationModeStack = this.state.sceneConfigStack.slice(0, index + 1);
        nextRouteStack[index] = route;
        nextAnimationModeStack[index] = this._getSceneConfigFromRoute(route);
        this.setState({
            routeStack: nextRouteStack,
            sceneConfigStack: nextAnimationModeStack
        });
    };
    Navigator.prototype.replace = function (route) {
        this.replaceAtIndex(route, this.state.presentedIndex);
    };
    Navigator.prototype.replacePrevious = function (route) {
        this.replaceAtIndex(route, this.state.presentedIndex - 1);
    };
    Navigator.prototype.popToTop = function () {
        this.popToRoute(this.state.routeStack[0]);
    };
    Navigator.prototype.popToRoute = function (route) {
        var indexOfRoute = this.state.routeStack.indexOf(route);
        this._invariant(indexOfRoute !== -1, 'Calling popToRoute for a route that doesn\'t exist!');
        var numToPop = this.state.presentedIndex - indexOfRoute;
        this._popN(numToPop);
    };
    Navigator.prototype.replacePreviousAndPop = function (route) {
        if (this.state.routeStack.length < 2) {
            return;
        }
        this.replacePrevious(route);
        this.pop();
    };
    Navigator.prototype.getCurrentRoutes = function () {
        // Clone before returning to avoid caller mutating the stack.
        return this.state.routeStack.slice();
    };
    Navigator.prototype._updateDimensionsCache = function () {
        var transitioner = ReactDOM.findDOMNode(this.refs['transitioner']);
        this._dimensions = {
            width: transitioner.offsetWidth,
            height: transitioner.offsetHeight
        };
    };
    // Helper method to extract Navigator's Scene config from the route
    Navigator.prototype._getSceneConfigFromRoute = function (route) {
        // route exists? query the factory to generate a scene configuration
        if (route) {
            return NavigatorSceneConfigFactory_1.NavigatorSceneConfigFactory.createConfig(route.sceneConfigType);
        }
        return undefined;
    };
    // Render a scene for the navigator
    Navigator.prototype._renderNavigatorScene = function (route, index) {
        var styles = [_styles.baseScene, _styles.sceneStyle,
            _styles.defaultSceneStyle];
        if (index !== this.state.presentedIndex) {
            // update styles
            styles.push(_styles.disabledScene);
        }
        // Wraps the callback passed as a prop to Navigator to render the scene
        return (React.createElement(View_1.default, { key: 'scene_' + this._getRouteID(route), ref: 'scene_' + index, style: styles }, this.props.renderScene(route)));
    };
    // Push a scene below the others so they don't block touches sent to the presented scenes.
    Navigator.prototype._disableScene = function (sceneIndex) {
        if (this.refs['scene_' + sceneIndex]) {
            this._setNativeStyles(this.refs['scene_' + sceneIndex], {
                opacity: 0,
                zIndex: -10
            });
        }
    };
    // Add styles on the scene - At this time, the scene should be mounted and sitting in the
    // DOM. We are just adding giving styles to this current scene.
    Navigator.prototype._enableScene = function (sceneIndex) {
        var sceneStyle = Styles_1.default.combine(undefined, [_styles.baseScene, _styles.sceneStyle, _styles.defaultSceneStyle]);
        // Then restore the top value for this scene.
        var enabledSceneNativeProps = {
            style: {
                top: sceneStyle['top'],
                bottom: sceneStyle['bottom'],
                zIndex: 0
            }
        };
        if (sceneIndex !== this.state.transitionFromIndex &&
            sceneIndex !== this.state.presentedIndex) {
            // If we are not in a transition from this index, make sure opacity is 0 to prevent the enabled scene from
            // flashing over the presented scene.
            enabledSceneNativeProps.style.opacity = 0;
        }
        if (this.refs['scene_' + sceneIndex]) {
            this._setNativeStyles(this.refs['scene_' + sceneIndex], enabledSceneNativeProps.style);
        }
    };
    Navigator.prototype._transitionTo = function (destIndex, velocity, jumpSpringTo, cb) {
        // If we're already presenting this index, bail here.
        if (destIndex === this.state.presentedIndex) {
            return;
        }
        // If we're already transitioning to another index, queue this one.
        if (this.state.transitionFromIndex !== undefined) {
            var newTransitionQueue = _.cloneDeep(this.state.transitionQueue);
            newTransitionQueue.push({
                destIndex: destIndex,
                velocity: velocity,
                transitionFinished: cb
            });
            // set new transition queue
            this.setState({ transitionQueue: newTransitionQueue });
            return;
        }
        // Set new state values.
        this.state.transitionFromIndex = this.state.presentedIndex;
        this.state.presentedIndex = destIndex;
        this.state.transitionFinished = cb;
        // Grab the scene config from the route we're leaving.
        var sceneConfig = this.state.sceneConfigStack[this.state.transitionFromIndex] ||
            this.state.sceneConfigStack[this.state.presentedIndex];
        this._invariant(!!sceneConfig, 'Cannot configure scene at index ' + this.state.transitionFromIndex);
        // Set the spring in motion. Updates will trigger _handleSpringUpdate.
        if (jumpSpringTo !== undefined) {
            this.spring.setCurrentValue(jumpSpringTo);
        }
        this.spring.setOvershootClampingEnabled(true);
        this.spring.getSpringConfig().friction = sceneConfig.springFriction;
        this.spring.getSpringConfig().tension = sceneConfig.springTension;
        this.spring.setVelocity(velocity || sceneConfig.defaultTransitionVelocity);
        this.spring.setEndValue(1);
        if (this.props.transitionStarted) {
            this.props.transitionStarted();
        }
    };
    Navigator.prototype._completeTransition = function () {
        var newState = {};
        this.state.transitionFromIndex = undefined;
        this.spring.setCurrentValue(0).setAtRest();
        this._hideScenes();
        // Do we have pending transitions? trigger transitions then
        if (this.state.transitionQueue.length) {
            var newTransitionQueue = _.cloneDeep(this.state.transitionQueue);
            var queuedTransition = newTransitionQueue.shift();
            // add styles on the scene we are about to transition to
            this._enableScene(queuedTransition.destIndex);
            this._transitionTo(queuedTransition.destIndex, queuedTransition.velocity, undefined, queuedTransition.transitionFinished);
            if (this.state.transitionFinished) {
                this.state.transitionFinished();
                newState.transitionFinished = undefined;
            }
            newState.transitionQueue = newTransitionQueue;
            // New setState
            this.setState(newState);
        }
        else if (this.props.transitionCompleted) {
            this.props.transitionCompleted();
        }
    };
    Navigator.prototype._hideScenes = function () {
        for (var i = 0; i < this.state.routeStack.length; i++) {
            if (i === this.state.presentedIndex ||
                i === this.state.transitionFromIndex) {
                continue;
            }
            this._disableScene(i);
        }
    };
    // This happens for each frame of either a gesture or a transition. If both are happening, we only set values for
    // the transition and the gesture will catch up later.
    Navigator.prototype._handleSpringUpdate = function () {
        // Prioritize handling transition in progress over a gesture:
        if (this.state.transitionFromIndex !== undefined) {
            this._transitionBetween(this.state.transitionFromIndex, this.state.presentedIndex, this.spring.getCurrentValue());
        }
    };
    Navigator.prototype._transitionSceneStyle = function (fromIndex, toIndex, progress, index) {
        var viewAtIndex = this.refs['scene_' + index];
        if (viewAtIndex === undefined) {
            return;
        }
        // Use toIndex animation when we move forwards. Use fromIndex when we move back.
        var sceneConfigIndex = fromIndex < toIndex ? toIndex : fromIndex;
        var sceneConfig = this.state.sceneConfigStack[sceneConfigIndex];
        // This happens for overswiping when there is no scene at toIndex.
        if (!sceneConfig) {
            sceneConfig = this.state.sceneConfigStack[sceneConfigIndex - 1];
        }
        var styleToUse = {};
        var useFn = index < fromIndex || index < toIndex ?
            sceneConfig.animationInterpolators.out :
            sceneConfig.animationInterpolators.into;
        var directionAdjustedProgress = fromIndex < toIndex ? progress : 1 - progress;
        var didChange = useFn(styleToUse, this._dimensions, directionAdjustedProgress);
        if (didChange) {
            this._setNativeStyles(viewAtIndex, styleToUse);
        }
    };
    Navigator.prototype._transitionBetween = function (fromIndex, toIndex, progress) {
        this._transitionSceneStyle(fromIndex, toIndex, progress, fromIndex);
        this._transitionSceneStyle(fromIndex, toIndex, progress, toIndex);
    };
    Navigator.prototype._getDestIndexWithinBounds = function (n) {
        var currentIndex = this.state.presentedIndex;
        var destIndex = currentIndex + n;
        this._invariant(destIndex >= 0, 'Cannot jump before the first route.');
        var maxIndex = this.state.routeStack.length - 1;
        this._invariant(maxIndex >= destIndex, 'Cannot jump past the last route.');
        return destIndex;
    };
    Navigator.prototype._jumpN = function (n) {
        var destIndex = this._getDestIndexWithinBounds(n);
        this._invariant(destIndex !== -1, 'Cannot jump to route that is not in the route stack');
        this._enableScene(destIndex);
        this._transitionTo(destIndex);
    };
    Navigator.prototype._popN = function (n) {
        var _this = this;
        if (n === 0) {
            return;
        }
        this._invariant(this.state.presentedIndex - n >= 0, 'Cannot pop below zero');
        var popIndex = this.state.presentedIndex - n;
        this._enableScene(popIndex);
        this._transitionTo(popIndex, undefined, // default velocity
        undefined, // no spring jumping
        function () {
            _this._cleanScenesPastIndex(popIndex);
        });
    };
    Navigator.prototype._cleanScenesPastIndex = function (index) {
        var newStackLength = index + 1;
        // Remove any unneeded rendered routes.
        if (newStackLength < this.state.routeStack.length) {
            this.setState({
                sceneConfigStack: this.state.sceneConfigStack.slice(0, newStackLength),
                routeStack: this.state.routeStack.slice(0, newStackLength)
            });
        }
    };
    // Get routeId for the incoming route
    Navigator.prototype._getRouteID = function (route) {
        return route.routeId;
    };
    // Define an inconstiant method like React.Navigator
    Navigator.prototype._invariant = function (test, failureMessage) {
        if (!test) {
            throw failureMessage;
        }
    };
    // Manually override the styles in the DOM for the given component. This method is a hacky equivalent of React Native's
    // setNativeProps.
    Navigator.prototype._setNativeStyles = function (component, currentStyles) {
        // Grab the actual element from the DOM.
        var element = ReactDOM.findDOMNode(component);
        var flatStyles = _.isArray(currentStyles) ? _.flatten(currentStyles) : currentStyles;
        // Modify styles
        _.assign(element.style, flatStyles);
    };
    return Navigator;
}(RX.Navigator));
exports.Navigator = Navigator;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Navigator;


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* NavigatorSceneConfigFactory.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* NavigatorSceneConfigFactory creates an 'object' of type NavigatorSceneConfig,
* which is consumed by the Navigator. This object contains properties to execute
* spring animation for transition between scenes. NavigatorSceneConfigFactory and
* NavigatorSceneConfig are both exported.
*/

var _ = __webpack_require__(3);
var Types = __webpack_require__(6);
// Defined style interpolators for each transition type
var SceneConfigStyles = (function () {
    function SceneConfigStyles() {
    }
    /* tslint:enable:no-unused-variable */
    // CSS requires all transforms to be combined into one transform property. bundleCompoundStyles searches a style
    // definition for separate transforms and melts it down to a "transform" property.
    SceneConfigStyles.bundleCompoundStyles = function (styles) {
        var transforms = {};
        var remaining = {};
        for (var name in styles) {
            if (styles.hasOwnProperty(name)) {
                switch (name) {
                    case 'translateX':
                    case 'translateY':
                    case 'translateZ':
                    case 'scaleX':
                    case 'scaleY':
                    case 'scaleZ':
                    case 'rotateX':
                    case 'rotateY':
                    case 'rotateZ':
                        transforms[name] = _.get(styles, name);
                        break;
                    default:
                        remaining[name] = _.get(styles, name);
                        break;
                }
            }
        }
        // Add transforms into remaining object
        if (!_.isEmpty(transforms)) {
            remaining['transform'] = _.map(transforms, function (val, key) { return key + '(' + val + ')'; }).join(' ');
        }
        return remaining;
    };
    return SceneConfigStyles;
}());
SceneConfigStyles.fadeToTheLeft = {
    translateX: function (t, dimensions) { return (t * -dimensions.width * 0.3) + 'px'; },
    opacity: 1
};
SceneConfigStyles.fadeToTheRight = {
    translateX: function (t, dimensions) { return (t * dimensions.width * 0.3) + 'px'; },
    opacity: 1
};
SceneConfigStyles.fadeIn = {
    opacity: function (t) { return (t); }
};
SceneConfigStyles.fadeOut = {
    opacity: function (t) { return (1 - t); }
};
SceneConfigStyles.fadeOutToTop = {
    opacity: function (t) { return (1 - t); },
    translateY: function (t, dimensions) { return (t * -0.1 * dimensions.height) + 'px'; }
};
SceneConfigStyles.toTheLeft = {
    translateX: function (t, dimensions) { return (t * -dimensions.width) + 'px'; }
};
SceneConfigStyles.toTheUp = {
    translateY: function (t, dimensions) { return (t * -dimensions.height) + 'px'; }
};
SceneConfigStyles.toTheDown = {
    translateY: function (t, dimensions) { return (t * dimensions.height) + 'px'; }
};
SceneConfigStyles.fromTheRight = {
    opacity: 1,
    translateX: function (t, dimensions) { return (dimensions.width - (t * dimensions.width)) + 'px'; }
};
SceneConfigStyles.fromTheLeft = {
    opacity: 1,
    translateX: function (t, dimensions) { return (-dimensions.width + (t * dimensions.width)) + 'px'; }
};
SceneConfigStyles.fromTheDown = {
    translateY: function (t, dimensions) { return (dimensions.height - t * dimensions.height) + 'px'; }
};
SceneConfigStyles.fromTheUp = {
    opacity: 1,
    translateY: function (t, dimensions) { return (-dimensions.height + t * dimensions.height) + 'px'; }
};
SceneConfigStyles.fromTheFront = {
    opacity: 1,
    translateY: function (t, dimensions) { return (dimensions.height - t * dimensions.height) + 'px'; }
};
SceneConfigStyles.toTheBack = {
    scaleX: function (t) { return (1 - (t * 0.05)); },
    scaleY: function (t) { return (1 - (t * 0.05)); },
    opacity: 1
};
// Navigator config class. Navigator works on the instances of this class
var NavigatorSceneConfig = (function () {
    function NavigatorSceneConfig(intoStyle, outStyle) {
        // Rebound spring parameters when transitioning FROM this scene
        this.springFriction = 26;
        this.springTension = 200;
        // Velocity to start at when transitioning without gesture
        this.defaultTransitionVelocity = 1.5;
        // Into, Out interpolators are required to do a scene transition
        this.animationInterpolators = {
            into: this._styleInterpolator(intoStyle),
            out: this._styleInterpolator(outStyle)
        };
    }
    // Private method that hangs as a callback on animationInterpolator object
    // It calculates new styles and updates the previousStyles object sent to decide
    // if the animation triggered or not in the component that calls it
    NavigatorSceneConfig.prototype._styleInterpolator = function (styles) {
        return function (previousStyleSet, dimensions, progress) {
            // Calls the interpolator method for each type and calculates
            //
            var newStyleSet = SceneConfigStyles.bundleCompoundStyles(_.mapValues(styles, function (interpolator) {
                return _.isNumber(interpolator) ? interpolator : interpolator(progress, dimensions);
            }));
            // Check if anything has changed since last frame.
            if (_.isEqual(previousStyleSet, newStyleSet)) {
                return false;
            }
            // Copy the new props into the previous object.
            for (var prop in newStyleSet) {
                if (newStyleSet.hasOwnProperty(prop)) {
                    _.assign(previousStyleSet, (_a = {}, _a[prop] = _.get(newStyleSet, prop), _a));
                }
            }
            return true;
            var _a;
        };
    };
    return NavigatorSceneConfig;
}());
exports.NavigatorSceneConfig = NavigatorSceneConfig;
// Factory class to create Navigator scene configurations for each type of transition between routes
var NavigatorSceneConfigFactory = (function () {
    function NavigatorSceneConfigFactory() {
    }
    // Helper method that creates a new Animation config for a scene
    NavigatorSceneConfigFactory.createConfig = function (configType) {
        switch (configType) {
            case Types.NavigatorSceneConfigType.FloatFromRight:
                return new NavigatorSceneConfig(SceneConfigStyles.fromTheRight, SceneConfigStyles.fadeToTheLeft);
            case Types.NavigatorSceneConfigType.FloatFromLeft:
                return new NavigatorSceneConfig(SceneConfigStyles.fromTheLeft, SceneConfigStyles.fadeToTheRight);
            case Types.NavigatorSceneConfigType.FloatFromBottom:
                return new NavigatorSceneConfig(SceneConfigStyles.fromTheFront, SceneConfigStyles.toTheBack);
            case Types.NavigatorSceneConfigType.Fade:
                return new NavigatorSceneConfig(SceneConfigStyles.fadeIn, SceneConfigStyles.fadeOut);
            case Types.NavigatorSceneConfigType.FadeWithSlide:
                return new NavigatorSceneConfig(SceneConfigStyles.fadeIn, SceneConfigStyles.fadeOutToTop);
            default:
                // Float from Right
                return new NavigatorSceneConfig(SceneConfigStyles.fromTheLeft, SceneConfigStyles.fadeToTheRight);
        }
    };
    return NavigatorSceneConfigFactory;
}());
exports.NavigatorSceneConfigFactory = NavigatorSceneConfigFactory;


/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Network.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation of Network information APIs.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SyncTasks = __webpack_require__(20);
var RX = __webpack_require__(1);
var Network = (function (_super) {
    __extends(Network, _super);
    function Network() {
        var _this = _super.call(this) || this;
        var onEventOccuredHandler = _this._onEventOccured.bind(_this);
        // Avoid accessing window if it's not defined (for test environment).
        if (typeof (window) !== 'undefined') {
            window.addEventListener('online', onEventOccuredHandler);
            window.addEventListener('offline', onEventOccuredHandler);
        }
        return _this;
    }
    Network.prototype.isConnected = function () {
        return SyncTasks.Resolved(navigator.onLine);
    };
    Network.prototype.fetchNetworkType = function () {
        return SyncTasks.Resolved(RX.DeviceNetworkType.UNKNOWN);
    };
    Network.prototype._onEventOccured = function () {
        this.connectivityChangedEvent.fire(navigator.onLine);
    };
    return Network;
}(RX.Network));
exports.Network = Network;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Network();


/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Picker.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation of the cross-platform Select abstraction.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = __webpack_require__(3);
var React = __webpack_require__(0);
var RX = __webpack_require__(1);
var Picker = (function (_super) {
    __extends(Picker, _super);
    function Picker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onValueChange = function (e) {
            var selectEl = e.target;
            var selectedValue = selectEl.value;
            var selectedItemPosition = _.findIndex(_this.props.items, function (i) { return i.value === selectedValue; });
            _this.props.onValueChange(selectedValue, selectedItemPosition);
        };
        return _this;
    }
    Picker.prototype.render = function () {
        return (React.createElement("select", { value: this.props.selectedValue, onChange: this.onValueChange, style: this.props.style }, _.map(this.props.items, function (i, idx) { return React.createElement("option", { value: i.value, key: idx }, i.label); })));
    };
    return Picker;
}(RX.Picker));
exports.Picker = Picker;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Picker;


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Platform.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation of Platform interface.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RX = __webpack_require__(1);
var Platform = (function (_super) {
    __extends(Platform, _super);
    function Platform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Platform.prototype.getType = function () {
        return 'web';
    };
    return Platform;
}(RX.Platform));
exports.Platform = Platform;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Platform();


/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Popup.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation of the cross-platform Popup abstraction.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FrontLayerViewManager_1 = __webpack_require__(81);
var RX = __webpack_require__(1);
var Popup = (function (_super) {
    __extends(Popup, _super);
    function Popup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Popup.prototype.show = function (options, popupId, delay) {
        return FrontLayerViewManager_1.default.showPopup(options, popupId, delay);
    };
    Popup.prototype.autoDismiss = function (popupId, delay) {
        FrontLayerViewManager_1.default.autoDismissPopup(popupId, delay);
    };
    Popup.prototype.dismiss = function (popupId) {
        FrontLayerViewManager_1.default.dismissPopup(popupId);
    };
    Popup.prototype.dismissAll = function () {
        FrontLayerViewManager_1.default.dismissAllPopups();
    };
    return Popup;
}(RX.Popup));
exports.Popup = Popup;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Popup();


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* ReactXP.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Wrapper for all ReactXP functionality. Users of ReactXP should import just this
* file instead of internals.
*/

var React = __webpack_require__(0);
var AnimatedImpl = __webpack_require__(343);
var RXInterface = __webpack_require__(1);
var RXTypes = __webpack_require__(6);
// -- STRANGE THINGS GOING ON HERE --
//
// 1) 'export var Foo = Foo;'
//    TypeScript will get confused if (in the module RX below) you try to create a var with the same name as an import.
//    To avoid this problem, the imports are renamed to 'FooImpl'.
//
// 2) 'import { default as FooImpl }... export var foo = FooImpl;'
//    The way we generate RX.d.ts has extra rules around having the name of the type in scope.
//    This is not a problem if the class was imported directly (regardless of renames). However, the 'default' import is not sufficient as
//    a type name. In order to generate the type of 'foo', the actual 'Foo' class needs to be imported. Of course, the same naming problem
//    exists as (1) so it is imported as 'FooType'. Note: you will see 'FooType' in the generated RX.d.ts ('export var Foo: FooType').
var Accessibility_1 = __webpack_require__(139);
var ActivityIndicator_1 = __webpack_require__(341);
var Alert_1 = __webpack_require__(342);
var App_1 = __webpack_require__(344);
var Button_1 = __webpack_require__(345);
var Picker_1 = __webpack_require__(357);
var Image_1 = __webpack_require__(140);
var Clipboard_1 = __webpack_require__(346);
var GestureView_1 = __webpack_require__(348);
var Input_1 = __webpack_require__(141);
var International_1 = __webpack_require__(349);
var Link_1 = __webpack_require__(350);
var Linking_1 = __webpack_require__(351);
var Location_1 = __webpack_require__(339);
var Modal_1 = __webpack_require__(352);
var Navigator_1 = __webpack_require__(354);
var Network_1 = __webpack_require__(356);
var Platform_1 = __webpack_require__(358);
var Popup_1 = __webpack_require__(359);
var ScrollView_1 = __webpack_require__(362);
var StatusBar_1 = __webpack_require__(363);
var Storage_1 = __webpack_require__(364);
var Styles_1 = __webpack_require__(8);
var Text_1 = __webpack_require__(143);
var TextInput_1 = __webpack_require__(144);
var UserInterface_1 = __webpack_require__(145);
var UserPresence_1 = __webpack_require__(365);
var View_1 = __webpack_require__(51);
var ViewBase_1 = __webpack_require__(82);
var WebView_1 = __webpack_require__(366);
// -- STRANGE THINGS GOING ON HERE --
//
// 1) 'export type Foo = FooImpl; export var Foo = FooImpl;'
//    If the var 'Foo' was exported alone then the name 'RX.Foo' would not be valid in a type position: 'function takesFoo(foo: RX.Foo)'.
//    To avoid this problem, the type information is also exported. TypeScript will merge the var and type together (if the types match).
var ReactXP;
(function (ReactXP) {
    ReactXP.Accessibility = Accessibility_1.default;
    ReactXP.Animated = AnimatedImpl;
    ReactXP.ActivityIndicator = ActivityIndicator_1.ActivityIndicator;
    ReactXP.Alert = Alert_1.default;
    ReactXP.App = App_1.default;
    ReactXP.Button = Button_1.Button;
    ReactXP.Picker = Picker_1.Picker;
    ReactXP.Clipboard = Clipboard_1.default;
    ReactXP.GestureView = GestureView_1.GestureView;
    ReactXP.Image = Image_1.Image;
    ReactXP.Input = Input_1.default;
    ReactXP.International = International_1.default;
    ReactXP.Link = Link_1.Link;
    ReactXP.Linking = Linking_1.default;
    ReactXP.Location = Location_1.default;
    ReactXP.Modal = Modal_1.default;
    ReactXP.Navigator = Navigator_1.Navigator;
    ReactXP.Network = Network_1.default;
    ReactXP.Platform = Platform_1.default;
    ReactXP.Popup = Popup_1.default;
    ReactXP.ScrollView = ScrollView_1.ScrollView;
    ReactXP.StatusBar = StatusBar_1.default;
    ReactXP.Storage = Storage_1.default;
    ReactXP.Styles = Styles_1.default;
    ReactXP.Text = Text_1.Text;
    ReactXP.TextInput = TextInput_1.TextInput;
    ReactXP.UserInterface = UserInterface_1.default;
    ReactXP.UserPresence = UserPresence_1.default;
    ReactXP.View = View_1.default;
    ReactXP.WebView = WebView_1.WebView;
    ReactXP.Types = RXTypes;
    ReactXP.Component = React.Component;
    ReactXP.createElement = React.createElement;
    ReactXP.Children = React.Children;
    ReactXP.__spread = React.__spread;
    ReactXP.DeviceNetworkType = RXInterface.DeviceNetworkType;
})(ReactXP || (ReactXP = {}));
ViewBase_1.ViewBase.setActivationState(App_1.default.getActivationState());
App_1.default.activationStateChangedEvent.subscribe(function (newState) {
    ViewBase_1.ViewBase.setActivationState(newState);
});
// -- STRANGE THINGS GOING ON HERE --
//
// 1) Unused variable
//    This forces TypeScript to type-check the above RX module against the common RX interface. Missing/incorrect types will cause errors.
//    Note: RX must be a module so 'RX.Foo' can be a valid value ('new RX.Foo') and valid type ('var k: RX.Foo'), but modules cannot
//    implement an interface. If RX was a class or variable then it could directly check this, but then 'RX.Foo' would not be a valid type.
/* tslint:disable:no-unused-variable */
var _rxImplementsRxInterface = ReactXP;
module.exports = ReactXP;
/* tslint:enable:no-unused-variable */
/*

var rx = module.exports;
Object.keys(rx)
    .filter(key => rx[key] && rx[key].prototype instanceof React.Component && !rx[key].displayName)
    .forEach(key => rx[key].displayName = 'RX.' + key + '');
*/


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* RootView.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* The top-most view (rendered into window.body) that's used for proper
* layering or modals, etc. in the web implementation of the ReactXP
* cross-platform library.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = __webpack_require__(3);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(0);
var PropTypes = __webpack_require__(24);
var Accessibility_1 = __webpack_require__(139);
var AccessibilityUtil_1 = __webpack_require__(50);
var Input_1 = __webpack_require__(141);
var ModalContainer_1 = __webpack_require__(353);
var Styles_1 = __webpack_require__(8);
var Types = __webpack_require__(6);
var FocusManager_1 = __webpack_require__(34);
var UserInterface_1 = __webpack_require__(145);
// Width of the "alley" around popups so they don't get too close to the boundary of the window.
var _popupAlleyWidth = 8;
// How close to the edge of the popup should we allow the anchor offset to get before
// attempting a different position?
var _minAnchorOffset = 16;
// Button code for when right click is pressed in a mouse event
var _rightClickButtonCode = 2;
var _styles = {
    liveRegionContainer: Styles_1.default.createViewStyle({
        position: 'absolute',
        overflow: 'hidden',
        opacity: 0,
        top: -30,
        bottom: 0,
        left: 0,
        right: 0,
        height: 30
    })
};
var KEY_CODE_TAB = 9;
var KEY_CODE_ESC = 27;
// Setting the expected default box-sizing for everything.
if (typeof document !== 'undefined') {
    var defaultBoxSizing = '*, *:before, *:after { box-sizing: border-box; }';
    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(defaultBoxSizing));
    document.head.appendChild(style);
}
var RootView = (function (_super) {
    __extends(RootView, _super);
    function RootView(props) {
        var _this = _super.call(this, props) || this;
        _this._hidePopupTimer = null;
        _this._respositionPopupTimer = null;
        _this._clickHandlerInstalled = false;
        _this._lockForContextMenu = false;
        _this._keyboardHandlerInstalled = false;
        _this._newAnnouncementEventChangedSubscription = null;
        _this._isNavigatingWithKeyboard = false;
        _this._tryClosePopup = function (e) {
            // Dismiss a visible popup if there's a click outside.
            var popupContainer = ReactDOM.findDOMNode(_this.refs['popupContainer']);
            var clickInPopup = false;
            var el = e.target;
            while (el) {
                if (el === popupContainer) {
                    clickInPopup = true;
                    break;
                }
                el = el.parentElement;
            }
            if (!clickInPopup && e.button !== _rightClickButtonCode) {
                _.defer(function () {
                    if (_this.props.activePopupOptions) {
                        var anchorReference = _this.props.activePopupOptions.getAnchor();
                        var isClickOnAnchor = _this._determineIfClickOnElement(anchorReference, e.srcElement);
                        var isClickOnContainer = void 0;
                        if (!isClickOnAnchor && _this.props.activePopupOptions.getElementTriggeringPopup) {
                            var containerRef = _this.props.activePopupOptions.getElementTriggeringPopup();
                            isClickOnContainer = _this._determineIfClickOnElement(containerRef, e.srcElement);
                        }
                        if (isClickOnAnchor || isClickOnContainer) {
                            // If the press event was on the anchor, we can notify the caller about it.
                            // Showing another animation while dimissing the popup creates a conflict in the UI making it not doing one of the
                            // two animations (i.e.: Opening an actionsheet while dismissing a popup). We introduce this delay to make sure
                            // the popup dimissing animation has finished before we call the event handler.
                            if (_this.props.activePopupOptions.onAnchorPressed) {
                                setTimeout(function () {
                                    // We can't pass through the DOM event argument to the anchor event handler as the event we have at this
                                    // point is a DOM Event and the anchor expect a Syntethic event. There doesn't seem to be any way to convert
                                    // between them. Passing null for now.
                                    _this.props.activePopupOptions.onAnchorPressed(null);
                                }, 500);
                            }
                            // If the popup is meant to behave like a toggle, we should not dimiss the popup from here since the event came
                            // from the anchor/container of the popup. The popup will be dismissed during the click handling of the
                            // anchor/container.
                            if (_this.props.activePopupOptions.dismissIfShown) {
                                return;
                            }
                        }
                    }
                    _this._dismissPopup();
                });
            }
        };
        _this._onMouseDownCapture = function (e) {
            _this._updateKeyboardNavigationState(false);
        };
        _this._onKeyDownCapture = function (e) {
            if (e.keyCode === KEY_CODE_TAB) {
                _this._updateKeyboardNavigationState(true);
            }
            if (e.keyCode === KEY_CODE_ESC) {
                // If Esc is pressed and the focused element stays the same after some time,
                // switch the keyboard navigation off to dismiss the outline.
                var activeElement_1 = document.activeElement;
                if (_this._isNavigatingWithKeyboardUpateTimer) {
                    window.clearTimeout(_this._isNavigatingWithKeyboardUpateTimer);
                }
                _this._isNavigatingWithKeyboardUpateTimer = window.setTimeout(function () {
                    _this._isNavigatingWithKeyboardUpateTimer = undefined;
                    if ((document.activeElement === activeElement_1) && activeElement_1 && (activeElement_1 !== document.body)) {
                        _this._updateKeyboardNavigationState(false);
                    }
                }, 200);
            }
        };
        _this._onKeyDown = function (e) {
            Input_1.default.dispatchKeyDown(e);
        };
        _this._onKeyUp = function (e) {
            if (_this.props.activePopupOptions && (e.keyCode === KEY_CODE_ESC)) {
                if (e.stopPropagation) {
                    e.stopPropagation();
                }
                _this._dismissPopup();
                return;
            }
            Input_1.default.dispatchKeyUp(e);
        };
        // Update announcement text.
        _this._newAnnouncementEventChangedSubscription =
            Accessibility_1.default.newAnnouncementReadyEvent.subscribe(function (announcement) {
                _this.setState({
                    announcementText: announcement
                });
            });
        _this.state = _this._getInitialState();
        // Initialize the root FocusManager which is aware of all
        // focusable elements.
        _this._focusManager = new FocusManager_1.default(null);
        return _this;
    }
    RootView.prototype.getChildContext = function () {
        // Provide the context with root FocusManager to all descendants.
        return {
            focusManager: this._focusManager
        };
    };
    RootView.prototype._getInitialState = function () {
        return {
            isMeasuringPopup: true,
            anchorPosition: 'left',
            anchorOffset: 0,
            popupTop: 0,
            popupLeft: 0,
            popupWidth: 0,
            popupHeight: 0,
            constrainedPopupWidth: 0,
            constrainedPopupHeight: 0,
            isMouseInPopup: false,
            focusClass: this.props.mouseFocusOutline,
            announcementText: ''
        };
    };
    RootView.prototype.componentWillReceiveProps = function (prevProps) {
        if (this.props.activePopupOptions !== prevProps.activePopupOptions) {
            this._stopHidePopupTimer();
            // If the popup changes, reset our state.
            this.setState(this._getInitialState());
        }
    };
    RootView.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this.props.activePopupOptions) {
            this._stopHidePopupTimer();
            this._recalcPosition();
            if (!this._respositionPopupTimer) {
                this._startRepositionPopupTimer();
            }
            if (!this.state.isMouseInPopup) {
                this._startHidePopupTimer();
            }
            if (!this._clickHandlerInstalled) {
                document.addEventListener('mousedown', this._tryClosePopup);
                document.addEventListener('touchstart', this._tryClosePopup);
                this._clickHandlerInstalled = true;
            }
        }
        else {
            this._stopRepositionPopupTimer();
            if (this._clickHandlerInstalled) {
                document.removeEventListener('mousedown', this._tryClosePopup);
                document.removeEventListener('touchstart', this._tryClosePopup);
                this._clickHandlerInstalled = false;
            }
        }
    };
    RootView.prototype.componentDidMount = function () {
        if (this.props.activePopupOptions) {
            this._recalcPosition();
        }
        if (!this.state.isMouseInPopup) {
            this._startHidePopupTimer();
        }
        if (this.props.activePopupOptions) {
            this._startRepositionPopupTimer();
        }
        if (!this._keyboardHandlerInstalled) {
            window.addEventListener('keydown', this._onKeyDown);
            window.addEventListener('keyup', this._onKeyUp);
            window.addEventListener('keydown', this._onKeyDownCapture, true); // Capture!
            window.addEventListener('mousedown', this._onMouseDownCapture, true); // Capture!
            this._keyboardHandlerInstalled = true;
        }
    };
    RootView.prototype.componentWillUnmount = function () {
        this._stopHidePopupTimer();
        this._stopRepositionPopupTimer();
        this._newAnnouncementEventChangedSubscription.unsubscribe();
        this._newAnnouncementEventChangedSubscription = null;
        if (this._keyboardHandlerInstalled) {
            window.removeEventListener('keydown', this._onKeyDown);
            window.removeEventListener('keyup', this._onKeyUp);
            window.removeEventListener('keydown', this._onKeyDownCapture, true);
            window.removeEventListener('mousedown', this._onMouseDownCapture, true);
            this._keyboardHandlerInstalled = false;
        }
    };
    RootView.prototype.render = function () {
        var _this = this;
        var rootViewStyle = {
            width: '100%',
            height: '100%',
            display: 'flex',
            cursor: 'default'
        };
        var optionalPopup = null;
        if (this.props.activePopupOptions) {
            var popupContainerStyle = {
                display: 'flex',
                position: 'fixed',
                top: this.state.popupTop,
                left: this.state.popupLeft,
                zIndex: 100001
            };
            // Are we artificially constraining the width and/or height?
            if (this.state.constrainedPopupWidth && this.state.constrainedPopupWidth !== this.state.popupWidth) {
                popupContainerStyle['width'] = this.state.constrainedPopupWidth;
            }
            if (this.state.constrainedPopupHeight && this.state.constrainedPopupHeight !== this.state.popupHeight) {
                popupContainerStyle['height'] = this.state.constrainedPopupHeight;
            }
            optionalPopup = (React.createElement("div", { style: popupContainerStyle, ref: 'popupContainer', onMouseEnter: function (e) { return _this._onMouseEnter(e); }, onMouseLeave: function (e) { return _this._onMouseLeave(e); } }, this.props.activePopupOptions.renderPopup(this.state.anchorPosition, this.state.anchorOffset, this.state.constrainedPopupWidth, this.state.constrainedPopupHeight)));
        }
        var optionalModal = null;
        if (this.props.modal) {
            optionalModal = (React.createElement(ModalContainer_1.default, null, this.props.modal));
        }
        return (React.createElement("div", { className: this.state.focusClass, style: rootViewStyle },
            this.props.mainView,
            optionalModal,
            optionalPopup,
            React.createElement("div", { style: _styles.liveRegionContainer, "aria-live": AccessibilityUtil_1.default.accessibilityLiveRegionToString(Types.AccessibilityLiveRegion.Polite), "aria-atomic": 'true' }, this.state.announcementText)));
    };
    RootView.prototype._determineIfClickOnElement = function (elementReference, eventSource) {
        var element = ReactDOM.findDOMNode(elementReference);
        var isClickOnElement = element && element.contains(eventSource);
        return isClickOnElement;
    };
    RootView.prototype._updateKeyboardNavigationState = function (isNavigatingWithKeyboard) {
        if (this._isNavigatingWithKeyboardUpateTimer) {
            window.clearTimeout(this._isNavigatingWithKeyboardUpateTimer);
            this._isNavigatingWithKeyboardUpateTimer = undefined;
        }
        if (this._isNavigatingWithKeyboard !== isNavigatingWithKeyboard) {
            this._isNavigatingWithKeyboard = isNavigatingWithKeyboard;
            UserInterface_1.default.keyboardNavigationEvent.fire(isNavigatingWithKeyboard);
            var focusClass = isNavigatingWithKeyboard ? this.props.keyBoardFocusOutline : this.props.mouseFocusOutline;
            if (this.state.focusClass !== focusClass) {
                this.setState({ focusClass: focusClass });
            }
        }
    };
    RootView.prototype._onMouseEnter = function (e) {
        this.setState({
            isMouseInPopup: true
        });
        this._stopHidePopupTimer();
    };
    RootView.prototype._onMouseLeave = function (e) {
        this.setState({
            isMouseInPopup: false
        });
        this._startHidePopupTimer();
    };
    RootView.prototype._startHidePopupTimer = function () {
        var _this = this;
        if (this.props.autoDismiss) {
            // Should we immediately hide it, or did the caller request a delay?
            if (this.props.autoDismissDelay > 0) {
                this._hidePopupTimer = window.setTimeout(function () {
                    _this._hidePopupTimer = null;
                    _this._dismissPopup();
                }, this.props.autoDismissDelay);
            }
            else {
                this._dismissPopup();
            }
        }
    };
    RootView.prototype._stopHidePopupTimer = function () {
        if (this._hidePopupTimer) {
            clearTimeout(this._hidePopupTimer);
            this._hidePopupTimer = null;
        }
    };
    RootView.prototype._dismissPopup = function () {
        if (this.props.onDismissPopup) {
            this.props.onDismissPopup();
        }
    };
    RootView.prototype._startRepositionPopupTimer = function () {
        var _this = this;
        this._respositionPopupTimer = setInterval(function () {
            _this._recalcPosition();
        }, 500);
    };
    RootView.prototype._stopRepositionPopupTimer = function () {
        if (this._respositionPopupTimer) {
            clearInterval(this._respositionPopupTimer);
            this._respositionPopupTimer = null;
        }
    };
    // Recalculates the position and constrained size of the popup based on the current position of the anchor and the
    // window size. If necessary, it also measures the unconstrained size of the popup.
    RootView.prototype._recalcPosition = function () {
        // Make a copy of the old state.
        var newState = _.extend({}, this.state);
        if (this.state.isMeasuringPopup) {
            // Get the width/height of the popup.
            var popup = ReactDOM.findDOMNode(this.refs['popupContainer']);
            if (!popup) {
                return;
            }
            newState.isMeasuringPopup = false;
            newState.popupHeight = popup.clientHeight;
            newState.popupWidth = popup.clientWidth;
        }
        // Get the anchor element.
        var anchor = ReactDOM.findDOMNode(this.props.activePopupOptions.getAnchor());
        // If the anchor has disappeared, dismiss the popup.
        if (!anchor) {
            this._dismissPopup();
            return;
        }
        // Start by assuming that we'll be unconstrained.
        newState.constrainedPopupHeight = newState.popupHeight;
        newState.constrainedPopupWidth = newState.popupWidth;
        // Get the width/height of the full window.
        var windowHeight = window.innerHeight;
        var windowWidth = window.innerWidth;
        // Calculate the absolute position of the anchor element's top/left.
        var anchorRect = anchor.getBoundingClientRect();
        // If the anchor is no longer in the window's bounds, cancel the popup.
        if (anchorRect.left >= windowWidth || anchorRect.right <= 0 ||
            anchorRect.bottom <= 0 || anchorRect.top >= windowHeight) {
            this._dismissPopup();
            return;
        }
        var positionsToTry = this.props.activePopupOptions.positionPriorities;
        if (!positionsToTry || positionsToTry.length === 0) {
            positionsToTry = ['bottom', 'right', 'top', 'left'];
        }
        if (this.props.activePopupOptions.useInnerPositioning) {
            // If the popup is meant to be shown inside the anchor we need to recalculate
            // the position differently.
            this._recalcInnerPosition(anchorRect, newState);
            return;
        }
        var foundPerfectFit = false;
        var foundPartialFit = false;
        positionsToTry.forEach(function (pos) {
            if (!foundPerfectFit) {
                var absLeft = 0;
                var absTop = 0;
                var anchorOffset = 0;
                var constrainedWidth = 0;
                var constrainedHeight = 0;
                switch (pos) {
                    case 'bottom':
                        absTop = anchorRect.bottom;
                        absLeft = anchorRect.left + (anchorRect.width - newState.popupWidth) / 2;
                        anchorOffset = newState.popupWidth / 2;
                        if (newState.popupHeight <= windowHeight - _popupAlleyWidth - anchorRect.bottom) {
                            foundPerfectFit = true;
                        }
                        else if (!foundPartialFit) {
                            constrainedHeight = windowHeight - _popupAlleyWidth - anchorRect.bottom;
                        }
                        break;
                    case 'top':
                        absTop = anchorRect.top - newState.popupHeight;
                        absLeft = anchorRect.left + (anchorRect.width - newState.popupWidth) / 2;
                        anchorOffset = newState.popupWidth / 2;
                        if (newState.popupHeight <= anchorRect.top - _popupAlleyWidth) {
                            foundPerfectFit = true;
                        }
                        else if (!foundPartialFit) {
                            constrainedHeight = anchorRect.top - _popupAlleyWidth;
                        }
                        break;
                    case 'right':
                        absLeft = anchorRect.right;
                        absTop = anchorRect.top + (anchorRect.height - newState.popupHeight) / 2;
                        anchorOffset = newState.popupHeight / 2;
                        if (newState.popupWidth <= windowWidth - _popupAlleyWidth - anchorRect.right) {
                            foundPerfectFit = true;
                        }
                        else if (!foundPartialFit) {
                            constrainedWidth = windowWidth - _popupAlleyWidth - anchorRect.right;
                        }
                        break;
                    case 'left':
                        absLeft = anchorRect.left - newState.popupWidth;
                        absTop = anchorRect.top + (anchorRect.height - newState.popupHeight) / 2;
                        anchorOffset = newState.popupHeight / 2;
                        if (newState.popupWidth <= anchorRect.left - _popupAlleyWidth) {
                            foundPerfectFit = true;
                        }
                        else if (!foundPartialFit) {
                            constrainedWidth = anchorRect.left - _popupAlleyWidth;
                        }
                        break;
                }
                var effectiveWidth = constrainedWidth || newState.popupWidth;
                var effectiveHeight = constrainedHeight || newState.popupHeight;
                // Make sure we're not hanging off the bounds of the window.
                if (absLeft < _popupAlleyWidth) {
                    if (pos === 'top' || pos === 'bottom') {
                        anchorOffset -= _popupAlleyWidth - absLeft;
                        if (anchorOffset < _minAnchorOffset || anchorOffset > effectiveWidth - _minAnchorOffset) {
                            foundPerfectFit = false;
                        }
                    }
                    absLeft = _popupAlleyWidth;
                }
                else if (absLeft > windowWidth - _popupAlleyWidth - effectiveWidth) {
                    if (pos === 'top' || pos === 'bottom') {
                        anchorOffset -= (windowWidth - _popupAlleyWidth - effectiveWidth - absLeft);
                        if (anchorOffset < _minAnchorOffset || anchorOffset > effectiveWidth - _minAnchorOffset) {
                            foundPerfectFit = false;
                        }
                    }
                    absLeft = windowWidth - _popupAlleyWidth - effectiveWidth;
                }
                if (absTop < _popupAlleyWidth) {
                    if (pos === 'right' || pos === 'left') {
                        anchorOffset += absTop - _popupAlleyWidth;
                        if (anchorOffset < _minAnchorOffset || anchorOffset > effectiveHeight - _minAnchorOffset) {
                            foundPerfectFit = false;
                        }
                    }
                    absTop = _popupAlleyWidth;
                }
                else if (absTop > windowHeight - _popupAlleyWidth - effectiveHeight) {
                    if (pos === 'right' || pos === 'left') {
                        anchorOffset -= (windowHeight - _popupAlleyWidth - effectiveHeight - absTop);
                        if (anchorOffset < _minAnchorOffset || anchorOffset > effectiveHeight - _minAnchorOffset) {
                            foundPerfectFit = false;
                        }
                    }
                    absTop = windowHeight - _popupAlleyWidth - effectiveHeight;
                }
                if (foundPerfectFit || effectiveHeight > 0 || effectiveWidth > 0) {
                    newState.popupTop = absTop;
                    newState.popupLeft = absLeft;
                    newState.anchorOffset = anchorOffset;
                    newState.anchorPosition = pos;
                    newState.constrainedPopupWidth = effectiveWidth;
                    newState.constrainedPopupHeight = effectiveHeight;
                    foundPartialFit = true;
                }
            }
        });
        if (!_.isEqual(newState, this.state)) {
            this.setState(newState);
        }
    };
    RootView.prototype._recalcInnerPosition = function (anchorRect, newState) {
        // For inner popups we only accept the first position of the priorities since there should always be room for the bubble.
        var pos = this.props.activePopupOptions.positionPriorities[0];
        switch (pos) {
            case 'top':
                newState.popupTop = anchorRect.top + anchorRect.height - newState.constrainedPopupHeight;
                newState.popupLeft = anchorRect.left + anchorRect.height / 2 - newState.constrainedPopupWidth / 2;
                newState.anchorOffset = newState.popupWidth / 2;
                break;
            case 'bottom':
                newState.popupTop = anchorRect.top + newState.constrainedPopupHeight;
                newState.popupLeft = anchorRect.left + anchorRect.height / 2 - newState.constrainedPopupWidth / 2;
                newState.anchorOffset = newState.popupWidth / 2;
                break;
            case 'left':
                newState.popupTop = anchorRect.top + anchorRect.height / 2 - newState.constrainedPopupHeight / 2;
                newState.popupLeft = anchorRect.left + anchorRect.width - newState.constrainedPopupWidth;
                newState.anchorOffset = newState.popupHeight / 2;
                break;
            case 'right':
                newState.popupTop = anchorRect.top + anchorRect.height / 2 - newState.constrainedPopupHeight / 2;
                newState.popupLeft = anchorRect.left;
                newState.anchorOffset = newState.popupHeight / 2;
                break;
        }
        newState.anchorPosition = pos;
        if (!_.isEqual(newState, this.state)) {
            this.setState(newState);
        }
    };
    return RootView;
}(React.Component));
RootView.childContextTypes = {
    focusManager: PropTypes.object
};
exports.RootView = RootView;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RootView;


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* ScrollView.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation of the cross-platform ScrollView abstraction.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = __webpack_require__(3);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(0);
var CustomScrollbar_1 = __webpack_require__(347);
var Styles_1 = __webpack_require__(8);
var ScrollViewConfig_1 = __webpack_require__(142);
var ViewBase_1 = __webpack_require__(82);
var _styles = {
    defaultStyle: {
        position: 'relative',
        overflow: 'hidden',
        alignSelf: 'stretch',
        flexGrow: 1,
        flexShrink: 1,
        // This forces some browsers (like Chrome) to create a new render context,
        // which can significantly speed up scrolling.
        transform: 'translateZ(0)'
    },
    verticalStyle: {
        flexDirection: 'column',
        overflowY: 'auto',
        overflowX: 'hidden'
    },
    horizontalStyle: {
        flexDirection: 'row',
        overflowY: 'hidden',
        overflowX: 'auto'
    },
    bothStyle: {
        overflowY: 'auto',
        overflowX: 'auto'
    }
};
var _initializedCustomStyles = false;
var _customStyles = {
    defaultStyle: {
        overflow: 'hidden',
        msOverflowStyle: 'auto',
        flexDirection: 'column',
        // This forces some browsers (like Chrome) to create a new render context,
        // which can significantly speed up scrolling.
        transform: 'translateZ(0)'
    },
    verticalStyle: {},
    horizontalStyle: {},
    bothStyle: {},
    customScrollContainer: {
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        alignSelf: 'stretch'
    },
    customScrollVertical: {
        // Set flex only for vertical scroll view.
        // Don't set flex for horizontal scroll view, otherwise it disappears.
        display: 'flex',
        flex: '1 1 0px'
    }
};
// Default to once per frame.
var _defaultScrollThrottleValue = 1000 / 60;
var ScrollView = (function (_super) {
    __extends(ScrollView, _super);
    function ScrollView(props) {
        var _this = _super.call(this, props) || this;
        _this._customScrollbarEnabled = true;
        _this._dragging = false;
        // Throttled scroll handler
        _this._onScroll = _.throttle(function (e) {
            if (_this._customScrollbarEnabled) {
                _this._customScrollbar.update();
            }
            // Check if this should be also fire an onLayout event
            // The browser sends a scroll event when resizing
            var onLayoutPromise = _this._checkAndReportLayout();
            // Recent versions of Chrome have started to defer all timers until
            // after scrolling has completed. Because of this, our deferred layout
            // reporting sometimes doesn't get handled for up to seconds at a time.
            // Force the list of deferred changes to be reported now.
            ViewBase_1.default._reportDeferredLayoutChanges();
            if (_this.props.onScroll) {
                onLayoutPromise.then(function () {
                    var container = _this._getContainer();
                    if (!container) {
                        return;
                    }
                    _this.props.onScroll(container.scrollTop, container.scrollLeft);
                });
            }
        }, (_this.props.scrollEventThrottle || _defaultScrollThrottleValue), { leading: true, trailing: true });
        _this._onTouchStart = function () {
            if (!_this._dragging) {
                _this._dragging = true;
                _this.props.onScrollBeginDrag();
            }
        };
        _this._onTouchEnd = function () {
            _this._dragging = false;
            _this.props.onScrollEndDrag();
        };
        // Set final styles upon initialization of the first ScrollView. This was previously done in the head
        // of this file, but it broke the pattern of not doing external work (such as accessing the document
        // object) on Types initialization.
        if (!_initializedCustomStyles) {
            _initializedCustomStyles = true;
            var nativeScrollbarWidth = CustomScrollbar_1.default.getNativeScrollbarWidth();
            _customStyles.verticalStyle = {
                overflowY: 'scroll',
                paddingRight: 30 - nativeScrollbarWidth,
                marginRight: -30,
                // Fixes a bug for Chrome beta where the parent flexbox (customScrollContainer) doesn't 
                // recognize that its child got populated with items. Smallest default width gives an 
                // indication that content will exist here.
                minHeight: 0
            };
            _customStyles.horizontalStyle = {
                // The display needs to be set to flex, otherwise the scrollview incorrectly shows up vertically.
                display: 'flex',
                overflowX: 'scroll',
                paddingBottom: 30 - nativeScrollbarWidth,
                marginBottom: -30,
                // Fixes a bug for Chrome beta where the parent flexbox (customScrollContainer) doesn't 
                // recognize that its child got populated with items. Smallest default width gives an 
                // indication that content will exist here.
                minWidth: 0
            };
            _customStyles.bothStyle = Styles_1.default.combine(null, [_customStyles.verticalStyle, _customStyles.horizontalStyle]);
        }
        return _this;
    }
    ScrollView.prototype.componentDidUpdate = function () {
        var _this = this;
        _super.prototype.componentDidUpdate.call(this);
        if (!this.props.onContentSizeChange) {
            return;
        }
        _.defer(function () {
            if (_this.props.onContentSizeChange) {
                var container = _this._getContainer();
                if (!container) {
                    return;
                }
                _this.props.onContentSizeChange(container.scrollWidth, container.scrollHeight);
            }
        });
    };
    ScrollView.prototype.render = function () {
        return this._customScrollbarEnabled ? this._renderWithCustomScrollbar() : this._renderNormal();
    };
    ScrollView.prototype.componentWillMount = function () {
        this._onPropsChange(this.props);
    };
    ScrollView.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (this._customScrollbarEnabled) {
            var element = ReactDOM.findDOMNode(this);
            if (element) {
                this._customScrollbar = new CustomScrollbar_1.default(element);
                this._customScrollbar.init({ horizontal: this.props.horizontal, vertical: this.props.vertical });
            }
        }
    };
    ScrollView.prototype.componentWillReceiveProps = function (newProps) {
        _super.prototype.componentWillReceiveProps.call(this, newProps);
        this._onPropsChange(newProps);
    };
    ScrollView.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (this._customScrollbarEnabled) {
            this._customScrollbar.dispose();
        }
    };
    ScrollView.prototype._getContainerRef = function () {
        return this.refs['scrollView'];
    };
    ScrollView.prototype._onPropsChange = function (props) {
        this._customScrollbarEnabled = ScrollViewConfig_1.default.useCustomScrollbars();
    };
    ScrollView.prototype._getContainerStyle = function () {
        var styles = [{ display: 'block' }];
        var sourceStyles = this._customScrollbarEnabled ? _customStyles : _styles;
        styles.push(sourceStyles.defaultStyle);
        if (this.props.horizontal && this.props.vertical) {
            styles.push(sourceStyles.bothStyle);
        }
        else if (this.props.horizontal) {
            styles.push(sourceStyles.horizontalStyle);
        }
        else {
            styles.push(sourceStyles.verticalStyle);
        }
        var defaultStyle = Styles_1.default.combine(null, styles);
        return Styles_1.default.combine(defaultStyle, this.props.style);
    };
    ScrollView.prototype._renderNormal = function () {
        return (React.createElement("div", { ref: 'scrollView', onScroll: this._onScroll, onTouchStart: this._onTouchStart, onTouchEnd: this._onTouchEnd, style: this._getContainerStyle() }, this.props.children));
    };
    ScrollView.prototype._renderWithCustomScrollbar = function () {
        var containerStyles = _customStyles.customScrollContainer;
        if (this.props.justifyEnd) {
            containerStyles = _.extend({ justifyContent: 'flex-end' }, containerStyles);
        }
        var scrollComponentClassNames = ['scrollViewport'];
        if (this.props.horizontal) {
            scrollComponentClassNames.push('scrollViewportH');
        }
        if (this.props.vertical || this.props.vertical === undefined) {
            scrollComponentClassNames.push('scrollViewportV');
            containerStyles = _.extend({}, _customStyles.customScrollVertical, containerStyles);
        }
        return (React.createElement("div", { className: 'rxCustomScroll', style: containerStyles },
            React.createElement("div", { ref: 'scrollView', className: scrollComponentClassNames.join(' '), onScroll: this._onScroll, style: this._getContainerStyle(), onKeyDown: this.props.onKeyPress, onFocus: this.props.onFocus, onBlur: this.props.onBlur, onTouchStart: this._onTouchStart, onTouchEnd: this._onTouchEnd }, this.props.children)));
    };
    ScrollView.prototype.setScrollTop = function (scrollTop, animate) {
        var _this = this;
        if (animate === void 0) { animate = false; }
        var container = this._getContainer();
        if (!container) {
            return;
        }
        if (animate) {
            var start_1 = container.scrollTop;
            var change_1 = scrollTop - start_1;
            var increment_1 = 20;
            var duration_1 = 200;
            var animateScroll_1 = function (elapsedTime) {
                elapsedTime += increment_1;
                var position = _this._easeInOut(elapsedTime, start_1, change_1, duration_1);
                container.scrollTop = position;
                if (elapsedTime < duration_1) {
                    window.setTimeout(function () {
                        animateScroll_1(elapsedTime);
                    }, increment_1);
                }
            };
            animateScroll_1(0);
        }
        else {
            container.scrollTop = scrollTop;
        }
    };
    ScrollView.prototype.setScrollLeft = function (scrollLeft, animate) {
        var _this = this;
        if (animate === void 0) { animate = false; }
        var container = this._getContainer();
        if (!container) {
            return;
        }
        if (animate) {
            var start_2 = container.scrollLeft;
            var change_2 = scrollLeft - start_2;
            var increment_2 = 20;
            var duration_2 = 200;
            var animateScroll_2 = function (elapsedTime) {
                elapsedTime += increment_2;
                var position = _this._easeInOut(elapsedTime, start_2, change_2, duration_2);
                container.scrollLeft = position;
                if (elapsedTime < duration_2) {
                    window.setTimeout(function () {
                        animateScroll_2(elapsedTime);
                    }, increment_2);
                }
            };
            animateScroll_2(0);
        }
        else {
            container.scrollLeft = scrollLeft;
        }
    };
    ScrollView.prototype.addToScrollTop = function (deltaTop, animate) {
        var container = this._getContainer();
        if (!container) {
            return;
        }
        this.setScrollTop(container.scrollTop + deltaTop, animate);
    };
    ScrollView.prototype.addToScrollLeft = function (deltaLeft, animate) {
        var container = this._getContainer();
        if (!container) {
            return;
        }
        this.setScrollLeft(container.scrollLeft + deltaLeft, animate);
    };
    ScrollView.prototype._easeInOut = function (currentTime, start, change, duration) {
        currentTime /= duration / 2;
        if (currentTime < 1) {
            return change / 2 * currentTime * currentTime + start;
        }
        currentTime -= 1;
        return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
    };
    return ScrollView;
}(ViewBase_1.default));
exports.ScrollView = ScrollView;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ScrollView;


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* StatusBar.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation of the cross-platform status bar.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RX = __webpack_require__(1);
var StatusBar = (function (_super) {
    __extends(StatusBar, _super);
    function StatusBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatusBar.prototype.isOverlay = function () {
        return false;
    };
    StatusBar.prototype.setBarStyle = function (style, animated) {
        // Nothing to do on Web
    };
    StatusBar.prototype.setHidden = function (hidden, showHideTransition) {
        // Nothing to do on Web
    };
    StatusBar.prototype.setNetworkActivityIndicatorVisible = function (value) {
        // Nothing to do on the web
    };
    StatusBar.prototype.setBackgroundColor = function (color, animated) {
        // Nothing to do on the web
    };
    StatusBar.prototype.setTranslucent = function (translucent) {
        // Nothing to do on the web
    };
    return StatusBar;
}(RX.StatusBar));
exports.StatusBar = StatusBar;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new StatusBar();


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Storage.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation of the cross-platform database storage abstraction.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SyncTasks = __webpack_require__(20);
var RX = __webpack_require__(1);
var Storage = (function (_super) {
    __extends(Storage, _super);
    function Storage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Storage.prototype.getItem = function (key) {
        var value = window.localStorage.getItem(key);
        return SyncTasks.Resolved(value);
    };
    Storage.prototype.setItem = function (key, value) {
        window.localStorage.setItem(key, value);
        return SyncTasks.Resolved();
    };
    Storage.prototype.removeItem = function (key) {
        window.localStorage.removeItem(key);
        return SyncTasks.Resolved();
    };
    Storage.prototype.clear = function () {
        window.localStorage.clear();
        return SyncTasks.Resolved();
    };
    return Storage;
}(RX.Storage));
exports.Storage = Storage;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Storage();


/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* UserPresence.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Web-specific implementation of the ReactXP interfaces related to
* user presence.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RX = __webpack_require__(1);
if (typeof (document) !== 'undefined') {
    var ifvisible = __webpack_require__(92);
}
var UserPresence = (function (_super) {
    __extends(UserPresence, _super);
    function UserPresence() {
        var _this = _super.call(this) || this;
        // Handle test environment where document is not defined.
        if (typeof (document) !== 'undefined') {
            _this._isPresent = ifvisible.now();
            ifvisible.on('wakeup', _this._handleWakeup.bind(_this));
            ifvisible.on('idle', _this._handleIdle.bind(_this));
            ifvisible.on('focus', _this._handleFocus.bind(_this));
            ifvisible.on('blur', _this._handleBlur.bind(_this));
            window.addEventListener('blur', _this._handleBlur.bind(_this));
            window.addEventListener('focus', _this._handleFocus.bind(_this));
        }
        return _this;
    }
    UserPresence.prototype.isUserPresent = function () {
        // Handle test environment where document is not defined.
        if (typeof (document) !== 'undefined') {
            return ifvisible.now();
        }
        else {
            return true;
        }
    };
    UserPresence.prototype._setUserPresent = function (isPresent) {
        if (this._isPresent !== isPresent) {
            this._isPresent = isPresent;
            this.userPresenceChangedEvent.fire(isPresent);
        }
    };
    UserPresence.prototype._handleWakeup = function () {
        this._setUserPresent(true);
    };
    UserPresence.prototype._handleIdle = function () {
        this._setUserPresent(false);
    };
    UserPresence.prototype._handleFocus = function () {
        this._setUserPresent(true);
    };
    UserPresence.prototype._handleBlur = function () {
        this._setUserPresent(false);
    };
    return UserPresence;
}(RX.UserPresence));
exports.UserPresence = UserPresence;
var instance = new UserPresence();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = instance;


/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* WebView.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* A control that allows the display of an independent web page.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(0);
var RX = __webpack_require__(1);
var Styles_1 = __webpack_require__(8);
var Types = __webpack_require__(6);
var View_1 = __webpack_require__(51);
var _styles = {
    webViewDefault: Styles_1.default.createWebViewStyle({
        flex: 1,
        alignSelf: 'stretch',
        borderStyle: 'none'
    }),
    webViewContainer: Styles_1.default.createViewStyle({
        flexDirection: 'column',
        flex: 1,
        alignSelf: 'stretch'
    })
};
var WebView = (function (_super) {
    __extends(WebView, _super);
    function WebView(props) {
        var _this = _super.call(this, props) || this;
        _this._onLoad = function (e) {
            if (_this.props.onLoad) {
                _this.props.onLoad(e);
            }
        };
        _this._sandboxToStringValue = function (sandbox) {
            var values = [];
            if (sandbox & Types.WebViewSandboxMode.AllowForms) {
                values.push('allow-forms');
            }
            if (sandbox & Types.WebViewSandboxMode.AllowModals) {
                values.push('allow-modals');
            }
            if (sandbox & Types.WebViewSandboxMode.AllowOrientationLock) {
                values.push('allow-orientation-lock');
            }
            if (sandbox & Types.WebViewSandboxMode.AllowPointerLock) {
                values.push('allow-pointer-lock');
            }
            if (sandbox & Types.WebViewSandboxMode.AllowPopups) {
                values.push('allow-popups');
            }
            if (sandbox & Types.WebViewSandboxMode.AllowPopupsToEscapeSandbox) {
                values.push('allow-popups-to-escape-sandbox');
            }
            if (sandbox & Types.WebViewSandboxMode.AllowPresentation) {
                values.push('allow-presentation');
            }
            if (sandbox & Types.WebViewSandboxMode.AllowSameOrigin) {
                values.push('allow-same-origin');
            }
            if (sandbox & Types.WebViewSandboxMode.AllowScripts) {
                values.push('allow-scripts');
            }
            if (sandbox & Types.WebViewSandboxMode.AllowTopNavigation) {
                values.push('allow-top-navigation');
            }
            return values.join(' ');
        };
        _this.state = {
            postComplete: false,
            webFormIdentifier: "form" + WebView._webFrameNumber,
            webFrameIdentifier: "frame" + WebView._webFrameNumber
        };
        WebView._webFrameNumber++;
        return _this;
    }
    WebView.prototype.componentDidMount = function () {
        this._postRender();
    };
    WebView.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._postRender();
    };
    WebView.prototype._postRender = function () {
        if (!this.state.postComplete) {
            this.setState({
                postComplete: true
            });
        }
    };
    WebView.prototype.render = function () {
        var styles = Styles_1.default.combine(_styles.webViewDefault, this.props.style);
        var sandbox = this.props.sandbox !== undefined
            ? this.props.sandbox
            : (this.props.javaScriptEnabled ? Types.WebViewSandboxMode.AllowScripts : Types.WebViewSandboxMode.None);
        // width 100% is needed for Edge - it doesn't grow iframe. Resize needs to be done with wrapper
        return (React.createElement(View_1.View, { style: _styles.webViewContainer },
            React.createElement("iframe", { ref: 'iframe', name: this.state.webFrameIdentifier, id: this.state.webFrameIdentifier, style: styles, src: this.props.url, onLoad: this._onLoad, sandbox: this._sandboxToStringValue(sandbox), width: '100%' })));
    };
    WebView.prototype.postMessage = function (message, targetOrigin) {
        if (targetOrigin === void 0) { targetOrigin = '*'; }
        var iframeDOM = ReactDOM.findDOMNode(this.refs['iframe']);
        if (iframeDOM && iframeDOM.contentWindow) {
            iframeDOM.contentWindow.postMessage(message, targetOrigin);
        }
    };
    WebView.prototype.reload = function () {
        var iframeDOM = ReactDOM.findDOMNode(this.refs['iframe']);
        if (iframeDOM && iframeDOM.contentWindow) {
            iframeDOM.contentWindow.location.reload(true);
        }
    };
    WebView.prototype.goBack = function () {
        var iframeDOM = ReactDOM.findDOMNode(this.refs['iframe']);
        if (iframeDOM && iframeDOM.contentWindow) {
            iframeDOM.contentWindow.history.back();
        }
    };
    WebView.prototype.goForward = function () {
        var iframeDOM = ReactDOM.findDOMNode(this.refs['iframe']);
        if (iframeDOM && iframeDOM.contentWindow) {
            iframeDOM.contentWindow.history.forward();
        }
    };
    return WebView;
}(RX.WebView));
WebView._webFrameNumber = 1;
exports.WebView = WebView;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WebView;


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* AnimateListEdits.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Each time the component receives new children, animates insertions, removals,
* and moves that occurred since the previous render.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(0);
var MonitorListEdits = __webpack_require__(368);
var executeTransition_1 = __webpack_require__(146);
var AnimateListEdits = (function (_super) {
    __extends(AnimateListEdits, _super);
    function AnimateListEdits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimateListEdits.prototype._handleWillAnimate = function (edits, done) {
        var counter = 1;
        var animationCompleted = function () {
            --counter;
            if (counter === 0) {
                done();
            }
        };
        var delay = 0;
        if (edits.removed.length > 0 && this.props.animateChildLeave) {
            edits.removed.forEach(function (move) {
                var domNode = ReactDOM.findDOMNode(move.element);
                if (domNode) {
                    domNode.style.transform = 'translateY(' + -move.topDelta + 'px)';
                    counter++;
                    executeTransition_1.default(domNode, [{
                            property: 'opacity',
                            from: 1,
                            to: 0,
                            delay: delay,
                            duration: 150,
                            timing: 'linear'
                        }], animationCompleted);
                }
            });
            delay += 75;
        }
        if (edits.moved.length > 0 && this.props.animateChildMove) {
            edits.moved.forEach(function (move) {
                counter++;
                var domNode = ReactDOM.findDOMNode(move.element);
                if (domNode) {
                    executeTransition_1.default(domNode, [{
                            property: 'transform',
                            from: 'translateY(' + -move.topDelta + 'px)',
                            to: '',
                            delay: delay,
                            duration: 300,
                            timing: 'ease-out'
                        }], animationCompleted);
                }
            });
        }
        delay += 75;
        if (edits.added.length > 0 && this.props.animateChildEnter) {
            edits.added.forEach(function (move) {
                counter++;
                executeTransition_1.default(ReactDOM.findDOMNode(move.element), [{
                        property: 'opacity',
                        from: 0,
                        to: 1,
                        delay: delay,
                        duration: 150,
                        timing: 'linear'
                    }], animationCompleted);
            });
        }
        animationCompleted();
    };
    AnimateListEdits.prototype.render = function () {
        var _this = this;
        return (React.createElement(MonitorListEdits.MonitorListEdits, __assign({ componentWillAnimate: function (edits, done) { return _this._handleWillAnimate(edits, done); } }, this.props), this.props.children));
    };
    return AnimateListEdits;
}(React.Component));
exports.AnimateListEdits = AnimateListEdits;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AnimateListEdits;


/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* MonitorListEdits.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Looks for insertions, removals, and moves each time the component receives new
* children. Communicates these list edits to the consumer giving it the opportunity
* to animate the edits.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var _ = __webpack_require__(3);
var assert = __webpack_require__(55);
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(0);
function getPosition(el) {
    return {
        left: el.offsetLeft,
        top: el.offsetTop
    };
}
function extractChildrenKeys(children) {
    var keys = [];
    React.Children.forEach(children, function (child, index) {
        if (child) {
            var childReactElement = child;
            assert(childReactElement.key !== undefined && childReactElement.key !== null, 'Children passed to a `View` with child animations enabled must have a `key`');
            keys.push(childReactElement.key);
        }
    });
    return keys;
}
// Returns true if the children were edited (e.g. an item was added, moved, or removed).
// We use this information to determine whether or not we'll need to play any list edit
// animations.
function childrenEdited(prevChildrenKeys, nextChildrenKeys) {
    return !_.isEqual(prevChildrenKeys, nextChildrenKeys);
}
function createChildrenMap(children) {
    var map = {};
    React.Children.forEach(children, function (child, index) {
        if (child) {
            var childReactElement = child;
            assert('key' in childReactElement, 'Children passed to a `View` with child animations enabled must have a `key`');
            map[childReactElement['key']] = childReactElement;
        }
    });
    return map;
}
function computePositions(refs) {
    var positions = {};
    _.each(refs, function (ref, key) {
        positions[key] = getPosition(ref.domElement);
    });
    return positions;
}
// The states the React component can be in.
var ComponentPhaseEnum;
(function (ComponentPhaseEnum) {
    // The rest state. The component is not in the middle of anything.
    ComponentPhaseEnum[ComponentPhaseEnum["rest"] = 0] = "rest";
    // The component is about to play an animation. This occurs when the component
    // detected a list edit in componentWillUpdate but hasn't yet gotten the opportunity
    // to start the animation in componentDidUpdate.
    ComponentPhaseEnum[ComponentPhaseEnum["willAnimate"] = 1] = "willAnimate";
    // The component is in the middle of playing an animation. The component should not
    // rerender while in this state.
    ComponentPhaseEnum[ComponentPhaseEnum["animating"] = 2] = "animating";
})(ComponentPhaseEnum || (ComponentPhaseEnum = {}));
var MonitorListEdits = (function (_super) {
    __extends(MonitorListEdits, _super);
    function MonitorListEdits() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._itemRefs = {}; // Updated after render but before componentDidUpdate
        _this._refReplacementCache = {};
        _this._isMounted = false;
        _this._phase = ComponentPhaseEnum.rest;
        _this._willAnimatePhaseInfo = null;
        return _this;
    }
    MonitorListEdits.prototype.componentWillMount = function () {
        this._childrenKeys = extractChildrenKeys(this.props.children);
        this._childrenMap = createChildrenMap(this.props.children);
    };
    MonitorListEdits.prototype.componentDidMount = function () {
        this._isMounted = true;
    };
    MonitorListEdits.prototype.componentWillUnmount = function () {
        this._isMounted = false;
    };
    MonitorListEdits.prototype.shouldComponentUpdate = function () {
        return this._phase !== ComponentPhaseEnum.animating;
    };
    MonitorListEdits.prototype.componentWillUpdate = function (nextProps) {
        assert(this._phase !== ComponentPhaseEnum.animating, 'componentWillUpdate should never run while the component is animating due to the implementation of shouldComponentUpdate');
        var prevChildrenKeys = this._childrenKeys;
        var nextChildrenKeys = extractChildrenKeys(nextProps.children);
        this._childrenKeys = nextChildrenKeys;
        if (childrenEdited(prevChildrenKeys, nextChildrenKeys)) {
            var prevChildrenMap_1 = this._childrenMap;
            var nextChildrenMap_1 = createChildrenMap(nextProps.children);
            this._childrenMap = nextChildrenMap_1;
            var removed_1 = [];
            var added_1 = [];
            var other_1 = [];
            Object.keys(prevChildrenMap_1).forEach(function (key) {
                if (!(key in nextChildrenMap_1)) {
                    removed_1.push(prevChildrenMap_1[key]);
                }
            });
            Object.keys(nextChildrenMap_1).forEach(function (key) {
                if (!(key in prevChildrenMap_1)) {
                    added_1.push(nextChildrenMap_1[key]);
                }
                else {
                    other_1.push(nextChildrenMap_1[key]);
                }
            });
            this._phase = ComponentPhaseEnum.willAnimate;
            this._willAnimatePhaseInfo = {
                added: added_1,
                removed: removed_1,
                other: other_1,
                prevPositions: computePositions(this._itemRefs),
                prevChildrenMap: prevChildrenMap_1
            };
        }
    };
    MonitorListEdits.prototype.render = function () {
        var _this = this;
        this._childrenToRender = [];
        _.each(this.props.children, function (child) {
            if (child) {
                var childElement_1 = child;
                var refData = _this._refReplacementCache[childElement_1.key];
                // Reuse the cached replacement ref function instead of recreating it every render, unless the child's ref changes.
                if (!refData || refData.exisiting !== childElement_1.ref) {
                    refData = {
                        replacement: function (refValue) { _this._saveRef(childElement_1, refValue); },
                        exisiting: childElement_1.ref
                    };
                    _this._refReplacementCache[childElement_1.key] = refData;
                }
                _this._childrenToRender.push(React.cloneElement(childElement_1, { ref: refData.replacement }));
            }
        });
        if (this._phase === ComponentPhaseEnum.willAnimate) {
            _.each(this._willAnimatePhaseInfo.removed, function (childElement) {
                if (childElement) {
                    _this._childrenToRender.push(React.cloneElement(childElement, {
                        ref: function (refValue) {
                            _this._saveRef(childElement, refValue);
                        }
                    }));
                }
            });
        }
        return (React.createElement("div", __assign({}, this.props), this._childrenToRender));
    };
    MonitorListEdits.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        assert(this._phase !== ComponentPhaseEnum.animating, 'componentDidUpdate should never run while the component is animating due to the implementation of shouldComponentUpdate');
        if (this._phase === ComponentPhaseEnum.willAnimate) {
            var phaseInfo_1 = this._willAnimatePhaseInfo;
            var prevPositions_1 = phaseInfo_1.prevPositions;
            var nextPositions_1 = computePositions(this._itemRefs);
            var added = phaseInfo_1.added.map(function (child) {
                return {
                    element: _this._itemRefs[child.key].reactElement
                };
            });
            var removed = phaseInfo_1.removed.map(function (child) {
                var key = child.key;
                var prevPos = prevPositions_1[key];
                var nextPos = nextPositions_1[key];
                return {
                    leftDelta: nextPos.left - prevPos.left,
                    topDelta: nextPos.top - prevPos.top,
                    element: _this._itemRefs[key].reactElement
                };
            });
            var moved_1 = [];
            phaseInfo_1.other.map(function (child) {
                var key = child.key;
                var prevPos = prevPositions_1[key];
                var nextPos = nextPositions_1[key];
                if (prevPos.left !== nextPos.left || prevPos.top !== nextPos.top) {
                    moved_1.push({
                        leftDelta: nextPos.left - prevPos.left,
                        topDelta: nextPos.top - prevPos.top,
                        element: _this._itemRefs[key].reactElement
                    });
                }
            });
            this._phase = ComponentPhaseEnum.animating;
            this._willAnimatePhaseInfo = null;
            this.props.componentWillAnimate({
                added: added,
                moved: moved_1,
                removed: removed
            }, function () {
                _this._phase = ComponentPhaseEnum.rest;
                if (_this._isMounted) {
                    _this.forceUpdate();
                }
                phaseInfo_1.removed.forEach(function (child) {
                    delete _this._refReplacementCache[child.key];
                });
            });
        }
    };
    MonitorListEdits.prototype._saveRef = function (reactElement, refValue) {
        if (refValue === null) {
            delete this._itemRefs[reactElement.key];
        }
        else {
            // Cache both the react component reference and the corresponding HTML DOM node (for perf reasons).
            this._itemRefs[reactElement.key] = {
                reactElement: refValue,
                domElement: ReactDOM.findDOMNode(refValue)
            };
        }
        assert(typeof reactElement.ref === 'function' || reactElement.ref === undefined || reactElement.ref === null, 'Invalid ref: ' + reactElement.ref + '. Only callback refs are supported when using child animations on a `View`');
        // If the creator of the reactElement also provided a ref, call it.
        if (typeof reactElement.ref === 'function') {
            reactElement.ref(refValue);
        }
    };
    return MonitorListEdits;
}(React.Component));
exports.MonitorListEdits = MonitorListEdits;


/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* MouseResponder.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Handles tracking of mouse movements.
*/

var _ = __webpack_require__(3);
var _compareDOMOrder = function (a, b) {
    if (a.target.compareDocumentPosition(b.target) & Node.DOCUMENT_POSITION_PRECEDING) {
        return 1;
    }
    else {
        return -1;
    }
};
var MouseResponder = (function () {
    function MouseResponder() {
    }
    MouseResponder.create = function (config) {
        MouseResponder._initializeEventHandlers();
        MouseResponder._responders = MouseResponder._responders || [];
        var responder = {
            id: config.id,
            target: config.target,
            shouldBecomeFirstResponder: function (event, gestureState) {
                if (!config.shouldBecomeFirstResponder) {
                    return false;
                }
                return config.shouldBecomeFirstResponder(event, gestureState);
            },
            onMove: function (event, gestureState) {
                if (!config.onMove) {
                    return;
                }
                config.onMove(event, gestureState);
            },
            onTerminate: function (event, gestureState) {
                if (!config.onTerminate) {
                    return;
                }
                config.onTerminate(event, gestureState);
            }
        };
        MouseResponder._responders.push(responder);
        return {
            dispose: function () {
                _.remove(MouseResponder._responders, function (r) { return r.id === responder.id; });
                if (MouseResponder._responders.length === 0) {
                    MouseResponder._removeEventHandlers();
                }
            }
        };
    };
    MouseResponder._initializeEventHandlers = function () {
        if (MouseResponder._initialized) {
            return;
        }
        window.addEventListener('mousedown', MouseResponder._onMouseDown);
        window.addEventListener('mousemove', MouseResponder._onMouseMove);
        window.addEventListener('mouseup', MouseResponder._onMouseUp);
        MouseResponder._initialized = true;
    };
    MouseResponder._removeEventHandlers = function () {
        if (!MouseResponder._initialized) {
            return;
        }
        window.removeEventListener('mousedown', MouseResponder._onMouseDown);
        window.removeEventListener('mousemove', MouseResponder._onMouseMove);
        window.removeEventListener('mouseup', MouseResponder._onMouseUp);
        MouseResponder._initialized = false;
    };
    return MouseResponder;
}());
MouseResponder._currentResponder = null;
MouseResponder._pendingGestureState = null;
MouseResponder._initialized = false;
MouseResponder._onMouseDown = function (event) {
    // We need to skip new gesture starts when there is already on in progress
    if (MouseResponder._currentResponder) {
        event.preventDefault();
        event.stopPropagation();
        return;
    }
    MouseResponder._pendingGestureState = {
        initialClientX: event.clientX,
        initialClientY: event.clientY,
        initialPageX: event.pageX,
        initialPageY: event.pageY,
        clientX: event.clientX,
        clientY: event.clientY,
        pageX: event.pageX,
        pageY: event.pageY,
        velocityX: 0,
        velocityY: 0,
        timeStamp: new Date(),
        isComplete: false
    };
    // We must sort them properly to be consistent with native PanResponder picks it's first responders
    // In native there is no z-index and PanResponder picks always the last registered element.
    // in case of native, that's last element in "DOM"
    MouseResponder._responders.sort(_compareDOMOrder);
    // We need to pick a responder that will handle this GestureView
    var firstResponder = _.findLast(MouseResponder._responders, function (responder) {
        return responder.shouldBecomeFirstResponder(event, MouseResponder._pendingGestureState);
    });
    if (firstResponder) {
        MouseResponder._currentResponder = firstResponder;
    }
};
MouseResponder._onMouseMove = function (event) {
    if (MouseResponder._currentResponder && MouseResponder._pendingGestureState) {
        var _a = MouseResponder._calcVelocity(event, MouseResponder._pendingGestureState), velocityX = _a.velocityX, velocityY = _a.velocityY;
        MouseResponder._pendingGestureState = _.merge({}, MouseResponder._pendingGestureState, {
            clientX: event.clientX,
            clientY: event.clientY,
            pageX: event.pageX,
            pageY: event.pageY,
            velocityX: velocityX,
            velocityY: velocityY,
            isComplete: false
        });
        if (event.buttons === 0) {
            MouseResponder._onMouseUp(event);
        }
        else {
            MouseResponder._currentResponder.onMove(event, MouseResponder._pendingGestureState);
        }
    }
};
MouseResponder._onMouseUp = function (event) {
    // We check whether there is still some buttom pressed
    // in case there are still some buttons left,
    // we don't stop terminate the gesture.
    if (event.buttons !== 0) {
        event.preventDefault();
        event.stopPropagation();
        return;
    }
    if (MouseResponder._currentResponder && MouseResponder._pendingGestureState) {
        var _a = MouseResponder._calcVelocity(event, MouseResponder._pendingGestureState), velocityX = _a.velocityX, velocityY = _a.velocityY;
        MouseResponder._pendingGestureState = _.merge({}, MouseResponder._pendingGestureState, {
            clientX: event.clientX,
            clientY: event.clientY,
            pageX: event.pageX,
            pageY: event.pageY,
            velocityX: velocityX,
            velocityY: velocityY,
            isComplete: true
        });
        MouseResponder._currentResponder.onTerminate(event, MouseResponder._pendingGestureState);
        MouseResponder._currentResponder = null;
        MouseResponder._pendingGestureState = null;
    }
};
MouseResponder._calcVelocity = function (e, gestureState) {
    var time = Date.now() - gestureState.timeStamp.getTime();
    var velocityX = (e.clientX - gestureState.initialClientX) / time;
    var velocityY = (e.clientY - gestureState.initialClientY) / time;
    return {
        velocityX: velocityX,
        velocityY: velocityY
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MouseResponder;


/***/ }),
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, setImmediate) {// Rebound
// =======
// **Rebound** is a simple library that models Spring dynamics for the
// purpose of driving physical animations.
//
// Origin
// ------
// [Rebound](http://facebook.github.io/rebound) was originally written
// in Java to provide a lightweight physics system for
// [Home](https://play.google.com/store/apps/details?id=com.facebook.home) and
// [Chat Heads](https://play.google.com/store/apps/details?id=com.facebook.orca)
// on Android. It's now been adopted by several other Android
// applications. This JavaScript port was written to provide a quick
// way to demonstrate Rebound animations on the web for a
// [conference talk](https://www.youtube.com/watch?v=s5kNm-DgyjY). Since then
// the JavaScript version has been used to build some really nice interfaces.
// Check out [brandonwalkin.com](http://brandonwalkin.com) for an
// example.
//
// Overview
// --------
// The Library provides a SpringSystem for maintaining a set of Spring
// objects and iterating those Springs through a physics solver loop
// until equilibrium is achieved. The Spring class is the basic
// animation driver provided by Rebound. By attaching a listener to
// a Spring, you can observe its motion. The observer function is
// notified of position changes on the spring as it solves for
// equilibrium. These position updates can be mapped to an animation
// range to drive animated property updates on your user interface
// elements (translation, rotation, scale, etc).
//
// Example
// -------
// Here's a simple example. Pressing and releasing on the logo below
// will cause it to scale up and down with a springy animation.
//
// <div style="text-align:center; margin-bottom:50px; margin-top:50px">
//   <img
//     src="http://facebook.github.io/rebound/images/rebound.png"
//     id="logo"
//   />
// </div>
// <script src="../rebound.min.js"></script>
// <script>
//
// function scale(el, val) {
//   el.style.mozTransform =
//   el.style.msTransform =
//   el.style.webkitTransform =
//   el.style.transform = 'scale3d(' + val + ', ' + val + ', 1)';
// }
// var el = document.getElementById('logo');
//
// var springSystem = new rebound.SpringSystem();
// var spring = springSystem.createSpring(50, 3);
// spring.addListener({
//   onSpringUpdate: function(spring) {
//     var val = spring.getCurrentValue();
//     val = rebound.MathUtil.mapValueInRange(val, 0, 1, 1, 0.5);
//     scale(el, val);
//   }
// });
//
// el.addEventListener('mousedown', function() {
//   spring.setEndValue(1);
// });
//
// el.addEventListener('mouseout', function() {
//   spring.setEndValue(0);
// });
//
// el.addEventListener('mouseup', function() {
//   spring.setEndValue(0);
// });
//
// </script>
//
// Here's how it works.
//
// ```
// // Get a reference to the logo element.
// var el = document.getElementById('logo');
//
// // create a SpringSystem and a Spring with a bouncy config.
// var springSystem = new rebound.SpringSystem();
// var spring = springSystem.createSpring(50, 3);
//
// // Add a listener to the spring. Every time the physics
// // solver updates the Spring's value onSpringUpdate will
// // be called.
// spring.addListener({
//   onSpringUpdate: function(spring) {
//     var val = spring.getCurrentValue();
//     val = rebound.MathUtil
//                  .mapValueInRange(val, 0, 1, 1, 0.5);
//     scale(el, val);
//   }
// });
//
// // Listen for mouse down/up/out and toggle the
// //springs endValue from 0 to 1.
// el.addEventListener('mousedown', function() {
//   spring.setEndValue(1);
// });
//
// el.addEventListener('mouseout', function() {
//   spring.setEndValue(0);
// });
//
// el.addEventListener('mouseup', function() {
//   spring.setEndValue(0);
// });
//
// // Helper for scaling an element with css transforms.
// function scale(el, val) {
//   el.style.mozTransform =
//   el.style.msTransform =
//   el.style.webkitTransform =
//   el.style.transform = 'scale3d(' +
//     val + ', ' + val + ', 1)';
// }
// ```

(function() {
  var rebound = {};
  var util = rebound.util = {};
  var concat = Array.prototype.concat;
  var slice = Array.prototype.slice;

  // Bind a function to a context object.
  util.bind = function bind(func, context) {
    var args = slice.call(arguments, 2);
    return function() {
      func.apply(context, concat.call(args, slice.call(arguments)));
    };
  };

  // Add all the properties in the source to the target.
  util.extend = function extend(target, source) {
    for (var key in source) {
      if (source.hasOwnProperty(key)) {
        target[key] = source[key];
      }
    }
  };

  // SpringSystem
  // ------------
  // **SpringSystem** is a set of Springs that all run on the same physics
  // timing loop. To get started with a Rebound animation you first
  // create a new SpringSystem and then add springs to it.
  var SpringSystem = rebound.SpringSystem = function SpringSystem(looper) {
    this._springRegistry = {};
    this._activeSprings = [];
    this.listeners = [];
    this._idleSpringIndices = [];
    this.looper = looper || new AnimationLooper();
    this.looper.springSystem = this;
  };

  util.extend(SpringSystem.prototype, {

    _springRegistry: null,

    _isIdle: true,

    _lastTimeMillis: -1,

    _activeSprings: null,

    listeners: null,

    _idleSpringIndices: null,

    // A SpringSystem is iterated by a looper. The looper is responsible
    // for executing each frame as the SpringSystem is resolved to idle.
    // There are three types of Loopers described below AnimationLooper,
    // SimulationLooper, and SteppingSimulationLooper. AnimationLooper is
    // the default as it is the most useful for common UI animations.
    setLooper: function(looper) {
      this.looper = looper;
      looper.springSystem = this;
    },

    // Add a new spring to this SpringSystem. This Spring will now be solved for
    // during the physics iteration loop. By default the spring will use the
    // default Origami spring config with 40 tension and 7 friction, but you can
    // also provide your own values here.
    createSpring: function(tension, friction) {
      var springConfig;
      if (tension === undefined || friction === undefined) {
        springConfig = SpringConfig.DEFAULT_ORIGAMI_SPRING_CONFIG;
      } else {
        springConfig =
          SpringConfig.fromOrigamiTensionAndFriction(tension, friction);
      }
      return this.createSpringWithConfig(springConfig);
    },

    // Add a spring with a specified bounciness and speed. To replicate Origami
    // compositions based on PopAnimation patches, use this factory method to
    // create matching springs.
    createSpringWithBouncinessAndSpeed: function(bounciness, speed) {
      var springConfig;
      if (bounciness === undefined || speed === undefined) {
        springConfig = SpringConfig.DEFAULT_ORIGAMI_SPRING_CONFIG;
      } else {
        springConfig =
          SpringConfig.fromBouncinessAndSpeed(bounciness, speed);
      }
      return this.createSpringWithConfig(springConfig);
    },

    // Add a spring with the provided SpringConfig.
    createSpringWithConfig: function(springConfig) {
      var spring = new Spring(this);
      this.registerSpring(spring);
      spring.setSpringConfig(springConfig);
      return spring;
    },

    // You can check if a SpringSystem is idle or active by calling
    // getIsIdle. If all of the Springs in the SpringSystem are at rest,
    // i.e. the physics forces have reached equilibrium, then this
    // method will return true.
    getIsIdle: function() {
      return this._isIdle;
    },

    // Retrieve a specific Spring from the SpringSystem by id. This
    // can be useful for inspecting the state of a spring before
    // or after an integration loop in the SpringSystem executes.
    getSpringById: function (id) {
      return this._springRegistry[id];
    },

    // Get a listing of all the springs registered with this
    // SpringSystem.
    getAllSprings: function() {
      var vals = [];
      for (var id in this._springRegistry) {
        if (this._springRegistry.hasOwnProperty(id)) {
          vals.push(this._springRegistry[id]);
        }
      }
      return vals;
    },

    // registerSpring is called automatically as soon as you create
    // a Spring with SpringSystem#createSpring. This method sets the
    // spring up in the registry so that it can be solved in the
    // solver loop.
    registerSpring: function(spring) {
      this._springRegistry[spring.getId()] = spring;
    },

    // Deregister a spring with this SpringSystem. The SpringSystem will
    // no longer consider this Spring during its integration loop once
    // this is called. This is normally done automatically for you when
    // you call Spring#destroy.
    deregisterSpring: function(spring) {
      removeFirst(this._activeSprings, spring);
      delete this._springRegistry[spring.getId()];
    },

    advance: function(time, deltaTime) {
      while(this._idleSpringIndices.length > 0) this._idleSpringIndices.pop();
      for (var i = 0, len = this._activeSprings.length; i < len; i++) {
        var spring = this._activeSprings[i];
        if (spring.systemShouldAdvance()) {
          spring.advance(time / 1000.0, deltaTime / 1000.0);
        } else {
          this._idleSpringIndices.push(this._activeSprings.indexOf(spring));
        }
      }
      while(this._idleSpringIndices.length > 0) {
        var idx = this._idleSpringIndices.pop();
        idx >= 0 && this._activeSprings.splice(idx, 1);
      }
    },

    // This is our main solver loop called to move the simulation
    // forward through time. Before each pass in the solver loop
    // onBeforeIntegrate is called on an any listeners that have
    // registered themeselves with the SpringSystem. This gives you
    // an opportunity to apply any constraints or adjustments to
    // the springs that should be enforced before each iteration
    // loop. Next the advance method is called to move each Spring in
    // the systemShouldAdvance forward to the current time. After the
    // integration step runs in advance, onAfterIntegrate is called
    // on any listeners that have registered themselves with the
    // SpringSystem. This gives you an opportunity to run any post
    // integration constraints or adjustments on the Springs in the
    // SpringSystem.
    loop: function(currentTimeMillis) {
      var listener;
      if (this._lastTimeMillis === -1) {
        this._lastTimeMillis = currentTimeMillis -1;
      }
      var ellapsedMillis = currentTimeMillis - this._lastTimeMillis;
      this._lastTimeMillis = currentTimeMillis;

      var i = 0, len = this.listeners.length;
      for (i = 0; i < len; i++) {
        listener = this.listeners[i];
        listener.onBeforeIntegrate && listener.onBeforeIntegrate(this);
      }

      this.advance(currentTimeMillis, ellapsedMillis);
      if (this._activeSprings.length === 0) {
        this._isIdle = true;
        this._lastTimeMillis = -1;
      }

      for (i = 0; i < len; i++) {
        listener = this.listeners[i];
        listener.onAfterIntegrate && listener.onAfterIntegrate(this);
      }

      if (!this._isIdle) {
        this.looper.run();
      }
    },

    // activateSpring is used to notify the SpringSystem that a Spring
    // has become displaced. The system responds by starting its solver
    // loop up if it is currently idle.
    activateSpring: function(springId) {
      var spring = this._springRegistry[springId];
      if (this._activeSprings.indexOf(spring) == -1) {
        this._activeSprings.push(spring);
      }
      if (this.getIsIdle()) {
        this._isIdle = false;
        this.looper.run();
      }
    },

    // Add a listener to the SpringSystem so that you can receive
    // before/after integration notifications allowing Springs to be
    // constrained or adjusted.
    addListener: function(listener) {
      this.listeners.push(listener);
    },

    // Remove a previously added listener on the SpringSystem.
    removeListener: function(listener) {
      removeFirst(this.listeners, listener);
    },

    // Remove all previously added listeners on the SpringSystem.
    removeAllListeners: function() {
      this.listeners = [];
    }

  });

  // Spring
  // ------
  // **Spring** provides a model of a classical spring acting to
  // resolve a body to equilibrium. Springs have configurable
  // tension which is a force multipler on the displacement of the
  // spring from its rest point or `endValue` as defined by [Hooke's
  // law](http://en.wikipedia.org/wiki/Hooke's_law). Springs also have
  // configurable friction, which ensures that they do not oscillate
  // infinitely. When a Spring is displaced by updating it's resting
  // or `currentValue`, the SpringSystems that contain that Spring
  // will automatically start looping to solve for equilibrium. As each
  // timestep passes, `SpringListener` objects attached to the Spring
  // will be notified of the updates providing a way to drive an
  // animation off of the spring's resolution curve.
  var Spring = rebound.Spring = function Spring(springSystem) {
    this._id = 's' + Spring._ID++;
    this._springSystem = springSystem;
    this.listeners = [];
    this._currentState = new PhysicsState();
    this._previousState = new PhysicsState();
    this._tempState = new PhysicsState();
  };

  util.extend(Spring, {
    _ID: 0,

    MAX_DELTA_TIME_SEC: 0.064,

    SOLVER_TIMESTEP_SEC: 0.001

  });

  util.extend(Spring.prototype, {

    _id: 0,

    _springConfig: null,

    _overshootClampingEnabled: false,

    _currentState: null,

    _previousState: null,

    _tempState: null,

    _startValue: 0,

    _endValue: 0,

    _wasAtRest: true,

    _restSpeedThreshold: 0.001,

    _displacementFromRestThreshold: 0.001,

    listeners: null,

    _timeAccumulator: 0,

    _springSystem: null,

    // Remove a Spring from simulation and clear its listeners.
    destroy: function() {
      this.listeners = [];
      this.frames = [];
      this._springSystem.deregisterSpring(this);
    },

    // Get the id of the spring, which can be used to retrieve it from
    // the SpringSystems it participates in later.
    getId: function() {
      return this._id;
    },

    // Set the configuration values for this Spring. A SpringConfig
    // contains the tension and friction values used to solve for the
    // equilibrium of the Spring in the physics loop.
    setSpringConfig: function(springConfig) {
      this._springConfig = springConfig;
      return this;
    },

    // Retrieve the SpringConfig used by this Spring.
    getSpringConfig: function() {
      return this._springConfig;
    },

    // Set the current position of this Spring. Listeners will be updated
    // with this value immediately. If the rest or `endValue` is not
    // updated to match this value, then the spring will be dispalced and
    // the SpringSystem will start to loop to restore the spring to the
    // `endValue`.
    //
    // A common pattern is to move a Spring around without animation by
    // calling.
    //
    // ```
    // spring.setCurrentValue(n).setAtRest();
    // ```
    //
    // This moves the Spring to a new position `n`, sets the endValue
    // to `n`, and removes any velocity from the `Spring`. By doing
    // this you can allow the `SpringListener` to manage the position
    // of UI elements attached to the spring even when moving without
    // animation. For example, when dragging an element you can
    // update the position of an attached view through a spring
    // by calling `spring.setCurrentValue(x)`. When
    // the gesture ends you can update the Springs
    // velocity and endValue
    // `spring.setVelocity(gestureEndVelocity).setEndValue(flingTarget)`
    // to cause it to naturally animate the UI element to the resting
    // position taking into account existing velocity. The codepaths for
    // synchronous movement and spring driven animation can
    // be unified using this technique.
    setCurrentValue: function(currentValue, skipSetAtRest) {
      this._startValue = currentValue;
      this._currentState.position = currentValue;
      if (!skipSetAtRest) {
        this.setAtRest();
      }
      this.notifyPositionUpdated(false, false);
      return this;
    },

    // Get the position that the most recent animation started at. This
    // can be useful for determining the number off oscillations that
    // have occurred.
    getStartValue: function() {
      return this._startValue;
    },

    // Retrieve the current value of the Spring.
    getCurrentValue: function() {
      return this._currentState.position;
    },

    // Get the absolute distance of the Spring from it's resting endValue
    // position.
    getCurrentDisplacementDistance: function() {
      return this.getDisplacementDistanceForState(this._currentState);
    },

    getDisplacementDistanceForState: function(state) {
      return Math.abs(this._endValue - state.position);
    },

    // Set the endValue or resting position of the spring. If this
    // value is different than the current value, the SpringSystem will
    // be notified and will begin running its solver loop to resolve
    // the Spring to equilibrium. Any listeners that are registered
    // for onSpringEndStateChange will also be notified of this update
    // immediately.
    setEndValue: function(endValue) {
      if (this._endValue == endValue && this.isAtRest())  {
        return this;
      }
      this._startValue = this.getCurrentValue();
      this._endValue = endValue;
      this._springSystem.activateSpring(this.getId());
      for (var i = 0, len = this.listeners.length; i < len; i++) {
        var listener = this.listeners[i];
        var onChange = listener.onSpringEndStateChange;
        onChange && onChange(this);
      }
      return this;
    },

    // Retrieve the endValue or resting position of this spring.
    getEndValue: function() {
      return this._endValue;
    },

    // Set the current velocity of the Spring. As previously mentioned,
    // this can be useful when you are performing a direct manipulation
    // gesture. When a UI element is released you may call setVelocity
    // on its animation Spring so that the Spring continues with the
    // same velocity as the gesture ended with. The friction, tension,
    // and displacement of the Spring will then govern its motion to
    // return to rest on a natural feeling curve.
    setVelocity: function(velocity) {
      if (velocity === this._currentState.velocity) {
        return this;
      }
      this._currentState.velocity = velocity;
      this._springSystem.activateSpring(this.getId());
      return this;
    },

    // Get the current velocity of the Spring.
    getVelocity: function() {
      return this._currentState.velocity;
    },

    // Set a threshold value for the movement speed of the Spring below
    // which it will be considered to be not moving or resting.
    setRestSpeedThreshold: function(restSpeedThreshold) {
      this._restSpeedThreshold = restSpeedThreshold;
      return this;
    },

    // Retrieve the rest speed threshold for this Spring.
    getRestSpeedThreshold: function() {
      return this._restSpeedThreshold;
    },

    // Set a threshold value for displacement below which the Spring
    // will be considered to be not displaced i.e. at its resting
    // `endValue`.
    setRestDisplacementThreshold: function(displacementFromRestThreshold) {
      this._displacementFromRestThreshold = displacementFromRestThreshold;
    },

    // Retrieve the rest displacement threshold for this spring.
    getRestDisplacementThreshold: function() {
      return this._displacementFromRestThreshold;
    },

    // Enable overshoot clamping. This means that the Spring will stop
    // immediately when it reaches its resting position regardless of
    // any existing momentum it may have. This can be useful for certain
    // types of animations that should not oscillate such as a scale
    // down to 0 or alpha fade.
    setOvershootClampingEnabled: function(enabled) {
      this._overshootClampingEnabled = enabled;
      return this;
    },

    // Check if overshoot clamping is enabled for this spring.
    isOvershootClampingEnabled: function() {
      return this._overshootClampingEnabled;
    },

    // Check if the Spring has gone past its end point by comparing
    // the direction it was moving in when it started to the current
    // position and end value.
    isOvershooting: function() {
      var start = this._startValue;
      var end = this._endValue;
      return this._springConfig.tension > 0 &&
       ((start < end && this.getCurrentValue() > end) ||
       (start > end && this.getCurrentValue() < end));
    },

    // Spring.advance is the main solver method for the Spring. It takes
    // the current time and delta since the last time step and performs
    // an RK4 integration to get the new position and velocity state
    // for the Spring based on the tension, friction, velocity, and
    // displacement of the Spring.
    advance: function(time, realDeltaTime) {
      var isAtRest = this.isAtRest();

      if (isAtRest && this._wasAtRest) {
        return;
      }

      var adjustedDeltaTime = realDeltaTime;
      if (realDeltaTime > Spring.MAX_DELTA_TIME_SEC) {
        adjustedDeltaTime = Spring.MAX_DELTA_TIME_SEC;
      }

      this._timeAccumulator += adjustedDeltaTime;

      var tension = this._springConfig.tension,
          friction = this._springConfig.friction,

          position = this._currentState.position,
          velocity = this._currentState.velocity,
          tempPosition = this._tempState.position,
          tempVelocity = this._tempState.velocity,

          aVelocity, aAcceleration,
          bVelocity, bAcceleration,
          cVelocity, cAcceleration,
          dVelocity, dAcceleration,

          dxdt, dvdt;

      while(this._timeAccumulator >= Spring.SOLVER_TIMESTEP_SEC) {

        this._timeAccumulator -= Spring.SOLVER_TIMESTEP_SEC;

        if (this._timeAccumulator < Spring.SOLVER_TIMESTEP_SEC) {
          this._previousState.position = position;
          this._previousState.velocity = velocity;
        }

        aVelocity = velocity;
        aAcceleration =
          (tension * (this._endValue - tempPosition)) - friction * velocity;

        tempPosition = position + aVelocity * Spring.SOLVER_TIMESTEP_SEC * 0.5;
        tempVelocity =
          velocity + aAcceleration * Spring.SOLVER_TIMESTEP_SEC * 0.5;
        bVelocity = tempVelocity;
        bAcceleration =
          (tension * (this._endValue - tempPosition)) - friction * tempVelocity;

        tempPosition = position + bVelocity * Spring.SOLVER_TIMESTEP_SEC * 0.5;
        tempVelocity =
          velocity + bAcceleration * Spring.SOLVER_TIMESTEP_SEC * 0.5;
        cVelocity = tempVelocity;
        cAcceleration =
          (tension * (this._endValue - tempPosition)) - friction * tempVelocity;

        tempPosition = position + cVelocity * Spring.SOLVER_TIMESTEP_SEC * 0.5;
        tempVelocity =
          velocity + cAcceleration * Spring.SOLVER_TIMESTEP_SEC * 0.5;
        dVelocity = tempVelocity;
        dAcceleration =
          (tension * (this._endValue - tempPosition)) - friction * tempVelocity;

        dxdt =
          1.0/6.0 * (aVelocity + 2.0 * (bVelocity + cVelocity) + dVelocity);
        dvdt = 1.0/6.0 * (
          aAcceleration + 2.0 * (bAcceleration + cAcceleration) + dAcceleration
        );

        position += dxdt * Spring.SOLVER_TIMESTEP_SEC;
        velocity += dvdt * Spring.SOLVER_TIMESTEP_SEC;
      }

      this._tempState.position = tempPosition;
      this._tempState.velocity = tempVelocity;

      this._currentState.position = position;
      this._currentState.velocity = velocity;

      if (this._timeAccumulator > 0) {
        this._interpolate(this._timeAccumulator / Spring.SOLVER_TIMESTEP_SEC);
      }

      if (this.isAtRest() ||
          this._overshootClampingEnabled && this.isOvershooting()) {

        if (this._springConfig.tension > 0) {
          this._startValue = this._endValue;
          this._currentState.position = this._endValue;
        } else {
          this._endValue = this._currentState.position;
          this._startValue = this._endValue;
        }
        this.setVelocity(0);
        isAtRest = true;
      }

      var notifyActivate = false;
      if (this._wasAtRest) {
        this._wasAtRest = false;
        notifyActivate = true;
      }

      var notifyAtRest = false;
      if (isAtRest) {
        this._wasAtRest = true;
        notifyAtRest = true;
      }

      this.notifyPositionUpdated(notifyActivate, notifyAtRest);
    },

    notifyPositionUpdated: function(notifyActivate, notifyAtRest) {
      for (var i = 0, len = this.listeners.length; i < len; i++) {
        var listener = this.listeners[i];
        if (notifyActivate && listener.onSpringActivate) {
          listener.onSpringActivate(this);
        }

        if (listener.onSpringUpdate) {
          listener.onSpringUpdate(this);
        }

        if (notifyAtRest && listener.onSpringAtRest) {
          listener.onSpringAtRest(this);
        }
      }
    },


    // Check if the SpringSystem should advance. Springs are advanced
    // a final frame after they reach equilibrium to ensure that the
    // currentValue is exactly the requested endValue regardless of the
    // displacement threshold.
    systemShouldAdvance: function() {
      return !this.isAtRest() || !this.wasAtRest();
    },

    wasAtRest: function() {
      return this._wasAtRest;
    },

    // Check if the Spring is atRest meaning that it's currentValue and
    // endValue are the same and that it has no velocity. The previously
    // described thresholds for speed and displacement define the bounds
    // of this equivalence check. If the Spring has 0 tension, then it will
    // be considered at rest whenever its absolute velocity drops below the
    // restSpeedThreshold.
    isAtRest: function() {
      return Math.abs(this._currentState.velocity) < this._restSpeedThreshold &&
        (this.getDisplacementDistanceForState(this._currentState) <=
          this._displacementFromRestThreshold ||
        this._springConfig.tension === 0);
    },

    // Force the spring to be at rest at its current position. As
    // described in the documentation for setCurrentValue, this method
    // makes it easy to do synchronous non-animated updates to ui
    // elements that are attached to springs via SpringListeners.
    setAtRest: function() {
      this._endValue = this._currentState.position;
      this._tempState.position = this._currentState.position;
      this._currentState.velocity = 0;
      return this;
    },

    _interpolate: function(alpha) {
      this._currentState.position = this._currentState.position *
        alpha + this._previousState.position * (1 - alpha);
      this._currentState.velocity = this._currentState.velocity *
        alpha + this._previousState.velocity * (1 - alpha);
    },

    getListeners: function() {
      return this.listeners;
    },

    addListener: function(newListener) {
      this.listeners.push(newListener);
      return this;
    },

    removeListener: function(listenerToRemove) {
      removeFirst(this.listeners, listenerToRemove);
      return this;
    },

    removeAllListeners: function() {
      this.listeners = [];
      return this;
    },

    currentValueIsApproximately: function(value) {
      return Math.abs(this.getCurrentValue() - value) <=
        this.getRestDisplacementThreshold();
    }

  });

  // PhysicsState
  // ------------
  // **PhysicsState** consists of a position and velocity. A Spring uses
  // this internally to keep track of its current and prior position and
  // velocity values.
  var PhysicsState = function PhysicsState() {};

  util.extend(PhysicsState.prototype, {
    position: 0,
    velocity: 0
  });

  // SpringConfig
  // ------------
  // **SpringConfig** maintains a set of tension and friction constants
  // for a Spring. You can use fromOrigamiTensionAndFriction to convert
  // values from the [Origami](http://facebook.github.io/origami/)
  // design tool directly to Rebound spring constants.
  var SpringConfig = rebound.SpringConfig =
    function SpringConfig(tension, friction) {
      this.tension = tension;
      this.friction = friction;
    };

  // Loopers
  // -------
  // **AnimationLooper** plays each frame of the SpringSystem on animation
  // timing loop. This is the default type of looper for a new spring system
  // as it is the most common when developing UI.
  var AnimationLooper = rebound.AnimationLooper = function AnimationLooper() {
    this.springSystem = null;
    var _this = this;
    var _run = function() {
      _this.springSystem.loop(Date.now());
    };

    this.run = function() {
      util.onFrame(_run);
    };
  };

  // **SimulationLooper** resolves the SpringSystem to a resting state in a
  // tight and blocking loop. This is useful for synchronously generating
  // pre-recorded animations that can then be played on a timing loop later.
  // Sometimes this lead to better performance to pre-record a single spring
  // curve and use it to drive many animations; however, it can make dynamic
  // response to user input a bit trickier to implement.
  rebound.SimulationLooper = function SimulationLooper(timestep) {
    this.springSystem = null;
    var time = 0;
    var running = false;
    timestep=timestep || 16.667;

    this.run = function() {
      if (running) {
        return;
      }
      running = true;
      while(!this.springSystem.getIsIdle()) {
        this.springSystem.loop(time+=timestep);
      }
      running = false;
    };
  };

  // **SteppingSimulationLooper** resolves the SpringSystem one step at a
  // time controlled by an outside loop. This is useful for testing and
  // verifying the behavior of a SpringSystem or if you want to control your own
  // timing loop for some reason e.g. slowing down or speeding up the
  // simulation.
  rebound.SteppingSimulationLooper = function(timestep) {
    this.springSystem = null;
    var time = 0;

    // this.run is NOOP'd here to allow control from the outside using
    // this.step.
    this.run = function(){};

    // Perform one step toward resolving the SpringSystem.
    this.step = function(timestep) {
      this.springSystem.loop(time+=timestep);
    };
  };

  // Math for converting from
  // [Origami](http://facebook.github.io/origami/) to
  // [Rebound](http://facebook.github.io/rebound).
  // You mostly don't need to worry about this, just use
  // SpringConfig.fromOrigamiTensionAndFriction(v, v);
  var OrigamiValueConverter = rebound.OrigamiValueConverter = {
    tensionFromOrigamiValue: function(oValue) {
      return (oValue - 30.0) * 3.62 + 194.0;
    },

    origamiValueFromTension: function(tension) {
      return (tension - 194.0) / 3.62 + 30.0;
    },

    frictionFromOrigamiValue: function(oValue) {
      return (oValue - 8.0) * 3.0 + 25.0;
    },

    origamiFromFriction: function(friction) {
      return (friction - 25.0) / 3.0 + 8.0;
    }
  };

  // BouncyConversion provides math for converting from Origami PopAnimation
  // config values to regular Origami tension and friction values. If you are
  // trying to replicate prototypes made with PopAnimation patches in Origami,
  // then you should create your springs with
  // SpringSystem.createSpringWithBouncinessAndSpeed, which uses this Math
  // internally to create a spring to match the provided PopAnimation
  // configuration from Origami.
  var BouncyConversion = rebound.BouncyConversion = function(bounciness, speed){
    this.bounciness = bounciness;
    this.speed = speed;
    var b = this.normalize(bounciness / 1.7, 0, 20.0);
    b = this.projectNormal(b, 0.0, 0.8);
    var s = this.normalize(speed / 1.7, 0, 20.0);
    this.bouncyTension = this.projectNormal(s, 0.5, 200)
    this.bouncyFriction = this.quadraticOutInterpolation(
      b,
      this.b3Nobounce(this.bouncyTension),
      0.01);
  }

  util.extend(BouncyConversion.prototype, {

    normalize: function(value, startValue, endValue) {
      return (value - startValue) / (endValue - startValue);
    },

    projectNormal: function(n, start, end) {
      return start + (n * (end - start));
    },

    linearInterpolation: function(t, start, end) {
      return t * end + (1.0 - t) * start;
    },

    quadraticOutInterpolation: function(t, start, end) {
      return this.linearInterpolation(2*t - t*t, start, end);
    },

    b3Friction1: function(x) {
      return (0.0007 * Math.pow(x, 3)) -
        (0.031 * Math.pow(x, 2)) + 0.64 * x + 1.28;
    },

    b3Friction2: function(x) {
      return (0.000044 * Math.pow(x, 3)) -
        (0.006 * Math.pow(x, 2)) + 0.36 * x + 2.;
    },

    b3Friction3: function(x) {
      return (0.00000045 * Math.pow(x, 3)) -
        (0.000332 * Math.pow(x, 2)) + 0.1078 * x + 5.84;
    },

    b3Nobounce: function(tension) {
      var friction = 0;
      if (tension <= 18) {
        friction = this.b3Friction1(tension);
      } else if (tension > 18 && tension <= 44) {
        friction = this.b3Friction2(tension);
      } else {
        friction = this.b3Friction3(tension);
      }
      return friction;
    }
  });

  util.extend(SpringConfig, {
    // Convert an origami Spring tension and friction to Rebound spring
    // constants. If you are prototyping a design with Origami, this
    // makes it easy to make your springs behave exactly the same in
    // Rebound.
    fromOrigamiTensionAndFriction: function(tension, friction) {
      return new SpringConfig(
        OrigamiValueConverter.tensionFromOrigamiValue(tension),
        OrigamiValueConverter.frictionFromOrigamiValue(friction));
    },

    // Convert an origami PopAnimation Spring bounciness and speed to Rebound
    // spring constants. If you are using PopAnimation patches in Origami, this
    // utility will provide springs that match your prototype.
    fromBouncinessAndSpeed: function(bounciness, speed) {
      var bouncyConversion = new rebound.BouncyConversion(bounciness, speed);
      return this.fromOrigamiTensionAndFriction(
        bouncyConversion.bouncyTension,
        bouncyConversion.bouncyFriction);
    },

    // Create a SpringConfig with no tension or a coasting spring with some
    // amount of Friction so that it does not coast infininitely.
    coastingConfigWithOrigamiFriction: function(friction) {
      return new SpringConfig(
        0,
        OrigamiValueConverter.frictionFromOrigamiValue(friction)
      );
    }
  });

  SpringConfig.DEFAULT_ORIGAMI_SPRING_CONFIG =
    SpringConfig.fromOrigamiTensionAndFriction(40, 7);

  util.extend(SpringConfig.prototype, {friction: 0, tension: 0});

  // Here are a couple of function to convert colors between hex codes and RGB
  // component values. These are handy when performing color
  // tweening animations.
  var colorCache = {};
  util.hexToRGB = function(color) {
    if (colorCache[color]) {
      return colorCache[color];
    }
    color = color.replace('#', '');
    if (color.length === 3) {
      color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
    }
    var parts = color.match(/.{2}/g);

    var ret = {
      r: parseInt(parts[0], 16),
      g: parseInt(parts[1], 16),
      b: parseInt(parts[2], 16)
    };

    colorCache[color] = ret;
    return ret;
  };

  util.rgbToHex = function(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    r = r.length < 2 ? '0' + r : r;
    g = g.length < 2 ? '0' + g : g;
    b = b.length < 2 ? '0' + b : b;
    return '#' + r + g + b;
  };

  var MathUtil = rebound.MathUtil = {
    // This helper function does a linear interpolation of a value from
    // one range to another. This can be very useful for converting the
    // motion of a Spring to a range of UI property values. For example a
    // spring moving from position 0 to 1 could be interpolated to move a
    // view from pixel 300 to 350 and scale it from 0.5 to 1. The current
    // position of the `Spring` just needs to be run through this method
    // taking its input range in the _from_ parameters with the property
    // animation range in the _to_ parameters.
    mapValueInRange: function(value, fromLow, fromHigh, toLow, toHigh) {
      var fromRangeSize = fromHigh - fromLow;
      var toRangeSize = toHigh - toLow;
      var valueScale = (value - fromLow) / fromRangeSize;
      return toLow + (valueScale * toRangeSize);
    },

    // Interpolate two hex colors in a 0 - 1 range or optionally provide a
    // custom range with fromLow,fromHight. The output will be in hex by default
    // unless asRGB is true in which case it will be returned as an rgb string.
    interpolateColor:
      function(val, startColor, endColor, fromLow, fromHigh, asRGB) {
      fromLow = fromLow === undefined ? 0 : fromLow;
      fromHigh = fromHigh === undefined ? 1 : fromHigh;
      startColor = util.hexToRGB(startColor);
      endColor = util.hexToRGB(endColor);
      var r = Math.floor(
        util.mapValueInRange(val, fromLow, fromHigh, startColor.r, endColor.r)
      );
      var g = Math.floor(
        util.mapValueInRange(val, fromLow, fromHigh, startColor.g, endColor.g)
      );
      var b = Math.floor(
        util.mapValueInRange(val, fromLow, fromHigh, startColor.b, endColor.b)
      );
      if (asRGB) {
        return 'rgb(' + r + ',' + g + ',' + b + ')';
      } else {
        return util.rgbToHex(r, g, b);
      }
    },

    degreesToRadians: function(deg) {
      return (deg * Math.PI) / 180;
    },

    radiansToDegrees: function(rad) {
      return (rad * 180) / Math.PI;
    }

  }

  util.extend(util, MathUtil);


  // Utilities
  // ---------
  // Here are a few useful JavaScript utilities.

  // Lop off the first occurence of the reference in the Array.
  function removeFirst(array, item) {
    var idx = array.indexOf(item);
    idx != -1 && array.splice(idx, 1);
  }

  var _onFrame;
  if (typeof window !== 'undefined') {
    _onFrame = window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };
  }
  if (!_onFrame && typeof process !== 'undefined' && process.title === 'node') {
    _onFrame = setImmediate;
  }

  // Cross browser/node timer functions.
  util.onFrame = function onFrame(func) {
    return _onFrame(func);
  };

  // Export the public api using exports for common js or the window for
  // normal browser inclusion.
  if (true) {
    util.extend(exports, rebound);
  } else if (typeof window != 'undefined') {
    window.rebound = rebound;
  }
})();


// Legal Stuff
// -----------
/**
 *  Copyright (c) 2013, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9), __webpack_require__(87).setImmediate))

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(9)))

/***/ }),
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 384 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_Observable_js__ = __webpack_require__(430);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__src_Observable_js__["a"]; });



/***/ }),
/* 430 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Observable;
// === Symbol Support ===

function hasSymbol(name) {
  return typeof Symbol === "function" && Boolean(Symbol[name]);
}

function getSymbol(name) {
  return hasSymbol(name) ? Symbol[name] : "@@" + name;
}

// Ponyfill Symbol.observable for interoperability with other libraries
if (typeof Symbol === "function" && !Symbol.observable) {
  Symbol.observable = Symbol("observable");
}

// === Abstract Operations ===

function getMethod(obj, key) {
  let value = obj[key];

  if (value == null)
    return undefined;

  if (typeof value !== "function")
    throw new TypeError(value + " is not a function");

  return value;
}

function getSpecies(obj) {
  let ctor = obj.constructor;
  if (ctor !== undefined) {
    ctor = ctor[getSymbol("species")];
    if (ctor === null) {
      ctor = undefined;
    }
  }
  return ctor !== undefined ? ctor : Observable;
}

function addMethods(target, methods) {
  Object.keys(methods).forEach(k => {
    let desc = Object.getOwnPropertyDescriptor(methods, k);
    desc.enumerable = false;
    Object.defineProperty(target, k, desc);
  });
}

function cleanupSubscription(subscription) {
  // Assert:  observer._observer is undefined

  let cleanup = subscription._cleanup;

  if (!cleanup)
    return;

  // Drop the reference to the cleanup function so that we won't call it
  // more than once
  subscription._cleanup = undefined;

  // Call the cleanup function
  cleanup();
}

function subscriptionClosed(subscription) {
  return subscription._observer === undefined;
}

function closeSubscription(subscription) {
  if (subscriptionClosed(subscription))
    return;

  subscription._observer = undefined;
  cleanupSubscription(subscription);
}

function cleanupFromSubscription(subscription) {
  return () => { subscription.unsubscribe() };
}

function Subscription(observer, subscriber) {
  // Assert: subscriber is callable

  // The observer must be an object
  if (Object(observer) !== observer)
    throw new TypeError("Observer must be an object");

  this._cleanup = undefined;
  this._observer = observer;

  let start = getMethod(observer, "start");

  if (start)
    start.call(observer, this);

  if (subscriptionClosed(this))
    return;

  observer = new SubscriptionObserver(this);

  try {
    // Call the subscriber function
    let cleanup = subscriber.call(undefined, observer);

    // The return value must be undefined, null, a subscription object, or a function
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === "function")
        cleanup = cleanupFromSubscription(cleanup);
      else if (typeof cleanup !== "function")
        throw new TypeError(cleanup + " is not a function");

      this._cleanup = cleanup;
    }
  } catch (e) {
    // If an error occurs during startup, then attempt to send the error
    // to the observer
    observer.error(e);
    return;
  }

  // If the stream is already finished, then perform cleanup
  if (subscriptionClosed(this))
    cleanupSubscription(this);
}

addMethods(Subscription.prototype = {}, {
  get closed() { return subscriptionClosed(this) },
  unsubscribe() { closeSubscription(this) },
});

function SubscriptionObserver(subscription) {
  this._subscription = subscription;
}

addMethods(SubscriptionObserver.prototype = {}, {

  get closed() { return subscriptionClosed(this._subscription) },

  next(value) {
    let subscription = this._subscription;

    // If the stream is closed, then return undefined
    if (subscriptionClosed(subscription))
      return undefined;

    let observer = subscription._observer;
    let m = getMethod(observer, "next");

    // If the observer doesn't support "next", then return undefined
    if (!m)
      return undefined;

    // Send the next value to the sink
    return m.call(observer, value);
  },

  error(value) {
    let subscription = this._subscription;

    // If the stream is closed, throw the error to the caller
    if (subscriptionClosed(subscription))
      throw value;

    let observer = subscription._observer;
    subscription._observer = undefined;

    try {
      let m = getMethod(observer, "error");

      // If the sink does not support "error", then throw the error to the caller
      if (!m)
        throw value;

      value = m.call(observer, value);
    } catch (e) {
      try { cleanupSubscription(subscription) }
      finally { throw e }
    }

    cleanupSubscription(subscription);
    return value;
  },

  complete(value) {
    let subscription = this._subscription;

    // If the stream is closed, then return undefined
    if (subscriptionClosed(subscription))
      return undefined;

    let observer = subscription._observer;
    subscription._observer = undefined;

    try {
      let m = getMethod(observer, "complete");

      // If the sink does not support "complete", then return undefined
      value = m ? m.call(observer, value) : undefined;
    } catch (e) {
      try { cleanupSubscription(subscription) }
      finally { throw e }
    }

    cleanupSubscription(subscription);
    return value;
  },

});

function Observable(subscriber) {
  // The stream subscriber must be a function
  if (typeof subscriber !== "function")
    throw new TypeError("Observable initializer must be a function");

  this._subscriber = subscriber;
}

addMethods(Observable.prototype, {

  subscribe(observer, ...args) {
    if (typeof observer === 'function') {
      observer = {
        next: observer,
        error: args[0],
        complete: args[1],
      };
    }

    return new Subscription(observer, this._subscriber);
  },

  forEach(fn) {
    return new Promise((resolve, reject) => {
      if (typeof fn !== "function")
        return Promise.reject(new TypeError(fn + " is not a function"));

      this.subscribe({
        _subscription: null,

        start(subscription) {
          if (Object(subscription) !== subscription)
            throw new TypeError(subscription + " is not an object");

          this._subscription = subscription;
        },

        next(value) {
          let subscription = this._subscription;

          if (subscription.closed)
            return;

          try {
            return fn(value);
          } catch (err) {
            reject(err);
            subscription.unsubscribe();
          }
        },

        error: reject,
        complete: resolve,
      });
    });
  },

  map(fn) {
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");

    let C = getSpecies(this);

    return new C(observer => this.subscribe({
      next(value) {
        if (observer.closed)
          return;

        try { value = fn(value) }
        catch (e) { return observer.error(e) }

        return observer.next(value);
      },

      error(e) { return observer.error(e) },
      complete(x) { return observer.complete(x) },
    }));
  },

  filter(fn) {
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");

    let C = getSpecies(this);

    return new C(observer => this.subscribe({
      next(value) {
        if (observer.closed)
          return;

        try { if (!fn(value)) return undefined }
        catch (e) { return observer.error(e) }

        return observer.next(value);
      },

      error(e) { return observer.error(e) },
      complete() { return observer.complete() },
    }));
  },

  reduce(fn) {
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");

    let C = getSpecies(this);
    let hasSeed = arguments.length > 1;
    let hasValue = false;
    let seed = arguments[1];
    let acc = seed;

    return new C(observer => this.subscribe({

      next(value) {
        if (observer.closed)
          return;

        let first = !hasValue;
        hasValue = true;

        if (!first || hasSeed) {
          try { acc = fn(acc, value) }
          catch (e) { return observer.error(e) }
        } else {
          acc = value;
        }
      },

      error(e) { observer.error(e) },

      complete() {
        if (!hasValue && !hasSeed) {
          observer.error(new TypeError("Cannot reduce an empty sequence"));
          return;
        }

        observer.next(acc);
        observer.complete();
      },

    }));
  },

  flatMap(fn) {
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");

    let C = getSpecies(this);

    return new C(observer => {
      let completed = false;
      let subscriptions = [];

      // Subscribe to the outer Observable
      let outer = this.subscribe({

        next(value) {
          if (fn) {
            try {
              value = fn(value);
            } catch (x) {
              observer.error(x);
              return;
            }
          }

          // Subscribe to the inner Observable
          Observable.from(value).subscribe({
            _subscription: null,

            start(s) { subscriptions.push(this._subscription = s) },
            next(value) { observer.next(value) },
            error(e) { observer.error(e) },

            complete() {
              let i = subscriptions.indexOf(this._subscription);

              if (i >= 0)
                subscriptions.splice(i, 1);

              closeIfDone();
            }
          });
        },

        error(e) {
          return observer.error(e);
        },

        complete() {
          completed = true;
          closeIfDone();
        }
      });

      function closeIfDone() {
        if (completed && subscriptions.length === 0)
          observer.complete();
      }

      return () => {
        subscriptions.forEach(s => s.unsubscribe());
        outer.unsubscribe();
      };
    });
  },

});

Object.defineProperty(Observable.prototype, getSymbol("observable"), {
  value: function() { return this },
  writable: true,
  configurable: true,
});

addMethods(Observable, {

  from(x) {
    let C = typeof this === "function" ? this : Observable;

    if (x == null)
      throw new TypeError(x + " is not an object");

    let method = getMethod(x, getSymbol("observable"));

    if (method) {
      let observable = method.call(x);

      if (Object(observable) !== observable)
        throw new TypeError(observable + " is not an object");

      if (observable.constructor === C)
        return observable;

      return new C(observer => observable.subscribe(observer));
    }

    if (hasSymbol("iterator") && (method = getMethod(x, getSymbol("iterator")))) {
      return new C(observer => {
        for (let item of method.call(x)) {
          observer.next(item);
          if (observer.closed)
            return;
        }

        observer.complete();
      });
    }

    if (Array.isArray(x)) {
      return new C(observer => {
        for (let i = 0; i < x.length; ++i) {
          observer.next(x[i]);
          if (observer.closed)
            return;
        }

        observer.complete();
      });
    }

    throw new TypeError(x + " is not observable");
  },

  of(...items) {
    let C = typeof this === "function" ? this : Observable;

    return new C(observer => {
      for (let i = 0; i < items.length; ++i) {
        observer.next(items[i]);
        if (observer.closed)
          return;
      }

      observer.complete();
    });
  },

});

Object.defineProperty(Observable, getSymbol("species"), {
  get() { return this },
  configurable: true,
});


/***/ })
/******/ ]);
//# sourceMappingURL=vendor.bundle.js.map