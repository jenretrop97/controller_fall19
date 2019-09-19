import React, { Component } from 'react';

class App extends Component {
  state = { value: 0 }

  inc = () => {
    this.setState( (state) => {
      return { value: state.value + 1}
    })
    console.log(this.state.value)
  }

  dec() {
    this.setState({ value: this.state.value - 1 })
    this.setState( (state) => {
      return { value: state.value - 1}
    })
    console.log(this.state.value)
  }
  }

  render() {
    return (
      <div>
        <h1 className='colored'>Counter Example</h1>
        <p>{this.state.value}</p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    )
  }
}

export default App;
