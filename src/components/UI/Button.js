import React from 'react';



const Button = ({type, children, onClick}) => {
    return (
        <div>
            <button onClick={onClick} type={type}>{children}</button>
        </div>
    );
}

export default Button;
