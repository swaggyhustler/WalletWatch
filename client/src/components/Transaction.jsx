import React, {useContext} from "react";
import {GlobalContext} from "../context/GlobalContext";


export const Transaction=({transaction})=>{
    const {text, amount}=transaction;
    const {deleteTransaction}=useContext(GlobalContext);
    return (
        <li className={amount<0?"minus":"plus"}>
            {text} <span>{amount<0?"-":"+"}${Math.abs(amount)}</span>
            <button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>x</button>
        </li> 
    )
}