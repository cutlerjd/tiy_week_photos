let initialState = {
    albums: []
}

export default function (state = initialState, payload) {
    switch(payload.type){
        case 'FETCH_ALBUMS':
        return {...state,albums:payload.albums}
        default:
         return state
    }
}