import React, { Component } from 'react';
import './App.css';

import Login from './views/login/login';

class App extends Component {

  
  render() {
    //Main Application File
    return (
      <div className="app-container">
        <Login></Login>
      </div>
    );
  }
}

export default App;
