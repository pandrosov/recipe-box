import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/add">Go to add page</NavLink>
                </li>
                <li>
                    <NavLink to="/">Go to home page</NavLink> 
                </li>
                <li>
                    <NavLink to="/edit/3">Go to update page</NavLink>    
                </li> 
            </ul>
        </div>
    );
}

export default Navbar;
