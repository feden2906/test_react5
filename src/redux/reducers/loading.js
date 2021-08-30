const initialState = {
    loading: null,
}

export const loadingReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING':
            return {...state, loading: true}

        case 'DONE':
            return {...state, loading: false}

        default:
            return {...state}
    }
}
