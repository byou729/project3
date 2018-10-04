import React from 'react';

const Input = (props)=>{
    return <input type={props.type} className='form-control' id={props.id} name={props.name} value={props.value} onSubmit={props.onSubmit} onChange={props.onChange}/>
}

export default Input;
