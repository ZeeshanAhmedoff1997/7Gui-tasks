import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { TASK_NAMES } from "../../constants";
import { convertToRoute } from "../../utils";

const Home = () => {
  const navigate = useNavigate();

  const onClick = (name) => {
    navigate("/" + convertToRoute(name));
  };

  return (
    <div className="d-flex justify-content-around">
      {TASK_NAMES.map((name, key) => (
        <Button variant="info" key={key} onClick={() => onClick(name)}>
          {name}
        </Button>
      ))}
    </div>
  );
};

export default Home;
