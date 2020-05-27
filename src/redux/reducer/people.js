const initialState = {
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
    peoples: []
}

const People = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PEOPLES_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false,
            };
        case 'GET_PEOPLES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_PEOPLES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                isRejected: false,
                peoples: action.payload.data.results
            }
        default:
            return state
    }
}

export default People