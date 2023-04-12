"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_mongoose["default"].set('strictQuery', true);
_mongoose["default"].connect("mongodb://127.0.0.1:27017/BD_Dofest", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (db) {
  return console.log('Db is connected');
})["catch"](function (error) {
  console.log('No se conecto a la local');
  _mongoose["default"].set('strictQuery', true);
  _mongoose["default"].connect("mongodb+srv://2000djpz:lmXQUP3gN37hauJr@cluster0.npo2fgu.mongodb.net/?retryWrites=true&w=majority", {
    serverSelectionTimeoutMS: 5000
  }).then(function (db) {
    return console.log('Db is connected');
  })["catch"](function (error) {
    return console.log(error);
  });
});