import { Component } from 'react';
import './App.css';
import Counter from './components/Counter';

class App extends Component {
  state = {
    isVisisble: false,
  };

  toggleVisibility = () =>
    this.setState({ isVisisble: !this.state.isVisisble });

  render() {
    return (
      <div className="App">
        <button className="visibility-btn" onClick={this.toggleVisibility}>
          {this.state.isVisisble ? 'Hide' : 'Show'} Counter
        </button>
        {/* {this.state.isVisisble ? <Counter /> : ''} */}
        {this.state.isVisisble && <Counter title="Workshop State" />}
      </div>
    );
  }
}

export default App;
