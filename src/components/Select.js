import React, { useEffect, useState, useRef, useCallback } from 'react';

import './styles/Select.css';

function Select({ label, options, value, setValue, borderFreq }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef();

  const optionHeight = 24;
  const optionPadding = 4;

  useEffect(() => {
    if (expanded)
      setTimeout(() => {
        window.addEventListener('click', handleClick);
      }, 10);
    else window.removeEventListener('click', handleClick);
  }, [expanded]);

  const handleClick = useCallback(() => {
    setExpanded(false);
  }, []);

  return (
    <div className="select-container" ref={ref}>
      <p className="select-label">{label}</p>
      <div className={`select-wrapper ${expanded ? 'expanded' : ''}`}>
        <div
          className="select-clickable-wrapper"
          onClick={() => setExpanded(e => !e)}
        >
          <span>{value}</span>
        </div>

        <div
          className="select-options-container"
          style={{
            height: expanded
              ? `${options.length * (optionHeight + 2 * optionPadding)}px`
              : 0
          }}
        >
          {options.map((o, i) => {
            return (
              <Option
                key={i}
                value={o}
                setValue={setValue}
                setExpanded={setExpanded}
                height={optionHeight}
                padding={optionPadding}
                border={(i + 1) % borderFreq === 0 && i < options.length}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const Option = ({ value, setValue, setExpanded, height, padding, border }) => {
  return (
    <div
      className="select-option"
      style={{
        height: `${height}px`,
        padding: `${padding}px`,
        borderBottom: border ? '1px solid var(--color-surface-alt-1)' : ''
      }}
      onClick={() => {
        setValue(value);
        setExpanded(false);
      }}
    >
      <span>{value}</span>
    </div>
  );
};

export default Select;
