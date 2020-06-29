import React, { useState } from 'react';
import { v4 as uuid4 } from 'uuid'
import { useDispatch } from 'react-redux';
import { addRecipeAction } from '../../redux'


const AddRecipe = () => {
    const [recipe, setRecipe] = useState({ id: '', title: '', ingredients: '' })
    const dispatch = useDispatch()

    const inputHandler = e => {
        const value = e.target.value
        const name = e.target.name
        if(!recipe.id)
            setRecipe(state => ({...state, id: uuid4()}))
        setRecipe(state => ({...state, [name]: value}))
    }

    const addRecipe = (e) => {
        e.preventDefault()
        dispatch(addRecipeAction(recipe))
        setRecipe({ id: '', title: '', ingredients: '' })
    }

    return (
        <div>
            <form onSubmit={addRecipe}>
                <input 
                    type="text"
                    name="title"
                    onChange={inputHandler}
                    value={recipe.title}
                />
                <input
                    type="text"
                    name="ingredients"
                    onChange={inputHandler}
                    value={recipe.ingredients}
                />
                <button type="submit">Check</button>
                <button>Provetir</button>
            </form>
        </div>
    );
}

export default AddRecipe;
