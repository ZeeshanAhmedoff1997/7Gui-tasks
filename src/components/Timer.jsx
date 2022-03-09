import React, { useState, useEffect } from "react";
import { useElapsedTime } from "use-elapsed-time";
import _ from "lodash";
import PropTypes from 'prop-types';

const Timer = ({ duration, setProgress, resetTimer, setDuration }) => {
  const [elaspTime, setElaspTime] = useState(0);
  const { reset } = useElapsedTime({
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
  useEffect(()=>{
    reset()
    setDuration(2)
  }, [resetTimer])
  return <div>Elapsed Time: {elaspTime}s</div>;
};

Timer.propTypes = {
  duration: PropTypes.number.isRequired,
  setProgress: PropTypes.func.isRequired,
  resetTimer: PropTypes.bool.isRequired,
  setDuration: PropTypes.func.isRequired
}
export default Timer;
