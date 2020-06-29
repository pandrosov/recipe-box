import React from 'react';
import { useSelector } from 'react-redux'

const RecipeList = () => {
    const recipes = useSelector(state => state.recipes)

    return (
        <div>
            <ul>
                {recipes.map((recipe) => <li key={recipe.id}>{recipe.title}</li>)}
            </ul>
            
        </div>
    );
}

export default RecipeList;
