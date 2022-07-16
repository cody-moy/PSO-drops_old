import React, { useState, useEffect } from 'react';

import './styles/ItemCard.css';

function ItemCard({ item }) {
  const [searching, setSearching] = useState(true);

  console.log('received item:');

  useEffect(() => {
    setSearching(true);
    console.log('searching for item...');
    findItem();
  }, []);

  const findItem = () => {};

  return (
    <div className="item-card-container">
      <span>{JSON.stringify(item)}</span>
      {/* <p className="item-card-name">{name || 'Item name'}</p>
      <p className="item-card-drop-rate">
        Drop rate: <span>{dropRate || 'rate'}</span>
      </p> */}
    </div>
  );
}

export default ItemCard;
