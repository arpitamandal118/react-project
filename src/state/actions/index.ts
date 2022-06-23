import {ActionType} from '../action-types';
import Q from "../../models/quoteClass";
interface addAction{
    type:ActionType.ADDQUOTE,
    payload:Q
}

interface deleteAction{
    type:ActionType.DELETEQUOTE,
    payload:string
}

interface addingAction{
    type:ActionType.SETISADDING,
}

export type Action=addAction |deleteAction|addingAction;