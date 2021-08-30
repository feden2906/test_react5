const initialState = {
    location: [],
    info: {}
}

export const locationReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOCATION':
            return {...state, location: action.payload}

        case 'SET_INFO_LOCATION':
            return {...state, info: action.payload}

        default:
            return {...state}
    }
}
