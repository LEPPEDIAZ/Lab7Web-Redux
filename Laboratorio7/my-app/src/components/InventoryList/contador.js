import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0
  }

  _click = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  _clickresta = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render () {
    return <div>
      <h3>{this.state.count}</h3>
      <button onClick={this._click}>Like</button>
      <button onClick={this._clickresta}>Dont Like</button>
    </div>
  }
}

export default Counter