import { useRef } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import Q from "../../models/quoteClass";
import Card from "../UI/card";
const NewQuote=()=>{
    const dispatch=useDispatch();
  const{addQuoteItem}=bindActionCreators(actionCreators,dispatch);


    const quoteInputRef=useRef<HTMLTextAreaElement>(null);
    const authorInputRef=useRef<HTMLInputElement>(null);

    const formSubmissionHandler = (event:React.FormEvent) => {
        event.preventDefault();
        const enteredQuote=quoteInputRef.current!.value;
        const author=authorInputRef.current!.value;

        if(enteredQuote.trim().length===0)
          return ;

        const quoteitm=new Q(enteredQuote,author);
        addQuoteItem(quoteitm);
        
    }

    return (
      <Card>
        <form onSubmit={formSubmissionHandler}>
      <div >
        <div className='form-control'>
          <label htmlFor='name'>Enter Quote</label>
          {/* <input type='textarea' id='name' ref={quoteInputRef}/> */}
          <textarea id="name"  rows={4} cols={50} ref={quoteInputRef}/>
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Author</label>
          <input type='text' id='name' ref={authorInputRef} />
        </div>
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
    </Card>
    );
}

export default NewQuote;