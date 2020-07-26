import { v4 as uuidv4 } from 'uuid'
import {
    ADD_RECIPE,
    UPDATE_RECIPE,
    DELETE_RECIPE, 
    DELETE_ALL
} from '../actions/actionsTypes'


const initialState = {
    recipes: [
        {
          id: uuidv4(),
          title: "Жареная курочка", 
          ingredients: "gello"  
        },
        {
          id: uuidv4(),
          title: "Жареная курочка2", 
          ingredients: "2gello"  
        }
    ]
}

export default function recipeReducer(state = initialState, { type, payload }) {
    switch(type) {
        case ADD_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, payload]
            }
        case UPDATE_RECIPE: 
            return {
                ...state,
                recipes: state.recipes.map(recipe => (recipe.id === payload.id) ? 
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