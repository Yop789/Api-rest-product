"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateOrder = exports.getProductsDianExacto = exports.getProductsDian = exports.getOrders = exports.getOrderUser = exports.getOrderElim = exports.getOrderActualizaciones = exports.getOrder = exports.deleteOrder = exports.createOrder = void 0;
var _order = _interopRequireDefault(require("../models/order"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _config = _interopRequireDefault(require("../config"));
var _Products = _interopRequireDefault(require("../models/Products"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var createOrder = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var token, decoded, _req$body, status, fullNameUser, paid, municipio, comunidad, calle, numero, email, telefono, dateDeliver, dateEvent, dateReturn, days, totalPrecio, products, newOrder, order, orderSeve;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          token = req.headers["x-access-token"];
          decoded = _jsonwebtoken["default"].verify(token, _config["default"].Secret);
          req.userId = decoded.id;
          console.log("Saving Cart");
          console.log(req.body);
          _req$body = req.body, status = _req$body.status, fullNameUser = _req$body.fullNameUser, paid = _req$body.paid, municipio = _req$body.municipio, comunidad = _req$body.comunidad, calle = _req$body.calle, numero = _req$body.numero, email = _req$body.email, telefono = _req$body.telefono, dateDeliver = _req$body.dateDeliver, dateEvent = _req$body.dateEvent, dateReturn = _req$body.dateReturn, days = _req$body.days, totalPrecio = _req$body.totalPrecio, products = _req$body.products;
          console.log(req.body.products);
          newOrder = {
            idUser: req.userId,
            status: status,
            fullNameUser: fullNameUser,
            paid: paid,
            municipio: municipio,
            comunidad: comunidad,
            calle: calle,
            numero: numero,
            email: email,
            telefono: telefono,
            dateDeliver: dateDeliver,
            dateEvent: dateEvent,
            dateReturn: dateReturn,
            days: days,
            totalPrecio: totalPrecio,
            products: products
          };
          order = new _order["default"](newOrder);
          _context.next = 12;
          return order.save();
        case 12:
          orderSeve = _context.sent;
          res.status(201).json({
            message: "Order succesfully saved"
          });
          _context.next = 19;
          break;
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          res.status(404).json({
            message: "Se produjo un error a la hora de crear una order"
          });
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 16]]);
  }));
  return function createOrder(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createOrder = createOrder;
var getOrder = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var id, order;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = req.params.productId;
          _context2.next = 4;
          return _order["default"].findById(id);
        case 4:
          order = _context2.sent;
          res.status(201).json(order);
          _context2.next = 11;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          res.status(404).json({
            message: "Se produjo un error a la hora de solicitar la Order"
          });
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return function getOrder(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getOrder = getOrder;
var getOrderUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var token, decoded, order;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          token = req.headers["x-access-token"];
          decoded = _jsonwebtoken["default"].verify(token, _config["default"].Secret);
          _context3.next = 5;
          return _order["default"].find({
            idUser: decoded.id,
            status: {
              $ne: "En bodega"
            }
          });
        case 5:
          order = _context3.sent;
          res.status(201).json(order);
          _context3.next = 12;
          break;
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          res.status(404).json({
            message: "Se produjo un error a la hora de solicitar la Order"
          });
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return function getOrderUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getOrderUser = getOrderUser;
var getOrders = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var orders;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _order["default"].find({
            status: {
              $ne: "En bodega"
            }
          });
        case 3:
          orders = _context4.sent;
          res.status(201).json(orders);
          _context4.next = 10;
          break;
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          res.status(404).json({
            message: "Sucedio un error a la hora de realizar la peticion"
          });
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return function getOrders(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.getOrders = getOrders;
var updateOrder = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var order;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _order["default"].findByIdAndUpdate({
            _id: req.params.productId
          }, req.body, {
            "new": true
          });
        case 3:
          order = _context5.sent;
          res.status(201).json(order);
          _context5.next = 10;
          break;
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          res.status(404).json({
            message: "Se produjo un error a la hora de actualizar la order"
          });
        case 10:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function updateOrder(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.updateOrder = updateOrder;
var deleteOrder = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var id, order;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.productId;
          _context6.next = 4;
          return _order["default"].findByIdAndDelete(id);
        case 4:
          order = _context6.sent;
          res.status(201).json(order);
          _context6.next = 11;
          break;
        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          res.status(404).json({
            message: "Se produjo un error a la hora de eliminar la order"
          });
        case 11:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 8]]);
  }));
  return function deleteOrder(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.deleteOrder = deleteOrder;
var getOrderActualizaciones = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var order;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return _order["default"].find({}).sort({
            updatedAt: -1
          }).limit(3);
        case 3:
          order = _context7.sent;
          res.status(201).json(order);
          _context7.next = 10;
          break;
        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](0);
          res.status(404).json({
            message: "Se produjo un error a la hora de solicitar la Order"
          });
        case 10:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 7]]);
  }));
  return function getOrderActualizaciones(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.getOrderActualizaciones = getOrderActualizaciones;
var getProductsDian = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var id, fecha, diaOrder, product, totalAmount, _product;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          id = req.params.productId;
          fecha = new Date();
          _context9.prev = 2;
          _context9.next = 5;
          return _order["default"].find({
            status: {
              $ne: "En bodega"
            },
            $or: [{
              dateDeliver: {
                $eq: fecha
              }
            }, {
              dateEvent: {
                $eq: fecha
              }
            }, {
              dateReturn: {
                $in: [fecha]
              }
            }],
            products: {
              $elemMatch: {
                idProduct: id
              }
            }
          }, {
            "products.$": 1
          });
        case 5:
          diaOrder = _context9.sent;
          if (!(diaOrder.length > 0)) {
            _context9.next = 18;
            break;
          }
          console.log('entro al disminucion');
          _context9.next = 10;
          return _Products["default"].findById(id);
        case 10:
          product = _context9.sent;
          totalAmount = 0;
          diaOrder.forEach( /*#__PURE__*/function () {
            var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(e) {
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    totalAmount += e.products[0].amount;
                  case 1:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8);
            }));
            return function (_x17) {
              return _ref9.apply(this, arguments);
            };
          }());
          product.totalStock = product.totalStock - totalAmount;
          ;
          res.status(200).json(product);
          _context9.next = 22;
          break;
        case 18:
          _context9.next = 20;
          return _Products["default"].findById(id);
        case 20:
          _product = _context9.sent;
          res.status(200).json(_product);
        case 22:
          _context9.next = 28;
          break;
        case 24:
          _context9.prev = 24;
          _context9.t0 = _context9["catch"](2);
          console.log(_context9.t0);
          res.status(404).json({
            message: "Ocurrió un error al obtener el producto"
          });
        case 28:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[2, 24]]);
  }));
  return function getProductsDian(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.getProductsDian = getProductsDian;
var getProductsDianExacto = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var id, _req$body2, fecha, fechas, cantidad, _iterator, _step, e, diaOrder, totalAmount, _iterator2, _step2, order, product;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          id = req.params.productId;
          _req$body2 = req.body, fecha = _req$body2.fecha, fechas = _req$body2.fechas;
          _context10.prev = 2;
          cantidad = 0;
          if (!(fechas.length !== 0)) {
            _context10.next = 31;
            break;
          }
          _iterator = _createForOfIteratorHelper(fechas);
          _context10.prev = 6;
          _iterator.s();
        case 8:
          if ((_step = _iterator.n()).done) {
            _context10.next = 17;
            break;
          }
          e = _step.value;
          _context10.next = 12;
          return _order["default"].find({
            status: {
              $ne: "En bodega"
            },
            $or: [{
              dateDeliver: {
                $eq: new Date(e)
              }
            }, {
              dateEvent: {
                $eq: new Date(e)
              }
            }, {
              dateReturn: {
                $eq: new Date(e)
              }
            }],
            products: {
              $elemMatch: {
                idProduct: id
              }
            }
          }, {
            "products.$": 1
          });
        case 12:
          diaOrder = _context10.sent;
          console.log("Encontr\xF3 datos con fecha ".concat(e));
          if (diaOrder.length > 0) {
            totalAmount = 0;
            _iterator2 = _createForOfIteratorHelper(diaOrder);
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                order = _step2.value;
                totalAmount += order.products[0].amount;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            if (cantidad === 0 || cantidad < totalAmount) {
              cantidad = totalAmount;
            }
          }
        case 15:
          _context10.next = 8;
          break;
        case 17:
          _context10.next = 22;
          break;
        case 19:
          _context10.prev = 19;
          _context10.t0 = _context10["catch"](6);
          _iterator.e(_context10.t0);
        case 22:
          _context10.prev = 22;
          _iterator.f();
          return _context10.finish(22);
        case 25:
          console.log(cantidad);
          _context10.next = 28;
          return _Products["default"].findById(id);
        case 28:
          product = _context10.sent;
          product.totalStock = product.totalStock - cantidad;
          res.status(200).json(product);
        case 31:
          _context10.next = 37;
          break;
        case 33:
          _context10.prev = 33;
          _context10.t1 = _context10["catch"](2);
          console.log(_context10.t1);
          res.status(404).json({
            message: "Ocurrió un error al obtener el producto"
          });
        case 37:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[2, 33], [6, 19, 22, 25]]);
  }));
  return function getProductsDianExacto(_x18, _x19) {
    return _ref10.apply(this, arguments);
  };
}();
exports.getProductsDianExacto = getProductsDianExacto;
var getOrderElim = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var orders;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return _order["default"].find({
            status: "En bodega"
          });
        case 3:
          orders = _context11.sent;
          res.status(201).json(orders);
          _context11.next = 10;
          break;
        case 7:
          _context11.prev = 7;
          _context11.t0 = _context11["catch"](0);
          res.status(404).json({
            message: "Sucedio un error a la hora de realizar la peticion"
          });
        case 10:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 7]]);
  }));
  return function getOrderElim(_x20, _x21) {
    return _ref11.apply(this, arguments);
  };
}();
exports.getOrderElim = getOrderElim;