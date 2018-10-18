import React from 'react';

const Button = ({ type = "default", className, children, onClick }) => (
    <button
      onClick={onClick}
      className={"delete-btn d-inline-block ml-5"}
    >
      {children}
    </button>
  );
  
  export default Button;