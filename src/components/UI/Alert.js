import React from 'react';
import styled from 'styled-components'

const AlertStyle = styled.div`
    box-sizing: border-box;
    border: 1px solid ${type => type === 'danger' ? "red" : "green"}
`

const Alert = ({ type, text }) => (
    <Alert type={type}>
        {text}
    </Alert>
)