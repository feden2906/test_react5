const initialState = {
    locationStore: [],
    infoStore: {},
}

export const episodeReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_EPISODE':
            return {...state, charactersStore: action.payload}

        case 'SET_INFO_EPISODE':
            return {...state, infoStore: action.payload}

        default:
            return {...state}
    }
}
