import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux';
import { addRecipeAction } from '../store/actions/recipeActions'
import LayoutForm from '../components/UI/LayoutForm'


const AddRecipe = () => {
    const [recipe, setRecipe] = useState({ id: '', title: '', ingredients: '' })
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
        dispatch(addRecipeAction(recipe))
        setRecipe({ id: '', title: '', ingredients: '' })
    }

    return (
        <div>
            <LayoutForm 
                onSubmit={addRecipe}
                onChange={inputHandler}
                title={recipe.title}
                ingredients={recipe.ingredients}
            />
        </div>
    );
}

export default AddRecipe;
