import { combineReducers } from 'redux'
import recipeReducer from './recipeReducer'
import alertReducer from './alertReducer';


export default combineReducers({
    recipes: recipeReducer,
    alert: alertReducer
})