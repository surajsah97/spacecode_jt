import React from 'react';
import {Button,Box,Typography} from '@mui/material';
import { CustomButtonStyles } from './style';
import { TextField } from "@mui/material";

const InputBox=(props)=>{
   const {size, variant,onChange,color,value,InputProps, fullWidth,type}=props

    return(<div>
        <TextField size={size} fullWidth={fullWidth} type={type}  variant={variant} value={value} onChange={onChange}  color={color}  InputProps={InputProps} />
    </div>
    )}

const CustomButton= (props)=>{
    const classes = CustomButtonStyles();
    const { children, color,bgcolor, variant, fullWidth, onClick,mt,margin, disabled, type, fontsize, width, Padding } = props;
    return (
        <Box  mt={mt}>
            <Button
                variant={variant}
                fullWidth={fullWidth}
                color={color}
                onClick={onClick}
                disable={disabled}
                className={classes.button}
                type={type}
                style={{
                    fontSize: fontsize && fontsize,
                    width: width && width,
                    backgroundColor: bgcolor,
                    padding: Padding, 
                }}
            >
                {children}
            </Button>
        </Box>
    );
};

const Typographybox=(props)=>{
    const {component,color,lineHeight,display,letterSpacing,fontWeight,fontSize,variant,p, pb, pt, pl, pr, mt, ml, mr, mb, m, onClick, children}=props
    return(

                 <Typography  component={component} color= {color} lineHeight={lineHeight} display={display} letterSpacing={letterSpacing}  fontSize={fontSize} variant={variant} fontWeight={fontWeight} p={p} pb= {pb} pt={pt} pl={pl} pr={pr} mt={mt} ml={ml} mr={mr} mb={mb} m={m} onClick={onClick} children={children}/>
    )
}





export {InputBox,CustomButton,Typographybox}