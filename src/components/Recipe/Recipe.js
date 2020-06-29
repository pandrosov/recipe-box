import React from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteRecipeAction } from '../../redux'
import classes from './Recipe.module.scss'


const Recipe = ({ recipe }) => {
    const dispatch = useDispatch()

    return (
        <div className={classes.recipe}>
            <div className={classes.recipeTitle}>
                <h2>{recipe.title}</h2>
                <div className="btn-group">
                    <Link to={`/edit/${recipe.id}`} >Редактировать</Link>
                    <button onClick={() => dispatch(deleteRecipeAction(recipe.id))}>Remove</button>
                </div>
            </div>
            <div className="recipe-ingredients">
                <h3>Ingredients:</h3>
                <p>{recipe.ingredients}</p>
            </div>
 
        </div>
    );
}

export default Recipe;
