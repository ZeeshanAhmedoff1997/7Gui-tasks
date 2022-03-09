import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from 'prop-types'

const TaskLayout = ({ children, headerText, styles }) => {
  return (
    <Card className="text-center font-weight-bold" style={styles}>
      <Card.Header>{headerText}</Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};

TaskLayout.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
  headerText: PropTypes.string.isRequired,
  styles: PropTypes.object,
}

export default TaskLayout;
