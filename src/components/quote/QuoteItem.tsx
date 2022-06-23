import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from "../../state";
import classses from './quoteItem.module.css';
const QuoteItem:React.FC<{ quote: string;author:string;id:string}>=(props)=>{
    const dispatch = useDispatch();

    const { deleteQuoteItem } = bindActionCreators(actionCreators, dispatch)

        return <li className={classses.item} onClick={()=>deleteQuoteItem(props.id)} >
            <h2>{props.quote}</h2>
            <h4>{props.author}</h4>
        </li>
}


export default QuoteItem;