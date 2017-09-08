import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'

import AlbumsView from './AlbumsView'
import AlbumView from './AlbumView'
import PhotoView from './PhotoView'

import {fetchAlbums} from '../actions/photoActions'

class App extends Component {
  componentWillMount(){
    fetchAlbums()
    console.log()
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
          <Route exact path="/" component={AlbumsView}/>
          <Route exact path="/album/:id" component={AlbumView}/>
          <Route exact path="/album/:albumId/:photoId" component={PhotoView}/>
          <div className="App">
          <h2>Base Photo App</h2>
        </div>
          </Switch>
          
        </Router>
      </Provider>
    );
  }
}

export default App;
