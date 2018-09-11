import React, { Component } from 'react';
import './comentarios.css';

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
        <h5>
        {this.state.text}
        </h5>
        <br></br>
        <input ref="textBox" type="text" />
        <br></br>
        <button onClick={ (e) => {this.clicked(); }}>Ingresa Comentario</button>
      </div>
    }
  }
  
  export default Comentarios