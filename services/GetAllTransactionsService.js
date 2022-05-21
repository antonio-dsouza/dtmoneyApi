"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllTransactionsService = void 0;

var _TransactionSchema = _interopRequireDefault(require("../Schemas/TransactionSchema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GetAllTransactionsService {
  async execute() {
    const transactions = await _TransactionSchema.default.find();
    return transactions;
  }

}

exports.GetAllTransactionsService = GetAllTransactionsService;