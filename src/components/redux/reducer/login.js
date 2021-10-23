import { constant } from "../action/Types"
import axios from "axios";
const initialvalue={
    users:[],
    isResp:"",
    error:null,
    forgot_pass:[]
}
// const Signin=(state={},action)=>{
//     switch(action.type){
//     case constant.USER_VERIFY:
//         (action.data.result)? state.status=true: state.status= false
//     return state
//     default :
//     return state
// }
// }
const Signin=(state=initialvalue,action)=>{
    switch(action.type){
        case "server_connection":
            return {
                isResp:action.payload
            }
        case "Get_failed_login":
            return {
                isResp:action.payload
            }
        default:
           return state
    }
}
const Forget_pass=(state=initialvalue,action)=>{
    switch (action.type) {
        case "FORGOT_PASS":
            return {
                forgot_pass: action,
            };
        default:
            break;
    }
}

// forgot_pass: action.forgot_pass



export {Signin,Forget_pass};