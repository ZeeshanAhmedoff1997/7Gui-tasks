import React, { useState } from "react";
import { useElapsedTime } from "use-elapsed-time";
import _ from "lodash";

const Timer = ({ duration, setProgress, resetTimer }) => {
  const [elaspTime, setElaspTime] = useState(0);
  const { elapsedTime } = useElapsedTime({
    duration,
    isPlaying: true,
    updateInterval: 0.1,
    onUpdate: (time) => {
      if (time <= duration) {
        setProgress((time / duration).toFixed(2) * 100);
        setElaspTime(_.round(time, 1));
      }
    },
  });
  return <div>Elapsed Time: {elaspTime}s</div>;
};

export default Timer;
