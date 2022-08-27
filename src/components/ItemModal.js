import React, { useEffect, useCallback } from 'react';
import ItemCard from './itemCard/ItemCard';

import './styles/ItemModal.css';

function ItemModal({ visible, close, item, setItem }) {
  useEffect(() => {
    if (visible) window.addEventListener('keydown', handleKeyDown);
    else window.removeEventListener('keydown', handleKeyDown);
  }, [visible]);

  const handleKeyDown = useCallback(e => {
    if (e.key === 'Escape') close();
  }, []);

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
