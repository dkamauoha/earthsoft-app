import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

//CSS
import './App.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'; 

class App extends Component {
  constructor () {
    super();
    this.state = {
      sentenceOne: '',
      sentenceTwo: '',
      sentenceThree: '',
      sentenceFour: '',
      sentenceFive: '',
      letterDisplay: [],
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleAllInputs = () => {
    let longString = `${this.state.sentenceOne} ${this.state.sentenceTwo} ${this.state.sentenceThree} ${this.state.sentenceFour} ${this.state.sentenceFive}`
    let lowerCaseLongString = longString.toLowerCase();
    let strArr = lowerCaseLongString.split('');
    let testArr = [
      {id: 1, letter: 'a', number: 0},
      {id: 2, letter: 'b', number: 0},
      {id: 3, letter: 'c', number: 0},
      {id: 4, letter: 'd', number: 0},
      {id: 5, letter: 'e', number: 0},
      {id: 6, letter: 'f', number: 0},
      {id: 7, letter: 'g', number: 0},
      {id: 8, letter: 'h', number: 0},
      {id: 9, letter: 'i', number: 0},
      {id: 10, letter: 'j', number: 0},
      {id: 11, letter: 'k', number: 0},
      {id: 12, letter: 'l', number: 0},
      {id: 13, letter: 'm', number: 0},
      {id: 14, letter: 'n', number: 0},
      {id: 15, letter: 'o', number: 0},
      {id: 16, letter: 'p', number: 0},
      {id: 17, letter: 'q', number: 0},
      {id: 18, letter: 'r', number: 0},
      {id: 19, letter: 's', number: 0},
      {id: 20, letter: 't', number: 0},
      {id: 21, letter: 'u', number: 0},
      {id: 22, letter: 'v', number: 0},
      {id: 23, letter: 'w', number: 0},
      {id: 24, letter: 'x', number: 0},
      {id: 25, letter: 'y', number: 0},
      {id: 26, letter: 'z', number: 0},
    ]
    strArr.forEach(e => {
      let index = testArr.findIndex(el => e === el.letter);
      if (index !== -1) {
        testArr[index].number++;
      }
    })
    this.setState({letterDisplay: testArr});
  }

  render() {
    // let display = this.state.letterDisplay.map((letter, i) => (
    //   <div className='letter-display' key={i}>
    //     <p>{letter.letter}: {letter.number}</p>
    //   </div>
    // ))
    return (
      <div className="App">
        <div>App</div>
        <div className='input-container'>
          <input name='sentenceOne'
            className='input'
            placeholder='Sentence One'
            onChange={(e) => this.handleChange(e)}/>
          <input name='sentenceTwo'
            className='input'
            placeholder='Sentence Two'
            onChange={(e) => this.handleChange(e)}/>
          <input name='sentenceThree'
            className='input'
            placeholder='Sentence Three'
            onChange={(e) => this.handleChange(e)}/>
          <input name='sentenceFour'
            className='input'
            placeholder='Sentence Four'
            onChange={(e) => this.handleChange(e)}/>
          <input name='sentenceFive'
            className='input'
            placeholder='Sentence Five'
            onChange={(e) => this.handleChange(e)}/>
        </div>
        <button className='submit-button'
          onClick={this.handleAllInputs}>
          Submit
        </button>
        <div className='letter-display-container'>
          {this.state.letterDisplay[0]
          ?
          // <div className='letter-display-container'>
          //   <h4>Occurences of Each Letter</h4>  
          //   <div className='letters-container'>
          //     {display}
          //   </div>
          // </div>
          <BootstrapTable data={this.state.letterDisplay}>
            <TableHeaderColumn isKey dataField='letter'>Letter</TableHeaderColumn>
            <TableHeaderColumn dataField='number'>Number</TableHeaderColumn>
          </BootstrapTable>
          :
          <div></div>}
        </div>
      </div>
    );
  }
}

export default App;
