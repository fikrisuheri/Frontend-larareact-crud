const initialState = {
    alertMessage: ''
}

const Alert = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TRUE':
            return {
                ...state,
                alertMessage: action.message
            }
        case 'SET_FALSE':
            return {
                ...state,
                alertMessage: action.message
            }
        default:
            return state
    }
}
export default Alert