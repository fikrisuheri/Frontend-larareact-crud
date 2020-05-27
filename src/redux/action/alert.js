export const setAlertTrue = message => ({
    type: 'SET_TRUE',
    message: message
})

export const setAlertFalse = () => ({
    type: 'SET_FALSE',
    message: ''
})