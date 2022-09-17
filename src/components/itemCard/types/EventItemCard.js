import React from 'react';
import { nanoid } from 'nanoid';

function EventItemCard({ item }) {
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
            <li>
              {description.split('; ').map(line => (
                <li key={nanoid()}>{line}</li>
              ))}
            </li>
          </ul>
        </div>
      )}
      <table className="stats-table">
        <tbody>
          <tr>
            <th>Item</th>
            <th>Chance</th>
          </tr>
          {item.dropTable.items.map(item => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.rate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EventItemCard;
