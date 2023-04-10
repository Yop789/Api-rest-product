"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_mongoose["default"].set('strictQuery', true);
_mongoose["default"].connect("mongodb+srv://2000djpz:lmXQUP3gN37hauJr@cluster0.npo2fgu.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (db) {
  return console.log('Db is connected');
})["catch"](function (error) {
  return console.log(error);
});