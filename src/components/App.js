import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
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
