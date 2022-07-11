import React from 'react';

import './styles/TextInput.css';

function TextInput({ label, value, setValue }) {
  return (
    <div className="text-input-container">
      <p className="text-input__label">{label}</p>
      <input
        type="text"
        className="text-input__input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
}

export default TextInput;
