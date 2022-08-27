import React, { useEffect, useState, useRef, useCallback } from 'react';

import './styles/Select.css';

function Select({ label, options, value, setValue, borderFreq }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef();

  const optionHeight = 32;
  const optionPadding = 2;

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
                selectedValue={value}
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

const Option = ({
  selectedValue,
  value,
  setValue,
  setExpanded,
  height,
  padding,
  border
}) => {
  return (
    <div
      className={`select-option ${selectedValue === value ? 'selected' : ''}`}
      style={{
        height: `${height}px`,
        padding: `${padding}px 10px`,
        borderBottom: border ? '1px solid var(--color-surface-alt-1)' : null
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
