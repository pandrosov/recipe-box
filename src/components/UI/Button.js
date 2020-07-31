import React from 'react';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'


const ButtonStyle = styled.button`
    font-family: 'RobotoMono';
    background: ${props => props.styles ? "#9740D5" : "white"};
    color: ${props => props.styles ? "white" : "#9740D5"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #9740D5;
    border-radius: 3px;
    cursor: pointer;
    transition: all .6s ease-in-out;

    &:hover {
        background: ${props => props.styles ? "white" : "#9740D5"};
        color: ${props => props.styles ?  "#9740D5" : "white"};
    }
`

const NavLinkStyle = styled(NavLink)`
    cursor: pointer;
    text-decoration: none;
    background: ${props => props.styles ? "#9740D5" : "white"};
    color: ${props => props.styles ? "white" : "#9740D5"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #9740D5;
    border-radius: 3px;
    transition: all .6s ease-in-out;
     
    &.active {
        background-color: red;
    }

    &:hover {
        background: ${props => props.styles ? "white" : "#9740D5"};
        color: ${props => props.styles ?  "#9740D5" : "white"}; 
    }
`

const Button = ({
    type, 
    children, 
    onClick,
    href, 
    primary = false
}) => {
    let renderButton = <ButtonStyle styles={primary} type={type} onClick={onClick}>{children}</ButtonStyle>;

    if(href) {
        renderButton = (<NavLinkStyle styles={ primary ? 1 : 0 } to={href}>{children}</NavLinkStyle>)
    }


    return (
        <>
            {renderButton}
        </>
    );
}

export default Button;
