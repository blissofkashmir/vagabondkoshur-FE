import React, { Component } from 'react';
import Login from './views/login/login';
import './App.css';




class App extends Component {

  constructor(props){

    super(props);

    this.state = {

      userName:'amjad',
      password:'aaa',
      attemptedUserName:'',
      attemptedPassword:'',

    };

    this.validateUser = this.validateUser.bind(this);
    this.onInputUserName = this.onInputUserName.bind(this);
    this.onInputPassword = this.onInputPassword.bind(this);

  }

  validateUser(attemptedUserName,attemptedPassword){

    if(this.state.attemptedUserName === this.state.userName){

      if(this.state.attemptedPassword === this.state.password){

        console.log("Login Successful");
        return;
      }
    }

    console.log("Login Unsuccessful");
  }

  onInputUserName(attemptedUserName){

    this.setState(
      {attemptedUserName}
    )

  }

  onInputPassword(attemptedPassword){

    this.setState(
      {attemptedPassword}
    )

  }

  
  render() {
    //Main Application File
    return (
      <div className="app-container">
        <Login validateUser={this.validateUser} onInputUserName={this.onInputUserName} onInputPassword={this.onInputPassword}></Login>
      </div>
    );
  }
}

export default App;
