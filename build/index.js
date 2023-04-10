"use strict";

var _app = _interopRequireDefault(require("./app"));
require("./database.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_app["default"].set('port', process.env.PORT || 4400);
_app["default"].listen(_app["default"].get('port'), function () {
  console.log('server listen on port', _app["default"].get('port'));
});