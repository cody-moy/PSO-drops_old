import React from 'react';
import buildClassTable from '../../../Utils/buildClassTable';
import parseRarity from '../../../Utils/parseRarity';

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
    <>
      <div className="item-card__header">
        <h1 className="item-card__name">{name}</h1>
        <p className="item-card__type">{itemType}</p>
      </div>
      <div className="item-rarity">
        <span>Rarity: </span>
        {parseRarity(rarity)}
        <span> ({rarity})</span>
      </div>
      <table className="stats-table">
        <tbody>
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
              {requirement
                ? `${requirement.amount} ${requirement.stat}`
                : 'None'}
            </td>
          </tr>
        </tbody>
      </table>
      <div>{buildClassTable(classes)}</div>
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
    </>
  );
}

export default WeaponCard;
