const initialState = {
    characters: [],
    info: {},
}

export const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CHARACTERS':
            return {...state, characters: action.payload}

        case 'SET_INFO_CHARACTERS':
            return {...state, info: action.payload}

        default:
            return {...state}
    }
}
