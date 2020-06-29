import React from 'react';

const Layout = (props) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    );
}

export default Layout;
