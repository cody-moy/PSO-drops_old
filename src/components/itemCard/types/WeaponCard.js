import React from 'react';
import buildClassMatrix from '../../../Utils/buildClassTable';

function WeaponCard({ item, itemType }) {
  const {
    name,
    rarity,
    ATP,
    ATA,
    grind,
    special,
    requirement,
    classes,
    notes
  } = item;

  return (
    <div>
      <div className="item-card__header">
        <h1 className="item-card__name">{name}</h1>
        <p className="item-card__type">
          {itemType}
          {item.type && item.type.subObject && ` / ${item.type.subObject}`}
        </p>
      </div>
      <p>Rarity: {rarity}</p>
      <table className="stats-table">
        <tr>
          <th>ATP</th>
          <th>ATA</th>
          <th>Max grind</th>
          <th>Special</th>
          <th>Requirement</th>
        </tr>
        <tr>
          <td>{typeof ATP === 'object' ? `${ATP.min} - ${ATP.max}` : ATP}</td>
          <td>{typeof ATA === 'object' ? `${ATA.min} - ${ATA.max}` : ATA}</td>
          <td>{grind}</td>
          <td className={!special ? 'dim' : null}>{special || 'None'}</td>
          <td>
            {requirement ? `${requirement.amount} ${requirement.stat}` : 'None'}
          </td>
        </tr>
      </table>
      <div>{buildClassMatrix(classes)}</div>
      {notes && (
        <div className="item-card__notes">
          <p>Notes:</p>
          <ul>
            {notes.split('; ').map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default WeaponCard;
