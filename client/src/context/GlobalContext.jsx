import React, {createContext, useReducer} from "react";
import {AppReducer} from "./AppReducer";

const initialState={
    transactions: []
}

//create context
export const GlobalContext=createContext(initialState);

//provide context
export const GlobalProvider=({ children })=>{
    const [state, dispatch]=useReducer(AppReducer, initialState);
    function deleteTransaction(id){
        dispatch({
            type: "Delete_Transaction",
            payload: id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type: "Add_Transaction",
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}} >
            {children}
        </GlobalContext.Provider>
    )
} 