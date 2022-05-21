"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateNewTransactionService = void 0;

var _TransactionSchema = _interopRequireDefault(require("../Schemas/TransactionSchema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateNewTransactionService {
  async execute({
    title,
    type,
    category,
    amount
  }) {
    const result = await _TransactionSchema.default.create({
      title,
      type,
      category,
      amount,
      createdAt: new Date()
    });
    return result;
  }

}

exports.CreateNewTransactionService = CreateNewTransactionService;