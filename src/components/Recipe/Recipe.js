import React from 'react';
import { useDispatch } from 'react-redux'
import { deleteRecipeAction } from '../../store/actions/recipeActions'
import { showAlert, hideAlert } from '../../store/actions/alertActions'
import Button from '../UI/Button'
import classes from './Recipe.module.scss'
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
                    <Button href={`/edit/${recipe.id}`}><FontAwesomeIcon icon={faPencilAlt} /> Edit</Button>
                    <Button primary onClick={()=> deleteRecipe(recipe)}><FontAwesomeIcon icon={faTrash} /> Remove</Button>
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
