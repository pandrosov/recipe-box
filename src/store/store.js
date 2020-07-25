import { createStore, compose } from 'redux'
import { loadState, saveState } from '../helpers/localStorage'
import rootReducer from './reducers/rootReducer'

const persistedState = loadState()

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;


export const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers()
);

store.subscribe(() => {
    saveState(store.getState())
});
