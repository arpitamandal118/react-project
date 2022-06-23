import { Fragment } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import AllQuote from "./AllQuote";
import NewQuote from "./NewQuote";

const Quote=()=>{
    const isAdding=useSelector((state:RootState)=>state.quoteR.isAdding);
    return (
        <Fragment>
            {isAdding &&  <NewQuote/>}
            {!isAdding &&<AllQuote/> }
        </Fragment>
    );
}

export default Quote;