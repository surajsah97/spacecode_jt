import { TextField } from "@material-ui/core";

const InputBox=(props)=>{
   const {size, variant,onChange,color,value,InputProps, fullWidth,type}=props
    return(
        <TextField fullWidth={fullWidth} type={type} size={size} variant={variant} value={value} onChange={onChange}  color={color} InputProps={InputProps} />
    )}
export default InputBox;
// (e)=>{setusername(e.target.value)}