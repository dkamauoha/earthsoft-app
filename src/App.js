import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Modal, Button } from 'react-bootstrap';

//CSS
import './App.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'; 

//logic
import { getLetterData } from './logic/logic';

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
      show: false
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClose = () => {
    this.setState({show: false});
  };

  handleShow = () => {
    this.setState({show: true});
  };

  handleAllInputs = () => {
    let longString = `${this.state.sentenceOne} ${this.state.sentenceTwo} ${this.state.sentenceThree} ${this.state.sentenceFour} ${this.state.sentenceFive}`
    let testArr = getLetterData(longString);
    this.setState({letterDisplay: testArr});
    this.handleShow();
  }

  render() {
    return (
      <div className="App">
      <div></div>
        <div className='input-container' style={{marginTop: '10%'}}>
        <h2 >Add Sentences</h2>
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
        <Button className='submit-button'
          onClick={this.handleAllInputs}
          bsStyle='primary'
          bsSize='small'>
          Submit
        </Button>
        </div>
        <div className='letter-display-container'>
          {this.state.letterDisplay[0]
          ?
          <Modal 
            show={this.state.show}
            onHide={this.handleClose}
            dialogClassName='custom-modal'
            style={{height: '500px', marginTop: '100px'}}
            >
            <BootstrapTable data={this.state.letterDisplay}>
              <TableHeaderColumn isKey dataField='letter'>Letter</TableHeaderColumn>
              <TableHeaderColumn dataField='number'>Number</TableHeaderColumn>
            </BootstrapTable>
            <Button
             style={{marginTop: '10px', marginBottom: '10px'}}
             onClick={this.handleClose}
             >Close</Button>
          </Modal>
          :
          <div></div>}
        </div>
      </div>
    );
  }
}

export default App;
