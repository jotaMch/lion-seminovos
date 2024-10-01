import React from 'react';

interface ButtonComponentProps {
    backgroundColor?: string,
    color?: string,
    width?: string,
    height?: string,
    rounded?: string,
    border?: string,
    text?: any,
    size?: string,
}

export const Button: React.FC<ButtonComponentProps> = ( props ) => {
    const buttonStyled = {
        backgroundColor: props.backgroundColor,
        color: props.color,
        width: props.width,
        borderRadius: props.rounded,
        border: props.border,
        height: props.height,
        fontSize: props.size,
        fontWeight: "Bold", 
        cursor: "pointer"
    };


    return (
        <button style={buttonStyled}>
            {props.text}
        </button>
    );
};
