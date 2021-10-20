import React, { useState } from 'react'
import {Box, Button, Checkbox, Container, FormControl, FormControlLabel, InputAdornment, Paper, TextField, Typography} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { makeStyles } from '@mui/styles';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const useStyle=makeStyles(()=>({
    root:{
        width:"100vw",
        height:"100vh",
        paddingTop:"10rem"
    }
}))
const Signup = () => {
    const classes=useStyle();
    const [name, setname] = useState("");
    const [email, setemail] = useState("")
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [confpassword, setconfpassword] = useState("")
    const handleSubmit=()=>{
        console.log(name,email,username,password,confpassword);
    }
    return (
        <Container className={classes.root}>
            <Paper component={Box} width="30%" mx="auto" p={3}>
                <Typography varient="h5"> LOGIN</Typography>
                <Box component="form" onSubmit={handleSubmit} mt={3}>
                    <Typography variant="h6">Name</Typography>
                    <TextField fullWidth placeholder="Name" value={name} onChange={(e)=>{setname(e.target.value)}} label="name" color="secondary" margin="normal" InputProps={{startAdornment:(<InputAdornment><AccountCircleIcon/></InputAdornment>)}}/>
                    <Typography variant="h6">Email id</Typography>
                    <TextField fullWidth value={email} placeholder="Email" onChange={(e)=>{setemail(e.target.value)}} label="Email" color="secondary" margin="normal" InputProps={{startAdornment:(<InputAdornment><AccountCircleIcon/></InputAdornment>)}}/>
                    <Typography variant="h6">Username</Typography>
                    <TextField fullWidth value={username} placeholder="Enter username" onChange={(e)=>{setusername(e.target.value)}} label="username" color="secondary" margin="normal" InputProps={{startAdornment:(<InputAdornment><AccountCircleIcon/></InputAdornment>)}}/>
                    Password
                    <TextField value={password} placeholder="Enter Password" onChange={(e)=>{setpassword(e.target.value)}} label="password" helperText=" must contain letter between A-z and a-z and 0-9 and special charecter" color="secondary" margin="normal" InputProps={{endAdornment:(<InputAdornment><VisibilityOffIcon/></InputAdornment>)}}/>
                    Password
                    <TextField value={confpassword} placeholder="Enter Password" onChange={(e)=>{setconfpassword(e.target.value)}} label="confirm password" helperText=" must contain letter between A-z and a-z and 0-9 and special charecter" color="secondary" margin="normal" InputProps={{endAdornment:(<InputAdornment><VisibilityOffIcon/></InputAdornment>)}}/>
                     
                </Box>
                <Box mt={5}>
                    <Button htmlType="submit" onClick={handleSubmit} variant="contained" color="secondary">signup</Button>
                </Box>
            </Paper>
        </Container>
    )
}
export default Signup;