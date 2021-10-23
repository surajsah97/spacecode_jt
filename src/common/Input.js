import { TextField } from "@mui/material";

const InputBox=(props)=>{
   const {size, variant,onChange,color,value,InputProps, fullWidth,type}=props

    return(<div>
        <TextField size={size} fullWidth={fullWidth} type={type}  variant={variant} value={value} onChange={onChange}  color={color}  InputProps={InputProps} />
    </div>
    )}
export default InputBox;
// (e)=>{setusername(e.target.value)}