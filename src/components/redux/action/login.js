import { constant} from "./Types";
import axios from "axios";
const Sendlogin=(data)=>{
  let headers = {
    "Content-Type": "application/json",
    type: "Web",
  };
  return (dispatch) => {
    return axios.post(
      "login",
      data,
      { headers: headers }
    )
          .then(function (response) {
            if (response.data !== "") {
            return (dispatch({
                type:"server_connection",
                payload:response.data
            }))}
          })
          .catch(function (error) {
            return(dispatch({
                type:"server_err",
                payload:[]
            }))
    })

        
    }
}






const forgotPassword=(post)=> {
  let headers = {
    "Content-Type": "application/json",
  };
  return (dispatch) => {
    // return axios.post("email", post, { headers: headers }).then((response) => {
    //   if (response.data !== "") {
    //     dispatch( {
    //       type: "FORGOT_PASS",
    //       forgot_pass: response,
    //     });
        
    //   } else {
    //     // dispatch(requestForgot([]));
    //     console.log("error");
    //   }
    // });
  };
}
export {forgotPassword,Sendlogin}
