import React, { useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <span>{counter}</span>
      <div className="centerlize">
        <ButtonGroup>
          <Button variant="info" onClick={() => setCounter(counter + 1)}>
            +
          </Button>
          <Button
            variant="info"
            onClick={() => setCounter(counter - 1)}
            disabled={counter === 0}
          >
            -
          </Button>
          <Button
            variant="info"
            onClick={() => setCounter(0)}
            disabled={counter === 0}
          >
            Reset
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};
export default Counter;
