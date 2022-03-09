import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { AVAILABLE_TEMPS } from "../constants";
import { convertTemp } from "../utils";

const TempConverter = () => {
  const [tempState, setTempState] = useState({
    celsius: "",
    fahrenheit: "",
  });
  const onChange = ({ value }, name) => {
    const convertedTemp = convertTemp(value, name);
    setTempState((prevState) => ({
      ...prevState,
      [name === "Celsius" ? "fahrenheit" : "celsius"]: convertedTemp,
      [name.toLowerCase()]: value,
    }));
  };

  return (
    <Form>
      {AVAILABLE_TEMPS.map((temp, key) => (
        <Form.Group className="mb-3" key={key}>
          <Form.Label>{temp} Tempreture</Form.Label>
          <Form.Control
            type="number"
            name={temp}
            onChange={({ target }) => onChange(target, temp)}
            value={tempState[temp.toLowerCase()]}
            placeholder={`Enter Temp in ${temp}`}
          />
        </Form.Group>
      ))}
    </Form>
  );
};

export default TempConverter;
