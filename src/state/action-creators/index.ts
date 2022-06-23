import { ActionType } from "../action-types"
import { Dispatch } from "redux";
import { Action } from "../actions";
import Q from "../../models/quoteClass";
import { AuthAction } from "../reducers/authReducer";

export const addQuoteItem=(item:Q)=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.ADDQUOTE,
            payload:item
        })
    }
}

export  const deleteQuoteItem=(id:string)=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.DELETEQUOTE,
            payload:id
        })
    }
}
export const setIsAdding=()=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type:ActionType.SETISADDING
        })
    }
}
export const login=()=>{
    return (dispatch:Dispatch<AuthAction>)=>{
        dispatch({
            type:"login",
        })
    }
}
export const logout=()=>{
    return (dispatch:Dispatch<AuthAction>)=>{
        dispatch({
            type:"logout",
        })
    }
}

