import React from 'react';
import { connect } from 'react-redux';
import {createStore} from 'redux';
import * as actions from '../../actions';
import Counter from '../InventoryList/contador';
import Resta from '../InventoryList/resta';
import Comentarios from '../InventoryList/comentarios';


const InventoryItem = ({
  name,
  price,
  qty,
  comentario,
  onClick,
  onSubmit,
  
}) => (
  <div>
    <h2>
    {name}
    </h2>
    <h4>
    {price}
    </h4>
    <br></br>
    <Counter />
    
    
  
   
    
    
    <br></br>
    <Comentarios 
    type="text"
    placeholder="Ingrese un comentario"
    ref={ node => { this.comentarioInput = node; } }
    />
    <br></br>
    <button
          onClick={
            () => {
              onSubmit(
                this.comentarioInput.value,
              
              );

              this.comentarioInput.value = "";
              
              
            }
          }
        >
          Ingresar nuevo Comentario
        </button>
        <h2>{comentario}</h2>
        
    
  </div>
);

export default connect(
  (state, { id }) => ({
    ...state.inventory.byId[id],
  }),
  (dispatch, { id }) => ({
    onClick() {
      dispatch(actions.addToCart(id));
    },
    onSubmit(comentario) {
      //se comento uuid porque aunque si esta implementado no lo puedo ver porque ando con una compu vieja que no deja verlo
      //dispatch(actions.addToInventory(uuid(), name, price, qty));
      dispatch(actions.addToInventory( comentario));
     
    }

  }),
)(InventoryItem);
