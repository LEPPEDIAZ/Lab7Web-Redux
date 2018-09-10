//import uuid from 'uuid-v4';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';



class InventoryFormDummy extends React.Component {
  render() {
    const { onSubmit } = this.props;

    return (
      
      <Fragment>
        <input
          type="text"
          placeholder="@usuario"
          ref={ node => { this.nameInput = node; } }
        />
        <br></br>
        <input
          type="text"
          placeholder="Titulo"
          ref={ node => { this.priceInput = node; } }
        />
        <br></br>
        <input
          type="text"
          placeholder="Ingrese el contenido"
          ref={ node => { this.qtyInput = node; } }
        />
        <br></br>
        <button
          onClick={
            () => {
              onSubmit(
                this.nameInput.value,
                this.priceInput.value,
                this.qtyInput.value,
              );

              this.nameInput.value = "";
              this.priceInput.value = "";
              this.qtyInput.value = "";
              this.nameInput.focus();
            }
          }
        >
          Enviar
        </button>
      </Fragment>
    );
  }
};

export default connect(
  undefined,
  dispatch => ({
    onSubmit(name, price, qty) {
      //dispatch(actions.addToInventory(uuid(), name, price, qty));
      dispatch(actions.addToInventory( name, price, qty));
    }
  })
)(InventoryFormDummy);
