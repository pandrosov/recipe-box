import React, { useState, useCallback } from 'react';
import { updateRecipeAction } from '../../store/actions/recipeActions'
import { useSelector, useDispatch } from 'react-redux';
import LayoutForm from '../../components/UI/LayoutForm';
import PropTypes from 'prop-types'

const UpdateRecipe = (props) => {

    const { id } = props.match.params
    const recipeFromState = useSelector(state => state.recipes.recipes.filter(item => item.id === id))
    const [recipe, setRecipe] = useState(recipeFromState[0])
    const dispatch = useDispatch()

    const handler = useCallback((recipe) => {
        dispatch(updateRecipeAction(recipe))
    }, [ dispatch ])


    const inputHandler = e => {
        const value = e.target.value
        const name = e.target.name

        setRecipe(state => ({...state, [name]: value}))
    }

    function addRecipe(e) {
        e.preventDefault()
        console.log(id)
        handler(recipe)
        setRecipe({ id: '', title: '', ingredients: '' })
    }
                            
    return (
        <>
            <h1>{ recipe.title }</h1>
            <LayoutForm 
                onSubmit={(e)  => addRecipe(e)}
                onChange={inputHandler}
                title={recipe.title}
                ingredients={recipe.ingredients}
            />
        </>
    );
}

UpdateRecipe.propTypes = {
    recipe: PropTypes.shape({
        title: PropTypes.string.isRequired,
        ingredients: PropTypes.string.isRequired
    })
}


export default UpdateRecipe;
