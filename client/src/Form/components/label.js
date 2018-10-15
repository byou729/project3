import React from 'react';

const Label = (props)=>{
    return <label for={props.for}>{props.children}</label>
}

export default Label;