"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllTransactionsController = void 0;

var _GetAllTransactionsService = require("../services/GetAllTransactionsService");

class GetAllTransactionsController {
  async handle(request, response) {
    const getAllTransactionsService = new _GetAllTransactionsService.GetAllTransactionsService();
    const results = await getAllTransactionsService.execute();
    return response.json(results);
  }

}

exports.GetAllTransactionsController = GetAllTransactionsController;