import { Fragment } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import QuoteItem from "./QuoteItem";
import clasess from './AllQuote.module.css';
const AllQuote=()=>{
    const quoteItems=useSelector((state:RootState)=>state.quoteR.quoteitems);
    
    return(<Fragment>
        {quoteItems.length>0 ?
        (<ul className={clasess.quotes}>
            {quoteItems.map((item)=><QuoteItem key={item.id} id={item.id} quote={item.text} author={item.Author}/>)}
        </ul> ):<p>No Quotes Available</p>}
        </Fragment>
    );
}

export default AllQuote;