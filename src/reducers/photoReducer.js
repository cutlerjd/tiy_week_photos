const initialState = {
    albums: [],
    open: false
}

export default function (state = initialState, action) {
    switch(action.type){
        case 'FETCH_ALBUMS':
            return {...state,albums:action.albums}
        case 'NAV':
            return {...state,open:action.open}
        default:
            return state
    }
}