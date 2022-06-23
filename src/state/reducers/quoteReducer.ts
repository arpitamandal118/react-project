import Q from "../../models/quoteClass";
import { ActionType } from "../action-types";
import { Action } from "../actions";

type quote={
    quoteitems:Q[];
    isAdding:boolean;
}

const initialState:quote={
    quoteitems:[],
    isAdding:false
}

const quoteReducer=(state:quote=initialState,action:Action)=>{
    switch (action.type){
        case ActionType.ADDQUOTE:
            const updatedQItm=state.quoteitems.concat(action.payload);
            return {
                quoteitems:updatedQItm,
                isAdding:!state.isAdding
            };
        case ActionType.DELETEQUOTE:
            const deleteQlist=state.quoteitems.filter(quoteItem=>quoteItem.id!==action.payload);
            return{
                quoteitems:deleteQlist,
                isAdding:state.isAdding
            };
        case ActionType.SETISADDING:
            return{
                quoteitems:state.quoteitems,
                isAdding:!state.isAdding
            }
        default:
            return state;
    }
}

export default quoteReducer;