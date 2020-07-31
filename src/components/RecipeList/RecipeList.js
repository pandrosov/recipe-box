import React from 'react';
import { useSelector } from 'react-redux'
import classes from './RecipeList.module.scss'


const RecipeList = () => {
    const recipes = useSelector(state => state.recipes.recipes)

    return (
        <div className={classes.recipesList}>
            <h1>Recipe List:</h1>
            <ul>
                {recipes.length !== 0 ?
                    recipes.map((recipe) => <li className={classes.recipeListItem} key={recipe.id}>{recipe.title}</li>)
                    :
                    (<p>Recipe list is empty</p>)
                }
            </ul>
        </div>
    );
}

export default RecipeList;
