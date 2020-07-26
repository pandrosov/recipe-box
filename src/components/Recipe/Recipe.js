import React from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteRecipeAction } from '../../store/actions/recipeActions'
import { showAlert, hideAlert } from '../../store/actions/alertActions'
import classes from './Recipe.module.scss'


const Recipe = ({ recipe }) => {
    const dispatch = useDispatch()
    function deleteRecipe(recipe) {
       dispatch(deleteRecipeAction(recipe.id))
       dispatch(showAlert('danger', `removing item ${recipe.title} is done`))
       setTimeout(() => dispatch(hideAlert()), 5000)
    }

    return (
        <div className={classes.recipe}>
            <div className={classes.recipeTitle}>
                <h2>{recipe.title}</h2>
                <div className="btn-group">
                    <Link to={`/edit/${recipe.id}`} >Редактировать</Link>
                    <button onClick={()=> deleteRecipe(recipe)}>Remove</button>
                </div>
            </div>
            <div className="recipe-ingredients">
                <h3>Ingredients:</h3>
                <pre>
                    {recipe.ingredients}
                </pre>
            </div>
 
        </div>
    );
}

export default Recipe;
