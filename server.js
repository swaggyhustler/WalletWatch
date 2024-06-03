import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import transactions from "./routes/transactions.js";
import connectDB from "./config/db.js";

dotenv.config({path: "./config/config.env"});
connectDB();
const app=express();
const PORT=process.env.PORT || 5000;

app.use(express.json());
app.use(transactions);

app.listen(PORT, ()=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
})
