import React, { useState } from 'react';

function Select({ label, options, value, setValue }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="select-container">
      <p>{label}</p>
      <div className="select-wrapper">
        <div className="select-clickable-wrapper">
          <span>{value}</span>
        </div>
        <div>
          {options.map(o => {
            return <div className="select-option">{o.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Select;
