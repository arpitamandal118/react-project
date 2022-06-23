import { ValidateEmail } from "../quote/validator";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import Card from "../UI/card";

const LoginForm=()=>{
    const [enteredName, setEnteredName] = useState('');
  
  const [isTouched,setIsTouched]=useState(false);

  const [enteredEmail,setEnteredEmail]=useState('');

  

  const dispatch=useDispatch();
  const{login}=bindActionCreators(actionCreators,dispatch);

  const enteredEmailIsValid=ValidateEmail(enteredEmail);
  const emailInputIsValid= !isTouched || enteredEmailIsValid;

  const enteredNameIsValid=  (enteredName.trim()!=='');
  const nameInputIsValid= !isTouched ||enteredNameIsValid;

  const newNameInputClass = nameInputIsValid ? 'form-control' : 'form-control invalid';
  const newEmailInputClass = emailInputIsValid? 'form-control' : 'form-control invalid';

  //VALIDATING ON EVERY KEY STROKE
  const nameChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
      setEnteredEmail(event.target.value);
  };

  //VALIDATING WHEN INPUT LOOSES FOCUS
  const blurHandler=(event:React.FocusEvent<HTMLInputElement>)=>{
      setIsTouched(true);
  };

  //VALIDATING WHEN FORM IS SUBMITTED
  const formSubmissionHandler = (event:React.FormEvent) => {
    event.preventDefault();
    setIsTouched(true);
    if (!enteredNameIsValid && !enteredEmailIsValid) {
        setEnteredName('');
        setEnteredEmail('');
        return;
    }
   
    
    
    setIsTouched(false);
    setEnteredName('');
    setEnteredEmail('');
    login();
    
  };
  

    return (
      <Card>
        <form onSubmit={formSubmissionHandler}>
      <div className={newNameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} onBlur={blurHandler} value={enteredName} />
        {!nameInputIsValid && <p>Name cannot be empty!!</p>}
      </div>
      <div className={newEmailInputClass}>
        <label htmlFor='email'>Email id</label>
        <input type='text' id='email' onChange={emailChangeHandler} onBlur={blurHandler} value={enteredEmail} />
        {!emailInputIsValid && <p>Please enter a valid email !!</p>}
      </div>
      <div className="form-actions">
        <button>Login</button>
      </div>
    </form>
    </Card>
    );
}
export default LoginForm;