import {createStore} from 'redux'
import photoReducer from './reducers/photoReducer'

let store = createStore(photoReducer)

export default store