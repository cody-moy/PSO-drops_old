import React, { useEffect, useState } from 'react';

import './styles/ItemModal.css';

function ItemModal({ visible, close, item, setItem }) {
  const [searching, setSearching] = useState(true);

  useEffect(() => {
    if (visible) {
      setSearching(true);
      findItem();
    }
  }, [visible]);

  const findItem = () => {
    console.log('searching for item...');
  };

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
        <span>{item}</span>
      </div>
    </>
  );
}

export default ItemModal;
