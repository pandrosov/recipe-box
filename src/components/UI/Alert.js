import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { hideAlert } from '../../store/actions/alertActions'
import styled, {keyframes} from 'styled-components'


const breatheAnimation = keyframes`
 0% { right: -10px; opacity: 0}
 100% { right: 10px; opacity: 1; }`

const AlertStyle = styled.div`
    position: fixed;
    right: 10px;
    bottom: 40px;
    z-index: 1;
    padding: 20px;
    background-color: #f44336; /* Red */
    color: white;
    animation-name: ${breatheAnimation};
    animation-duration: .7s;
    animation-iteration-count: ease-in-out;

`
const CloseBtn = styled.span`
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: black;
    }
`

const Alert = () => {
    const alert = useSelector(state => state.alert)
    const dispatch = useDispatch()
    let isOpen = false

    if (!alert) {
        return null
    } else {
        isOpen = true
    }


    return (
        <AlertStyle isOpen={isOpen} type={alert.type}>
            <CloseBtn onClick={() => dispatch(hideAlert())}>&times;</CloseBtn>
            {alert.text}
        </AlertStyle>
    )
}

export default Alert