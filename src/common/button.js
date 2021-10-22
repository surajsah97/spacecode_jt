import React from 'react';
import {Button,Typography,Box} from '@material-ui/core';
import { CustomButtonStyles } from './style';

export default function CustomButton (props){
    const classes = CustomButtonStyles();
    const { children, color,bgcolor, variant, fullWidth, onClick,mt,margin, disabled, type, fontsize, width, Padding } = props;
    return (
        <Box  mt={mt}>
            <Button
                variant={variant}
                // disabled={disabled}
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

