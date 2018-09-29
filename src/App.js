import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

//CSS
import './App.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'; 

//logic
import { getLetterData } from './logic/logic';


//////////////////////////////////////////////////////////////

        ///// DON'T FORGET TO WRITE JEST TESTING /////

//////////////////////////////////////////////////////////////

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
    let testArr = getLetterData(longString);
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
          <BootstrapTable data={this.state.letterDisplay}>
            <TableHeaderColumn isKey dataField='letter'>Letter</TableHeaderColumn>
            <TableHeaderColumn dataField='number'>Number</TableHeaderColumn>
          </BootstrapTable>
          :
          <div>Submit the sentences to view the data</div>}
        </div>
      </div>
    );
  }
}

export default App;
