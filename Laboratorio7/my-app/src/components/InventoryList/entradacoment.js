import React, { Component } from 'react';

class Entrada extends Component {
    constructor(props){
        super(props);

        this.state = {
            userInput:'',
            list: []
        }
    }
    changeUserInput(input){
        this.setState({
            userInput: input
        });
    }
    addtoList(input){
        let listArray = this.state.list;

        listArray.push(input);

        this.setState({
            list: listArray,
        
        })
    }
    render () {
      return <div>
        <input
        onChange={(e)=> this.changeUserInput(e.target.value)}
        value = {this.state.userInput}
        type="text"
        />
        <br></br>
        <button onClick={()=> this.addtoList(this.state.userInput)}>Ingresar Comentario</button>
       
            <h5>
            {this.state.list.map( (val)=> <li>{val}</li>)}
            </h5>
      
      </div>
    }
  }
  
  export default Entrada