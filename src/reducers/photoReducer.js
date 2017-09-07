let initialState = {
    photos: []
}

export default function (state = initialState, payload) {
    switch(payload.type){
        case actions.LOAD_DATA:
        return {...state,photos:payload.photos}
        default:
         return state
    }
}