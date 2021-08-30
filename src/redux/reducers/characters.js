const initialState = {
    charactersStore: [],
    infoStore: {},
}

export const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CHARACTERS':
            return {...state, charactersStore: action.payload}
        case 'SET_INFO_CHARACTERS':
            return {...state, infoStore: action.payload}
        default:
            return {...state}
    }
}
