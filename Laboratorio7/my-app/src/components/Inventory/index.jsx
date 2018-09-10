import React from 'react';

import InventoryList from '../InventoryList';
import InventoryForm from '../InventoryForm';
import Counter from '../InventoryList/contador';


const Inventory = () => (
  <div className="inventory">
    
    <InventoryList />
    <InventoryForm />
  </div>
);

export default Inventory;
