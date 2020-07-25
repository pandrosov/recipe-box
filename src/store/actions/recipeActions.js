import {
    ADD_RECIPE,
    UPDATE_RECIPE,
    DELETE_RECIPE, 
    DELETE_ALL
} from './actionTypes'

export const addRecipeAction = ( recipe ) => ({
    type: ADD_RECIPE,
    payload: recipe
})

export const updateRecipeAction = ( recipe ) => ({
    type: UPDATE_RECIPE,
    payload: recipe
})

export const deleteRecipeAction = ( id_recipe ) => ({
    type: DELETE_RECIPE,
    payload: id_recipe
})

export const deleteAllAction = () => ({
    type: DELETE_ALL
})
