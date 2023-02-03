import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      timer: 0,
    };
    console.log('run constructor');
  }

  increment = () => {
    // console.log(this);
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => this.setState({ counter: this.state.counter - 1 });

  reset = () => this.setState({ counter: 0 });

  componentDidMount = () => {
    console.log('run componentDidMount');
    this.intervalId = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
    console.log(this.intervalId);
  };

  componentDidUpdate = () => {
    console.log('run componentDidUpdate');
  };

  componentWillUnmount = () => {
    console.log('run componentWillUnmount');
    clearInterval(this.intervalId);
  };

  render() {
    console.log('run render');
    const { title } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <button className="increment-btn" onClick={this.increment}>
          +
        </button>{' '}
        <span>{this.state.counter}</span>{' '}
        <button className="decrement-btn" onClick={this.decrement}>
          -
        </button>
        <div>
          <button className="reset-btn" onClick={this.reset}>
            Reset
          </button>
        </div>
        <h2>{this.state.timer}</h2>
      </div>
    );
  }
}

export default Counter;
