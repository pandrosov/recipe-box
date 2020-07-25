import React from 'react';

const Input = (props) => {
    const htmlfor = `${props.type}-${props.name}`

    return (
        <div>
            <label htmlFor={htmlfor}>{props.children}</label>
            {props.type === 'textarea' ? 
                <textarea 
                    name={props.name}
                    onChange={props.onChange}
                    value={props.value}
                    id={htmlfor}
                    rows="10" 
                    cols="45"
                />
            :   <input 
                    type={props.type}
                    name={props.name}
                    onChange={props.onChange}
                    value={props.value}
                    id={htmlfor}
                />
        
        }
            
        </div>
    );
}

export default Input;
