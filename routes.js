"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = require("express");

var _CreateNewTransactionController = require("./controllers/CreateNewTransactionController");

var _GetAllTransactionsController = require("./controllers/GetAllTransactionsController");

const router = (0, _express.Router)();
exports.router = router;
const createNewTransactionController = new _CreateNewTransactionController.CreateNewTransactionController();
const getAllTransactionsController = new _GetAllTransactionsController.GetAllTransactionsController();
router.post("/transaction", createNewTransactionController.handle);
router.get("/transactions", getAllTransactionsController.handle);