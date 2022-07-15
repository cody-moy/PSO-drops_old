import React from 'react';

import './styles/TextInput.css';

function TextInput({ label, defaultValue, setValue }) {
  return (
    <div className="text-input-container">
      <p className="text-input__label">{label}</p>
      <input
        type="text"
        className="text-input__input"
        defaultValue={defaultValue}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
}

export default TextInput;
