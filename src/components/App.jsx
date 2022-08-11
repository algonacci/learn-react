import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fighter: '',
      count: 0,
    };
  }

  handleClick(name) {
    this.setState({ fighter: name });
  }

  render() {
    console.log(this.state);
    return (
      <>
        <div>
          <h1>Your Fighter: {this.state.fighter}</h1>
          <button onClick={() => {this.handleClick('TensorFlow')}} className='tf'>TensorFlow</button>
          <button onClick={() => { this.handleClick('PyTorch')}} className='pt'>PyTorch</button>
        </div>

        <div>
          <button onClick={() => {this.handleClick('')}}>Cancel</button>
        </div>

        <div className='increment'>
          <h1>Count: {this.state.count}</h1>
          <button onClick={() => {this.setState({ count: this.state.count + 1 })}} className='button-increment'>Increment</button>
        </div>
      </>
    );
  }
}

export default App;
