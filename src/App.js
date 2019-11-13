import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userName: "sinadd"
  };

  changeUserNameHandler = (oEvent) => {
    this.setState({
      userName: oEvent.target.value
    });
  };

  render() {
    const userOutputStyle = {
      border:"1px solid magenta",
      font:"Constantia",
      "font-style": "italic"
    };

    return (
      <div className="App">
        <UserInput 
          nameChangeHandler={this.changeUserNameHandler}
          userName={this.state.userName}
          />
        <UserOutput 
          styling={userOutputStyle}
          userName={this.state.userName}
        />
      </div>
    );
  }
}

export default App;
