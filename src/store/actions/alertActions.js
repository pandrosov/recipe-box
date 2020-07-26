import {
    SHOW_ALERT, 
    HIDE_ALERT
} from './actionsTypes'

export const showAlert = (type, text) => ({
    type: SHOW_ALERT,
    payload: {type, text}
});

export const hideAlert = () => ({
    type: HIDE_ALERT
})
