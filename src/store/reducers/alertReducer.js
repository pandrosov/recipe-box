import { SHOW_ALERT, HIDE_ALERT } from '../actions/actionsTypes';

const handlers = {
  [SHOW_ALERT]: (state,action) => action.payload,
  [HIDE_ALERT]: () => null,
  DEFAULT: state => state
}  

const alertReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state,action)
}

export default alertReducer;