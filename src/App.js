import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet/Greet';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    Persons: [
      {id:1, name:'John', age:28},
      {id:2, name:'Ashley', age:19},
      {id:3, name:'Marco', age:24}
    ],
    ShowState: false
  };

  UsernameChangedHandler = (event) =>{
    return this.setState({input: event.target.value})
  };
  UsernameShowHandler = (event) =>{
    const DoesShow = this.state.ShowState
    this.setState({ShowState: !DoesShow})
  };


  render() {
    let Persons = null;
    if(this.state.ShowState){
      Persons=(
       <div>
          <UserInput change = {this.UsernameChangedHandler}
          />
          // <UserOutput name = 'Ashley' age = {19} />
          {this.state.Persons.map((Person) => {
            return <UserOutput name = {Person.name}
            id = {Person.id}
            age = {Person.age}
            key = {Person.id} />
            })
          }
      </div>);
    }

    return (
      <div className="App">
        <h1>Aggieland</h1>
        <Greet />
        <button onClick={this.UsernameShowHandler}>Show Users </button>
        {Persons}
      </div>
    );
  }
};

export default App;
