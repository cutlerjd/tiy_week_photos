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