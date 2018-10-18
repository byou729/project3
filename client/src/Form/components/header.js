import React from 'react';

const Header = (props)=>{
    <header className='d-flex justify-content-center align-items-center'>
    {props.children}
    </header>
}

export default Header;