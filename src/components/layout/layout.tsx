import { Fragment } from "react";
import Header from "./Header";

import { useSelector } from 'react-redux';
import { RootState } from '../../state/reducers';
import Quote from "../quote";
import LoginForm from "./loginForm";

const Layout=()=>{
    const isAuthenticated=useSelector((state:RootState)=>state.authR);
    return (
        <Fragment>
            <Header/>
            {!isAuthenticated && <LoginForm/>}
            {isAuthenticated && <Quote/>}
        </Fragment>
    );
}
export default Layout;