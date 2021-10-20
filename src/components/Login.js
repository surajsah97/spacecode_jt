import React, { useEffect, useState } from 'react'
import {Box, Button, Checkbox, Container, FormControl, FormControlLabel, InputAdornment, Link, Paper, TextField, Typography} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { makeStyles } from '@mui/styles';
import {useHistory, Redirect} from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";
  import 'react-toastify/dist/ReactToastify.css';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const useStyle=makeStyles(()=>({
    root:{
        width:"100vw",
        height:"100vh",
        paddingTop:"5rem"
    },
    add:{
        background:"#281736",
        borderRadius:"5px 5px 0px 0px",
        color: "rgba(48, 44, 44, 0.13)"
    }
}))
const Login = () => {
    const classes=useStyle();
    const history=useHistory();
    useEffect(() => {
        if(localStorage.getItem("user-info")){
            history.push("/home")
        }
    },[])
    const [change, setchange] = useState(false)
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const handleChange=(e)=>{
        setchange(e.target.checked);
    }
    const handlelogin=()=>{
        let Item={username,password}
        axios.post("",Item)
    }





    return (
        <Container className={classes.root}>
            <Paper  component={Box} width="450px" rounded mx="auto"  elevation={0} >
                <Box className={classes.add}  display="flex" justifyContent="center" p={1}> <img src="./image/1.png" alt="lebal"  width="250vw"/></Box>
                <Box component="form" mt={4} p={10} pb={6} pt={1}>
                    
                    <Typography  color= "#777777" component={Box} variant="p1" pb= {0.3} fontWeight="400" mt={2}>Username</Typography>
                    <TextField fullWidth size="small" variant="outlined" value={username} onChange={(e)=>{setusername(e.target.value)}}  color="primary"  />
                    
                    <Typography component={Box} color= "#777777" lineHeight="1" display="block" letterSpacing="0.00938em" fontWeight="400" fontSize="14px" variant="p1"fontWeight="400" pb= {0.3} mt={5}>Password</Typography>
                    <TextField  fullWidth size="small" value={password} onChange={(e)=>{setpassword(e.target.value)}}  color="primary" InputProps={{endAdornment:(<InputAdornment><VisibilityOffIcon/></InputAdornment>)}}/>
                    
                <Box display="flex" justifyContent="space-between" fontSize="0.875rem" fontWeight="500" lineHeight="1.57" letterSpacing="0.00714em" mt={2}>                        <FormControlLabel label="Secure Login" control={<Checkbox onChange={handleChange} checked={change}/>}/>
                         
                        <Link component={Box} style={{textDecoration:"none",fontWeight:"bolder"}} mt={1.2} to="/password">Forgot Password ?</Link>
                        
                        </Box>
 
                
                <Box  mt={8} >
                    <Button fullWidth onClick={handlelogin} style={{padding:"12px", fontWeight:"bolder",background:"#2A2247"}} variant="contained" >{(change)? ("login with otp"):("Login")}</Button>
                    
                </Box>
                
                </Box>
            </Paper>
            <Box mt={2} display="flex" justifyContent="center" fontSize="0.875rem" color= "#777777" fontWeight="500" letterSpacing="0.01071em" fontFamily="Roboto,Helvetica,Arial, sans-serif" lineHeight="1.43">  Copyright © Spacecode Healthcare S.A. 2021 All rights reserved.</Box>
        </Container>
    )
}
export default Login;