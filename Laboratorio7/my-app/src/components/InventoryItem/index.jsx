import React from 'react';
import { connect } from 'react-redux';
import {createStore} from 'redux';
import * as actions from '../../actions';
import Counter from '../InventoryList/contador';
import Resta from '../InventoryList/resta';


const InventoryItem = ({
  name,
  price,
  qty,
  comentario,
  onClick,
  onSubmit,
  
}) => (
  <li>
    <h2>
    {name}
    </h2>
    <h4>
    {price}
    </h4>
    <br></br>
    
  
   
    ({qty}):
    <Counter />
    <Resta />
    <input
          type="text"
          placeholder="Ingrese un comentario"
          ref={ node => { this.comentarioInput = node; } }
        />
    <button
          onClick={
            () => {
              onSubmit(
                this.comentarioInput.value,
              
              );

              this.comentarioInput.value = "";
              this.comentarioInput.focus();
              
            }
          }
        >
          Ingresar nuevo Comentario
        </button>
        <h2>{comentario}</h2>
        
    
  </li>
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
      //dispatch(actions.addToInventory(uuid(), name, price, qty));
      dispatch(actions.addToInventory( comentario));
     
    }

  }),
)(InventoryItem);
