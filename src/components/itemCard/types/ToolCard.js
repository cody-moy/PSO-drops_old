import React from 'react';
import { nanoid } from 'nanoid';

function ToolCard({ item, itemType }) {
  const { name, type, usage, stackLimit, notes } = item;

  return (
    <div>
      <div className="item-card__header">
        <h1 className="item-card__name">{name}</h1>
        <p className="item-card__type">Tool / {type}</p>
      </div>
      <table className="stats-table">
        <tbody>
          <tr>
            <th>Usage</th>
            <th>Max stack</th>
          </tr>
          <tr>
            <td style={{ whiteSpace: 'unset' }}>{usage}</td>
            <td>{stackLimit}</td>
          </tr>
        </tbody>
      </table>
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

export default ToolCard;
