import React, {useState, useContext} from "react";
import {GlobalContext} from "../context/GlobalContext";

export const AddTransaction=()=>{
    const [text, setText]=useState("");
    const [amount, setAmount]=useState("");

    const {addTransaction}=useContext(GlobalContext);
    const handleSubmit=(event)=>{
        event.preventDefault();
        const newTransaction={
            id: Math.floor(Math.random()*1000),
            text: text,
            amount: parseInt(amount)
        }
        addTransaction(newTransaction);
        setAmount("");
        setText("");
    }
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" placeholder="Enter text..." onChange={(event)=>{setText(event.target.value)}} value={text}/>
                </div>
                <div className="htmlForm-control">
                <label htmlFor="amount">
                    Amount <br />
                    (negative - expense, positive - income)
                </label>
                <input type="number" placeholder="Enter amount..." onChange={(event)=>{setAmount(event.target.value)}} value={amount}/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}