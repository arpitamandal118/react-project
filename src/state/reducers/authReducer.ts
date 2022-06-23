
interface loginAction{
    type:"login",}

interface logoutAction{
    type:"logout",
}

export type AuthAction=loginAction|logoutAction;
const authReducer=(state:boolean=false,action:AuthAction)=>{
    switch (action.type){
        case "login":
            return true;
        case "logout":
            return false;
        default:
            return state;
    }

}
export default authReducer;