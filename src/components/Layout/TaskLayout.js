import React from "react";
import { Card } from "react-bootstrap";

const TaskLayout = ({ children, headerText, styles }) => {
  return (
    <Card className="text-center font-weight-bold" style={styles}>
      <Card.Header>{headerText}</Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};

export default TaskLayout;
