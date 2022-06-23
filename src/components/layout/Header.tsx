import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import { RootState } from '../../state/reducers';
import classes from './Header.module.css';
const Header=()=>{
    const isAuthenticated=useSelector((state:RootState)=>state.authR);
    

    const dispatch=useDispatch();
    const {setIsAdding,logout}=bindActionCreators(actionCreators,dispatch);

    return <header className={classes.header}>
            <h1>QUOTE APP</h1>
            {isAuthenticated && <div>
            <button onClick={()=>setIsAdding()}>Add New Quote</button>
            <button onClick={()=>logout()}>Logout</button>
            </div>
            }
            
        </header>
    
}

export default Header;