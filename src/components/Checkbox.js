import React from 'react';

import './styles/Checkbox.css';

function Checkbox({ label, labelSide = 'right', value, setValue, style }) {
  return (
    <div className="checkbox" style={style}>
      {labelSide === 'left' && <label htmlFor={label}>{label}</label>}
      <input
        type="checkbox"
        id={label}
        checked={value}
        onChange={setValue}
        style={{
          margin: labelSide === 'right' ? '0 0.25rem 0 0' : '0 0 0 0.25rem'
        }}
      />
      {labelSide === 'right' && <label htmlFor={label}>{label}</label>}
    </div>
  );
}

export default Checkbox;
