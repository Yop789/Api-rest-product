"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireWildcard(require("mongoose"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var productSchema = new _mongoose.Schema({
  nameProduct: {
    type: String,
    require: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  totalProduct: {
    type: Number,
    required: true
  },
  totalStock: {
    type: Number,
    required: true
  },
  totalService: {
    type: Number,
    required: true
  },
  totalSillas: {
    type: Number
  },
  type: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imagePath: {
    type: String,
    require: true
  },
  oferta: [{
    typeOfer: {
      type: String,
      require: true
    },
    descProduct: {
      type: Number
    }
  }]
}, {
  timestamps: true,
  versionKey: false
});
var _default = _mongoose["default"].model("Product", productSchema);
exports["default"] = _default;