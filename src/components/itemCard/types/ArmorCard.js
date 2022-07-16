import React from 'react';
import buildClassMatrix from '../../../Utils/buildClassTable';

function ArmorCard({ item, itemType }) {
  const {
    role,
    name,
    rarity,
    DFP,
    EVP,
    resistances,
    levelRequirement,
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
          <th>DFP</th>
          <th>EVP</th>
          <th>EFR</th>
          <th>EIC</th>
          <th>ETH</th>
          <th>EDK</th>
          <th>ELT</th>
          <th>
            Level
            <br />
            Requirement
          </th>
        </tr>
        <tr>
          <td>{typeof DFP === 'object' ? `${DFP.min} - ${DFP.max}` : DFP}</td>
          <td>{typeof EVP === 'object' ? `${EVP.min} - ${EVP.max}` : EVP}</td>
          <td>{resistances.EFR}</td>
          <td>{resistances.EIC}</td>
          <td>{resistances.ETH}</td>
          <td>{resistances.EDK}</td>
          <td>{resistances.ELT}</td>
          <td>{levelRequirement || 'None'}</td>
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

export default ArmorCard;
