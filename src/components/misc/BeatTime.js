import React, { useEffect, useState } from 'react';
import { now } from 'dot-beat-time';

import '../styles/BeatTime.css';

function BeatTime(props) {
  const [time, setTime] = useState(now());

  useEffect(() => {
    const intervalID = setInterval(() => setTime(now()), 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div className="beat-time-container">
      <p className="beat-time-label">Beat time: {time}</p>
      <progress
        className="beat-time-progress-bar"
        id="beat"
        max={1000}
        value={time.substring(1)}
      />
    </div>
  );
}

export default BeatTime;
