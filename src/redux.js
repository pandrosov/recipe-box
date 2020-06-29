import { createStore } from 'redux'
import { loadState, saveState } from './localStorage'
import { v4 as uuidv4 } from 'uuid'
import {
    ADD_RECIPE,
    UPDATE_RECIPE,
    DELETE_RECIPE, 
    DELETE_ALL
} from './types'


const initialState = {
    recipes: [
        {
            id: uuidv4(),
            title: 'Roast Beef',
            ingredients: '-roast\n-beef'
        },
        {
            id: uuidv4(),
            title: 'Fries tomato',
            ingredients: '-tomato\n-fries'
        },
        {
            id: uuidv4(),
            title: 'Rasdgsadgsdgef',
            ingredients: '-roast\n-beef'
        },
        {
            id: uuidv4(),
            title: 'Friasdfasdfgmato',
            ingredients: '-tomafasdfo\n-fries'
        }
    ]
}

const persistedState = loadState()

export const store = createStore(
    recipeReducer,
    persistedState || initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.devToolsExtension()
);

store.subscribe(() => {
    saveState(store.getState())
});

function recipeReducer(state, { type, payload }) {
    switch(type) {
        case ADD_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, payload]
            }
        case UPDATE_RECIPE: 
            return {
                ...state,
                recipes: state.recipes.map(recipe => (recipe.id === payload) ? 
                    {...recipe, title: payload.title, ingredients: payload.ingredients} : 
                    recipe
                )
            }
        case DELETE_RECIPE:
            return {
                ...state,
                recipes: state.recipes.filter(recipe => (recipe.id !== payload))
            }
        case DELETE_ALL:
            return {
                ...state,
                recipes: []
            }
        default:
            return state
    }
} 


export const addRecipeAction = ( recipe ) => ({
    type: ADD_RECIPE,
    payload: recipe
})

export const updateRecipeAction = ( id_recipe ) => ({
    type: UPDATE_RECIPE,
    payload: id_recipe
})

export const deleteRecipeAction = ( id_recipe ) => ({
    type: DELETE_RECIPE,
    payload: id_recipe
})

export const deleteAllAction = () => ({
    type: DELETE_ALL
})

