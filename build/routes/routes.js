"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var productsCtrol = _interopRequireWildcard(require("../controllers/products.controllers"));
var authCtrol = _interopRequireWildcard(require("../controllers/auth.controllers"));
var _index = require("../middlewares/index");
var _multer = _interopRequireDefault(require("../libs/multer"));
var cartCtrol = _interopRequireWildcard(require("../controllers/cart.controllers"));
var OrderCtrol = _interopRequireWildcard(require("../controllers/order.controllers"));
var codigoCtrol = _interopRequireWildcard(require("../controllers/codigo.controllers"));
var userCtrol = _interopRequireWildcard(require("../controllers/user.controllers"));
var _cp = require("../controllers/cp.controllers");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/**
 * @author Equpo 
 * @description Router of function crud
 * @version auth
 */

var router = (0, _express.Router)();
router.route('/products').post([_index.autheJWT.verifyToken, _index.autheJWT.isAdmin], _multer["default"].single('imagePath'), productsCtrol.createProduct).get(productsCtrol.getProducts);
router.route('/product/:productId').get(productsCtrol.getProductById).put(productsCtrol.updateProductById)["delete"](productsCtrol.deleteProductById);
router.post('/signup', authCtrol.signUp);
router.post('/signin', authCtrol.signIn);
router.route('/cart').post(_index.autheJWT.verifyToken, cartCtrol.createCart).get(_index.autheJWT.verifyToken, cartCtrol.getCart).put(_index.autheJWT.verifyToken, cartCtrol.updateCart)["delete"](_index.autheJWT.verifyToken, cartCtrol.deleteCart);
router.route('/order').post(_index.autheJWT.verifyToken, OrderCtrol.createOrder).get(_index.autheJWT.verifyToken, OrderCtrol.getOrders);
router.route('/order/:productId').put(_index.autheJWT.verifyToken, OrderCtrol.updateOrder).get(_index.autheJWT.verifyToken, OrderCtrol.getOrder)["delete"](_index.autheJWT.verifyToken, OrderCtrol.deleteOrder);
router.route('/codigo').post(codigoCtrol.createCodigo);
router.route('/cambiarC').put(codigoCtrol.codigoComparar, userCtrol.cambiarContraseña);
router.route('/copContras').post(codigoCtrol.codigoCompararA);
router.route('/carrucel').get(productsCtrol.carrucel);
router.route('/cPostal').post(_cp.getRegioCP);

// ----------------------------------------------------------------------
router.route('/user/:userId').get(_index.autheJWT.verifyToken, userCtrol.getUser).put(_index.autheJWT.verifyToken, userCtrol.updateUserById);
router.route('/productType').post(_index.autheJWT.verifyToken, productsCtrol.getProductsType);
router.route('/productTypeLimit').post(productsCtrol.getProductsTypeLimit);
var _default = router;
exports["default"] = _default;