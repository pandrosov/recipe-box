import React from 'react';
import styled, { css } from 'styled-components'

const LayoutStyle = styled.div`
    ${props => props.className ? css`
        display: flex;
        flex-direction: column;
        align-items: center;
    ` : null}
`

const Layout = ({ className, children }) => {
    return (
        <LayoutStyle className={className}>
            {children}
        </LayoutStyle>
    );
}

export default Layout;
