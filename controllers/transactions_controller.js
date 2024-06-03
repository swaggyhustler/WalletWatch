import Transaction from "../models/Transaction.js";
import mongoose from "mongoose";
// @desc get Transactions
// @route '/api/v1/transactions/'
// @access Public
export const getTransactions = async (req, res, next)=>{
    try{
        const transactions = await Transaction.find();
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    }catch(err){
        return res.status(500).json({
            success: false,
            error: "Server Error"
        });
    }
}

// @desc post Transaction
// @route '/api/v1/transactions
// @access Public
export const postTransaction = async (req, res, next)=>{
    try{
        const {text, amount}= req.body;
        const transaction=await Transaction.create(req.body);
        return res.status(201).json({
            sucess: true,
            data: transaction
        });
    }catch(err){
        if(err.name==='ValidationError'){
            const messages=Object.values(err.errors).map(val=> val.message);
            res.status(400).json({
                sucess: false,
                error: messages
            })
        }else{
            res.status(500).json({
                success: false,
                error: "Internal Server Error"
            });
        }
    }
}

//@desc delete Transaction
//@route '/api/v1/transactions'
//@access Public
export const deleteTransaction = async (req, res, next)=>{
    try{
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                success: false,
                error: "Invalid Transaction ID"
            });
        }
        const transaction = await Transaction.findById(req.params.id);
        if(!transaction){
            res.status(404).json({
                success: false,
                error: "Transaction Not Found"
            });
        }
        await transaction.deleteOne();
        res.status(200).json({
            success: true,
            data: {}
        });
    }catch(err){
        res.status(500).json({
            success: false,
            error: "Internal Server Error from delete"
        });
    }
}