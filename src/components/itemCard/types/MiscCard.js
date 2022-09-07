import React from 'react';

function MiscCard({ item }) {
  const { name, type, description } = item;

  return (
    <div>
      <div className="item-card__header">
        <h1 className="item-card__name">{name}</h1>
        <p className="item-card__type">Misc / {type}</p>
      </div>
      {description && (
        <div className="item-card__notes">
          <p>Description:</p>
          <ul>
            <li>{description}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MiscCard;
