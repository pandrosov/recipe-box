import React, { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux';
import { addRecipeAction } from '../../store/actions/recipeActions'
import LayoutForm from '../../components/UI/LayoutForm'


const AddRecipe = () => {
    const [recipe, setRecipe] = useState({ title: '', ingredients: '' })
    const dispatch = useDispatch()

    const recipeAdding = useCallback((recipe) => {
        dispatch(addRecipeAction(recipe))
    }, [ dispatch ])

    const inputHandler = e => {
        const value = e.target.value
        const name = e.target.name
        setRecipe(state => ({...state, [name]: value}))
    }

    const addRecipe = (e) => {
        e.preventDefault()
        if(recipe.title === '') {
            return
        }

        //const tempRecipe = {...recipe}
        //tempRecipe.id = uuidv4()
        setRecipe(state => ({...state, id: uuidv4()}))
        
        recipeAdding(recipe)
        setRecipe({ id: '', title: '', ingredients: '' })
    }

    return (
        <>
            <LayoutForm 
                onSubmit={addRecipe}
                onChange={inputHandler}
                title={recipe.title}
                ingredients={recipe.ingredients}
            />
        </>
    );
}

export default AddRecipe;
