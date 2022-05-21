"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serverHttp = void 0;

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = require("./routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use((0, _cors.default)());

const serverHttp = _http.default.createServer(app);

exports.serverHttp = serverHttp;
app.use(_express.default.json());
app.use(_routes.router);