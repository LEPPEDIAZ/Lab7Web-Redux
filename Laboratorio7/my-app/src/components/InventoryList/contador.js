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

  render () {
    return <div>
      <h1>{this.state.count}</h1>
      <button onClick={this._click}>Like</button>
    </div>
  }
}

export default Counter