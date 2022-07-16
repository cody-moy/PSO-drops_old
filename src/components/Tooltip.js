import React, { useState, useEffect } from 'react';

/* This is a simple tooltip for use anywhere on the site.

It handles the fade-in and fade-out on its own,
and even destroys itself when it's not visible.

Simply pass in the background color and text color,
and where it should appear in relation to your element
(this is restricted to 'above' and 'below').

As a reminder, this component must be a child of its target,
and the target must have 'position: relative'.*/

function Tooltip({
  label,
  position = 'above',
  backgroundColor = '#000',
  color = '#fff',
  height,
  opacity = 0.75,
  visible
}) {
  const [renderTooltip, setRenderTooltip] = useState(false);
  const [fade, setFade] = useState(false);
  const [timeoutID, setTimeoutID] = useState();
  const [pixelOffset, setPixelOffset] = useState(5); // for the slide-in effect

  const above = position === 'above';
  const below = position === 'below';
  const left = position === 'left';
  const right = position === 'right';

  /*   this useEffect handles the fade, as well as the
       sensitive timing for rendering and un-rendering the tooltip */
  useEffect(() => {
    clearTimeout(timeoutID);
    if (visible) {
      // without wrapping this in a timeout, the offset will start
      // at this value and the CSS transition won't do anything
      setTimeout(() => {
        setPixelOffset(10);
      }, 10);

      setRenderTooltip(true);
      setTimeoutID(
        setTimeout(() => {
          setFade(true);
        }, 10)
      );
    } else {
      setPixelOffset(5);
      setFade(false);
      setTimeoutID(
        setTimeout(() => {
          setRenderTooltip(false);
        }, 300)
      );
    }
  }, [visible]);

  const arrowStyle = {
    width: '0.5rem',
    height: '0.5rem',
    backgroundColor: backgroundColor,
    position: 'absolute',
    top: below ? '-0.25rem' : left || right ? '50%' : null,
    bottom: above ? '-0.25rem' : null,
    left: above || below ? '50%' : right ? '-0.25rem' : null,
    right: left ? '-0.25rem' : null,
    content: ' ',
    transform: `${
      above || below ? 'translateX(-50%)' : 'translateY(-50%)'
    } rotate(45deg)`
  };

  const bodyStyle = {
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'none',
    width: 'max-content',
    height: height ? height : null,
    color: `${color} !important`,
    backgroundColor: backgroundColor,
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    fontSize: '0.8rem',
    position: 'absolute',
    top: below ? `calc(100% + ${pixelOffset}px)` : left || right ? '50%' : null,
    bottom: above ? `calc(100% + ${pixelOffset}px)` : null,
    left: right
      ? `calc(100% + ${pixelOffset}px)`
      : above || below
      ? '50%'
      : null,
    right: left ? `calc(100% + ${pixelOffset}px)` : null,
    opacity: fade ? opacity : 0,
    transition: 'all var(--timing-2) ease',
    transform: above || below ? 'translateX(-50%)' : 'translateY(-50%)',
    zIndex: 1000
  };

  return (
    <>
      {renderTooltip && (
        <div className="tooltip-body" style={bodyStyle}>
          <div className="tooltip-arrow" style={arrowStyle} />
          <p style={{ margin: 0, color: color }}>{label}</p>
        </div>
      )}
    </>
  );
}

export default Tooltip;
