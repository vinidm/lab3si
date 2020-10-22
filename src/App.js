import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Display } from "./components/Display";
import { ClearButton } from "./components/ClearButton";
import { SignalButton } from "./components/SignalButton";
import { MemoryButton } from "./components/MemoryButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previousOperand: '',
      currentOperand: '',
      operation: '',
      memory: ['','','','','','','','','']
    };
  }

  addToInput = val => {
    this.setState({ currentOperand: this.state.currentOperand + val });
  };

  signalInversor = val => {
    var newoperand = parseFloat(this.state.currentOperand);
    newoperand = -newoperand
    this.setState({ currentOperand: newoperand });
  };

  getOperation = val => {
    this.setState({
      previousOperand: this.state.currentOperand,
      currentOperand: '',
      operation: val
    });
  };

  handleEqual = () => {
    var x = parseFloat(this.state.previousOperand);
    var y = parseFloat(this.state.currentOperand)
    if (this.state.operation == "÷"){
      var result = x/y;
    }
    if (this.state.operation == "X"){
      var result = x*y;
    }
    if (this.state.operation == "+"){
      var result = x+y;
    }
    if (this.state.operation == "-"){
      var result = x-y;
    }
    this.setState({
      previousOperand: this.state.previousOperand+this.state.operation+this.state.currentOperand+"=",
      currentOperand: result,
      operation: ''
    });
  };

  memoryOperation = val => {
    var newoperand = this.state.currentOperand;
    var memnew = this.state.memory
    if (val == "MC"){
      memnew = ['','','','','','','','',''];
    }
    if (val == "MR"){
      newoperand = this.state.memory[0];
    }
    if (val == "M+"){
      memnew[0] = parseFloat(memnew[0])+parseFloat(newoperand);
    }
    if (val == "MS"){
      memnew = [newoperand,memnew[0],memnew[1],memnew[2],memnew[3],memnew[4],memnew[5],memnew[6],memnew[7]];
      newoperand = ''
    }
    this.setState({
      currentOperand: newoperand,
      memory: memnew
    });
  };

  operationinMemory1 = val => {
    var newoperand = this.state.currentOperand;
    var memnew = this.state.memory
    if (val == "MC"){
      memnew = [memnew[1],memnew[2],memnew[3],memnew[4],memnew[5],memnew[6],memnew[7],memnew[8],''];
    }
    if (val == "MR"){
      newoperand = this.state.memory[0];
    }
    this.setState({
      currentOperand: newoperand,
      memory: memnew
    });
  };

  operationinMemory2 = val => {
    var newoperand = this.state.currentOperand;
    var memnew = this.state.memory
    if (val == "MC"){
      memnew = [memnew[0],memnew[2],memnew[3],memnew[4],memnew[5],memnew[6],memnew[7],memnew[8],''];
    }
    if (val == "MR"){
      newoperand = this.state.memory[1];
    }
    this.setState({
      currentOperand: newoperand,
      memory: memnew
    });
  };

  operationinMemory3 = val => {
    var newoperand = this.state.currentOperand;
    var memnew = this.state.memory
    if (val == "MC"){
      memnew = [memnew[0],memnew[1],memnew[3],memnew[4],memnew[5],memnew[6],memnew[7],memnew[8],''];
    }
    if (val == "MR"){
      newoperand = this.state.memory[2];
    }
    this.setState({
      currentOperand: newoperand,
      memory: memnew
    });
  };

  operationinMemory4 = val => {
    var newoperand = this.state.currentOperand;
    var memnew = this.state.memory
    if (val == "MC"){
      memnew = [memnew[0],memnew[1],memnew[2],memnew[4],memnew[5],memnew[6],memnew[7],memnew[8],''];
    }
    if (val == "MR"){
      newoperand = this.state.memory[3];
    }
    this.setState({
      currentOperand: newoperand,
      memory: memnew
    });
  };

  operationinMemory5 = val => {
    var newoperand = this.state.currentOperand;
    var memnew = this.state.memory
    if (val == "MC"){
      memnew = [memnew[0],memnew[1],memnew[2],memnew[3],memnew[5],memnew[6],memnew[7],memnew[8],''];
    }
    if (val == "MR"){
      newoperand = this.state.memory[4];
    }
    this.setState({
      currentOperand: newoperand,
      memory: memnew
    });
  };

  operationinMemory6 = val => {
    var newoperand = this.state.currentOperand;
    var memnew = this.state.memory
    if (val == "MC"){
      memnew = [memnew[0],memnew[1],memnew[2],memnew[3],memnew[4],memnew[6],memnew[7],memnew[8],''];
    }
    if (val == "MR"){
      newoperand = this.state.memory[5];
    }
    this.setState({
      currentOperand: newoperand,
      memory: memnew
    });
  };

  operationinMemory7 = val => {
    var newoperand = this.state.currentOperand;
    var memnew = this.state.memory
    if (val == "MC"){
      memnew = [memnew[0],memnew[1],memnew[2],memnew[3],memnew[4],memnew[5],memnew[7],memnew[8],''];
    }
    if (val == "MR"){
      newoperand = this.state.memory[6];
    }
    this.setState({
      currentOperand: newoperand,
      memory: memnew
    });
  };

  operationinMemory8 = val => {
    var newoperand = this.state.currentOperand;
    var memnew = this.state.memory
    if (val == "MC"){
      memnew = [memnew[0],memnew[1],memnew[2],memnew[3],memnew[4],memnew[5],memnew[6],memnew[8],''];
    }
    if (val == "MR"){
      newoperand = this.state.memory[7];
    }
    this.setState({
      currentOperand: newoperand,
      memory: memnew
    });
  };

  operationinMemory9 = val => {
    var newoperand = this.state.currentOperand;
    var memnew = this.state.memory
    if (val == "MC"){
      memnew = [memnew[0],memnew[1],memnew[2],memnew[3],memnew[4],memnew[5],memnew[6],memnew[7],''];
    }
    if (val == "MR"){
      newoperand = this.state.memory[8];
    }
    this.setState({
      currentOperand: newoperand,
      memory: memnew
    });
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Display display={(this.state.previousOperand+this.state.operation)}/>
          <Input input={this.state.currentOperand}/>
          <div className="row">
            <MemoryButton handleClick={this.memoryOperation}>MC</MemoryButton>
            <MemoryButton handleClick={this.memoryOperation}>MR</MemoryButton>
            <MemoryButton handleClick={this.memoryOperation}>M+</MemoryButton>
            <MemoryButton handleClick={this.memoryOperation}>MS</MemoryButton>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ 
              currentOperand: ''
              })}>
              AC
            </ClearButton>
            <SignalButton handleClick={() => this.signalInversor()}>+/-</SignalButton>
            <Button handleClick={() => this.handleEqual()}>=</Button>
          </div>
          <div className="row">
            <Button handleClick={this.getOperation}>÷</Button>
            <Button handleClick={this.getOperation}>X</Button>
            <Button handleClick={this.getOperation}>+</Button>
            <Button handleClick={this.getOperation}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
          </div>
        </div>
      
        <div className="calc-wrapper">
          <div className="row">
            <Display display={this.state.memory[0]}/>
            <MemoryButton handleClick={this.operationinMemory1}>MC</MemoryButton>
            <MemoryButton handleClick={this.operationinMemory1}>MR</MemoryButton>
          </div>
          <div className="row">
            <Display display={this.state.memory[1]}/>
            <MemoryButton handleClick={this.operationinMemory2}>MC</MemoryButton>
            <MemoryButton handleClick={this.operationinMemory2}>MR</MemoryButton>
          </div>
          <div className="row">
            <Display display={this.state.memory[2]}/>
            <MemoryButton handleClick={this.operationinMemory3}>MC</MemoryButton>
            <MemoryButton handleClick={this.operationinMemory3}>MR</MemoryButton>
          </div>
          <div className="row">
            <Display display={this.state.memory[3]}/>
            <MemoryButton handleClick={this.operationinMemory4}>MC</MemoryButton>
            <MemoryButton handleClick={this.operationinMemory4}>MR</MemoryButton>
          </div>
          <div className="row">
            <Display display={this.state.memory[4]}/>
            <MemoryButton handleClick={this.operationinMemory5}>MC</MemoryButton>
            <MemoryButton handleClick={this.operationinMemory5}>MR</MemoryButton>
          </div>
          <div className="row">
            <Display display={this.state.memory[5]}/>
            <MemoryButton handleClick={this.operationinMemory6}>MC</MemoryButton>
            <MemoryButton handleClick={this.operationinMemory6}>MR</MemoryButton>
          </div>
          <div className="row">
            <Display display={this.state.memory[6]}/>
            <MemoryButton handleClick={this.operationinMemory7}>MC</MemoryButton>
            <MemoryButton handleClick={this.operationinMemory7}>MR</MemoryButton>
          </div>
          <div className="row">
            <Display display={this.state.memory[7]}/>
            <MemoryButton handleClick={this.operationinMemory8}>MC</MemoryButton>
            <MemoryButton handleClick={this.operationinMemory8}>MR</MemoryButton>
          </div>
          <div className="row">
            <Display display={this.state.memory[8]}/>
            <MemoryButton handleClick={this.operationinMemory9}>MC</MemoryButton>
            <MemoryButton handleClick={this.operationinMemory9}>MR</MemoryButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
