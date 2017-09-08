import store from '../store';
import axios from 'axios';

export function fetchAlbums() {
    return axios.get("/albums").then(function(response){
      store.dispatch({
        type:'FETCH_ALBUMS',
        albums: response.data
      })
    })
  }

export function closeNav(){
  console.log("Close nave called")
  store.dispatch({
    type:'NAV',
    open:false
  })
}
export function openNav(){
  console.log("Open nav called")
  store.dispatch({
    type:'NAV',
    open:true
  })
}