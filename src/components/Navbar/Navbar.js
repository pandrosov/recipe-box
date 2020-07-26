import React from 'react';
import { NavLink } from 'react-router-dom'
import RecipeList from './../RecipeList/RecipeList';

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
            </ul>
            <RecipeList />
        </div>
    );
}

export default Navbar;
