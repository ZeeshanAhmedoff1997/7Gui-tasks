import React, { useMemo, useState } from "react";
import TaskLayout from "../components/Layout/TaskLayout";
import MainLayout from "../components/Layout/MainLayout";
import { Form, Button } from "react-bootstrap";
import { FLIGHT_TYPES } from "../constants";
import { validateDate, isEndDateValid } from "../utils";
import { toast } from "react-toastify";
import classNames from "classnames";

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
    };
    updatedState[name].inputVal = value;
    updatedState[name].timestamp = dateTimeStamp ? dateTimeStamp : null;
    updatedState.errors[name] = error;
    setState(updatedState);
  };

  const onBook = () => {
    const { startDate, endDate } = state;
    if (isEndDateValid(startDate.timestamp, endDate.timestamp)) {
      toast.success("Successfully booked with ");
    } else {
      toast.error("Booking Failed");
      const updatedState = {
        ...state,
      };
      updatedState.errors["endDate"] =
        "The End Date should be after Start Date";
      setState(updatedState);
    }
  };
  const { startDate, endDate, errors } = state;
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
              className={classNames({
                "bg-red": errors["startDate"],
                "border border-danger": errors["startDate"],
              })}
            />
          </Form.Group>
          {errors["startDate"] && (
            <p className="text-danger">{errors["startDate"]}</p>
          )}
          <Form.Group className="mb-3">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="text"
              name="endDate"
              onChange={onChange}
              value={endDate.inputVal}
              disabled={selectedType === FLIGHT_TYPES[0]}
              placeholder="Enter End Date"
              className={classNames({
                "bg-red": errors["endDate"],
                "border border-danger": errors["endDate"],
              })}
            />
          </Form.Group>
          {errors["endDate"] && (
            <p className="text-danger mb-2">{errors["endDate"]}</p>
          )}
          <Button onClick={onBook} variant="info">
            Book
          </Button>
        </Form>
      </TaskLayout>
    </MainLayout>
  );
};

export default FlightBookerPage;
