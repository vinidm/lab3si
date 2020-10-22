import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Display } from "./components/Display";
import { ClearButton } from "./components/ClearButton";
import { SignalButton } from "./components/SignalButton";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previousOperand: '',
      currentOperand: '',
      operation: ''
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

  render() {
    return (
      <div className="app">
       <div className="calc-wrapper">
          <Display display={(this.state.previousOperand+this.state.operation)}/>
          <Input input={this.state.currentOperand}/>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ 
              previousOperand: this.state.currentOperand,
              currentOperand: '',
              operation: ''
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
      </div>
    );
  }
}

export default App;