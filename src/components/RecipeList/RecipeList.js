import React from 'react';
import { useSelector } from 'react-redux'
import classes from './RecipeList.module.scss'
import { PropTypes } from 'prop-types';


const RecipeList = () => {
    const recipes = useSelector(state => state.recipes.recipes)

    return (
        <div className={classes.recipesList}>
            <ul>
                {recipes.map((recipe) => <li key={recipe.id}>{recipe.title}</li>)}
            </ul>
        </div>
    );
}

export default RecipeList;
