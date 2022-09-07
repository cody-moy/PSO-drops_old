import React from 'react';
import buildClassTable from '../../../Utils/buildClassTable';
import parseRarity from '../../../Utils/parseRarity';
import { nanoid } from 'nanoid';

function UnitCard({ item, itemType }) {
  const { name, rarity, effect, classes, notes } = item;

  return (
    <div>
      <div className="item-card__header">
        <h1 className="item-card__name">{name}</h1>
        <p className="item-card__type">Unit</p>
      </div>
      <div className="item-rarity">
        <span>Rarity: </span>
        {parseRarity(rarity)}
        <span> ({rarity})</span>
      </div>
      <div className="unit-card-info-wrapper">
        <table className="stats-table">
          <tbody>
            <tr>
              <th>Effect</th>
            </tr>
            <tr>
              <td>
                {typeof effect === 'object' &&
                  effect.length < 2 &&
                  `+ ${effect[0].value} ${effect[0].stat}`}
                {typeof effect === 'object' && effect.length >= 2 && (
                  <ul>
                    {effect.map(aug => {
                      return <li>{`+ ${aug.value} ${aug.stat}`}</li>;
                    })}
                  </ul>
                )}
                {typeof effect === 'string' && item.effect}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>{buildClassTable(classes)}</div>
      {notes && (
        <div className="item-card__notes">
          <p>Notes:</p>
          <ul>
            {notes.split('; ').map(line => (
              <li key={nanoid()}>{line}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UnitCard;
