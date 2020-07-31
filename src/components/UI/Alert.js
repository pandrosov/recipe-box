import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { hideAlert } from '../../store/actions/alertActions'
import styled, {keyframes} from 'styled-components'

const breatheAnimation = keyframes`
 0% { right: -1vw; opacity: 0}
 100% { right: 5vw; opacity: 1; }`

const AlertStyle = styled.div`
    position: fixed;
    right: 5vw;
    bottom: 40px;
    padding: 10px;
    z-index: 1;
    background-color: #f44336; /* Red */
    color: white;
    animation-name: ${breatheAnimation};
    animation-duration: .7s;
    animation-iteration-count: ease-in-out;

    & {
        @media (max-width: 768px) {
            width: 250px;
        }
    }

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
            <p>{alert.text}</p>
        </AlertStyle>
    )
}

export default Alert