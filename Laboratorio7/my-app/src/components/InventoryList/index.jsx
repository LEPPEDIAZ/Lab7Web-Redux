import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';
import InventoryItem from '../InventoryItem';


const InventoryList = ({ products = [] }) => (
  <Fragment>
    <h1>{'Reddit Blog:'}</h1>
    <ul>
      {
        products.length > 0
          ? products.map(({ id }) => <InventoryItem key={id} id={id} />)
          : <li>No hay publicaciones!</li>
      }
    </ul>
  </Fragment>
);

export default connect(
  state => ({
    products: selectors.getProducts(state),
  }),
  undefined,
)(InventoryList);
