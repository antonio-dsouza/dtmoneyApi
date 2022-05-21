"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateNewTransactionController = void 0;

var _CreateNewTransactionService = require("../services/CreateNewTransactionService");

class CreateNewTransactionController {
  async handle(request, response) {
    const {
      title,
      type,
      category,
      amount
    } = request.body;
    const createNewTransactionService = new _CreateNewTransactionService.CreateNewTransactionService();
    const results = await createNewTransactionService.execute({
      title,
      type,
      category,
      amount
    });
    return response.json(results);
  }

}

exports.CreateNewTransactionController = CreateNewTransactionController;