import React, { Component } from 'react'

class Comentarios extends Component {
    constructor(){
        super();
        this.state = {
            text: ""
        };
    }
    clicked(){
        this.setState({text: this.refs.textBox.value});
    }
    render () {
      return <div>
        {this.state.text}
        <br></br>
        <br></br>
        <input ref="textBox" type="text" />
        <br></br>
        <button onClick={ (e) => {this.clicked(); }}>Ingresa Comentario</button>
      </div>
    }
  }
  
  export default Comentarios