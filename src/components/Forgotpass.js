import { Box } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { forgotPassword } from "./redux/action/login";
import { CustomButton, InputBox, Typographybox } from "../common/commonelement";
import { useDispatch, useSelector } from "react-redux";
const Forgotpass = (props) => {
//   const { username, handleusername, handleforget } = props;
const dispatch = useDispatch()
// const pass = useSelector(state => state)
// console.log(pass);
  const [email, setemail] = useState("");
  const [username, setusername] = useState("")
  const handleusername=(e)=>{
      setusername(e.target.value)
  }
  const handlemail = (e) => {
    setemail(e.target.value);
  };
  const handlepass = () => {
      if(email&&username){
      const post={email,username}
    dispatch(forgotPassword(post))}
  };
  return (
    <form>
      <Box mt={3} p={10} pb={6} pt={1}>
        <Typographybox
          variant={"h5"}
          color={"Black"}
          fontWeight={"bold"}
          children={"Forgot Your Password ?"}
        />
        <Typographybox
          children={
            "Don't worry. Recovering the password is easy. Just tell us the email address you have registered with BloodSpace."
          }
          color={"black"}
          lineHeight={"1"}
          display={"block"}
          letterSpacing={"0.00938em"}
          fontWeight={"400"}
          mt={2}
          fontSize={"15px"}
          variant={"p1"}
        />
        <Typographybox
          component={Box}
          color={"#777777"}
          lineHeight={"1"}
          display={"block"}
          letterSpacing={"0.00938em"}
          fontWeight={"400"}
          fontSize={"14px"}
          variant={"p1"}
          fontWeight={"400"}
          pb={0.3}
          mt={4}
          children={"Username"}
        />
        {/* <TextField fullWidth size="small" variant="outlined" value={username} onChange={(e)=>{setusername(e.target.value)}}  color="primary"  /> */}
        <InputBox
          size={"small"}
          fullWidth
          variant={"outlined"}
          type={"text"}
          value={username}
          onChange={handleusername}
          color={"primary"}
          r
        />
        <Typographybox
          component={Box}
          color={"#777777"}
          lineHeight={"1"}
          display={"block"}
          letterSpacing={"0.00938em"}
          fontWeight={"400"}
          fontSize={"14px"}
          variant={"p1"}
          fontWeight={"400"}
          pb={0.3}
          mt={4}
          children={"Email id"}
        />
        <InputBox
          size={"small"}
          fullWidth
          variant={"outlined"}
          type={"text"}
          value={email}
          onChange={handlemail}
          color={"primary"}
        />
        <CustomButton
           mt={8}
           onClick={handlepass}
           children={"submit"}
           fullWidth
           variant={"contained"}
           color="primary"
           Padding={"12px"}
           bgcolor={"#2A2247"}
        />

        {/* <Button fullWidth onClick={handlelogin} style={{padding:"12px", fontWeight:"bolder",background:"#2A2247"}} variant="contained" >{(change)? ("login with otp"):("Login")}</Button> */}
      </Box>
      
    </form>
  );
};
export default Forgotpass;
