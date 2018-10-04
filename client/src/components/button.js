import React from 'react';

const Button = (props)=>{
    return <button type={props.type} id={props.id}>{props.children}</button>
}

export default Button;