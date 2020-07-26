import React, { useState } from 'react';
import { updateRecipeAction } from '../store/actions/recipeActions'
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'
import LayoutForm from '../components/UI/LayoutForm';
import PropTypes from 'prop-types'

const UpdateRecipe = (props) => {

    const { id } = props.match.params
    const recipeFromState = useSelector(state => state.recipes.recipes.filter(item => item.id === id))
    const [recipe, setRecipe] = useState(recipeFromState[0])
    const dispatch = useDispatch()

    const inputHandler = e => {
        const value = e.target.value
        const name = e.target.name
        if(!recipe.id)
            setRecipe(state => ({...state, id: uuidv4()}))
        setRecipe(state => ({...state, [name]: value}))
    }

    const addRecipe = (e) => {
        e.preventDefault()
        if(recipe.title === '') {
            return
        }
        dispatch(updateRecipeAction(recipe))
        setRecipe({ id: '', title: '', ingredients: '' })
    }

    return (
        <div>
            <h1>{id}</h1>
            <LayoutForm 
                onSubmit={addRecipe}
                onChange={inputHandler}
                title={recipe.title}
                ingredients={recipe.ingredients}
            />
        </div>
    );
}

UpdateRecipe.propTypes = {
    recipe: PropTypes.shape({
        title: PropTypes.string.isRequired,
        ingredients: PropTypes.string.isRequired
    })
}


export default UpdateRecipe;
