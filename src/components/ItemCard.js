import React from 'react';

import './styles/ItemCard.css';

function ItemCard({ name, dropRate, type }) {
  return (
    <div className="item-card-container">
      <p className="item-card-name">{name || 'Item name'}</p>
      <p className="item-card-drop-rate">
        Drop rate: <span>{dropRate || 'rate'}</span>
      </p>
    </div>
  );
}

export default ItemCard;
