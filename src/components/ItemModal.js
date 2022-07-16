import React from 'react';
import ItemCard from './itemCard/ItemCard';

import './styles/ItemModal.css';

function ItemModal({ visible, close, item, setItem }) {
  const handleClose = () => {
    setTimeout(() => {
      setItem(null);
    }, 200);
    close();
  };

  return (
    <>
      <div
        className={`global-dimmer ${visible ? 'visible' : ''}`}
        onClick={handleClose}
      />
      <div className={`item-modal ${visible ? 'visible' : ''}`}>
        {visible && <ItemCard item={item} />}
      </div>
    </>
  );
}

export default ItemModal;
