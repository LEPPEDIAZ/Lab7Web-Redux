import React, { Component } from 'react';
import {inventory} from '../reducer/index'


class ManagerView extends Component {
    constructor(){
        super();
        this.state = {
            text: ""
        };
        this.state = {
           inventory: []
        };

        
    }
    clicked(){
        this.setState({ text: this.refs.textBox.value});
    }
    
    //<button onClick={ (e) => {e.preventDefault(); this.clicked();}}>Agregar</button>
    render(){
        console.log('rendering')
        return<div>
            <span>Ingresar nombre de producto</span>
            <br></br>
            {this.state.text}
            <br />
            <input ref="textBox" type="text" />
            <button onClick={ (e) => {this.clicked();}}>Agregar</button> 
            <br></br> 

        </div>;
    }
}
export {ManagerView as default}; 