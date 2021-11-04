import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      inputValue: 1,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.incrementCounterBy5 = this.incrementCounterBy5.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.decrementCounterBy5 = this.decrementCounterBy5.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetInput = this.resetInput.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      inputValue: +value,
    });
  }

    // Outra opção para a função acima
  // handleChange = (e) => {
  //   this.setState({
  //     inputValue: Number(e.target.value),
  //   });
  // };

  resetInput(e) {
    e.target.value = "";
  }

  incrementCounter() {
    const { counter, inputValue } = this.state;
    this.setState({
      counter: counter + inputValue,
    });
  }

  incrementCounterBy5() {
    const { counter } = this.state;
    this.setState({
      counter: counter + 5,
    });
  }

  decrementCounter() {
    const { counter, inputValue } = this.state;
    this.setState({
      counter: counter - inputValue,
    });
  }

  decrementCounterBy5() {
    const { counter } = this.state;
    this.setState({
      counter: counter - 5,
    });
  }

  render() {
    const { counter, inputValue } = this.state;
    const { 
      decrementCounter, 
      decrementCounterBy5, 
      incrementCounter, 
      incrementCounterBy5, 
      handleChange, 
      resetInput } = this;
    return (
      <div className="container">
        <h3>My Counter</h3>
        <h2>{ counter }</h2>
        <button type="button" onClick={ decrementCounterBy5 } >
          -5
        </button>
        <button type="button" onClick={ decrementCounter }>
          -
        </button>
        <input
          className="input"
          data-testid="input"
          type="number"
          value={ inputValue }
          onChange={ handleChange }
          onFocus={(e) => resetInput(e)}
        />
        <button type="button" onClick={ incrementCounter }>
          +
        </button>
        <button type="button" onClick={ incrementCounterBy5 }>
          +5
        </button>
      </div>
    );
  }
}

export default Counter;