import React, { useEffect, useState } from 'react';
import { fromDate } from 'dot-beat-time';

import '../styles/BeatTime.css';

function BeatTime(props) {
  const [time, setTime] = useState(fromDate(new Date()));

  useEffect(() => {
    const updateTime = () => {
      setTime(fromDate(new Date()));
    };
    const intervalID = setInterval(updateTime, 1000);

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
