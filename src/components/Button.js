import React from 'react';

import './styles/Button.css';

function Button({ label, func, disabled, highlighted }) {
  return (
    <div
      className={`button ${disabled ? 'disabled' : ''} ${
        highlighted ? 'highlighted' : ''
      } `}
      onClick={func}
    >
      <span className="button-label">{label}</span>
    </div>
  );
}

export default Button;
