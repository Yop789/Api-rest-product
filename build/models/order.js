"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireWildcard(require("mongoose"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var orderSchema = new _mongoose.Schema({
  idUser: {
    type: String,
    require: true
  },
  status: {
    type: String,
    require: true
  },
  fullNameUser: {
    type: String,
    require: true
  },
  paid: {
    type: Boolean,
    require: true
  },
  municipio: {
    type: String,
    require: true
  },
  comunidad: {
    type: String,
    require: true
  },
  calle: {
    type: String,
    require: true
  },
  numero: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  telefono: {
    type: String,
    require: true
  },
  dateDeliver: {
    type: Date,
    require: true
  },
  dateEvent: {
    type: Date,
    require: true
  },
  dateReturn: {
    type: Date,
    require: true
  },
  days: {
    type: Number,
    require: true
  },
  totalPrecio: {
    type: Number,
    require: true
  },
  products: [{
    _id: {
      type: String
    },
    idProduct: {
      type: String,
      require: true
    },
    nameProduct: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    amount: {
      type: Number,
      require: true
    },
    total: {
      type: Number,
      require: true
    },
    urlImage: {
      type: String,
      require: true
    }
  }]
}, {
  timestamps: true,
  versionKey: false
});
var _default = _mongoose["default"].model("Order", orderSchema);
exports["default"] = _default;