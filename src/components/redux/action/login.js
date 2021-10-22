import { constant} from "./Types";
import axios from "axios";

// import axios from "axios";
// const Getlogin=(data)=>{
// return dispatch=>{
//     axios({
//         method: 'post',
//         url: 'http://localhost:3050/login',
//         data
//       })
//       .then(function (response) {
//         console.log(response);
//         return{type:constant.USER_VERIFY,
//             payload:response}
//       })
//       .catch(function (error) {
//         console.log(error)
// })
// }}
// const Ragister_fail=()=>{
//     return {
//         type:
//     }
// }
// const Ragister_success
// const Ragister_start







// .then(() => {
//     history.push("/profile");
//     window.location.reload();
//   })
//   .catch(() => {
//     setLoading(false);
//   });
// const get_logged_succes=(data)=>{
//     return {
//         type:"Get_success_login",
//         payload:data
//     }
// }
// const get_logged_fail=(data)=>{
//     return{
//         type:"Get_failed_login",
//         payload:data
//     }
// }
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




//     } catch (error) {
//         dispatch({
//             type: CONSTANTS.USER_LOGIN_FAIL,
//             payload: error?.response?.statusText
//         });
//     }
// };

// }
export default Sendlogin;
