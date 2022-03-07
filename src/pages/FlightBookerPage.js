import React, { useMemo, useState } from "react";
import TaskLayout from "../components/Layout/TaskLayout";
import MainLayout from "../components/Layout/MainLayout";
import { Form, Button } from "react-bootstrap";
import { FLIGHT_TYPES } from "../constants";
import { validateDate, isEndDateValid } from "../utils";
import { toast } from "react-toastify";

const FlightBookerPage = () => {
  const styles = { width: "18rem" };
  const [selectedType, setSelectedType] = useState(FLIGHT_TYPES[0]);
  const [state, setState] = useState({
    startDate: {
      inputVal: "",
      timestamp: null,
    },
    endDate: {
      inputVal: "",
      timestamp: null,
    },
    errors: {},
  });

  const flightOptions = useMemo(
    () =>
      FLIGHT_TYPES.map((type, key) => (
        <option name={type} key={key}>
          {type}
        </option>
      )),
    []
  );

  const onChange = ({ target }) => {
    const { name, value } = target;
    const { dateTimeStamp, error } = validateDate(value);
    const updatedState = {
      ...state,
      [state.errors.name]: error,
      [state[name].timestamp]: dateTimeStamp ? dateTimeStamp : null,
      [state[name].inputVal]: value,
    };
    setState(updatedState);
  };

  const onBook = () => {
    const { startDate, endDate } = state;
    if (isEndDateValid(startDate.timestamp, endDate.timestamp)) {
      toast.success("Successfully booked with ");
    } else {
      // setState(...state, [errors]: "")
    }
  };
  const { startDate, endDate } = state;
  console.log("state", state);
  return (
    <MainLayout>
      <TaskLayout headerText="FlightBooker" styles={styles}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="flight-type">Flight Type</Form.Label>
            <Form.Select
              id="flight-type"
              onChange={({ target }) => setSelectedType(target.value)}
            >
              {flightOptions}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="text"
              name="startDate"
              value={startDate.inputVal}
              onChange={onChange}
              placeholder="Enter Start Date"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="text"
              name="endDate"
              onChange={onChange}
              value={endDate.inputVal}
              disabled={selectedType === FLIGHT_TYPES[0]}
              placeholder="Enter End Date"
            />
          </Form.Group>
          <Button onClick={onBook} variant="info">
            Book
          </Button>
        </Form>
      </TaskLayout>
    </MainLayout>
  );
};

export default FlightBookerPage;
