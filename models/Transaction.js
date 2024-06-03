import mongoose from "mongoose";

const TransactionSchema=new mongoose.Schema({
    text:{
        type: String,
        trim: true,
        required: [true, 'Please enter some text']
    },
    amount:{
        type: Number,
        required: [true, 'Please enter some amount']
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model('Transaction', TransactionSchema);