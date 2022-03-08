import React, { useState } from "react";
import TaskLayout from "../components/Layout/TaskLayout";
import MainLayout from "../components/Layout/MainLayout";
import { Button, ProgressBar } from "react-bootstrap";
import Timer from "../components/Timer";
import RangeSlider from "react-bootstrap-range-slider";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

const TimerPage = () => {
  const styles = { width: "18rem" };
  const [progress, setProgress] = useState(0);
  const [reset, setReset] = useState(false);
  const [duration, setDuration] = useState(2);

  return (
    <MainLayout>
      <TaskLayout headerText="FlightBooker" styles={styles}>
        <ProgressBar now={progress} variant="success" label={progress + "%"} />
        <Timer
          setProgress={setProgress}
          duration={duration}
          resetTimer={reset}
        />
        <RangeSlider
          value={duration}
          onChange={({ target }) => {
            setDuration(target.value);
          }}
          min={0}
          max={30}
          variant="success"
        />
        <Button variant="info" onClick={() => setReset(true)}>
          Reset Timer
        </Button>
      </TaskLayout>
    </MainLayout>
  );
};

export default TimerPage;
