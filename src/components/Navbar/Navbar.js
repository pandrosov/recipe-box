import React, {useEffect ,useState } from 'react';
import { NavLink } from 'react-router-dom'
import RecipeList from './../RecipeList/RecipeList';
import styled, { keyframes } from 'styled-components'
import { device } from '../../helpers/device'
import useWindowSize from '../../helpers/hooks/useWindowSize'

const SpanClose = styled.span`
    font-size: 2rem;
    margin-left: auto;
`

const fromLeftPosition = keyframes`
    0% {  translate: transformX(-10px); opacity: 0}
    100% { translate: transformX(0px); opacity: 1; }
`

const NavbarStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    align-items: center;
    animation-name: ${fromLeftPosition};
    animation-duration: .7s;
    animation-iteration-count: ease-in-out;
    transition: .5s linear;
    background-color: #9740D5;
    border-radius: 15px 0 0 15px;
    & {
        @media (max-width: ${props => props.deviceWidth}px) {
            position: absolute;
            background: white;
            z-index: 1;
            width: 100vw;
            height: 100vh;
            border-radius: 0 0 0 0;
        }
    }
`

const SpanMenu = styled.span`
    transform: rotate(270deg);
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s linear;
    cursor: pointer;

    & {
        @media (max-width: ${props => props.deviceWidth}px) {
            border-radius: unset;
            background-color: unset;
            color: white;
            font-size: 18px;
            letter-spacing: 16px;
        }
    }
`

const Btn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #9740D5;
    width: 75px;
    border-radius: 15px 0px 0px 15px;
    animation-name: ${fromLeftPosition};
    animation-duration: .7s;
    animation-iteration-count: ease-in-out;
    transition: all .2s linear;
    cursor: pointer;
    
    &:hover {
        background-color: red;
        box-shadow: 2px 2px 2px black;
    }

    &:hover ${SpanMenu} {
        box-shadow: 2px 2px 2px black;
    }

    & {
        @media (max-width: ${props => props.deviceWidth}px) {
            width: 50px;
            transition: all .5s linear;
            border-radius: 0;
            &:hover ${SpanMenu} {
                background-color: unset;
                box-shadow: unset;
                color: white;
                letter-spacing: 6px;
            }
        }
    }
`

const Navbar = () => {

    const size = useWindowSize()
    const deviceWidth = parseInt(device.tablet.replace(/\D+/g, ""));
    const showBtn = size.width < deviceWidth;
    const [isOpen, setIsOpen] = useState(false)

    const onClose = () => {
        setIsOpen(false)
    }

    function handleClick(e) {
        if(e.target.tagName === 'A' && showBtn) {
            onClose()
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick) 
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if(showBtn) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }, [showBtn])
    
    return (
        <>
         { isOpen ? 
            (<NavbarStyle deviceWidth={deviceWidth} >
                <SpanClose onClick={onClose}>&times;</SpanClose>
                <ul>
                    <li>
                        <NavLink to="/add">Go to add page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Go to home page</NavLink>
                    </li>
                </ul>
                <RecipeList />
            </NavbarStyle>)
                  :
            (<Btn 
                className="menuBtn" 
                deviceWidth={deviceWidth} 
                onClick={() => setIsOpen(true)}
            >
                <SpanMenu deviceWidth={deviceWidth}>MENU</SpanMenu>
            </Btn>)
         
         }
        </>
        
    );
}

export default Navbar;
