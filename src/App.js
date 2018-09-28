import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      sentenceOne: '',
      sentenceTwo: '',
      sentenceThree: '',
      sentenceFour: '',
      sentenceFive: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.table(this.state);``
    return (
      <div className="App">
        <div>App</div>
        <input name='sentenceOne'
          onChange={(e) => this.handleChange(e)}/>
        <input name='sentenceTwo'
          onChange={(e) => this.handleChange(e)}/>
        <input name='sentenceThree'
          onChange={(e) => this.handleChange(e)}/>
        <input name='sentenceFour'
          onChange={(e) => this.handleChange(e)}/>
        <input name='sentenceFive'
          onChange={(e) => this.handleChange(e)}/>
      </div>
    );
  }
}

export default App;
