import React from 'react';
import styled from 'styled-components'

const Error = styled.span`
    color: red;
    font-style: italic;
`


const Input = ({
    label,
    type = "text",
    name, 
    value,
    advanced,
    errorMessage,
    required = false,
    onChange,
    children
}) => {
    
    const htmlfor = `${name}`


    return (
        <>
            <label htmlFor={htmlfor}>{label}</label>
            {type === 'textarea' ? 
                (<>
                    <textarea 
                        name={name}
                        onChange={onChange}
                        value={value}
                        id={htmlfor}
                        rows="10" 
                        cols="45"
                    />
                    {errorMessage ? <Error>{errorMessage}</Error> : null}
                </>)
                                :
                (<>
                    <input 
                            type={type}
                            name={name}
                            onChange={onChange}
                            value={value}
                            id={htmlfor}
                    />
                    {errorMessage ? <Error>{errorMessage}</Error> : null}    
                </>)   
        }
            
        </>
    );
}

export default Input;
