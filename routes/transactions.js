import express from "express";
const router=express.Router();
import {getTransactions, postTransaction, deleteTransaction} from "../controllers/transactions_controller.js";

router.route('/api/v1/transaction/:id').delete(deleteTransaction);
router.route('/api/v1/transaction').get(getTransactions).post(postTransaction);
export default router;